+++
categories = []
date = 2022-07-13T13:38:30Z
description = ""
series = []
tags = []
title = "13/07/2022 Progress Update"
toc = true

+++
Today I was having a look at the [Valetudo](https://github.com/Hypfer/Valetudo) source code to see how the firmware upgrade was being built. I would assume that [Giese](https://github.com/dgiese) is keeping copies of the original firmware ([e.g. here](https://builder.dontvacuum.me/pkg/firmwares/roborock/_S6/)) and is then modifying it ([e.g. here](https://github.com/dgiese/dustbuilder-script-public/blob/master/modifyimage.sh)), which is provided as the [DustBuilder service](https://builder.dontvacuum.me/).

> As an aside, I tried changing the download path in the `start_service.php` netcat streaming server-side script, but I believe I ended up getting blocked by the server :')

Having a look at how the this firmware would then be installed - i.e. through the [MIIO OTA update](https://github.com/marcelrv/XiaomiRobotVacuumProtocol/blob/master/miIO-ota.md) command, I could see that we could potentially inject our own firmware update at this point in time, genuine or not.

That's how the [`valetudo-helper-miioota`](https://github.com/Hypfer/valetudo-helper-miioota) script works - when connected to the cleaner's AP (during initial pairing), you would upload the Valetudo-patched firmware.

Knowing that we can inject our own firmware, we could likely inject malware from the get-go. This would greatly reduce the time required to gain root access.

## Why?

* To gain access to a SSH shell, we need to:
  * Start the SSH server if not already enabled
  * Allow `ssh` (`tcp/22`) through `iptables`
  * Both require access to the system shell
* To get access to the system shell, we need to know / reset the root password
  * To get the root password we need to read the contents of `vinda`
  * To read the contents of `vinda` we need UART access
* To bypass the system shell, we need to change the kernel boot parameters
  * To change the kernel boot parameters we need UART access

and... to get UART access we need to disassemble the robot.

This is time consuming and arduous.

I don't want to ever open it up and close it back up again.

***

Since we can perform an OTA update - we could potentially write over the `vinda` file, and/or modify the existing system, and/or write over the recovery partition (i.e. reset persistence).

Instead of writing, we could read the contents of `vinda` and send it back to us!

> _Keep in mind that whilst the vacuum cleaner is in AP mode, it does not have internet connectivity_

Our OTA update script could theoretically connect to the internet (establish a WiFi connection) and do a bunch of stuff that way, or we could just use the client device sending the OTA update as the endpoint.

***

In retrieving the contents of `vinda`, plus the device's serial number (?) - we could potentially establish enough information to then get access to the `adbd` shell, with all the bells and whistles of the original binary.

***

# adbd

This modified version of `adbd` has an auth challenge to prevent public access to the shell. Using the password in the `vinda` file, there is a challenge-response stage which requires you to provide a value generated from the serial number and vinda file. Providing this before the shell allows arbitrary commands to work.

![](/uploads/20220713-snipaste_2022-07-13_23-57-58.jpg)

![](/uploads/20220713-snipaste_2022-07-13_23-59-16.jpg)

If we don't modify the `vinda` value (i.e. less tamper evidence) then this provides easy access to the device (via the ADB USB port), without ever having to open up the device.

> Though, I do think there is a dynamically generated key that changes over time!
>
> In anycase, getting access just _once_ gives you the ability to then plant persistence