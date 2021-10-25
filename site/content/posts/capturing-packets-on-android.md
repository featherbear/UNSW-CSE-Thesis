+++
categories = []
date = 2021-10-25T15:28:48Z
description = ""
series = []
tags = []
title = "Capturing Packets on Android"
toc = true

+++
In order to capture the network activity during the process of pairing the Roborock - I needed to also log the network activity from my Android phone that was running Xiaomi Home.

I ended up using [PCAPdroid](https://github.com/emanuele-f/PCAPdroid), which allowed me to target a specific app (or just everything) to capture network activity from.

![](/uploads/20211025-screenshot_20211026-000133_pcapdroid.jpg)

![](/uploads/20211025-snipaste_2021-10-26_02-33-26.jpg)  
As expected, I was bound to run into roadblocks; such as being unable to read the contents of HTTPS data, however the PCAPdroid app suggested setting up a SOCKS5 MITM proxy like [mitmproxy](https://mitmproxy.org/) to decrypt the SSL content!

![](/uploads/20211025-snipaste_2021-10-26_00-35-10.jpg)  
I set up a Debian virtual machine _(in hindsight I should have set up Ubuntu or something with more things preinstalled haha!)_ with [mitmproxy](https://mitmproxy.org/) - and after some NAT/port-forwarding/bridged networking magic I was able to successfully read the HTTPS data that was communicated from the Xiaomi Home application.

> Although, some of the data is encrypted as part of the the application protocol; so whilst I was able to remove the SSL/TLS encryption, there was still another layer of encryption that needed to be removed - save that for next time!

Non-HTTPS data could also be logged in PCAPdroid; either locally, or sent to a [logging endpoint via UDP](https://github.com/emanuele-f/PCAPdroid/blob/master/tools/udp_receiver.py). I set that up and was able to view other packets with [Wireshark](https://www.wireshark.org/).  
Hopefully the combination of these two techniques will allow me to gain a decent insight into the network activity of the app

# Hiccups

I seemed to run into some issues when accessing other local devices.  
This is likely due to how PCAPdroid acts as a VPN (to allow root-less functionality) - The VPN creates an internal network with PCAPdroid acting as a gateway. However this means that the device now has an internal IP address - which might screw up the communication to other local networked devices.