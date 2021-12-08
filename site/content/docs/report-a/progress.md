---
date: ""
description: ""
title: "5 | Preliminary Results"
toc: true
weight: 6
---

# Preliminary Results

### Network Setup

![](/uploads/20211027-20211026_210111-highlighted.jpg)

---

### \[Initial\] Packet Capture

![](/uploads/20211025-snipaste_2021-10-26_02-04-58.jpg)

- No LAN-LAN packets???
- <label>incomplete test</label> - misconfigured packet capture setup

---

### Teardown

![](/uploads/20211029-20211029_233611.jpg)

---

### Initial Breakdown and Pinout (where needed)

![](/uploads/20211029-20211030_021531.jpg)

{{% note %}}
STM32, Allwinner R16 (Quad-core ARMv7 processor), USB Port (custom ADB?)
{{% /note %}}

---

### Identification of the UART pins

![](/uploads/20211029-20211030_021507-uart-highlighted.jpg)

---

### Serial Access

- Serial (baud=115200) gives us a shell!

<img src="/uploads/20211029-20211030_025959.jpg" width="33.5%" />
<img src="/uploads/20211103-serial-comms.gif" width="60%" />

<!-- Haahah widths... -->

> Need a root password though...

---

### U-Boot Bootloader

![](/uploads/20211103-Snipaste_2021-11-03_03-47-40.jpg)

- Able to enter the bootloader shell if `s` is pressed during init

![](/uploads/20211029-bootloader-shell.jpg)

---

### Root!

![](/uploads/20211029-snipaste_2021-10-30_03-24-41.jpg)

![](/uploads/20211029-snipaste_2021-10-30_03-26-11.jpg)


# Next Steps

- Dump the firmware and begin RE / forensics
- Redo (and further investigate) live system analysis
  - i.e. Properly capture _all_ network traffic
