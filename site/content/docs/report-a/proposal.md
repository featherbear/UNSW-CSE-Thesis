+++
date = ""
description = ""
title = "Progress"
toc = false
weight = 5

+++

Articulating a research question, plan and thesis outline

	

The plan is robust and has provision for project variations and contingencies. The plan fits within the narrative set out by the literature review –the student makes clear why the plan is developed this way in the context of the reviewed literature. Thesis outline includes sub-sections, logical flow with a clear connection to the project plan and literature review.

	

All the project-dependent essential skills are identified. The student has not only acquired all the skills but also done additional work (completed partial design of a system/some algorithms/interface etc.) 



# Statement

>

How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?

>

{{% section %}}

---

# Rationale

> 🔐 Security is important!

> 📒 Check things for yourself!

{{% /section %}}

---

# Proposal

> Digital Privacy

Investigate the nature of network data (i.e. content, frequency, destination) from the Roborock S6, and how the data is used.

<hr >

> Product Security

Investigate potential security vulnerabilities of the Roborock S6, and assess the effectiveness of current security fortifications.

---


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