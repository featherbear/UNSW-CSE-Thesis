---
date: ""
description: ""
title: "Background"
toc: false
weight: 2
---

## Widespread availability of IoT brands

![](/uploads/20211103-screely-1635938406254.png)

<div class="marquee-parent"><img src="/uploads/20211115-lightbulbs-marquee.png" class="marquee-child" ></div>


<!-- IoT devices have been quite widespread. There are so many products that are affordable, and globally and commercially available.
 -->

The consumer market has experienced an abundance of IoT devices, largely attributed to the presence of IoT manufacturers who offer white-label partnerships with resellers to provide "custom" products. Through these partnerships, vendors buy into the IoT manufacturer's ecosystem - namely being the product itself, the companion smartphone application, and the cloud infrastructure supporting backend communications - all without requiring vendors to posses any knowledge or understanding of how to design, develop nor manufacture the IoT products that they sell.

There lies concern regarding the privacy and ownership of user data that is transmitted, as the vendors themselves are often not in control of what information is transmitted, nor of how that information is used. This concern is potentially serious, as vulnerabilities within an IoT infrastructure would imply that devices and data from customers of vendor products would too be vulnerable.

Furthermore, the lifetime of a vendor business is not guaranteed - closure of a business might make those devices no longer work.

---

<!-- 
- Reverse engineering of cloud communications protocols / API
  - e.g. MiIO protocol [(link)](https://github.com/OpenMiHome/mihome-binary-protocol)
- Decoupling of devices from the necessity of internet / IoT cloud
  - <label>HomeAssistant</label> - Home Automation [(link)](https://www.home-assistant.io/)
  - <label>OpenHAB</label> - Home Automation [(link)](https://www.openhab.org/)
  - <label>Valetudo</label> - Cloud-less vacuum cleaner control interface [(link)](https://github.com/Hypfer/Valetudo)
  - <label>DustCloud</label> - Xiaomi Cloud Emulation [(link)](https://github.com/dgiese/dustcloud)
  - <label>MiCloudFaker</label> - Xiaomi Cloud Emulation [(link)](https://github.com/unrelentingtech/micloudfaker)
  - <label>tuya-convert</label> - Flash Tuya devices to custom firmware [(link)](https://github.com/ct-Open-Source/tuya-convert) -->


# About The Company

Roborock is a Chinese company founded in Beijing that develops robotic cleaning appliances for households. Partnering with Xiaomi ever since a short period after the opening of their business in 2014, Roborock has released a line of variously priced smart robotic vacuum cleaners, with their first iteration the "Mi Home Robotic vacuum Cleaner" being released in September 2016. They have since released eleven other robotic vacuum cleaner models, each model offering new and/or improved features - such as the addition of a mop functionality and improved spatial object detection via LIDAR technologies.

<img src="/uploads/20211003-60410b5d26ef2b00045692ec.png" class="plain small" />

In June 2019, Roborock released their flagship Roborock S6 vacuum cleaner (the focus of this thesis), which boasted in reduced operating noise volumes, and better overall cleaning performances 


![](/uploads/20211103-s6-pure-banner.webp)


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


---




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