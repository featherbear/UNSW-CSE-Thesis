+++
date = 2021-11-01T07:28:19Z
layout = "bundle"
outputs = ["Reveal"]
title = "Seminar A"

+++

{{< slide background-image="https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211030_040050.jpg" transition="fade" >}}

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### "Smart" Vacuum Cleaners

##### An Audit Into The Security and Integrity of IoT Systems

###### Andrew Wong | UNSW Sydney

---

{{< slide transition="fade" >}}

# Introduction

Internet of Things (IoT) and Smart Home devices are everywhere.

{{% fragment %}}
Q: Can we completely trust a device's {security, privacy}?  
A: <label>no</label>

- Developers are humans.
  - Humans make mistakes.
    - Developers make <s>mistakes</s> bugs
- Or maybe secret company agendas?
  {{% /fragment %}}

{{% fragment %}}
<label>We should always verify and test things where possible!</label>
{{% /fragment %}}

{{% note %}}
The Internet of Things (IoT) and Smart Home devices are everywhere...  
From smart lightbulbs, to smart fridges... to ... [*] smart ... flip-flops?
We can't seem live without them, but should we really be living _with_ them?

Now regardless of where you stand in the pro or anti smart device debate, the matter of fact is that the adoption of these devices into our daily lives have been widespread.

Of course though, everything comes at a cost.
{{% /note %}}

<!-- - What
- Why
- But whyy -->

---

# About Me

<style>
.profileBanner {
    width: 100%;
    height: 280px;
    background-image: url(https://featherbear.cc/assets/images/cover.jpg);
    background-position: 100% 30%;
    background-size: cover;
    position: relative;
    box-shadow: none;
    margin: 1em 0;
    border-radius: 10px;
}
.profileBanner::before {
    content: ' ';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: inherit;
    filter: blur(0.2em);
}
</style>

**Andrew Wong**  
Computer Engineering @ UNSW Sydney

<sub>
e: <script>document.write(atob('YW5kcmV3Lmoud29uZ0BzdHVkZW50LnVuc3cuZWR1LmF1'))</script>

<label>Interests</label></br >
Making things, breaking things... mainly the latter
</sub>

<div class="profileBanner"></div>

---

# Background Information

<img src="/uploads/20211003-60410b5d26ef2b00045692ec.png" class="plain small" />

{{% section %}}

---

- Robotic home cleaning appliances
- Founded in July 2014, Beijing
- Partnered with Xiaomi in September 2014
  - Investments + Partnership

---

- September 2016 - Mi Home Robotic Vaccuum Cleaner
  - Very first product!
- &vellip; Roborock S5, E2, E3
- June 2019 - <label>Roborock S6</label>
- &vellip; Roborock S5 Max, S4, S6 Pure, S6 MaxV, E4, S4 Max
- January 2021 - S7

{{% /section %}}

---

# Background Information

### Roborock S6 Vacuum Cleaner

{{% section %}}

![](/uploads/20211103-s6-pure-banner.webp)

---

* Chips, specs

---

* ADB Port?

---

Xiaomi
Smartphone Application

---

Ubuntu

{{% /section %}}

---


# Background Information

Widespread product release

* Buy 'generic', resell
* Buy into the framework
* i.e. Tuya (smart home), Xiaomi
* Use their ecosystem / framework
  * And their associated risks

MENTION SOMETHING ABOUT ALEXA, GOOGLE ASSISTANT, SIRI IN THE INTRODUCTION?

https://github.com/OpenMiHome/mihome-binary-protocol/blob/master/doc/PROTOCOL.md

* Liberation from coupled service
* Privacy?

RRoR
(DustCloud)
MiCloudFaker
Valetudo

### Xiaomi Integration

MiIO
HomeAssistant
OpenHab

---

# Rationale

Security is important!

Check things for (y)ourself!

---

# Statement

>

How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?

>

---

# Proposal

> Digital Privacy

Investigate the nature of network data (i.e. content, frequency, destination) from the Roborock S6, and how the data is used.

<hr >

> Product Security

Investigate potential security vulnerabilities of the Roborock S6, and assess the effectiveness of current security fortifications.

---

# Literature Review

{{% section %}}

> 2017 - Dennis Giese

- Found ways to root the Mi Home Robotic Vacuum Cleaner and the Roborock S6
- https://dontvacuum.me
- Continued analysis on later Xiaomi (and derivative) vacuum cleaners

Dustcloud


TODO: OTHER PAPERS



{{% /section %}}

---

# Plan

{{% section %}}

- Research
- Get the Roborock S6 vacuum cleaner
- Acquisition and capture of network activity
- Find a way in (it runs Linux!)
- Image the system for offline analysis
- Reverse engineering and binary analysis of firmware and software
  - Look through binaries for security vulnerabilities and fortifications

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

# Project Timeline

---

# Rolling Research

{{% section %}}

> [featherbear.cc/UNSW-CSE-Thesis](https://featherbear.cc/UNSW-CSE-Thesis/)

[![](/uploads/20211103-screely-1635868857938.png)](https://featherbear.cc/UNSW-CSE-Thesis/)

---

> [featherbear.cc/UNSW-CSE-Thesis/tldr](https://featherbear.cc/UNSW-CSE-Thesis/tldr)

[![](/uploads/20211103-screely-1635869059154.png)](https://featherbear.cc/UNSW-CSE-Thesis/tldr)

{{% /section %}}

---

# Research, Upskill, Tooling

- How to capture network activity <label>without</label> compromising my home network?
- Interfacing with JTAG / UART / Serial
- Linux forensics
- Learn the ARM ISA
  - Processor Modes, Protection Rings?

{{% note %}}

- Isolated Network
- VLAN?
- Port Mirroring / Packet Sniffing
- Wireshark

{{% /note %}}

---

# Preliminary Results

{{% section %}}

### Network Setup

![](/uploads/20211027-20211026_210111-highlighted.jpg)

---

### \[Initial\] Packet Capture

![](/uploads/20211025-snipaste_2021-10-26_02-04-58.jpg)

- No LAN-LAN packets???
- <label>incomplete test</label> - misconfigured packet capture setup

---

### Teardown

![](/uploads/20211029-20211029_233611.jpg)

---

### Initial Breakdown and Pinout (where needed)

![](/uploads/20211029-20211030_021531.jpg)

{{% note %}}
STM32, Allwinner R16 (Quad-core ARMv7 processor), USB Port (custom ADB?)
{{% /note %}}

---

### Identification of the UART pins

![](/uploads/20211029-20211030_021507-uart-highlighted.jpg)

---

### Serial Access

- Serial (baud=115200) gives us a shell!

<img src="/uploads/20211029-20211030_025959.jpg" width="33.5%" />
<img src="/uploads/20211103-serial-comms.gif" width="60%" />

<!-- Haahah widths... -->

> Need a root password though...

---

### U-Boot Bootloader

![](/uploads/20211103-Snipaste_2021-11-03_03-47-40.jpg)

- Able to enter the bootloader shell if `s` is pressed during init

![](/uploads/20211029-bootloader-shell.jpg)

---

### Root!

![](/uploads/20211029-snipaste_2021-10-30_03-24-41.jpg)

![](/uploads/20211029-snipaste_2021-10-30_03-26-11.jpg)

{{% /section %}}

---

# Moving Ahead

* Dump the firmware and begin RE / forensics
* Redo (and further investigate) live system analysis

---

# Any Questions?
