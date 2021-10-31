+++
categories = ["Thesis A"]
date = 2021-11-01T02:59:50Z
description = ""
series = []
tags = []
title = "Seminar A Preparation"
toc = true

+++
## Criterion

* Make a 30-minute presentation about your Thesis A topic and the plan
* The talk presents an extensive, logically organised review, analysis and discussion of background material.
* Demonstrates clear mastery of the material in the topic area already.
* A clearly articulated definition of the problem and/or hypothesis (statement of purpose).
* The plan has a feasible, scope and well-defined expected outcomes and thoughtfully crafted engineering/research methods.
* Excellent structure and well-designed materials that can best convey the essential message.
* Captures attention.
* An interactive delivery tailored appropriately to the audience.
* Uses presentation aides - effortlessly integrated with the delivery.

***

## Introduction

Who, me? 

Andrew Wong

4th Year Computer Engineering student @ UNSW

<script>document.write(atob('YW5kcmV3Lmoud29uZ0BzdHVkZW50LnVuc3cuZWR1LmF1'))</script>

## About Roborock

> roborock x xiaomi

## Background Material

Dennis Giese

* Dustcloud
* Valetudo
* MiIO
* HomeAssistant

## Hypothesis / Problem

> How have manufacturers of IoT-enabled / smart home devices addressed the increasing concerns of digital privacy and integrity

How have manufacturers attempted to mitigate the potential for IoT-enabled / smart home devices to be modified with malicious intent?

***

## Plan

* Research
* Get the Roborock S6 vacuum cleaner
* Acquisition and capture of network activity
* Find a way in (it runs Linux!)
* Image the system for offline analysis
* Reverse engineering and binary analysis of firmware and software
  * Look binaries for security vulnerabilities and fortifications

### Stretch Goals

* See what the sensors see
* Circuit board decomposition
* Reverse engineer the USB ADB port

***

## Project Timeline

...

***

### Contingency Plan

* If we can't get into the device, then switch focus to
  * Option 1 - Communications Protocol (network traffic)
    * i.e. Inspect the data and its nature
      * Frequency, Time, Destination, Content if possible
  * Option 2 - Xiaomi Home smartphone application (used to communicate with the device)
    * i.e. Decompile the Android APK file and look for security vulnerabilities and fortifications

***

## Hardware Hacking: Tools (and Skills) of the Trade

* Understanding ARM
  * ARMv7-A instruction set architecture
    * (The Roborock S6 uses an Allwinner R16 chip)
  * Processor Modes
  * Protection Rings
* JTAG / UART / Serial communications
* Binary Analysis
  * IDA / Ghidra / Binary Ninja / etc...
* Linux forensics
  * Processes
  * File / Directories
  * Users
  * Logs
* Network Monitoring
  * Isolated / VLAN Network
  * Access Point
  * Port Mirroring
  * SSL Decryption via MITM (?)

***

Things to look out for 

* vulnerable binaries - priv esc?
* How easy is it to maliciously 'bug' a vacuum cleaner (IoT reseller concerns)
* ADB port - RE

***

## Rolling Research

INSERT SCREENSHOT OF THESIS RESEARCH PAGE

***

## Current Progress

* Researched about network capturing
  * Isolated Networks / VLAN
  * Packet Sniffer (router - WAN)
  * Port Mirroring (switch - LAN)
  * Packet analysis
  * Have set up a wireless network
* Have acquired the vacuum
* Opened up the charging unit (got some infrared LEDs for homing)
* Opened up the vacuum cleaner
  * The easily accessible micro USB port on the top of the device provides some ADB functionality - however it is a stripped copy.
    * Existing implementations of custom firmware/software had simply replaced this file with a full version.
    * But can the stripped version do?
    * Why is it there?
  * Identified IC and primary components on the logic board
    * STM32...... - ACU (I/O)
    * Allwinner R16 - MCU (Quad-core ARMv7a processor)
  * Located the UART pins
    * hahahahahahhahaikilledausbcontrolleronmydesktopcomputerriphahahahaa
    * Able to receive boot messages
    * Also able to send data
  * Basic enumeration of directories over the ext4 partitions on the eMMC flash
  * `vinda` file contains the root password!
  * Decrypted the root password (XOR `0x37`)
  * root@... # echo got root!

***