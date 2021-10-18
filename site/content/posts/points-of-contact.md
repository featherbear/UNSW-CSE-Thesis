+++
categories = []
date = 2021-10-05T08:14:37Z
description = "A running list of things to probe into"
series = []
tags = []
title = "Points of Contact"
toc = true

+++
### Wireless Device Pairing

When pairing the device over WiFi (for initial setup), the device acts as a wireless AP and hosts a wireless network `roborock-***`. Using a smartphone (with the Mi Home app) we can connect to this network, in order to transfer the configuration data.

* Figure out what data is being sent by the vacuum cleaner
* Figure out what data is being sent by the Mi Home app
* Probably it is a standard protocol
  * MIoT
  * [miIO](https://github.com/OpenMiHome/mihome-binary-protocol/blob/master/doc/PROTOCOL.md)
  * [https://github.com/rytilahti/python-miio](https://github.com/rytilahti/python-miio "https://github.com/rytilahti/python-miio")

> For example, gen1 rockrobo vacuums do not respond to the info query when offline, some devices do not respond with correct payloads ([rytilahti/python-miio#334 (comment)](https://github.com/rytilahti/python-miio/issues/334#issuecomment-907930736)), and some do not even respond to the initial handshake queries ([https://python-miio.readthedocs.io/en/latest/troubleshooting.html#intermittent-connection-issues-timeouts-xiaomi-vacuum](https://python-miio.readthedocs.io/en/latest/troubleshooting.html#intermittent-connection-issues-timeouts-xiaomi-vacuum "https://python-miio.readthedocs.io/en/latest/troubleshooting.html#intermittent-connection-issues-timeouts-xiaomi-vacuum")).

Device might not respond without an active network connection?

# Roborock CPU

ARM Cortex-A?  
ARM Cortex-M?  
Marvell 88MW30X (wifi)  
Mediatek MT7687N (wifi + ble)  
MIPS

# Cloud Protocol

* DeviceID - unique per device
* Keys
  * Cloud key (16 byte alphanum)
    * Used in cloud comms (AES)
    * Static
  * Token (16 byte alphanum)
    * App communication (AES)
    * Dynamic (created when new WiFi setup)

# Different vendors, one ecosystem

> [https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html](https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html "https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html")

* Same communication protocol
* Different technologies supported
* Implementation differs from manufacturers
  * Software quality very different

# Useful Links

### Emulate the Mi Cloud server

* Rooting Information
  * [https://www.youtube.com/watch?v=r_04K5SPEXI](https://www.youtube.com/watch?v=r_04K5SPEXI "https://www.youtube.com/watch?v=r_04K5SPEXI")
  * [https://builder.dontvacuum.me/x6cheatsheet.txt](https://builder.dontvacuum.me/x6cheatsheet.txt "https://builder.dontvacuum.me/x6cheatsheet.txt")

[https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking](https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking "https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking")

[https://dontvacuum.me/talks/DEFCON26/DEFCON26-Having_fun_with_IoT-Xiaomi.pdf](https://dontvacuum.me/talks/DEFCON26/DEFCON26-Having_fun_with_IoT-Xiaomi.pdf "https://dontvacuum.me/talks/DEFCON26/DEFCON26-Having_fun_with_IoT-Xiaomi.pdf")

[https://www.youtube.com/playlist?list=PL9PoaNtZCJRZc61c792VCr_I6jQK_IdSb](https://www.youtube.com/playlist?list=PL9PoaNtZCJRZc61c792VCr_I6jQK_IdSb "https://www.youtube.com/playlist?list=PL9PoaNtZCJRZc61c792VCr_I6jQK_IdSb")

[https://www.youtube.com/watch?v=r_04K5SPEXI](https://www.youtube.com/watch?v=r_04K5SPEXI "https://www.youtube.com/watch?v=r_04K5SPEXI")

# Firmware

# The Password

[https://builder.dontvacuum.me/password.php](https://builder.dontvacuum.me/password.php "https://builder.dontvacuum.me/password.php")

> "Technical background: If you dont trust this tool, you can convert the vinda file yourself by XOR'ing every character with "0x37". The resulting string should be all lowercase letters."

## Pulling The Firmware

Firmware is encrypted and signed!?!??!?! noooooo?  
Tuya integration?

OS: Ubuntu 14.04.3

## On-board Software

`rr_loader` (Player 3.10)

`/opt/roborock`

* `AppProxy`
* `miIO-client/tuya-client`
* `SysUpdate`
* `adbd`

## Firewall

SSH (22) and player (6665) blocked  
IPv6 blocked

Two separate apps Mi Home (MiIO) / Roborock (Tuya)

11:25 - [https://www.youtube.com/watch?v=r_04K5SPEXI](https://www.youtube.com/watch?v=r_04K5SPEXI "https://www.youtube.com/watch?v=r_04K5SPEXI")

Hold S whilst rebooting on the UART

then press middle button for 3s??

## Dumping SPI Flash

JTAG, SWD - Can use a RaspPi with OpenOCD  
Desolder the flash; use flashrom  
Chips with secure boot?

## OTA Updates

* Intercept traffic, but block the actual update
* The device might not be using DNS, or might fallback to IP regardless
* SSL? Cert.. or deny enough times?
* CDN with authentication

# RE the firmware

Reverse engineer the firmware by using the official SDK and compiling - then figuring out what it does?

i.e Marvell MW30X - afx2firmware

# (Useful?) Analysis Software

## bindiff

> Zynamics acquired by google in 2011

> ## [zynamics acquired by Google !](http://blog.zynamics.com/2011/03/01/zynamics-acquired-by-google/ "Permanent Link to zynamics acquired by Google !")
>
> [http://blog.zynamics.com/2011/03/01/zynamics-acquired-by-google/](http://blog.zynamics.com/2011/03/01/zynamics-acquired-by-google/ "http://blog.zynamics.com/2011/03/01/zynamics-acquired-by-google/")

* [https://security.googleblog.com/2016/03/bindiff-now-available-for-free.html](https://security.googleblog.com/2016/03/bindiff-now-available-for-free.html "https://security.googleblog.com/2016/03/bindiff-now-available-for-free.html")
* [https://github.com/google/binnavi](https://github.com/google/binnavi "https://github.com/google/binnavi")
* [https://github.com/google/binexport](https://github.com/google/binexport "https://github.com/google/binexport")

FW Updates replace the entire partition

CLI via serial - `updatefw ___`

SWD - dump

Bindiff viewer for Binary Ninja - [https://github.com/PistonMiner/binaryninja-bindiff-viewer](https://github.com/PistonMiner/binaryninja-bindiff-viewer "https://github.com/PistonMiner/binaryninja-bindiff-viewer")

## nexmon

> Binary / Firmware patching

Binary Diff Tool - [https://github.com/joxeankoret/diaphora](https://github.com/joxeankoret/diaphora "https://github.com/joxeankoret/diaphora")

Helps to

* Overwrite branch instructions
* Write new code
* Model the address space (i.e. RAM, ROM, Free space)
* Call existing functions
* handle different firmware versions and devices

> how do people test firmware on a embedded system?

## Other

Firmware Analysis and Comparison Tool - [https://github.com/fkie-cad/FACT_core](https://github.com/fkie-cad/FACT_core "https://github.com/fkie-cad/FACT_core")

[https://github.com/rampageX/firmware-mod-kit](https://github.com/rampageX/firmware-mod-kit "https://github.com/rampageX/firmware-mod-kit")

# Previous Research

> Dennis Giese - Don't Vacuum Me

* [https://dontvacuum.me/](https://dontvacuum.me/ "https://dontvacuum.me/")
* [https://builder.dontvacuum.me/](https://dontvacuum.me/ "https://dontvacuum.me/")
* [https://builder.dontvacuum.me/_s6.html](https://dontvacuum.me/ "https://dontvacuum.me/")
* [https://dontvacuum.me/robotinfo/firmwares/roborock.vacuum.s6.html](https://dontvacuum.me/robotinfo/firmwares/roborock.vacuum.s6.html "https://dontvacuum.me/robotinfo/firmwares/roborock.vacuum.s6.html")
* [https://dontvacuum.me/robotinfo/configfiles/roborock.s6/](https://dontvacuum.me/robotinfo/configfiles/roborock.s6/ "https://dontvacuum.me/robotinfo/configfiles/roborock.s6/")
* [https://dontvacuum.me/teardowns/roborock.vacuum.x6/](https://dontvacuum.me/teardowns/roborock.vacuum.x6/ "https://dontvacuum.me/teardowns/roborock.vacuum.x6/")
* [https://dontvacuum.me/thesis/](https://dontvacuum.me/thesis/ "https://dontvacuum.me/thesis/")
* [https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf](https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf "https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf")
* [https://dontvacuum.me/thesis/2019-09-masterthesis-defensetalk.pdf](https://dontvacuum.me/thesis/2019-09-masterthesis-defensetalk.pdf "https://dontvacuum.me/thesis/2019-09-masterthesis-defensetalk.pdf")

***

[https://www.roboter-forum.com/index.php?board/163-roborock-s6/](https://www.roboter-forum.com/index.php?board/163-roborock-s6/ "https://www.roboter-forum.com/index.php?board/163-roborock-s6/")

# Custom Software

## Valetudo

[https://www.reddit.com/r/homeassistant/comments/fdrcz0/how_to_install_valetudo_re_on_a_xiaomi_robot/](https://www.reddit.com/r/homeassistant/comments/fdrcz0/how_to_install_valetudo_re_on_a_xiaomi_robot/ "https://www.reddit.com/r/homeassistant/comments/fdrcz0/how_to_install_valetudo_re_on_a_xiaomi_robot/")

[https://valetudo.cloud/](https://valetudo.cloud/ "https://valetudo.cloud/")

## Dust Cloud

[https://github.com/dgiese/dustcloud](https://github.com/unrelentingtech/micloudfaker "https://github.com/unrelentingtech/micloudfaker")

## Flole

[https://xiaomi.flole.de/](https://xiaomi.flole.de/ "https://xiaomi.flole.de/")

## Others

[https://github.com/unrelentingtech/micloudfaker](https://github.com/unrelentingtech/micloudfaker "https://github.com/unrelentingtech/micloudfaker")

## Proto

[https://github.com/OpenMiHome/mihome-binary-protocol/blob/master/doc/PROTOCOL.md](https://github.com/OpenMiHome/mihome-binary-protocol/blob/master/doc/PROTOCOL.md "https://github.com/OpenMiHome/mihome-binary-protocol/blob/master/doc/PROTOCOL.md")

> `mirobo --debug discover --handshake true`

[https://github.com/marcelrv/XiaomiRobotVacuumProtocol](https://github.com/marcelrv/XiaomiRobotVacuumProtocol "https://github.com/marcelrv/XiaomiRobotVacuumProtocol")

[https://github.com/rytilahti/python-miio](https://github.com/rytilahti/python-miio "https://github.com/rytilahti/python-miio")

[https://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf](https://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf "https://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf")

# Vacuum Cleaner... runs... Linux????

* [https://www.reddit.com/r/linux/comments/7y9ddk/is_your_robot_vacuum_cleaner_running_ubuntu_1404/](https://www.reddit.com/r/linux/comments/7y9ddk/is_your_robot_vacuum_cleaner_running_ubuntu_1404/ "https://www.reddit.com/r/linux/comments/7y9ddk/is_your_robot_vacuum_cleaner_running_ubuntu_1404/")
* [https://medium.com/@anxodio/how-to-get-spotify-working-on-your-xiaomi-vacuum-da28c52bbb4e](https://medium.com/@anxodio/how-to-get-spotify-working-on-your-xiaomi-vacuum-da28c52bbb4e "https://medium.com/@anxodio/how-to-get-spotify-working-on-your-xiaomi-vacuum-da28c52bbb4e")
* [https://www.cnx-software.com/2021/01/20/valetudo-is-a-cloud-free-web-interface-for-robot-vacuum-cleaners/](https://www.cnx-software.com/2021/01/20/valetudo-is-a-cloud-free-web-interface-for-robot-vacuum-cleaners/ "https://www.cnx-software.com/2021/01/20/valetudo-is-a-cloud-free-web-interface-for-robot-vacuum-cleaners/")

[https://github.com/LazyT/rrcc](https://github.com/LazyT/rrcc "https://github.com/LazyT/rrcc")

[https://github.com/pezema/home-vacuum](https://github.com/pezema/home-vacuum "https://github.com/pezema/home-vacuum")

# MikroTik Wireshark

(I can use my MikroTik router to packet sniff by IP or MAC)  
(Note: Will only send WAN packets, as local packets would be switched without reaching the router?)

[https://tojaj.com/packet-capture-from-mikrotik-to-wireshark/](https://tojaj.com/packet-capture-from-mikrotik-to-wireshark/ "https://tojaj.com/packet-capture-from-mikrotik-to-wireshark/")

[https://www.youtube.com/watch?v=zj2vLZOVOT0](https://www.youtube.com/watch?v=zj2vLZOVOT0 "https://www.youtube.com/watch?v=zj2vLZOVOT0")

[https://mikrotik.com/download/trafr.tgz](https://mikrotik.com/download/trafr.tgz "https://mikrotik.com/download/trafr.tgz")

[https://github.com/thefloweringash/tzsp2pcap](https://github.com/thefloweringash/tzsp2pcap "https://github.com/thefloweringash/tzsp2pcap")

[https://forum.mikrotik.com/viewtopic.php?p=727384#p727384](https://forum.mikrotik.com/viewtopic.php?p=727384#p727384 "https://forum.mikrotik.com/viewtopic.php?p=727384#p727384")

# Post-Exploitation TODOs

* /run/shm - memory
* /mnt/default -> ???
* 

# Public Security

[https://www.reddit.com/r/privacy/comments/bb0tz3/safe_use_of_the_xiaomi_roborock/](https://www.reddit.com/r/privacy/comments/bb0tz3/safe_use_of_the_xiaomi_roborock/ "https://www.reddit.com/r/privacy/comments/bb0tz3/safe_use_of_the_xiaomi_roborock/")

[https://www.reddit.com/r/homeautomation/comments/bcpnr8/the_most_secure_private_robot_vacuum_cleaner_ie/](https://www.reddit.com/r/homeautomation/comments/bcpnr8/the_most_secure_private_robot_vacuum_cleaner_ie/ "https://www.reddit.com/r/homeautomation/comments/bcpnr8/the_most_secure_private_robot_vacuum_cleaner_ie/")

[https://www.youtube.com/watch?v=uhyM-bhzFsI](https://www.youtube.com/watch?v=uhyM-bhzFsI "https://www.youtube.com/watch?v=uhyM-bhzFsI")

[https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking](https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking "https://media.ccc.de/v/34c3-9147-unleash_your_smart-home_devices_vacuum_cleaning_robot_hacking")

[https://www.consumerreports.org/robotic-vacuums/is-your-robotic-vacuum-sharing-data-about-you-a1563001307/](https://www.consumerreports.org/robotic-vacuums/is-your-robotic-vacuum-sharing-data-about-you-a1563001307/ "https://www.consumerreports.org/robotic-vacuums/is-your-robotic-vacuum-sharing-data-about-you-a1563001307/")

* [https://blog.avast.com/locking-down-smart-home-security-avast](https://blog.avast.com/locking-down-smart-home-security-avast "https://blog.avast.com/locking-down-smart-home-security-avast")
  * The Roborock vacuum, on the other hand, is sketchy. This is the only device that I’d actually prefer we didn’t have in our home, because I really don’t trust the parent company to use the information it gathers responsibly. We actually moved recently and haven’t used it since settling into our new place — and I’d like to keep it that way.

    But, just in case, I made sure that the Roborock vacuum is connected to a guest network, which has a different password than our main network. That way it at least can’t compromise our main network (and everything else that’s on it) if there’s ever a security breach.

[https://www.reddit.com/r/homeautomation/comments/l24jj4/roborock_securitysetup_guest_network_enough/](https://www.reddit.com/r/homeautomation/comments/l24jj4/roborock_securitysetup_guest_network_enough/ "https://www.reddit.com/r/homeautomation/comments/l24jj4/roborock_securitysetup_guest_network_enough/")

[https://builder.dontvacuum.me/x6howtoroot.pdf](https://builder.dontvacuum.me/x6howtoroot.pdf "https://builder.dontvacuum.me/x6howtoroot.pdf")

50 million connected devices - tech crunch

revenue > 15B yuan

# Device Info

* Model Name - Roborock S6
* Model ID - roborock.vacuum.s6
* Codename - tanos
* Firmware - A=enc(AES-256-CBC), signed (RSA)
* Sound Files - A=enc, signed
* SoC - Allwinner R16 (4x)
* RAM - 512 MByte
* Flash - 4GByte eMMC
* MCU - WiFi STM32F103VCT6
* WiFi - RTL8189ETV
* OS (Kernel) - Ubuntu 14.04 (3.4.x)
* Year - Q2/2018
* Lidar - Yes
* Camera - No
* Mop - Yes
* Waterpump - No
* LIDAR-Tower Bumper - Yes
* IR-Dropdensors - 6
* IR-side sensors - Yes
* Frontsensor - IR
* Cloud - 3.5.8 / Tuya
* Root Possible Since (Q2 2019)
* Complexity - Disass / Simple Soldering
* Valetudo - Yes

***

Device ID: 32 bits - Unique number. Possibly derived from the MAC address.

CIA Principals

What makes something "secure"?

"How secure is the implementation of the ecosystem of the IoT market leader Xiaomi?"

"– Will be introduced in November 2019" Xiaomi

Replication study

* Old static password (still used for sound files?) - "r0ckrobo#23456"


* AEC128CBC Key  for Gen2  "RoCKR0B0@BEIJING"

* Factory reset  
  – Does not delete data: Maps, Logs still exist