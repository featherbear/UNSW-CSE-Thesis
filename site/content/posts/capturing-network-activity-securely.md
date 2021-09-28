+++
categories = []
date = 2021-09-28T15:52:06Z
description = "Setting up an isolated network"
draft = true
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
  A[Device] -->|data| B[Hub]
  B -->|data| C[Device]
  B -->|data| D[Device]
  B -->|data| E[Device]
  B -->|data| F[Device]
</div>

An Ethernet **hub** naively broadcasts all packets from one port to the other, meaning that any device connected to that hub will receive packets destined for anyone.  
By default, Network Interface Cards (NICs) will drop any packets whose destination MAC address does not match - however NICs that support and have Promiscuous Mode enabled can capture _any_ network packet.

However, Ethernet hubs are very rare these days and hard to obtain due to Ethernet Switches being better in every way (except for when they're not 🙃)

### Wired Monitoring - Switch


* Switch Port Mirroring
  Background: Packet switching only sends packets to their respective destination - hard to snoop on other data
  * Redirect traffic from one switch port into another
  * Some of the switches don't use the sink port as a dedicated mirror destination
    * Instead they attach the extra packet data



graph LR
  A[Device] -->|data| B[Hub]
  B -->|data| C[Device]
  B -->|data| D[Device]
  B -->|data| E[Device]
  B -->|data| F[Device]
  
  
### Wired Monitoring - MITM

When wired computers are connected to a network; their topology is often as below

<div class="mermaid">
graph LR
  A[Computer] --> B[Switch] --> C[Router] --> D[Internet]
</div>

A Man-In-The-Middle interception involved placing a device between the _Computer_ and _Router_, whose role is to relay network activity whilst simultaneously capturing the packets being transceived.

<div class="mermaid">
graph LR
  A[Computer] --> M(MITM) --> B[Switch] --> C[Router] --> D[Internet]
</div>

### Wireless Monitoring

A Wireless Access Point (WAP) is essentially a "Wireless Hub", where packets are broadcasted both from the WAP to a client device; and from client devices to the WAP (due to the nature of shared RF space).
Therefore, a Wireless NIC (WNIC) with Promiscuous Mode enabled too can monitor wireless network activity.

We are also able to monitor and capture 802.11 radio frames, which may be useful in side channel analysis of network activity. (i.e Does it try to host / join a wireless network during boot?)

## Active Monitoring

* MITM
  Target -> Internet
  Target -> MITM -> Internet
  Target -WiFi-> AP -> MITM -> ...

MITM (Software)

ARP Poisoning
A built-in feature of TCP/IP, Address Resolution Protocol, translates IP addresses to MAC addresses.
Confuzzle them! hehe

MAC Flooding
Switches keep a translation table that maps various MAC addresses to the physical ports on the switch. As a result of this, a switch can intelligently route packets from one host to another, but it has a limited memory for this work



Network Taps


# Conclusion

Wireless Monitoring

SG-105E $30AUD
:: port mirroring (forward mode)
- https://goughlui.com/2018/11/03/not-so-smart-tp-link-tl-sg105e-v3-0-5-port-gigabit-easy-smart-switch/
- https://www.pentestpartners.com/security-blog/how-i-can-gain-control-of-your-tp-link-home-switch/

---

# References

https://gitlab.com/wireshark/wireshark/-/wikis/CaptureSetup/Ethernet

