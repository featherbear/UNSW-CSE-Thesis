+++
categories = []
date = 2021-10-29T16:35:19Z
description = ""
series = []
tags = []
title = "Bootloader / UBoot"
toc = true

+++

* TPA16 is the GND
* TPA15 is the device's RX pin - Connect this to your UART client's TX
* TPA8 is the device's TX pin - Connect this to your UART client's RX

---

## env print

```
sunxi#env print
audio_en=1
audio_file=poweron.wav
audio_vol=100
boot_fs=a
boot_normal=ext4load mmc ${fat_num} 40008000 /boot/zImage;bootz 40008000
boot_reason=0x0
boot_ver=2011.09-rc1-dirty
bootcmd=run setargs_mmc boot_normal
bootdelay=3
console=ttyS0,115200
fat_num=2:8
filesize=20
init=/init
location=en
loglevel=7
mmc_root=/dev/mmcblk0p8
partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1
rr_recovery_flag=normal
setargs_mmc=setenv bootargs rootwait boot_fs=${boot_fs} console=${console} root=${mmc_root} rootfstype=ext4 loglevel=${loglevel} partitions=${partitions} boot_reason=${boot_reason} location=${location} boot_ver=${boot_ver}
stderr=serial
stdin=serial
stdout=serial

Environment size: 828/131068 bytes
```

---

## version

```
sunxi#version

U-Boot 2011.09-rc1-dirty (Mar 25 2020 - 20:45:43) Allwinner Technology 
arm-linux-gnueabi-gcc (Ubuntu/Linaro 4.7.3-12ubuntu1) 4.7.3
GNU ld (GNU Binutils for Ubuntu) 2.24
```

---

## mmcinfo

```
sunxi#mmcinfo

Device: SUNXI SD/MMC
Manufacturer ID: 11
OEM: 100
Name: 004GA 
Tran Speed: 25000000
Rd Block Len: 512
MMC version 5.0
High Capacity: Yes
Capacity: 3.7 GiB
Bus Width: 4-bit
```

---

## mmc part

```
sunxi#mmc part

Partition Map for MMC device 2  --   Partition Type: DOS

Partition     Start Sector     Num Sectors     Type
    1              4513792         3268608       b
    2                73728           16384       6
    3                    1         4423680       5 Extd
    5                90112           32768      83
    6               122880          131072      83
    7               253952         1048576      83
    8              1302528         1048576      83
    9              2351104         1048576      83
   10              3399680         1081344      83
   11              4481024           32768      83
```

---

## ext4ls mmc 2:1

```
sunxi#ext4ls mmc 2:1
<DIR>       4096 .
<DIR>       4096 ..
<DIR>      16384 lost+found
<DIR>       4096 rockrobo
<DIR>       4096 wlan
<DIR>       4096 miio
<DIR>       4096 rriot
```

---

## ext4ls mmc 2:1

```
<DIR>       4096 .
<DIR>       4096 ..
<DIR>       4096 lost+found
          344813 font24.sft
          357443 font32.sft
            8838 test_config.fex
            6776 test_config.bin
```

---

## ext4ls mmc 2:6

```
<DIR>       1024 .
<DIR>       1024 ..
           30772 librrafm.so
              98 device.conf
              16 vinda
<DIR>       1024 roborock
             256 roborock.conf.sign
             185 roborock.conf
              10 adb.conf
```

---

## ext4ls mmc 2:7

```
<DIR>       1024 .
<DIR>       1024 ..
<DIR>      12288 lost+found
<DIR>       5120 sbin
<DIR>       1024 usr
<DIR>       1024 sys
<DIR>       1024 opt
<DIR>       1024 run
<DIR>       1024 tmp
<DIR>       1024 media
<DIR>       1024 home
<DIR>       1024 lib
<DIR>       1024 mnt
<DIR>       3072 bin
<DIR>       1024 srv
<DIR>       1024 root
<DIR>       5120 etc
<DIR>       1024 proc
<DIR>       3072 dev
<DIR>       1024 var
<DIR>       1024 boot
```

---


## ext4ls mmc 2:8

```
<DIR>       1024 .
<DIR>       1024 ..
<DIR>      12288 lost+found
<DIR>       5120 sbin
<DIR>       1024 usr
<DIR>       1024 sys
<DIR>       1024 opt
<DIR>       1024 run
<DIR>       1024 tmp
<DIR>       1024 media
<DIR>       1024 home
<DIR>       1024 lib
<DIR>       1024 mnt
<DIR>       3072 bin
<DIR>       1024 srv
<DIR>       1024 root
<DIR>       5120 etc
<DIR>       1024 proc
<DIR>       3072 dev
<DIR>       1024 var
<DIR>       1024 boot
```

---

## ext4load

```
ext4load - load binary file from a Ext4 filesystem

Usage:
ext4load <interface> <dev[:part]> [addr] [filename] [bytes]
          - load binary file 'filename' from 'dev' on 'interface'
                 to address 'addr' from ext4 filesystem
```

---

## mmc dev

```
sunxi#mmc dev
mmc2(part 0) is current device
```

---
