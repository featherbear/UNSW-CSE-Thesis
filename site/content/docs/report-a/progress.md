---
date: ""
description: ""
title: "5. Preliminary Results"
toc: true
weight: 6
---

# Preliminary Results

## Privacy Assessment

### Network Setup

![](/uploads/Snipaste_2021-12-08_19-14-32.jpg)

An isolated wireless network was set up to securely observe the wireless network activity of the vacuum cleaner.  
A DHCP server was set up to serve address leases on the `10.10.10.0/24` network, where the IPv4 address of the vacuum cleaner is dynamically issued to simulate a general home network. A TP-LINK TL-SG105E switch was configured to port mirror any data sent and received through the wireless access point to the Roborock S6.

An Android smartphone with the Xiaomi Cloud application was also connected to the isolated network so that intra-device connectivity could be observed. This phone was configured to relay all of its connections through a MITM SSL proxy, so that HTTPS payloads could be decoded.

### Network Activity

Initial network observations indicated a high volume of network activity between the Xiaomi Cloud application to their IoT servers.  
It was also observed that the Roborock S6 periodically replied to an incoming request roughly every 2 seconds - this is presumably either a keep-alive / command and control mechanism. Detailed payload analysis has not yet been attempted.

It is worthwhile to note that the network was initially set up incorrectly when packet logging took place. As a result of port mirroring being set up on the router instead of on the network switch, only inbound and outbound WAN packets were being forwarded. This misconfiguration had prevented the logging of LAN packets transmitted between the Xioami Cloud smartphone application and the Roborock S6 whilst remote control operation was in place. The correct networking monitoring environment will be provisioned for future network activity monitoring.


## Security Assessment

Prior to starting  the firmware security analysis, the firmware image first had to be be obtained. However as there are no public images of the firmware available online, physical disassembly of the vacuum cleaner was required in order expose the UART pins, as outlined by @{DennisGiese-2019}. 

![](/uploads/20211029-20211030_021507-uart-highlighted.jpg)

Once the circuit board was removed from the vacuum cleaner chassis, UART pins could be attached to test pads `TPA15`, `TPA16` and `TPA18`. When the vacuum cleaner was powered on and a serial connection was established a baud rate of `115200`, the bootloader and system serial interfaces were able to be interacted with.

![](/uploads/20211029-snipaste_2021-10-30_03-26-11.jpg)

Through research into the bootloader source code[^uboot_shell_mode], it was revealed that the injection of the `s` character during boot would trigger the bootloader to enter a shell. Which granted access to read and decrypt the root password that was encrypted in a file called `vinda`. No attempts to further to explore the file system nor to create an image of the firmware has yet been performed

[^uboot_shell_mode]: https://github.com/allwinner-zh/bootloader/blob/master/u-boot-2011.09/board/sunxi/board_common.c#L843-L847


## Plans for Future Research

Preliminary security assessment results were satisfactory, as obtaining root access was a critical step prerequisite to analysing the Roborock S6's firmware without expensive equipment like a flash chip programmer - which would have its own inherent risks at outlined in Chapter 3. Moving forwards, the next steps in carrying out the product security assessment will involve the dumping of the flash chip content into an image that can externally analysed offline. It will also be worthwhile to also perform live system forensics, as dynamic behaviours will be hard to detect during a static analysis.

Whilst not the immediate focus for Thesis B, a reconfiguration of the network monitoring setup is required to properly begin the privacy assessment of the product. Additionally, network activity during initial device pairing as well as general network activity will require to be recaptured to observe the LAN packets that were previously omitted during network capture.