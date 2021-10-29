+++
categories = []
date = 2021-10-25T15:09:51Z
description = ""
series = []
tags = []
title = "Roborock S6 Teardown"
toc = true

+++
# Charging Station

> Model Number: CDZ08RR / CDZ08RR

![](/uploads/20211025-20211025_175609.jpg)

![](/uploads/20211025-20211025_175620.jpg)

![](/uploads/20211025-20211025_180532.jpg)

![](/uploads/20211025-20211025_180406.jpg)

## Circuit

![](/uploads/20211025-20211025_175245.jpg)

![](/uploads/20211025-20211025_175214.jpg) ![](/uploads/20211025-20211025_175344.jpg)

![](/uploads/20211025-20211025_175307.jpg)  
Four IR sensors

![](/uploads/20211025-20211025_175320.jpg)

## Infrared

![](/uploads/20211025-20211025_180001.jpg)  ![](/uploads/20211025-20211025_180131.jpg)

![](/uploads/20211025-20211025_180118.jpg)

> Helps the Roborock to locate the base station

* Is there a specific IR code it broadcasts?
  * Not really security though

# Vacuum Cleaner

![](/uploads/20211025-20211026_005121.jpg)

Status LED

## External Components

### Battery

> BRR-2P4S-5200D

14\.43V Li-ion; 5200 mAH; 77.88Wh

![](/uploads/20211029-20211029_220613.jpg) ![](/uploads/20211029-20211029_220601.jpg) ![](/uploads/20211029-20211029_220555.jpg)

## Wheels

![](/uploads/20211029-20211030_010623.jpg) ![](/uploads/20211029-20211030_010634.jpg)

## LIDAR

> LDS02RR

Related: [https://www.robotis.us/360-laser-distance-sensor-lds-01-lidar/](https://www.robotis.us/360-laser-distance-sensor-lds-01-lidar/ "https://www.robotis.us/360-laser-distance-sensor-lds-01-lidar/")

![](/uploads/20211029-20211030_010214.jpg)  ![](/uploads/20211029-20211030_010201.jpg)

## Circuitry

### Processor

> Allwinner R16

Datasheet: [https://linux-sunxi.org/images/c/ca/Allwinner_R16_User_Manual_V1.2.pdf](https://linux-sunxi.org/images/c/ca/Allwinner_R16_User_Manual_V1.2.pdf "https://linux-sunxi.org/images/c/ca/Allwinner_R16_User_Manual_V1.2.pdf")

* ARMv7-A
* Cortex A7
* 4 Cores
* 512KB L2 Cache
* Mali-400 MP2 GPU
* (1080p@60fps decode)
* (1080p@60fps encode)
* BGA282

Fun Fact: Same chip used in the NES Classic and SNES Classic

![](/uploads/20211029-20211029_232800.jpg)

### Microcontroller

> STM32F103VC

Datasheet: [https://www.st.com/resource/en/datasheet/stm32f103vc.pdf](https://www.st.com/resource/en/datasheet/stm32f103vc.pdf "https://www.st.com/resource/en/datasheet/stm32f103vc.pdf")

![](/uploads/20211029-20211029_232748.jpg)

### WiFi Chip

> Realtek RTL8189ETV

_"802.11bgn SDIO Network Interface Controller"_

![](/uploads/20211029-20211029_233311.jpg)  ![](/uploads/20211029-20211029_232513.jpg)

### Button Panel

![](/uploads/20211029-20211030_010804.jpg)  ![](/uploads/20211029-20211030_010821.jpg)

![](/uploads/20211029-20211030_011017.jpg)  ![](/uploads/20211029-20211030_011036.jpg)

### Pinout (?)

![](/uploads/20211029-20211030_002444.jpg)

> From top-down view; left to right

* Header 1
* Header 2 - 14
* Header 3 - 71
* Header 4 - 72
* Header 5 - 89
* Header 6
* Header 7 - GND   EG. 74
* Header 8 - 24? 99? 45? 46? 35?     GND... 
* Header 9 - PWR BTN
* Header 10 - 15 - TP11 (HOME) 
* Header 11 - 69
* Header 12 -