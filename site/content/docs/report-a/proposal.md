---
date: ""
description: ""
title: "4. Thesis Plan"
toc: false
weight: 5
---

# Thesis Plan

<!-- Articulating a research question, plan and thesis outline

The plan is robust and has provision for project variations and contingencies. The plan fits within the narrative set out by the literature review –the student makes clear why the plan is developed this way in the context of the reviewed literature. Thesis outline includes sub-sections, logical flow with a clear connection to the project plan and literature review.

All the project-dependent essential skills are identified. The student has not only acquired all the skills but also done additional work (completed partial design of a system/some algorithms/interface etc.)  -->

## Statement

With the widespread availability of IoT devices, there is large interest in exploring **how manufacturers of IoT / smart home devices have addressed the increasing concerns of digital privacy and product security**. This thesis aims to explore the stance and measures that Roborock has taken regarding privacy policies and security concerns in their Roborock S6 robot vacuum cleaner.

Whilst the Roborock S6 vacuum cleaner has been assessed before [@DennisGiese-2019], there has since been significant changes and updates to the firmware and communications protocol - with security vulnerabilities even being reported recently[^roborock_vuln]. As such, it is favourable to perform a replication study of Giese's past work, as well as to complete further in-depth security and privacy assessments of the Roborock S6.

<!-- As a result, many attempts (regardless of success) aimed to completely replace original code with homebrew functionality, such that the original code was never analysed. -->

[^roborock_vuln]: https://global.roborock.com/pages/disclosure-security-vulnerability-on-tuya-iot-cloud

\newpage 
## Plan

### Overview

During the course of Thesis A - initial product research was performed, and tasks were set out for Thesis B and Thesis C. The software, hardware and tooling that are required to carry out the thesis were also investigated and obtained in preparation for the remainder of the thesis, where a concurrent assessment will be performed on the Roborock S6's digital privacy and product security.

In Thesis B, a security assessment of the device will be performed, where the Roborock S6 firmware will be analysed in order to identify potential security vulnerabilities that may either render the device insecure, or raise concern to other devices connected to the same network (i.e devices on a home network). These vulnerabilities include vulnerable code as well as insecure or static secrets, credentials and configurations. A review of existing security fortifications will also be executed to audit Roborock's security posture and response to reported disclosures. Techniques and IoT forensics checklists will be followed from various sources and handbooks [@fi12020027] to maximise search and analysis coverage. The product security analysis of the Roborock S6 will be the primary milestone for Thesis B, however privacy analysis will also be performed simultaneously.

In Thesis C, an investigation into the nature of networked data will be performed to qualify how important Roborock values the concerns of their customers' digital privacy. This investigation will involve the observation of the device's behaviour, where the frequency, size, content and destination of transmitted data will be analysed to gain heuristic insights of how the data might be used by Roborock. An audit of what **PII** and **UGC** is being transmitted will also be performed to address concerns of tracking and (de)anonymisation. This digital privacy assessment of the Roborock S6 will be the primary milestone for Thesis C, however research into the device's product security will also be continued.

It should be noted research into the security of the Xiaomi Home smartphone application is beyond the scope of this thesis and will only be investigated should it be required, as extensive research on the application's security has already been completed [@8939043; @fi12020027; @DennisGiese-2019]

### Stretch Goals

Should the major thesis milestones be accomplished ahead of schedule and sufficient time remains, an investigation into the verbosity of sensor data will be performed to explore the extent to which data can be extracted from the sensors, and of whether they are of a privacy concern. This investigation will also entail a search for other side-channel data similar to intensity values from the LIDAR sensor [@10.1145/3384419.3430430].

Alternately, the functionality of the Micro USB / ADB port located on the chassis of the Roborock S6 will be investigated. Whilst there has been discussion regarding replacing the custom Android Debugging Bridge (ADB) binary with a complete version, there is little to no information available concerning the functionality of the original binary. This investigation will likely involve a binary disassembly of the custom ADB binary in addition to an exploration of the ADB USB protocol.

### Contingency

Contingencies have been provisioned in the event that the proposed research plans cannot be executed. Should it not be possible to gain access to the Roborock S6's firmware in any way (hence prohibiting a binary firmware analysis), focus will turn towards a black-box assessment of the vacuum cleaner's network behaviour. Network activity will be then be observed for a longer period of time over the course of Thesis B and Thesis C as to detect long-term patterns and possibly changing behaviours.

Alternatively, the network interactions of the <a href="https://play.google.com/store/apps/details?id=com.xiaomi.smarthome" style="text-decoration: underline dotted">Xiaomi Home</a> smartphone application may be assessed, where local communications between the vacuum cleaner and the smartphone application can be observed under both scopes of privacy and security. This approach will entail the observation of network packets to look for questionable data and weak security measures.

---

## Project Preparations

### Acquisition of Software, Hardware and Tooling

It is estimated that a minimal amount of hardware and physical resources will be required for the completion of this project.  

In observing network behaviour in a secure manner, an isolated wireless network be needed - which requires the acquisition of a wireless access point, a network switch capable of port mirroring and an active internet connection. To analyse network packets, the free [Wireshark](https://www.wireshark.org/) network protocol analyser will be used in conjunction with a Man-In-The-Middle proxy like [Burp Suite](https://portswigger.net/burp) or [mitmproxy](https://mitmproxy.org/). All of the required software and hardware to perform networking monitoring of the Roborock S6 has already been obtained, with preliminary results recorded in Chapter 5.

To perform a security analysis of the robot vacuum cleaner's firmware, physical entry into the vacuum cleaner must first be performed in order to gain access to the UART pins on the device's circuit board, from which further post-exploitation and analysis can then occur. In order to interface with the UART pins, spare jumper wires and a soldering iron will be required as the UART pins are exposed as test pads rather than pin headers. Additionally a UART interface (i.e. USB to TTL UART) is also required, however all tools have already been obtained. Whilst hardware such as flash chip programmers and microsoldering stations may be beneficial to creating an image of the Roborock S6's firmware, preliminary testing had successfully allowed for a root shell to be obtained as later discussed in Chapter 5. As consequence, these additional devices will not be required. To perform firmware and binary analysis, tools like [Binary Ninja](https://binary.ninja/), [binwalk](https://github.com/ReFirmLabs/binwalk) and [bindiff](https://www.zynamics.com/bindiff.html) have been obtained.

\newpage 
### Upskilling and Learning

Prior to the security analysis of binary images found in the Roborock S6 firmware, sound understanding of the ARM processor instruction set (ISA) must be obtained in order to understand the disassembled instructions. In-depth understanding of ARM-specific and embedded systems-specific protection mechanisms such as processor modes, protection rings, OPTEE and RPMB may be required to be learned as subtle vulnerabilities are discovered.

It will also be beneficial to be familiarised with both the common and uncommon paths that should be looked at in a Linux system forensics analysis, as relevant to the research performed by @{fi12020027}.