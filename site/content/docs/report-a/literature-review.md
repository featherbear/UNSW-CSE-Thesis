---
date: ""
description: ""
title: "Literature Review"
toc: false
weight: 3
---

> TODO: Application?  

> TODO: Application?  

> TODO: Application?  

> TODO: Application?  

> TODO: Application?  

> TODO: Application?  

> TODO: Application?  



##### IoT | 2018 - Michael Steigerwald (VTRUST)

In 2018 the security research group @{MichaelSteigerwaldVTRUST-2018} analysed a line of white-labelled IoT product revisions based from the IoT manufacturer Tuya. Despite supposed claims of 'military-grade security', basic packet logging of network activity concluded that "the analysis of the 'smart' devices using this basic platform is generally frightening", with "serious [...] shortcomings". It was revealed that amongst various **PII**, encryption keys and the device's serial number (used to target a specific device through remote commands) were insecurely transmitted over the network - allowing a malicious user on the same wireless network to eavesdrop on the communication. Furthermore, during the initial setup and pairing of the IoT device, wireless credentials were also insecurely transmitted in plain text, allowing wireless network credentials to also be observed.

VTRUST commented on the dangers of vendors selling white-label products, where anyone could become a so-called 'IoT company' regardless of "having in-depth technical knowledge of IoT or IT security". As a result of the hands-free approach to security and privacy for both direct and indirect customers of the IoT platform, concern is raised regarding the ease of distributing maliciously modified devices; where firmware could be tampered at any stage during the supply chain. It is of significance to recognise that the majority of custom firmware releases or so-called "hardware hacks" have originated from the desire to decouple hardware from online and official cloud services. These attempts effectually disconnect devices from the internet, and limit their connectivity to a local server where communications are transparent and minimal.

As a result of many Tuya-powered devices using the widely popular <a style="text-decoration: underline dotted" href="https://www.espressif.com/en/products/socs/esp8266">Espressif ESP8266 SoC</a>, VTRUST was able to exploit discovered vulnerabilities to perform over-the-air upgrades of custom firmware such as [ESPhome](https://esphome.io/) and [Tasmota](https://tasmota.github.io/docs/). Their automated flashing tool PoC `tuya-convert` allowed consumers to easily integrate these devices with local home automation software such as [HomeAssistant](https://www.home-assistant.io/). As a result of VTRUSTS's findings, the overall security posture of modern Tuya-powered devices has since improved[^updated_firmware], with implementations of local flash memory encryption and firmware signing measures during over-the-air firmware upgrades.

[^updated_firmware]: https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

##### IoT | 2017/2018 - Xiaomi Dafang Hacks

Methods of 'rooting' IoT devices has been widely addressed, often out of the necessity to gain shell access to the device prior to any further research or development. To facilitate offline firmware upgrades for devices that might not have outbound internet connectivity, devices may execute scripts or boot from removable flash memory such as SD Cards. @{EliasKotlyar-2017} demonstrated the ability for the inexpensive Xiaomi Dafang WiFi Camera to boot into a custom `u-boot` bootloader flashed onto a microSD card. Through UART headers located on the device's circuit board, the boot environment was able to be modified to start a shell (`/bin/sh`) instead of the original entry-point script, effectively rooting the device. This invited Kotlyar to dump the firmware and later produce a custom firmware release that did not rely on the vendor's cloud infrastructure.

##### IoT | Smartphone Application Security Assessment

@{tibav:36251} investigated the security claims of a smart doorlock which boasted in bank-grade security, and better security over conventional lock and key methods. Various flaws within the smartphone application however invalidated these claims, as it was discovered that access to lock settings were purely client-side checks, and as such; requests to the server could be modified to elevate privileges. Various debug menus were present in the production version of the application, allowing certificate pinning protections to be subverted. Furthermore, lock events and other identifiable information were being transmitted to a logging endpoint.

##### BGA shorting to gain access to FEL

<img src="/uploads/20211115-boot-sequence.png" height="300px" alt="center" />
<img src="/uploads/20211115-Snipaste_2021-11-15_19-45-37-dgiese.jpg" height="300px" alt="center" />

For devices that do not automatically boot into removable media, methods have been discovered to force certain SoC's to enter a recovery or fallback mode.

On Allwinner-based SoCs, a programming mode known as "FEL" can be entered by pulling a certain pin LOW during boot[^FEL_pin], which allowed device manufacturers to perform initial image flashing and bootloader configurations. It can be noted that FEL mode can also be entered if the SoC failed to successfully start the bootloader. @DennisGiese-2019 identified this fact and exploited the physical layout of the Allwinner R16 BGA package, where the data pins connected to the MMC / eMMC chips were on the physical perimeter of the SoC. By sliding a piece of electrically conductive aluminium foil (roughly 0.02mm thick) between the circuit board and the solder plane of the SoC (0.3mm), the data pins could be momentarily shorted for long enough to cause the bootloader read operation to corrupt and fail, hence booting into FEL mode. This was a favourable result as compared to pulling the FEL pin low during boot - as access to the FEL pin would require the desoldering and removal of the SoC, due to the pin being physically inaccessible when soldered without a test pad.

Once FEL mode has been obtained, the boot environment can be configured to drop a shell, allowing for further post-exploitation methods and firmware dumping / analysis.

It is noted that on the circuit board of the Roborock S7 vacuum cleaner, pin `TPA17` is connected to the ball grid location corresponding to the FEL pin - allowing FEL mode to be entered without shorting the data pins.

[^FEL_pin]: Generally triggered by pulling 
<a href="https://linux-sunxi.org/images/b/b3/R16_Datasheet_V1.4_(1).pdf" style="text-decoration: underline dotted">FEL pin</a> (`LRADC0`) LOW during boot

##### Flash IC Dumping Hardware

<img src="http://www.saelig.com/miva/graphics/00000001/848pro725_350x189.jpg" alt="center" />

In situations where no provisions exist to programmatically extract stored data from a system (i.e. shell access to perform disk imaging), hardware devices known as flash programmers can be used; where they are specially designed to read and write data on flash chips. Flash programmers however present a high cost overhead, as they are rather costly and only work with specific models and/or types of flash chips; rendering it infeasible to own a specific flash programmer for each possible variation of flash chip. @{JuanCarlosJimenez-2016} points out that a Raspberry Pi could be used as an affordable budget solution when paired with open source flash programming software like [`flashrom`](https://www.flashrom.org/Flashrom)

It is noted that the process of hardware flash chip dumping is not feasible in the scope of this thesis due to resource constraints of not possessing a suitable flash programmer, as well as the risk associated with hardware-based methods being possibly destructive with irrevocable damage. Preliminary results (TODO: SEE SECTION? ) have however suggested that firmware data can be obtained through programmatic methods, and as such this method will not be pursued.

##### 2014 - Firmware Analysis

In 2014, @{184449} performed a broad static analysis over a large number of firmware images to identify common patterns and similarities between different product vendors. During the analysis of the 693 images, 38 new vulnerabilities were discovered, some which were present in the majority of images. Hardcoded keys and credentials were also discovered

To facilitate the similarity analysis of firmware images, where per-byte analysis techniques are nonsensical, tools like [binwalk](https://github.com/ReFirmLabs/binwalk), [ssdeep](https://github.com/ssdeep-project/ssdeep), and [sdhash](https://github.com/sdhash/sdhash) were employed - which help to facilitate file exploration relative to their file type and architecture.

A large proportion of images shared similarities in code execution graphs, indicative that a large number of vendors had simply used and repurposed sample code (often available as part part of a SoC's SDK). Given the commonality of vulnerabilities, concern is raised as to the vendor's technical capability and understanding of IoT systems.

##### Vacuums in the Cloud: Analyzing Security in a Hardened IoT Ecosystem

Regarding prior investigations of smart robot vacuum cleaners, @{238606} performed a security analysis on the _Neato BotVac Connected_ robot. Through the combination of a cold-boot attack - where a system is rebooted without the volatile memory (i.e. RAM) being cleared - and the booting of a custom bootloader image, the memory state of the system's prior execution (inclusive of loaded binaries as well as their application state) was able to be dumped and analysed. The proceeding analysis revealed major vulnerabilities and concerns in the vacuum cleaner and more alarmingly, in Neato's cloud infrastructure.

Whilst logs and coredumps were encrypted when transmitted to cloud servers, the encryption keys were discovered to be hardcoded which nullified any premise of encryption. Furthermore, authentication and authorisation tokens were all encrypted with the same static RSA key - which left the cloud infrastructure vulnerable to impersonated identities and access. Supposed randomly generated keys were also discovered to be vulnerable, due to the keyspace for entropy being so short that the key was able to be bruteforced within reasonable time.

An unauthenticated endpoint on the robot vacuum cleaner's remote port was found to be vulnerable to a buffer overflow, allowing remote code execution on the robot by anyone connected to the same wireless network.

##### LIDAR - Acoustic Eavesdropping

![](https://eak2mvmpt4a.exactdn.com/wp-content/uploads/2020/07/A-Guide-to-Lidar-Wavelengths-Velodyne-Lidar-AlphaPrime-1.jpg?strip=all&lossy=1&ssl=1)

As more and more IoT devices become online and sensor data is transmitted around the world, there grows popularity to thoroughly investigate the extents of what data can be retrieved from the sensors. Given the outputs of Light Detection and Ranging (LIDAR) sensors being intensity and distance, intensity measurements when pointed towards an audio source were able to be processed and translated back into audio signals - allowing speech to be identified from micro-vibrations within objects [@10.1145/2789168.2790119].

This research has since been continued and tested on robot vacuum cleaners which too posses LIDAR sensors. As consequent to off-the-shelf LIDAR sensor units being used within the vacuum cleaners, light intensity values were also returned by the sensor, and could also be used to in a similar fashion to detect speech and sound [@10.1145/3384419.3430430]. In the application of a robotic vacuum cleaner, light intensity values are considered a side-channel concern as those values are not required for the operation of a vacuum cleaner.

Despite integration limitations of sampling intensity values on a vacuum cleaner (i.e. accounting for the continuous rotation of the LIDAR sensor and noise floor as a result of the vacuum engine), a classification accuracy of 91% was achieved when extracting sensitive data such as digits of a credit card

![center](https://www.zdnet.com/a/img/resize/cdaf0753c4b991623b9413270b0d9ceff8a6e730/2020/11/19/2f9e0e96-c3e5-4cdc-b9bb-24022efd5b3b/lidarphone.png?fit=bounds&auto=webp)

---

##### Xiaomi IoT Ecosystem

@{DennisGiese-2019} performed a security assessment over a broad range of Xiaomi's IoT products to examine how secure their ecosystem was. Through a series of UART commands and keystroke injections as well as hardware fault injection techniques, shell access into various Xiaomi-partnered robot vacuum cleaners (running Linux or some variant of Android) was obtained. In his research it was concluded that due to the enormous size of Xiaomi's ecosystem, it was difficult to enforce global security policies between the different vendor-provided plugins due to deprecated functions and APIs still being used by legacy devices. It was also concluded that Xiaomi does indeed treat their security concerns seriously, as they have had been quick to respond to security incidents and vulnerability reports.

From this research, a [vacuum cleaner cloud emulator](https://github.com/dgiese/dustcloud) was built, allowing complete offline functionality of robot vacuum cleaners without requiring internet connectivity. This research also paved the way for other third party software to be developed, such as [Valeduto](https://github.com/Hypfer/Valetudo) - which provides a standalone web interface to the vacuum cleaner's functions


<!-- As a result, many attempts (regardless of success) aimed to completely replace original code with homebrew functionality, such that the original code was never analysed. -->

<!-- pandoc literature-review.md -t gfm --citeproc --bibliography bib.bib --csl ref_format.cls -s -o temp.md -->