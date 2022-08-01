+++
categories = []
date = 2021-09-28T12:00:00Z
description = "Setting up an isolated network"
series = []
tags = []
title = "Capturing Network Activity (Securely)"
toc = true

+++

> In order to better understand what the vacuum cleaner is doing, I need to figure out what the vacuum cleaner is both sending and receiving!  
This means that I will need to do some packet capturing, to get the TCP / UDP / etc... packets; but what's the best (and budget-friendly) way to do that?

_EDIT: I also imagine I might need to do some Bluetooth communications investigation too, huh..._


---

# Solutions

## Passive Monitoring

### Wired Monitoring - Hub

<div class="mermaid">
graph LR
A[Device] ---|data| B[Hub]
B ---|data| C[Device]
B ---|data| D[Device]
B ---|data| E[Device]
B ---|data| F[Device]
</div>

An Ethernet **hub** naively broadcasts all packets from one port to the other, meaning that any device connected to that hub will receive packets destined for anyone.  
By default, Network Interface Cards (NICs) will drop any packets whose destination MAC address does not match - however NICs that support and have Promiscuous Mode enabled can capture _any_ network packet.

However, Ethernet hubs are very rare these days and hard to obtain due to Ethernet Switches being better in every way (except for when they're not ??)

### Wired Monitoring - Network Taps

Network Taps are like Ethernet Hubs, however they operate only for a single line connection.  
Also they're sort of expensive; although you can DIY them!

<!-- idk how to draw a network tap in mermaid -->


### Wired Monitoring - Switch

> aka port mirroring / port monitoring / Switched Port Analyzer (SPAN)

<div class="mermaid">
graph LR
A[Device] ---|data for B| B[Switch]
B --- C[Device A]
B ---|data| D[Device B]
B --- E[Device C]
B --- F[Device D]
B ---|data| G(Monitoring Device)
</div>

Compared to hubs, Ethernet switches selectively forward packets _only_ to the port which is connected to / in the path towards the device. As a result, simply connecting a monitoring device to the switch is not sufficient to receive traffic. "Smarter" switches have the functionality to forward traffic on a certain port(s) to another port - a feature known as port mirroring; commonly found in business/enterprise/managed switches.

Different switches implement port mirroring in different ways. Some switches disable all traffic on the mirror destination / sink - preventing the monitoring device (attached to the sink port) from making its own network communications; this may be a desired consequence if you wish to only log the mirror source traffic. Other switches simply copy the mirror traffic onto the sink port - whilst still allowing network activity on the mirror sink.

### Wireless Monitoring

A Wireless Access Point (WAP) is essentially a "Wireless Hub", where packets are broadcasted both from the WAP to a client device; and from client devices to the WAP (due to the nature of shared RF space).
Therefore, a Wireless NIC (WNIC) with Promiscuous Mode enabled too can monitor wireless network activity.

We are also able to monitor and capture 802.11 radio frames, which may be useful in side-channel analysis of network activity. (i.e Does it try to host / join a wireless network during boot?)

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

A program that could be used is `tcpdump`, or `udpdump` (for UDP packets).  

i.e. `tcpdump -U -i IFACE -w - > localfile`

### Network Attacks ??

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

After researching various methods to capture network activity, I will go ahead with two methods - Wired Monitoring via Port Mirroring, and Passive Wireless Monitoring

## Port Mirroring

After some research on the most trustworthy of internet sites - Reddit, I found a bunch of budget switches that support Port Mirroring.

Netgear GS105E, Netgear GS108E, TP-Link TL-SG105E, MikroTik RB260GSP, HP ProCurve 1810 series, etc...

At the time of writing, the TP-Link TL-SG105E is the cheapest at around AUD$40.
I actually own a bunch of ProCurve 1810 switches, but as they are in active deployment - I'd rather not use them (also they're discontinued).

Since the vacuum cleaner is not wired - rather it communicates wirelessly - the below topology would be used

<div class="mermaid">
graph TD
  V[Vacuum Cleaner] -.- AP[Access Point] --- Switch --- Router
  Switch -->|Port Mirror| M(Monitoring Device)
</div>

> Fun fact, the TL-SG105E has its own set of security issues [[#1]](https://goughlui.com/2018/11/03/not-so-smart-tp-link-tl-sg105e-v3-0-5-port-gigabit-easy-smart-switch/) [[#2]](https://www.pentestpartners.com/security-blog/how-i-can-gain-control-of-your-tp-link-home-switch/)

## Passive Wireless Monitoring

In the event that the vacuum cleaner might have some side-channel activity (i.e. Trying to set up its own SSID for ad-hoc pairing, etc...), I'd like to be able to monitor any sort of wireless communications.  
Time to build a Faraday cage???

***

# EDIT: 5th October 2021

I can also use my MikroTik router to do packet sniffing and forwarding using the Packet Sniffer feature (Sending [TZSP](https://en.wikipedia.org/wiki/TZSP) packets to Wireshark, etc). Note that this won't be able to capture local traffic - only traffic that passes through the router (i.e. WAN traffic)

So I'll need to use the TL-SG105E to mirror local traffic.  

![](/uploads/20211031-20210930_153318.jpg)

***


# References

https://gitlab.com/wireshark/wireshark/-/wikis/CaptureSetup/Ethernet
