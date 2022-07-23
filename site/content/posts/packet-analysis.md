+++
categories = []
date = 2022-07-23T03:31:46Z
description = ""
series = []
tags = []
title = "Packet Analysis"
toc = true

+++
# Target

> IP: 10.10.10.8  
> MAC: 64:90:c1:1d:24:c4
> MAC OUI (64:90:C1) - Beijing Xiaomi Mobile Software Co, Ltd

***

# Filtering the data

> We have a 'lot' of network traffic that isn't related to the operation of the device - such as STP, SSDP, DHCP, ARP and other traffic that occurs - even without the presence of the device, so let's remove these.

![](/uploads/20220723-snipaste_2022-07-23_14-40-30.jpg)

On average, each hour there are 9716 packets that can be removed - around 2.82 MB worth of data

We could either blacklist - though this will require a lot of (probably) exclusions.  
A whitelist of just packets to/from our target could work - but will ignore any 'spoofs' / etc?

## Blacklist?

* `ARP` requests to/from the access point
* `CDP` packets - Cisco Discovery Protocol
* `STP` packets - Spanning Tree Protocol
* `MNDP` packets - Mikrotik Neighbor Discovery Protocol
* `LLDP` packets - Link Layer Discovery Protocol
* Packets from `10.10.10.9` / `18:c0:4d:3b:66:d2` - My computer
  * Wasn't completely on monitor mode
* Packets from `60:a4:b7:7a:b0:c3` - Managed switch
* Packets from `32:bc:cf:2d:96:ce` - ?
* Packets from `00:0c:42:cf:36:20` - Router

    ((((((((((((!stp) && !(arp.src.hw_mac == 00:27:22:fc:8f:93)) && !(arp.dst.hw_mac == 00:27:22:fc:8f:93)) && !(cdp)) && !(mndp)) && !(lldp)) && !(eth.addr == 18:c0:4d:3b:66:d2))) && !(arp.src.hw_mac == 60:a4:b7:7a:b0:c3)) && !(eth.src == 32:bc:cf:2d:96:ce)) && !(eth.src == 00:0c:42:cf:36:20)) && !(ip.src == 10.10.10.4)) && !(ip.dst == 10.10.10.4)

## Whitelist?

We could just whitelist packets to/from our target.

    (eth.src == 64:90:c1:1d:24:c4 || eth.dst == 64:90:c1:1d:24:c4)

***

## Command

    find . -iname "*.pcap*" -exec sh -c "tshark -r '{}' -Y \"(eth.src == 64:90:c1:1d:24:c4 || eth.dst == 64:90:c1:1d:24:c4)\" -w \"\$(dirname {})/clean.\$(basename {})\""  \;

***

# Filtering ZeroTier

```
!((ip.src == 195.181.173.159) || (ip.dst == 195.181.173.159) || (ip.src == 50.7.73.34) || (ip.dst == 50.7.73.34) || (ip.src == 103.195.103.66) || (ip.dst == 103.195.103.66) || (ip.src ==  50.7.252.138) || (ip.dst ==  50.7.252.138) || (ip.src == 107.170.197.14) || (ip.dst == 107.170.197.14))
```

https://zerotier.atlassian.net/wiki/spaces/SD/pages/7241732/Root+Server+IP+Addresses

```
root-ams-01.zerotier.com has address 195.181.173.159
root-ams-01.zerotier.com has IPv6 address 2a02:6ea0:c024::
root-sea-01.zerotier.com has address 50.7.73.34
root-sea-01.zerotier.com has IPv6 address 2001:49f0:d002:6::2
root-mia-01.zerotier.com has address 103.195.103.66
root-mia-01.zerotier.com has IPv6 address 2605:9880:400:c3:254:f2bc:a1f7:19
root-sgp-01.zerotier.com has address 50.7.252.138
root-sgp-01.zerotier.com has IPv6 address 2001:49f0:d0db:2::2
root-alice-sfo-01.zerotier.com has address 107.170.197.14
root-alice-sfo-01.zerotier.com has IPv6 address 2604:a880:1:20::200:e001
```