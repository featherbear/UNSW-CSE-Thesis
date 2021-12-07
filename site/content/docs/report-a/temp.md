---
bibliography: bib.bib
csl: ref_format.cls
title: Literature Review
toc: false
weight: 3
---

##### IoT \| 2018 - Michael Steigerwald (VTRUST)

In 2018 the VTRUST ((VTRUST) 2018) security research group analysed a
(now discontinued) line of white-labelled IoT product revisions based
from the IoT manufacturer Tuya. Despite supposed claims of
‘military-grade security’, basic packet logging of network activity
concluded that “the analysis of the ‘smart’ devices using this basic
platform is generally frightening”, with “serious \[…\] shortcomings”.
It was revealed that amongst various **PII**, encryption keys and the
device’s serial number (used to target a specific device through remote
commands) were insecurely transmitted over the network - allowing a
malicious user on the same wireless network to eavesdrop on the
communication. Furthermore, during the initial setup and pairing of the
IoT device, wireless credentials were also insecurely transmitted in
plain text, allowing wireless network credentials to also be observed.

VTRUST commented on the dangers of vendors selling white-label products,
where anyone could become a so-called ‘IoT company’ regardless of
“having in-depth technical knowledge of IoT or IT security”. As a result
of the hands-free approach to security and privacy for both direct and
indirect customers of the IoT platform, concern is raised regarding the
ease of distributing maliciously modified devices; where firmware could
be tampered at any stage during the supply chain. It is of significance
to recognise that the majority of custom firmware releases or so-called
“hardware hacks” have originated from the desire to decouple hardware
from online and official cloud services. These attempts effectually
disconnect devices from the internet, and limit their connectivity to a
local server where communications are transparent and minimal.

As a result of many Tuya-powered devices using the widely popular
<a style="text-decoration: underline dotted" href="https://www.espressif.com/en/products/socs/esp8266">Espressif
ESP8266 SoC</a>, VTRUST was able to exploit discovered vulnerabilities
to perform over-the-air upgrades of custom firmware such as
[ESPhome](https://esphome.io/) and
[Tasmota](https://tasmota.github.io/docs/). Their automated flashing
tool PoC `tuya-convert` allowed consumers to easily integrate these
devices with local home automation software such as
[HomeAssistant](https://www.home-assistant.io/). As a result of
VTRUSTS’s findings, the overall security posture of modern Tuya-powered
devices has since improved[^1], with implementations of local flash
memory encryption and firmware signing measures during over-the-air
firmware upgrades.

<!-- As a result, many attempts (regardless of success) aimed to completely replace original code with homebrew functionality, such that the original code was never analysed. -->

Methods of ‘rooting’ IoT devices has been widely addressed, often out of
the necessity to gain shell access to the device prior to any further
research or development. To facilitate offline firmware upgrades for
devices that might not have outbound internet connectivity, devices may
execute scripts or boot from removable flash memory such as SD Cards.
Kotlyar (2017) demonstrated the ability for the inexpensive Xiaomi
Dafang WiFi Camera to boot into a custom `u-boot` bootloader flashed
onto a microSD card. Through UART headers located on the device’s
circuit board, the boot environment was able to be modified to start a
shell (`/bin/sh`) instead of the original entry-point script,
effectively rooting the device. This invited Kotlyar to dump the
firmware and later produce a custom firmware release that did not rely
on the vendor’s cloud infrastructure.

<img src="/uploads/20211115-boot-sequence.png" height="300px" alt="center" />

For devices that do not automatically boot into removable media, methods
have been discovered to force certain SoC’s to enter a recovery or
fallback mode.

On Allwinner-based SoCs, a programming mode known as “FEL” can be
entered by pulling a certain pin LOW during boot[^2], which allowed
device manufacturers to perform initial image flashing and bootloader
configurations. It can be noted that FEL mode can also be entered if the
SoC failed to successfully start the bootloader. Giese (2019) identified
this fact and exploited the physical layout of the Allwinner R16 BGA
package, where the data pins connected to the MMC / eMMC chips were on
the physical perimeter of the SoC. By sliding a piece of aluminium foil
(roughly 0.02mm thick) between the circuit board and the solder plane of
the SoC (0.3mm), the data pins could be momentarily shorted long enough
for the bootloader read operation to corrupt and fail, hence booting
into FEL mode. This was a favourable result as compared to pulling the
FEL pin low during boot - as access to the FEL pin would require the
desoldering and removal of the SoC, due to the pin being physically
inaccessible when soldered without a test pad.

##### BGA shorting to gain access to FEL

<!-- https://docs.neutis.io/img/hardware-integration/boot-sequence.png -->

-   On the Allwinner R16 (BGA package) FEL pin located on ball location
    `L14`
    -   Not located on package edge the chip so <label>desoldering
        required</label>
-   SoC has a solder plane height of around 0.3mm
-   Too shallow for a wire, but tall enough for aluminium foil…

<label>Aluminium Foil</label>

<img src="/uploads/20211115-Snipaste_2021-11-15_19-45-37-dgiese.jpg" height="300px" alt="center" />

-   Thickness: \~0.02mm (… 0.02mm \<\< 0.3mm)
-   Conductive: Yep!
-   $$$

> On later versions (post 2020), U-Boot shell access was patched, so
> shell access via UART was mitigated

Pin TPA17 on the Roborock S7 circuit board was
[discovered](https://dontvacuum.me/talks/DEFCON29/DEFCON29-vacuum-robots.pdf)
to connect to ball location L14 on the SoC.

Therefore by pulling TPA17 / L14 / LRADC0 LOW (i.e connect to GND), FEL
mode can be entered

<!-- RootFS is now a read-only SquashFS -->

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-DennisGiese-2019" class="csl-entry">

Giese, D., 2019. Security analysis of the xiaomi IoT ecosystem.
Available at:
<https://dontvacuum.me/thesis/Security_Analysis_of_the_Xiaomi_IoT_Ecosystem.pdf>.

</div>

<div id="ref-EliasKotlyar-2017" class="csl-entry">

Kotlyar, E., 2017. Xiaomi DaFang hacks. Available at:
<https://github.com/EliasKotlyar/Xiaomi-Dafang-Hacks>.

</div>

<div id="ref-MichaelSteigerwaldVTRUST-2018" class="csl-entry">

(VTRUST), M.S., 2018. Smart home - smart hack - wie der weg ins digitale
zuhause zum spaziergang wird. Available at:
<https://media.ccc.de/v/35c3-9723-smart_home_-_smart_hack>.

</div>

</div>

[^1]: https://www.heise.de/newsticker/meldung/Smart-Home-Hack-Tuya-veroeffentlicht-Sicherheitsupdate-4292028.html

[^2]: Generally triggered by pulling
    <a href="https://linux-sunxi.org/images/b/b3/R16_Datasheet_V1.4_(1).pdf" style="text-decoration: underline dotted">FEL
    pin</a> (`LRADC0`) LOW during boot
