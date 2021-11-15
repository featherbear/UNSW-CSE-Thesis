+++
date = 2021-11-01T07:28:19Z
layout = "bundle"
outputs = ["Reveal"]
title = "Seminar A | Andrew Wong"
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
{{% /fragment %}}

{{% fragment %}}

<hr >

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

{{< slide transition="fade" >}}

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

# Background Information

---

# Background Information

##### Widespread availability of IoT brands

{{% section %}}
![](/uploads/20211103-screely-1635938406254.png)

---

- IoT manufacturers sell their products to vendors
  - The product itself
  - Cloud infrastructure
  - Smartphone application
- White-label vendors buy a generic product
  - Rebrand and sell products under their name

---

<blockquote>
Vulnerabilities in IoT infrastructure<br />=<br /> Vulnerability in all white-label products
</blockquote>

{{% /section %}}

---

# Background Information

##### Centralisation and IoT Manufacturers as "Data Giants"

{{% section %}}

- Same IoT cloud infrastructure used by white-label vendors
- Data and network activity is all centralised / standardised
- Privacy concerns?
  - Who, What, Where, When, Why?

<blockquote>
IoT infrastructure outage<br />=<br />Product-wide outage
</blockquote>


---

- Reverse engineering of cloud communications protocols / API
  - e.g. MiIO protocol [(link)](https://github.com/OpenMiHome/mihome-binary-protocol)
- Decoupling of devices from the necessity of internet / IoT cloud
  - <label>HomeAssistant</label> - Home Automation [(link)](https://www.home-assistant.io/)
  - <label>OpenHAB</label> - Home Automation [(link)](https://www.openhab.org/)
  - <label>Valetudo</label> - Cloud-less vacuum cleaner control interface [(link)](https://github.com/Hypfer/Valetudo)
  - <label>DustCloud</label> - Xiaomi Cloud Emulation [(link)](https://github.com/dgiese/dustcloud)
  - <label>MiCloudFaker</label> - Xiaomi Cloud Emulation [(link)](https://github.com/unrelentingtech/micloudfaker)
  - <label>tuya-convert</label> - Flash Tuya devices to custom firmware [(link)](https://github.com/ct-Open-Source/tuya-convert)

{{% /section %}}

---

# About The Company

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

# About The Device

### Roborock S6 Vacuum Cleaner

{{% section %}}

![](/uploads/20211103-s6-pure-banner.webp)

---

<!-- ##### Model Comparison -->
<!-- --- -->

##### Specifications

<!-- 2019 Flagship -->

- CPU: Allwinner R16 Quad-core ARMv7
- ACU: STM32F103VC
- RAM: 512 MB
- Flash: 4 GB eMMC
- Wireless: RTL8189ETV (802.11 b/g/n)
- Cloud: Tuya / Xiaomi
- OS: Ubuntu 14.04

---

#### Cloud Capability

<div class="split2">
<div>
<label>Roborock (Xiaomi Cloud)</label>

![](/uploads/20211103%20-%20Snipaste_2021-11-03_21-47-05.jpg)

</div>

<div>
<label>Tuya Cloud</label>

![](/uploads/20211103%20-%20Snipaste_2021-11-03_21-48-02.jpg)
</div>
</div>

---

IoT infrastructure vulnerability ([15/09/2021](https://global.roborock.com/pages/disclosure-security-vulnerability-on-tuya-iot-cloud))

![](/uploads/20211103-screely-1635941373424-highlight.png)

{{% /section %}}

---

{{< slide transition="fade" >}}

# Statement

>

How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?

>

{{% section %}}

---

# Rationale

> Security is important!

> Check things for yourself!

{{% /section %}}

---

# Proposal

> Digital Privacy

Investigate the nature of network data (i.e. content, frequency, destination) from the Roborock S6, and how the data is used.

<hr >

> Product Security

Investigate potential security vulnerabilities of the Roborock S6, and assess the effectiveness of current security fortifications.

---

{{< slide transition="fade" >}}

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

# Literature Review
#### Existing Works and Papers

---



# Literature Review

{{% section %}}

##### IoT

The majority of hardware hacks / custom firmwares have originated from the desire to decouple hardware from cloud services

---

{{< slide transition="fade" >}}

##### IoT | 2018 - Michael Steigerwald (VTRUST)

> Talk: [Smart home - Smart hack](https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack)

* Products from different manufacturers used the same cloud infrastructure (with supposed 'military-grade security'), each with their own 'customised' (white-label) smartphone apps
* Used the <a style="text-decoration: underline dotted" href="https://www.espressif.com/en/products/socs/esp8266">Espressif ESP8266</a> chip
  * WiFi-enabled SoC with Arduino support
  * Often used by tinkerers and enthusiasts
* Anyone can become an 'IoT company' regardless of "having in-depth technical knowledge of IoT or IT security." 🚩🚩🚩

---

{{< slide transition="fade" >}}

##### IoT | 2018 - Michael Steigerwald (VTRUST)

> Talk: [Smart home - Smart hack](https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack)

_"The analysis of the 'smart' devices using this basic platform is generally frightening [...] serious [...] shortcomings"_

* Insecure transmission of encryption keys, serial number, etc...
* Insecure transmission of wireless credentials during pairing
* Ease of white-labelling and starting your own IoT business
  * Ease of selling malicious devices

---

{{< slide transition="fade" >}}

##### IoT | 2018 - Michael Steigerwald (VTRUST)

> Talk: [Smart home - Smart hack](https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack)

[![center](https://gh-card.dev/repos/ct-Open-Source/tuya-convert.svg?fullname=)](https://github.com/ct-Open-Source/tuya-convert)

Automated flashing tool `tuya-convert` created that exploited prior vulnerabilities to flash custom decoupled firmware  
(i.e. [ESPhome](https://esphome.io/), [Tasmota](https://tasmota.github.io/docs/), etc...)

---

{{< slide transition="fade" >}}

##### IoT | 2018 - Michael Steigerwald (VTRUST)

> Tuya's Response

* 28th January 2019 - [patch](https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html) released _(later subverted)_
  * TLS encrypted firmware update procedure
  * Encryption of flash memory
* 3rd January 2020 - [new patch](https://github.com/ct-Open-Source/tuya-convert/issues/483) released
  * unbreakable™
* 23rd April 2020 - Switched from the ESP8266 to a custom SoC
  * [Tuya WB3S](https://github.com/ct-Open-Source/tuya-convert/issues/483)
* 16th June 2021 - Announced official support for HomeAssistant

---

##### IoT | 2017/2018 - Xiaomi Dafang Hacks

[![center](https://gh-card.dev/repos/EliasKotlyar/Xiaomi-Dafang-Hacks.svg?fullname=)](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks) [![center](https://gh-card.dev/repos/samtap/fang-hacks.svg?fullname=)](https://github.com/samtap/fang-hacks)

* Cheap WiFi camera that can be made to boot off a microSD card
* Circuit board exposed UART (`baud_rate=115200`) pins that allowed interaction with U-Boot bootloader
* Modification of boot environment to start `/bin/sh` ([[link]](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks/blob/master/hacks/getroot.md))
* Gain root shell access
* Dump firmware
* Analyse, modify and package updated firmware

---

##### Flash IC Dumping

* Requires a flash programmer ($$$)
  * Budget Solution: Raspberry Pi?
* Some flash chips (depending on form factor) may require to be desoldered
  * Possibly a destructive process
* Free software: [`flashrom`](https://www.flashrom.org/Flashrom)

> Source: [J. Jimenez - Practical Reverse Engineering](https://jcjc-dev.com/2016/06/08/reversing-huawei-4-dumping-flash/)

---

{{< slide transition="fade" >}}


##### BGA shorting to gain access to FEL

<img src="/uploads/20211115-boot-sequence.png" height="300px" alt="center" />

<!-- https://docs.neutis.io/img/hardware-integration/boot-sequence.png -->

* FEL mode is a "fallback" system on Allwinner SoCs
* Allows the flashing and reprogramming of the SoC
* Generally triggered by pulling FEL pin (`LRADC0`) LOW during boot
* FEL mode can also be entered if the bootloader fails to load 🤔

---

{{< slide transition="fade" >}}

##### BGA shorting to gain access to FEL

* On the Allwinner R16 (BGA package) FEL pin located on ball `L14`
  * Not located on package edge the chip so desoldering required
* Enter FEL mode by preventing successful (e)MMC load?
  * SoC has a solder plane height of around 0.3mm
    * Too shallow for a wire
    * But tall enough for aluminium foil...
    * Thickness: ~0.02mm
    * Conductive: Yes...
    * $$$

Documented: [`SEEMOO-MSC-0142`](https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf)

---

{{< slide transition="fade" >}}

##### BGA shorting to gain access to FEL | Aside (2021)

> On later versions (post 2020), U-Boot shell access was patched, so shell access via UART was mitigated




Pin TPA17 on the Roborock S7 circuit board was [discovered](https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf) to connect to ball L14 on the SoC.  

Therefore by pulling TPA17 / L14 / LRADC0 LOW (i.e connect to GND), FEL mode can be entered


<!-- RootFS is now a read-only SquashFS -->

---

##### Client-Side and Infrastructural Security 

> iOS application of a smart doorlock was analysed to (in)validate claims made by the device company

<label>Findings</label>

* Lock events and other sensitive information were being logged independent of locking functionality
* Access to lock settings were purely client-side UI checks
* Certificate pinning bypass-able

Source: [Backdooring the Frontdoor](https://media.defcon.org/DEF%20CON%2024/DEF%20CON%2024%20presentations/DEF%20CON%2024%20-%20Jmaxxz-Backdooring-the-Frontdoor-UPDATED.pdf)

---

{{< slide transition="fade" >}}

##### Vacuums in the Cloud: Analyzing Security in a Hardened IoT Ecosystem

> Presentation: [USENIX WOOT 19](https://www.usenix.org/conference/woot19/presentation/ullrich)
> 

* Security analysis performed on a Neato BotVac Connected robot vacuum cleaner (popular in the US)
* AM335x Microprocessor (ARM Cortex-A8)
* Cold-boot attack allowed RAM to be dumped over serial
  * USB + Serial communication allowed boot into custom image

---

{{< slide transition="fade" >}}

##### Vacuums in the Cloud: Analyzing Security in a Hardened IoT Ecosystem

* Memory dumped contained confidential keys
    * Authentication and authorisation to the robot
    * Authentication and authorisation to the cloud infrastructure
* Secret key RNG algorithm determined to be weak
  * Small keyspace given known data = bruteforce
* RSA key was shared with all devices
  * Identity impersonation
* Logs and coredumps were encrypted
    * But encryption keys were hardcoded
* Also discovered unauthenticated buffer overflow vulnerability
  * RCE of arbitrary code

---

{{< slide transition="fade" >}}


##### 2014 - Firmware Analysis

> Paper: [A Large-Scale Analysis of the Security of Embedded Firmwares](https://www.usenix.org/node/184450.)

* Broad analysis of a large number of firmware images
* Discovered 38 new vulnerabilities over 693 images
* Similarities in vulnerabilities
* Static analysis and extraction of keys, credentials, configs, other 'tells'

---

{{< slide transition="fade" >}}

##### 2014 - Firmware Analysis

> https://github.com/ReFirmLabs/binwalk  
> https://github.com/ssdeep-project/ssdeep  
> https://github.com/sdhash/sdhash  

* Source code changes largely remain the same
* But binary files change 'arbitrarily'
* Difficult to compare binary files
* Calculate fuzzy hashes instead to compare similarity

---

{{< slide transition="fade" >}}

##### Xiaomi Ecosystem | 2017-2019 - Dennis Giese

> Paper: [`SEEMOO-MSC-0142`](https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf) (July 10, 2019)

- Research available: [dontvacuum.me](https://dontvacuum.me)
- Performed security analysis of a range of Xiaomi products
- Found ways to root the Mi Home Robotic Vacuum Cleaner and the Roborock S6
  * UART, hardware fault injection, etc...
- Developed cloud emulation software ([DustCloud](https://github.com/dgiese/dustcloud))
- Research led to development of 3rd party software (i.e. [Valeduto](https://github.com/Hypfer/Valetudo))

---

{{< slide transition="fade" >}}

##### Xiaomi Ecosystem | 2017-2019 - Dennis Giese

> "How secure is the implementation of the ecosystem of the IoT market leader Xiaomi?"

<label>Conclusions</label>

* ⌚ The company quickly responds to security concerns
* 🔍 Many exposed endpoints of deprecated APIs
* 🔓 Many devices do not enforce proper HTTPS checks
* 🤝 Difficult to enforce security for plugins (vendor-provided)
* ❓ CIA principles generally kept 

---

{{< slide transition="fade" >}}

##### Xiaomi Ecosystem | 2017-2019 - Dennis Giese

> More to be done

![](/uploads/20211110-screely-1636466635263.png)

{{% /section %}}

---

TODO: 

* Reverse engineering IoT
* Reverse engineering Vacuum Cleaners
* Papers about IoT network vulnerabilities
* Microsoldering
* My own research into RE of network protocols, etc?

---

# Extrapolation

> Previous Achievements

* Smartphone application reverse engineering
* Device firmware interception
* Device hardware and component identification
* Network traffic analysis
* Storage analysis

> Unaddressed Areas

* Post-2019 replication study
* In-depth firmware analysis

---

{{< slide transition="fade" >}}

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

# Plan

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

### Considerations

* Only have one device to use
* Access to equipment and facilities are limited (COVID?)
* I'm just a fourth year!
  * Limited skills
  * i.e. microsoldering for flash chip extraction and dumping

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

#### Thesis A

* Initial research and research environment setup
* Teardown and initial hands-on of Roborock S6

#### Thesis B + C

* Assessment of product security and privacy

---

{{< slide transition="fade" >}}

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

# Current Progress

---

# Rolling Research

{{% section %}}

> [featherbear.cc/UNSW-CSE-Thesis](https://featherbear.cc/UNSW-CSE-Thesis/)

[![](/uploads/20211103-screely-1635868857938.png)](https://featherbear.cc/UNSW-CSE-Thesis/)

---

> [Summary](https://featherbear.cc/UNSW-CSE-Thesis/tldr)

[![](/uploads/20211103-screely-1635869059154.png)](https://featherbear.cc/UNSW-CSE-Thesis/tldr)

{{% /section %}}

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

# Next Steps

- Dump the firmware and begin RE / forensics
- Redo (and further investigate) live system analysis
  - i.e. Properly capture _all_ network traffic

---

# Any Questions?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<hr >

Andrew Wong

<sub>
<p>w: <a href="https://featherbear.cc/UNSW-CSE-Thesis">featherbear.cc/UNSW-CSE-Thesis</a></p>
<p>e: <script>document.write(atob('YW5kcmV3Lmoud29uZ0BzdHVkZW50LnVuc3cuZWR1LmF1'))</script></p>
</sub>