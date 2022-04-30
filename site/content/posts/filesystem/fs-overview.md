+++
categories = ["Filesystem"]
date = 2022-05-01T04:31:56+10:00
description = ""
series = []
tags = []
title = "Filesystem Overview"
toc = true

+++

* [eMMC](../20211029-emmc-layout)
* [`fdisk -l`](../20220302-fdisk-dump)
* [`lsblk`](../20220406-lsblk-dump)

---

* UDISK - mmcblk0p1 - /mnt/data
* boot-res - mmcblk0p2
* env - mmcblk0p5
* app - mmcblk0p6 @ /mnt/default (RO)
* recovery - mmcblk0p7
* system_a - mmcblk0p8
* system_b - mmcblk0p9
* Download - mmcblk0p10 @ /mnt/updbuf
* reserve - mmcblk0p11 @ /mnt/reserve

---

> Also see https://github.com/dgiese/dustcloud/wiki/Partition-Information