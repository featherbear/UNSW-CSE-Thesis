---
date: ""
description: ""
title: "2. Background"
toc: false
weight: 3
---

# Background

## The widespread availability of IoT

<div class="marquee-parent"><img src="https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211115-lightbulbs-marquee.png" class="marquee-child" ></div>

The consumer market has experienced a large influx of IoT devices, largely attributed to the presence of IoT manufacturers who offer white-label partnerships with resellers to provide "custom" products. Through these partnerships, vendors buy into the IoT manufacturer's ecosystem - namely being the product itself, the companion smartphone application, and the cloud infrastructure supporting backend communications - all without requiring vendors to posses any knowledge or understanding of how to design, develop nor manufacture the IoT products that they sell.

There are concerns regarding the privacy and ownership of user data that is transmitted, as vendors are often not in control of what information is transmitted, nor of how that information is used. This concern is potentially serious, as vulnerabilities within an IoT infrastructure would imply that devices and data from customers of vendor products would too be vulnerable. Furthermore, the lifetime of a vendor business is not guaranteed. With the constant opening and closing of IoT vendors, the closure of the business from which an IoT product was purchased from might result in the eventual in-operability of the said device.

In the event that an IoT infrastructure suffers downtime or service instability, all white-labelled products too will also be inherently affected. Great trust must be placed in the infrastructure's availability and reliability. However in conjunction with aforementioned privacy and security concerns, many concerned users have turned to internet-less and self-hosted automation systems such as [HomeAssistant](https://www.home-assistant.io/) and [OpenHAB](https://www.openhab.org/). As evident in later reviewed works (See Chapter 3), concerns for privacy and security has been a driving force for developers and hackers to research and develop software, to replace the out-of-the-box internet-dependent software, effectively decoupling devices from vendor services.

## About The Company

![](https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211003-60410b5d26ef2b00045692ec.png)

Roborock is a Chinese company founded in Beijing that develops robotic cleaning appliances for households. In 2014, partnering with Xiaomi shortly after the opening of their business, Roborock releasedd a line of both affordable and premium smart robotic vacuum cleaners, with their first iteration the "Mi Home Robotic vacuum Cleaner" being released in September 2016. They have since released eleven other robotic vacuum cleaner models, each model offering new and improved features - such as the addition of a mop functionality and improved spatial object detection via LIDAR technologies.

In June 2019, Roborock released their flagship Roborock S6 vacuum cleaner (the focus of this thesis), which boasted reduced operating noise levels, and better overall cleaning performances. The Roborock S6 is powered by an Allwinner R16 SoC (ARM architecture) alongside an STM32 for auxiliary motor and sensor I/O. Depending on the region and firmware, the robot vacuum cleaner is powered by either Xiaomi Cloud or Tuya Smart cloud infrastructures, both which are market leaders in the consumer IoT industry. Whilst superseded by newer revisions such as the S6 MaxV and the S7, the S6 still remains largely popular and is still actively maintained by Roborock.

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
