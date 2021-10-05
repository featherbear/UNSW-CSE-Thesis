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