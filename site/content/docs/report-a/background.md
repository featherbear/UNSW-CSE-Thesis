---
date: ""
description: ""
title: "Background"
toc: false
weight: 2
---

<!-- ## Widespread availability of IoT brands -->

<div class="marquee-parent"><img src="/uploads/20211115-lightbulbs-marquee.png" class="marquee-child" ></div>


The consumer market has experienced an abundance of IoT devices, largely attributed to the presence of IoT manufacturers who offer white-label partnerships with resellers to provide "custom" products. Through these partnerships, vendors buy into the IoT manufacturer's ecosystem - namely being the product itself, the companion smartphone application, and the cloud infrastructure supporting backend communications - all without requiring vendors to posses any knowledge or understanding of how to design, develop nor manufacture the IoT products that they sell.

There lies concern regarding the privacy and ownership of user data that is transmitted, as the vendors themselves are often not in control of what information is transmitted, nor of how that information is used. This concern is potentially serious, as vulnerabilities within an IoT infrastructure would imply that devices and data from customers of vendor products would too be vulnerable. Furthermore, the lifetime of a vendor business is not guaranteed. With the constant opening and closing of IoT vendors, the closure of a business that one might have bought an IoT product from might result in the eventual in-operability of the said device.

In the event that an IoT infrastructure suffers downtime or service instability, all white-labelled products too will inherently be affected. Great trust must be placed in the infrastructure's availability and reliability, however in conjunction with aforementioned privacy and security concerns, many concerned users have turned to internet-less and self-hosted automation systems such as [HomeAssistant](https://www.home-assistant.io/) and [OpenHAB](https://www.openhab.org/). As evident in later reviewed works (See section 3), concerns for privacy and security has been a driving force for developers and hackers to research and develop software, as to replace the out-of-the-box internet-dependent software, effectively decoupling devices from vendor services.

# About The Company

<img src="/uploads/20211003-60410b5d26ef2b00045692ec.png" class="plain small" />

Roborock is a Chinese company founded in Beijing that develops robotic cleaning appliances for households. Partnering with Xiaomi ever since a short period after the opening of their business in 2014, Roborock has released a line of variously priced smart robotic vacuum cleaners, with their first iteration the "Mi Home Robotic vacuum Cleaner" being released in September 2016. They have since released eleven other robotic vacuum cleaner models, each model offering new and/or improved features - such as the addition of a mop functionality and improved spatial object detection via LIDAR technologies.


![](/uploads/20211103-s6-pure-banner.webp)

In June 2019, Roborock released their flagship Roborock S6 vacuum cleaner (the focus of this thesis), which boasted in reduced operating noise volumes, and better overall cleaning performances. The Roborock S6 is powered by an Allwinner R16 SoC (ARM architecture) alongside an STM32 for auxiliary motor and sensor I/O. Depending on the region and firmware, the robot vacuum cleaner is powered by either Xiaomi Cloud or Tuya Smart cloud infrastructures, both which are market leaders in the consumer IoT industry. Whilst superseded by newer revisions such as the S6 MaxV and the S7, the S6 still remains largely popular and is still actively maintained by Roborock.

#### Cloud Capability

<label>Roborock (Xiaomi Cloud)</label>
![](/uploads/20211103%20-%20Snipaste_2021-11-03_21-47-05.jpg)

<label>Tuya Smart</label>
![](/uploads/20211103%20-%20Snipaste_2021-11-03_21-48-02.jpg)

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


## References
