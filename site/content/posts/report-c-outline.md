+++
categories = []
date = 2022-08-01T02:23:54Z
description = ""
series = []
tags = []
title = "Report C Outline"
toc = true
draft = true

+++
> [_https://featherbear.cc/UNSW-CSE-Thesis/posts/thesis-c-report-structure-notes/_](https://featherbear.cc/UNSW-CSE-Thesis/posts/thesis-c-report-structure-notes/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/thesis-c-report-structure-notes/")

***

## Abstract

## Acknowledgements

## Table of Contents

## Introduction

### Threat Scenarios

## Background / Literature Review

## Work Performed

### Scope of Assessment

### Summary of Contributions

Summary + mini table of contents?

### Power Analysis



### Networking

https://featherbear.cc/UNSW-CSE-Thesis/posts/netstat-v01.15.58/

### Analysis of Device Pairing Procedure

https://featherbear.cc/UNSW-CSE-Thesis/posts/initialisation-pairing-process/

Insecure transmission of wireless credentials.
Frida
Violates Tuya's security white paper, despite integrating Tuya's service

* roborock-vacuum-s6_miap\[LAST4MAC\]
* Waits for broadcast to udp/55559
  * Hello?
  * JSON

```json
{"id":1,"method":"config_wifi","params":{"password":"password123","region":"eu","ssid":"secureTM","timezone":"Australia/Sydney","uid":"rr6020078a615840"}}
```

#### Transmitted Data

https://featherbear.cc/UNSW-CSE-Thesis/posts/pre-encryption-and-post-decryption-hooks/
Logs

What's transmitted?

Things are encrypted
https://featherbear.cc/UNSW-CSE-Thesis/posts/execs/opt-rockrobo-rrlog-rrlogd-v01.15.58/

#### Network Setup

Diagram

\[Vacuum\], \[Traffic Dummy\], AP, Switch, Port Mirror, Mirror Sink, Router

netstat


#### Identified Network Behaviour

Network capture

### MUD Profiles

> [https://github.com/ayyoob/mudgee](https://github.com/ayyoob/mudgee "https://github.com/ayyoob/mudgee")

MUD profiles for versions: v01.15.18, v02.29.02

Show flow table

\**Limitations: Baseline ground-truth  
\**There are likely other ports and addresses that were not identified during the packet captures

\**Limitations: Payload packing  
\**MUD files do not perform deep packet inspection, nor does it decode SSL traffic. Limited to blocking unexpected addresses and ports.


#### Proof of Concept: Remote Access




### Filesystem

#### (Not a result - Firmware Extraction)

1. TPA16 is the GND
2. TPA15 is the device’s RX pin
3. TPA 8 is the device’s TX pin

Remote dump over SSH

UBoot command line -> hold s

Root XOR

[https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif](https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif "https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif")

```bash
IP=10.10.10.8
for partition in `ssh root@$IP "ls /dev/mmcblk0?* -1"`
do
    ssh root@$IP "sudo dd if=$partition bs=1M" | pv | dd of=$(basename $partition).img
done
```

#### Partitions

#### Proof of Concept: Reset Persistence

#### Binary File Comparison against Ubuntu 14.04.3 LTS

https://featherbear.cc/UNSW-CSE-Thesis/posts/diff-inspection/  
https://featherbear.cc/UNSW-CSE-Thesis/posts/file-system-comparison/#diff

#### Binary File Analysis

BinaryNinja

--> wlanmgr

--> rrlogd
Galaxy-V2, python-requests/2.9.1
iptables

--> rriot_tuya

--> SysUpdate

--> adbd
##### Discovered Vulnerability: RCE via locked ADB

    [5991703.724675] usb 1-2: new high-speed USB device number 4 using xhci_hcd
    [5991703.881398] usb 1-2: New USB device found, idVendor=1f3a, idProduct=1001, bcdDevice= 2.33
    [5991703.881400] usb 1-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
    [5991703.881402] usb 1-2: Product: Rockrobo ruby
    [5991703.881403] usb 1-2: Manufacturer: Rockrobo USB Developer
    [5991703.881404] usb 1-2: SerialNumber: 8a80ab8936d76c118000

`adb_lock`


#### Networking

IPv6 and iptables
WatchDoge, rrlogd

### Upgrade Analysis

#### Proposed Exploit: Upgrade Persistence

#### UBoot modification

#### Changes

root password

/mnt/default/shadow

busybox

ipv6 / iptables here instead?  watchdoge; rrlogd

## Evaluation

### Recommendations

🔥 Further transparency in disclosures  
🔥 Improved privacy policy  
🔥 Pairing encryption  
🔥 Data should be cleared on device disassociation  
🔥 Better co-ordination between ecosystems and vendors  
🔥 MUD files - both devices and infrastructure  
🔥 Whitepapers, bug bounties

De-elevate access

## Conclusions

## Future Work

* Update MITM

## References