---
date: ""
description: ""
title: "4 | Thesis Plan"
toc: false
weight: 5
---

# Thesis Plan

<!-- Articulating a research question, plan and thesis outline

The plan is robust and has provision for project variations and contingencies. The plan fits within the narrative set out by the literature review –the student makes clear why the plan is developed this way in the context of the reviewed literature. Thesis outline includes sub-sections, logical flow with a clear connection to the project plan and literature review.

All the project-dependent essential skills are identified. The student has not only acquired all the skills but also done additional work (completed partial design of a system/some algorithms/interface etc.)  -->

## Statement


With the widespread availability of IoT devices, there is large interest in exploring **how manufacturers of IoT / smart home devices have addressed the increasing concerns of digital privacy and product security**. This thesis aims to explore the stance and measures that Roborock has taken regarding privacy policies and security concerns in their Roborock S6 robot vacuum cleaner.

Whilst the Roborock S6 vacuum cleaner has been assessed before [@DennisGiese-2019], there has since been changes and updates to the firmware and communications protocol - with security vulnerabilities even being reported recently[^roborock_vuln]. As such, it is favourable to perform a replication study of Giese's past work, as well as to complete further in-depth security and privacy assessments of the Roborock S6.

[^roborock_vuln]: https://global.roborock.com/pages/disclosure-security-vulnerability-on-tuya-iot-cloud

Over the course of the thesis, the concerns of digital privacy and product security will be addressed concurrently.  
An investigation into the nature of network data (i.e. content, frequency, destination, use) will be performed to research how tightly Roborock treats the digital privacy of their customers. Likewise, a security assessment of the Roborock S6 firmware will be performed to identify potential security vulnerabilities, and to assess the effectiveness of current security fortifications.

It should be noted research into the security of the Xiaomi Home smartphone application is beyond the scope of this thesis and will only be investigated should it be required, as extensive research on the application's security has already been completed [@8939043; @fi12020027; @DennisGiese-2019]


## Plan

<!-- In @{fi12020027}'s sss -->

<!-- As a result, many attempts (regardless of success) aimed to completely replace original code with homebrew functionality, such that the original code was never analysed. -->


{{% section %}}

- Research
- Get the Roborock S6 vacuum cleaner
- Acquisition and capture of network activity
- Find a way in (it runs Linux!)
- Image the system for offline analysis
- Reverse engineering and binary analysis of firmware and software
  - Look through binaries for security vulnerabilities and fortifications

---

### Considerations

* I'm just a fourth year!
  * Limited skills
  * i.e. microsoldering for flash chip extraction and dumping
* Access to equipment and facilities are limited (COVID?)
* Only have one device to test on

---

### Contingency

<label>If we can't get into the device?</label>

- Option 1 - Protocol analysis (network traffic)

  - i.e. Inspect the data and its nature
    - Content, Frequency, Destination

- Option 2 - Investigate the <img src="/uploads/20211103-xiaomi-home-logo.png" height="24px" /> <a href="https://play.google.com/store/apps/details?id=com.xiaomi.smarthome" style="text-decoration: underline dotted">Xiaomi Home</a> smartphone application (used to communicate with the device)
  - i.e. Decompile the Android APK file and look for security vulnerabilities and fortifications

---

### Future Plans

- See what the sensors see
- Circuit board decomposition
- Analyse the custom ADB binary serving the USB port

{{% /section %}}

---

# Research, Upskill, Tooling

> Research areas as of initial exploration

- How to capture network activity <label>without</label> compromising my home network?
- Interfacing with JTAG / UART / Serial
- Linux filesystem / system forensics
- Learn the ARM Instruction Set (ISA)
  - Processor Modes, Protection Rings?
- Learn about other hardware protections
  - Secure Boot, RPBM, SELinux, LUKS, OPTEE, TrustZone, etc...
- Acquisition of hardware
  - Serial adapters?
  - Network switch?
  - etc...

{{% note %}}

- Isolated Network
- VLAN?
- Port Mirroring / Packet Sniffing
- Wireshark

{{% /note %}}

---


# Project Timeline

#### <label>Thesis A</label>

* Initial research and research environment setup
* Teardown and initial hands-on of Roborock S6

#### <label>Thesis B - Binary Assessment</label>

* Disassembly and analysis of firmware binaries to identify vulnerabilities
  * inc. ADB binary functionality
* Search for unsecured secrets, logs, configurations

#### <label>Thesis C - Connectivity Assessment</label>

* Inspection of outbound internet traffic - security, PII, etc
* Inspection of local network traffic
* Inspection of interaction with nearby devices
* Protocol analysis

---