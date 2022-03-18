+++
categories = []
date = 2022-03-18T14:04:37Z
description = ""
series = []
tags = []
title = "Filesystem Exploration"
toc = true

+++
> [https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/](https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/")
>
> [https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/](https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/")

> \[    0.000000\] Kernel command line: rootwait boot_fs=a console=ttyS0,115200 root=/dev/mmcblk0p8 rootfstype=ext4 loglevel=7 partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1 boot_reason=0x0 location=en boot_ver=2011.09-rc1-dirty

boot-res@mmcblk0p2

env@mmcblk0p5

app@mmcblk0p6            (default)    (read only)

recovery@mmcblk0p7

system_a@mmcblk0p8

system_b@mmcblk0p9

Download@mmcblk0p10       (updbuf)

reserve@mmcblk0p11      (reserve)

UDISK@mmcblk0p1         (data)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Label | Device | Boot | Start | End | Blocks | Id | System |
| UDISK | /dev/mmcblk0p1 | * | 4513792 | 7782399 | 1634304 | b | W95 FAT32 |
| boot-res | /dev/mmcblk0p2 | 73728 | 90111 | 8192 | 6 | FAT16 |
|  | /dev/mmcblk0p3 | 1 | 4423680 | 2211840 | 5 | Extended |
| env | /dev/mmcblk0p5 | 90112 | 122879 | 16384 | 83 | Linux |
| app | /dev/mmcblk0p6 | 122880 | 253951 | 65536 | 83 | Linux |
| recovery | /dev/mmcblk0p7 | 253952 | 1302527 | 524288 | 83 | Linux |
| system_a | /dev/mmcblk0p8 | 1302528 | 2351103 | 524288 | 83 | Linux |
| system_b | /dev/mmcblk0p9 | 2351104 | 3399679 | 524288 | 83 | Linux |
| Download | /dev/mmcblk0p10 | 3399680 | 4481023 | 540672 | 83 | Linux |
| reserve | /dev/mmcblk0p11 | 4481024 | 4513791 | 16384 | 83 | Linux |

***

Refer to Commentree JSON