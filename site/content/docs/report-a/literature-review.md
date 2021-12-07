---
date: ""
description: ""
title: "Literature Review"
toc: false
weight: 3
---

##### IoT | 2018 - Michael Steigerwald (VTRUST)

In 2018 the VTRUST [@MichaelSteigerwaldVTRUST-2018] security research group analysed a (now discontinued) line of white-labelled IoT product revisions based from the IoT manufacturer Tuya. Despite supposed claims of 'military-grade security', basic packet logging of network activity concluded that "the analysis of the 'smart' devices using this basic platform is generally frightening", with "serious [...] shortcomings". It was revealed that amongst various **PII**, encryption keys and the device's serial number (used to target a specific device through remote commands) were insecurely transmitted over the network - allowing a malicious user on the same wireless network to eavesdrop on the communication. Furthermore, during the initial setup and pairing of the IoT device, wireless credentials were also insecurely transmitted in plain text, allowing wireless network credentials to also be observed.

VTRUST commented on the dangers of vendors selling white-label products, where anyone could become a so-called 'IoT company' regardless of "having in-depth technical knowledge of IoT or IT security". As a result of the hands-free approach to security and privacy for both direct and indirect customers of the IoT platform, concern is raised regarding the ease of distributing maliciously modified devices; where firmware could be tampered at any stage during the supply chain. It is of significance to recognise that the majority of custom firmware releases or so-called "hardware hacks" have originated from the desire to decouple hardware from online and official cloud services. These attempts effectually disconnect devices from the internet, and limit their connectivity to a local server where communications are transparent and minimal.

As a result of many Tuya-powered devices using the widely popular <a style="text-decoration: underline dotted" href="https://www.espressif.com/en/products/socs/esp8266">Espressif ESP8266 SoC</a>, VTRUST was able to exploit discovered vulnerabilities to perform over-the-air upgrades of custom firmware such as [ESPhome](https://esphome.io/) and [Tasmota](https://tasmota.github.io/docs/). Their automated flashing tool PoC `tuya-convert` allowed consumers to easily integrate these devices with local home automation software such as [HomeAssistant](https://www.home-assistant.io/). As a result of VTRUSTS's findings, the overall security posture of modern Tuya-powered devices has since improved[^updated_firmware], with implementations of local flash memory encryption and firmware signing measures during over-the-air firmware upgrades.

[^updated_firmware]: https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

<!-- As a result, many attempts (regardless of success) aimed to completely replace original code with homebrew functionality, such that the original code was never analysed. -->

##### IoT | 2017/2018 - Xiaomi Dafang Hacks

Methods of 'rooting' IoT devices has been widely addressed, often out of the necessity to gain shell access to the device prior to any further research or development. To facilitate offline firmware upgrades for devices that might not have outbound internet connectivity, devices may execute scripts or boot from removable flash memory such as SD Cards. @{EliasKotlyar-2017} demonstrated the ability for the inexpensive Xiaomi Dafang WiFi Camera to boot into a custom `u-boot` bootloader flashed onto a microSD card. Through UART headers located on the device's circuit board, the boot environment was able to be modified to start a shell (`/bin/sh`) instead of the original entry-point script, effectively rooting the device. This invited Kotlyar to dump the firmware and later produce a custom firmware release that did not rely on the vendor's cloud infrastructure.


For devices that do not automatically boot into removable media, methods have been discovered to force certain SoC's to enter a recovery or fallback mode.

##### BGA shorting to gain access to FEL

<img src="/uploads/20211115-boot-sequence.png" height="300px" alt="center" />
<img src="/uploads/20211115-Snipaste_2021-11-15_19-45-37-dgiese.jpg" height="300px" alt="center" />

On Allwinner-based SoCs, a programming mode known as "FEL" can be entered by pulling a certain pin LOW during boot[^FEL_pin], which allowed device manufacturers to perform initial image flashing and bootloader configurations. It can be noted that FEL mode can also be entered if the SoC failed to successfully start the bootloader. @DennisGiese-2019 identified this fact and exploited the physical layout of the Allwinner R16 BGA package, where the data pins connected to the MMC / eMMC chips were on the physical perimeter of the SoC. By sliding a piece of electrically conductive aluminium foil (roughly 0.02mm thick) between the circuit board and the solder plane of the SoC (0.3mm), the data pins could be momentarily shorted for long enough to cause the bootloader read operation to corrupt and fail, hence booting into FEL mode. This was a favourable result as compared to pulling the FEL pin low during boot - as access to the FEL pin would require the desoldering and removal of the SoC, due to the pin being physically inaccessible when soldered without a test pad.

Once FEL mode has been obtained, the boot environment can be configured to launch a shell, allowing for further post-exploitation methods and firmware dumping / analysis.

It is noted that on the circuit board of the Roborock S7 vacuum cleaner, pin `TPA17` is connected to the ball grid location corresponding to the FEL pin - allowing FEL mode to be entered without shorting the data pins.

[^FEL_pin]: Generally triggered by pulling 
<a href="https://linux-sunxi.org/images/b/b3/R16_Datasheet_V1.4_(1).pdf" style="text-decoration: underline dotted">FEL pin</a> (`LRADC0`) LOW during boot

##### Flash IC Dumping Hardware

<img src="http://www.saelig.com/miva/graphics/00000001/848pro725_350x189.jpg" alt="center" />

In situations 

* May require a proprietary flash programmer (above: US$3655)
* Budget solution for common flash types: Raspberry Pi (AU$100)
* Some flash chips (depending on form factor) may require to be desoldered
  * 🧨 Possibly a destructive process 🧨
* Open-source software: [`flashrom`](https://www.flashrom.org/Flashrom)

> Source: [J. Jimenez - Practical Reverse Engineering](https://jcjc-dev.com/2016/06/08/reversing-huawei-4-dumping-flash/)
