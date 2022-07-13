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

Knowing that we can inject our own firmware, we could likely inject malware from the get-go. This would greatly reduce the time required to gain root access