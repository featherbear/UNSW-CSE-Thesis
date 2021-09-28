+++
categories = []
date = 2021-09-28T12:00:00Z
description = "Setting up an isolated network"
series = []
tags = []
title = "Capturing Network Activity (Securely)"
toc = true

+++
# Capturing Network Activity (in a secure manner)

> (hopefully)

* WiFi network that the vacuum cleaner can connect to.
* Packet capture
  * TCP
  * UDP
  * Multicast
  * Broadcasts

# Solutions

## Passive Monitoring

### Wired Monitoring - Hub

<div class="mermaid">
graph LR
A\[Device\] ---|data| B\[Hub\]
B ---|data| C\[Device\]
B ---|data| D\[Device\]
B ---|data| E\[Device\]
B ---|data| F\[Device\]
</div>

An Ethernet **hub** naively broadcasts all packets from one port to the other, meaning that any device connected to that hub will receive packets destined for anyone.  
By default, Network Interface Cards (NICs) will drop any packets whose destination MAC address does not match - however NICs that support and have Promiscuous Mode enabled can capture _any_ network packet.

However, Ethernet hubs are very rare these days and hard to obtain due to Ethernet Switches being better in every way (except for when they're not 🙃)

### Wired Monitoring - Network Taps

Network Taps are like Ethernet Hubs, however they operate only for a single line connection.  
Also they're sort of expensive; although you can DIY them!

<!-- idk how to draw a network tap in mermaid -->


### Wired Monitoring - Switch

> aka port mirroring / port monitoring / Switched Port Analyzer (SPAN)

<div class="mermaid">
graph LR
A\[Device\] ---|data for B| B\[Switch\]
B --- C\[Device A\]
B ---|data| D\[Device B\]
B --- E\[Device C\]
B --- F\[Device D\]
B ---|data| G(Monitoring Device)
</div>

Compared to hubs, Ethernet switches selectively forward packets _only_ to the port which is connected to / in the path towards the device. As a result, simply connecting a monitoring device to the switch is not sufficient to receive traffic. "Smarter" switches have the functionality to forward traffic on a certain port(s) to another port - a feature known as port mirroring; commonly found in business/enterprise/managed switches.

Different switches implement port mirroring in different ways. Some switches disable all traffic on the mirror destination / sink - preventing the monitoring device (attached to the sink port) from making its own network communications; this may be a desired consequence if you wish to only log the mirror source traffic. Other switches simply copy the mirror traffic onto the sink port - whilst still allowing network activity on the mirror sink.

### Wireless Monitoring

A Wireless Access Point (WAP) is essentially a "Wireless Hub", where packets are broadcasted both from the WAP to a client device; and from client devices to the WAP (due to the nature of shared RF space).
Therefore, a Wireless NIC (WNIC) with Promiscuous Mode enabled too can monitor wireless network activity.

We are also able to monitor and capture 802.11 radio frames, which may be useful in side channel analysis of network activity. (i.e Does it try to host / join a wireless network during boot?)

***

## Active Monitoring

### Wired Monitoring - MITM

<div class="mermaid">
graph LR
Computer --- Switch --- Router --- Internet
</div>

When wired computers are connected to a network; their topology is often as seen above
A Man-In-The-Middle interception involved placing a device between the _Computer_ and _Router_, whose role is to relay network activity whilst simultaneously capturing the packets.

<div class="mermaid">
graph LR
Computer --- MITM --- Switch --- Router --- Internet
</div>

### Network Attacks 👻

#### ARP Poisoning

> The Address Resolution Protocol (ARP) is a TCP/IP technology to translate IP addresses to MAC addresses

As routing is done in Layer 2 of the OSI Network Stack (a.k.a routing via MAC addresses), IP addresses need to be resolved to a MAC address.  
This is done by an ARP Request that is broadcasted on a network (i.e _"Who has 111.222.333.444?"_) - where the owner of that IP address would reply with their MAC address.

ARP Poisoning involves arbitrarily replying to any ARP Request as to trick the requestor into believing that the attacker's MAC address is the owner of the IP address.
Once the client is tricked, the client computer will address data to the attacker's machine instead of the intended machine.
This invites further attack methods such as MITM attacks

![](/uploads/20210928-arppoisoningspoofing.png)

#### MAC Flooding

> Ethernet Switches keep a translation table that maps various MAC addresses to the physical ports on the switch; to facilitate the forwarding of network traffic to _only_ the required port. However, this translation table only can only store a finite number of entries.

MAC Flooding involves spamming the Ethernet Switch with packets destined for arbitrary MAC addresses (_this attack could be used in conjunction with ARP Poisining!_), as to fill up the translation table.  
Once the translation table is at capacity, existing entries (i.e. a legitimate translation for a victim's machine) would be lost - allowing an attacker to trick a switch into then switching packets to the attacker's machine instead.

---

# Conclusion

Wireless Monitoring

SG-105E $30AUD
:: port mirroring (forward mode)

* https://goughlui.com/2018/11/03/not-so-smart-tp-link-tl-sg105e-v3-0-5-port-gigabit-easy-smart-switch/
* https://www.pentestpartners.com/security-blog/how-i-can-gain-control-of-your-tp-link-home-switch/


* MITM
  Target -> Internet
  Target -> MITM -> Internet
  Target -WiFi-> AP -> MITM -> ...

***

# References

https://gitlab.com/wireshark/wireshark/-/wikis/CaptureSetup/Ethernet