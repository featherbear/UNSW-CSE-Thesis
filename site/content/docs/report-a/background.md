+++
date = ""
description = ""
title = "Background"
toc = false
weight = 2

+++


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

<style>
.marquee-parent {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  overflow-x: hidden;
  border-radius: 10px;
}

.marquee-child {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  max-width: unset !important;
  max-height: 100% !important;
  animation: marquee 360s linear infinite;
}

.marquee-child:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-87.5%); }
}

</style>

<br />
<div class="marquee-parent"><img src="/uploads/20211115-lightbulbs-marquee.png" class="marquee-child" ></div>

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
- Privacy concerns - Who, What, Where, When, Why?
- Infrastructure outage = really _really_ big outage..

<img src="/uploads/20211115-spof.gif" width="30%" alt="center" />

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
