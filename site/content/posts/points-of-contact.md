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

# Different vendors, one ecosystem

> [https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html](https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html "https://dontvacuum.me/talks/DEFCON26-IoT-Village/DEFCON26-IoT-Village_How_to_Modify_Cortex_M_Firmware-Xiaomi.html")

* Same communication protocol
* Different technologies supported
* Implementation differs from manufacturers
  * QUALITY OF SOFTWARE IS DIFFERENT

### Emulate the Mi Cloud server

* [https://github.com/unrelentingtech/micloudfaker](https://github.com/unrelentingtech/micloudfaker "https://github.com/unrelentingtech/micloudfaker")
* [https://github.com/dgiese/dustcloud](https://github.com/dgiese/dustcloud "https://github.com/dgiese/dustcloud")