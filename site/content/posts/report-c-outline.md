+++
categories = []
date = 2022-08-01T02:23:54Z
description = ""
series = []
tags = []
title = "Report C Outline"
toc = true

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

### Network Setup

Diagram

\[Vacuum\], \[Traffic Dummy\], AP, Switch, Port Mirror, Mirror Sink, Router

### Analysis of Device Pairing Procedure

Insecure transmission of wireless credentials.

Violates Tuya's security white paper, despite integrating Tuya's service

* roborock-vacuum-s6_miap\[LAST4MAC\]
* Waits for broadcast to udp/55559
  * Hello?
  * JSON

```json
{"id":1,"method":"config_wifi","params":{"password":"password123","region":"eu","ssid":"secureTM","timezone":"Australia/Sydney","uid":"rr6020078a615840"}}
```

### (Not a result - Firmware Extraction)

Remote dump over SSH

UBoot command line -> hold s

[https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif](https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif "https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211103-serial-comms.gif")

### Binary File Comparison against Ubuntu 14.04.3 LTS

### Binary File Analysis

BinaryNinja

### Proof of Concept: Remote Access

### Filesystem

#### Partitions

#### Proof of Concept: Reset Persistence

#### 

### Upgrade Analysis

#### Proposed Exploit: Upgrade Persistence

#### UBoot modification

### USB Analysis

#### Discovered Vulnerability: RCE via locked ADB

    [5991703.724675] usb 1-2: new high-speed USB device number 4 using xhci_hcd
    [5991703.881398] usb 1-2: New USB device found, idVendor=1f3a, idProduct=1001, bcdDevice= 2.33
    [5991703.881400] usb 1-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
    [5991703.881402] usb 1-2: Product: Rockrobo ruby
    [5991703.881403] usb 1-2: Manufacturer: Rockrobo USB Developer
    [5991703.881404] usb 1-2: SerialNumber: 8a80ab8936d76c118000

`adb_lock`

### Identified Network Behaviour

Network capture

### MUD Profiles

> [https://github.com/ayyoob/mudgee](https://github.com/ayyoob/mudgee "https://github.com/ayyoob/mudgee")

MUD profiles for versions: v01.15.18, v02.29.02

Show flow table

\**Limitations: Baseline ground-truth  
\**There are likely other ports and addresses that were not identified during the packet captures

\**Limitations: Payload packing  
\**MUD files do not perform deep packet inspection, nor does it decode SSL traffic. Limited to blocking unexpected addresses and ports.

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