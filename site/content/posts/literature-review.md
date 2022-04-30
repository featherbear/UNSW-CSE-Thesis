+++
categories = ["Thesis A"]
date = 2021-11-15T10:39:22+11:00
series = []
tags = []
description = "Related research and works"
title = "Literature Review"
toc = true

+++

## 2018 - Michael Steigerwald (VTRUST)

> Talk: [Smart home - Smart hack](https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack)

* Products from different manufacturers used the same cloud infrastructure (with supposed 'military-grade security'), each with their own 'customised' (white-label) smartphone apps
* Used the <a style="text-decoration: underline dotted" href="https://www.espressif.com/en/products/socs/esp8266">Espressif ESP8266</a> chip
  * WiFi-enabled SoC with Arduino support
  * Often used by tinkerers and enthusiasts
* Anyone can become an 'IoT company' regardless of "having in-depth technical knowledge of IoT or IT security."

> _"The analysis of the 'smart' devices using this basic platform is generally frightening [...] serious [...] shortcomings"_

* Insecure transmission of encryption keys, serial number, etc...
* Insecure transmission of wireless credentials during pairing
* Ease of white-labelling and starting your own IoT business
  * Ease of selling malicious devices

[![center](https://gh-card.dev/repos/ct-Open-Source/tuya-convert.svg?fullname=)](https://github.com/ct-Open-Source/tuya-convert)

Automated flashing tool `tuya-convert` created that exploited prior vulnerabilities to flash custom decoupled firmware  
(i.e. [ESPhome](https://esphome.io/), [Tasmota](https://tasmota.github.io/docs/), etc...)

### Tuya's Response

* 28th January 2019 - [patch](https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html) released _(later subverted)_
  * TLS encrypted firmware update procedure
  * Encryption of flash memory
* 3rd January 2020 - [new patch](https://github.com/ct-Open-Source/tuya-convert/issues/483) released
  * unbreakable™
* 23rd April 2020 - Switched from the ESP8266 to a custom SoC
  * [Tuya WB3S](https://github.com/ct-Open-Source/tuya-convert/issues/483)
* 16th June 2021 - Announced official support for HomeAssistant

----

## LIDARPhone - 2020 - Acoustic Eavesdropping

> 2015 - https://dl.acm.org/doi/10.1145/2789168.2790119

> 2020 - https://dl.acm.org/doi/10.1145/3384419.3430430

* LIDAR sensor detects minute vibrations that are induced on objects near audio sources
* Vibrations are extracted and turned back into sound waves
* Extraction of sensitive data (i.e. credit card digits)
* Achieved 91% classification accuracy

----

## Flash Dumping

> Source: [J. Jimenez - Practical Reverse Engineering](https://jcjc-dev.com/2016/06/08/reversing-huawei-4-dumping-flash/)

* Requires a flash programmer ($$$)
  * Budget Solution: Raspberry Pi?
* Some flash chips (depending on form factor) may require to be desoldered
  * Possibly a destructive process
* Free software: [`flashrom`](https://www.flashrom.org/Flashrom)

----

## BGA shorting to gain access to FEL

![](/uploads/20211115-boot-sequence.png)

<!-- https://docs.neutis.io/img/hardware-integration/boot-sequence.png -->

* FEL mode is a "fallback" system on Allwinner SoCs that allows flashing
* Generally triggered by pulling the FEL pin to LOW during boot
  * On the Allwinner R16 (BGA), located on ball L14
    * Ball not located on the edge of the chip and so required desoldering / breakout
* FEL mode can also be entered if U-Boot (or another bootloader) fails to load 🤔

---

* The Allwinner R16 (used in the Roborock) has a solder plane height of around 0.3mm
  * Too shallow for a wire
  * Aluminium foil has a thickness of ~0.02mm
  * Aluminium foil is conductive...
  * $
* Enter FEL mode by corrupting the eMMC reading

Documented: [`SEEMOO-MSC-0142`](https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf)

---

> Aside (2021)

[Dennis](https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf) discovered that on the Roborock S7, TPA17 (on the circuit board) connects to ball L14 on the SoC.  
By pulling TPA17 / L14 / LRADC0 low (i.e connect to GND), FEL mode can be entered

<!-- U-Boot method was patched, so UART access would not work -->
<!-- RootFS is now a read-only SquashFS -->

----

## Infrastructure Security

> [Backdooring the Frontdoor](https://media.defcon.org/DEF%20CON%2024/DEF%20CON%2024%20presentations/DEF%20CON%2024%20-%20Jmaxxz-Backdooring-the-Frontdoor-UPDATED.pdf)

* Sensitive information inside logs
* Client-side access management
* Certificate pinning bypass-able
* 

----

## Vacuums in the Cloud: Analyzing Security in a Hardened IoT Ecosystem

> https://www.usenix.org/conference/woot19/presentation/ullrich

* AM335x Microprocessor
    * ARM Cortex-A8
* Cold-boot attack
    * USB + Serial communication allowed boot into custom image
    * RAM could be dumped to the serial port
* Extraction of keys
    * Auth/Authz to the robot AND cloud
* Secret key RNG weak - able to bruteforce
* RSA key was shared with all devices
* Identity impersonation
* Logs and coredumps were encrypted :)
    * But encryption keys were hardcoded :(
* Buffer Overflow -> RCE 

----

## 2014 - Large-scale Firmware Analysis

> https://www.usenix.org/node/184450.

* Broad analysis of a large number of firmware images
* Discovered 38 new vulnerabilities over 693 images
* Similarities in vulnerabilities
* Static analysis and extraction of keys, credentials, configs, other 'tells'

----

### Fuzzy Binary Analysis

> https://github.com/ReFirmLabs/binwalk  
> https://github.com/ssdeep-project/ssdeep  
> https://github.com/sdhash/sdhash  

* Source code changes largely remain the same
* But binary files change 'arbitrarily'
* Difficult to compare binary files
* Calculate fuzzy hashes instead to compare similarity

----

## IoT | 2017/2018 - Xiaomi Dafang Hacks

[![center](https://gh-card.dev/repos/EliasKotlyar/Xiaomi-Dafang-Hacks.svg?fullname=)](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks)  
[![center](https://gh-card.dev/repos/samtap/fang-hacks.svg?fullname=)](https://github.com/samtap/fang-hacks)

* Cheap WiFi camera that can be made to boot off a microSD card
* Circuit board exposed UART (`baud_rate=115200`) pins that allowed interaction with U-Boot bootloader
* Modification of boot environment to start `/bin/sh` ([[link]](https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks/blob/master/hacks/getroot.md))
* Gain root shell access
* Dump firmware
* Analyse, modify and package updated firmware

---

## Xiaomi Ecosystem | 2017-2019 - Dennis Giese

> Paper: [`SEEMOO-MSC-0142`](https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf) (July 10, 2019)

- Research available: [dontvacuum.me](https://dontvacuum.me)
- Performed security analysis of a range of Xiaomi products
- Found ways to root the Mi Home Robotic Vacuum Cleaner and the Roborock S6
  * UART, hardware fault injection, etc...
- Developed cloud emulation software ([DustCloud](https://github.com/dgiese/dustcloud))
- Research led to development of 3rd party software (i.e. [Valeduto](https://github.com/Hypfer/Valetudo))

> "How secure is the implementation of the ecosystem of the IoT market leader Xiaomi?"

### Conclusions

* ⌚ The company quickly responds to security concerns
* 🔍 Many exposed endpoints of deprecated APIs
* 🔓 Many devices do not enforce proper HTTPS checks
* 🤝 Difficult to enforce security for plugins (vendor-provided)
* ❓ CIA principles generally kept 

---

<!-- # Replay-Protected-Memory-Block

https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/collateral/white-paper/white-paper-emmc-security.pdf -->

<!-- https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf
 -->


 <!-- 
## Secure Boot Bypass

[DEFCON 29 - Robots with lasers and cameras (but no security)](https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf)

[MAXV]

Secure boot
–Replay-Protected-Memory-Block (RPMB) enabled
•DM-Verity
–System partition integrity protected
•SELinux enabled and enforced
•LUKS encrypted partitions
–All application specific programs protected
–Keys stored in OPTEE / ARM TrustZone



Security measures
•Signed ELF-Binaries and kernel-based 
verification
•Signed and encrypted Firmware updates
–Keys different per firmware version
–Master keys stored in OPTEE / 
TrustZone
•IPtables binary cannot flush/delete rules
•Locked UART

----

## Taking Matters In Our Own Hands

* PiHole
* IoTrim
  * https://arxiv.org/abs/2105.05162
 -->