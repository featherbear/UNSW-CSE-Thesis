+++
categories = []
date = 2021-10-05T08:14:37Z
description = "A running list of things to probe into"
draft = true
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

### Emulate the Mi Cloud server

* [https://github.com/unrelentingtech/micloudfaker](https://github.com/unrelentingtech/micloudfaker "https://github.com/unrelentingtech/micloudfaker")
* [https://github.com/dgiese/dustcloud](https://github.com/dgiese/dustcloud "https://github.com/dgiese/dustcloud")

# MikroTik Wireshark

(I can use my MikroTik router to packet sniff by IP or MAC)  
(Note: Will only send WAN packets, as local packets would be switched without reaching the router?)

[https://www.youtube.com/watch?v=zj2vLZOVOT0](https://www.youtube.com/watch?v=zj2vLZOVOT0 "https://www.youtube.com/watch?v=zj2vLZOVOT0")

[https://mikrotik.com/download/trafr.tgz](https://mikrotik.com/download/trafr.tgz "https://mikrotik.com/download/trafr.tgz")

[https://github.com/thefloweringash/tzsp2pcap](https://github.com/thefloweringash/tzsp2pcap "https://github.com/thefloweringash/tzsp2pcap")

[https://forum.mikrotik.com/viewtopic.php?p=727384#p727384](https://forum.mikrotik.com/viewtopic.php?p=727384#p727384 "https://forum.mikrotik.com/viewtopic.php?p=727384#p727384")