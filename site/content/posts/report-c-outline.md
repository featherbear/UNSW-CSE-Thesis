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

### Network Setup

Diagram

\[Vacuum\], \[Traffic Dummy\], AP, Switch, Port Mirror, Mirror Sink, Router

### Analysis of Device Pairing Procedure

Insecure transmission of wireless credentials.

Violates Tuya's security white paper, despite integrating Tuya's service

### (Not a result - Firmware Extraction)

Dump command

UBoot command line -> hold s

### Binary File Comparison against Ubuntu 14.04.3 LTS

### Proof of Concept: Remote Access

### Proof of Concept: Reset Persistence

### Proposed Exploit: Upgrade Persistence

### Discovered Vulnerability: RCE via locked ADB

### Identified Network Behaviour

Network capture

### MUD Profiles

> [https://github.com/ayyoob/mudgee](https://github.com/ayyoob/mudgee "https://github.com/ayyoob/mudgee")

MUD profiles for versions: v01.15.18, v02.29.02

Show flow table

**Limitations: Baseline ground-truth  
**There are likely other ports and addresses that were not identified during the packet captures

**Limitations: Payload packing  
**MUD files do not perform deep packet inspection, nor does it decode SSL traffic. Limited to blocking unexpected addresses and ports.

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