+++
categories = []
date = 2022-07-11T14:05:05Z
description = ""
series = []
tags = []
title = "Upgraded - Versioning and Fingerprinting"
toc = true

+++
bash-4.3# cat rr-info
A.01.0014-V2902

    bash-4.3# cat OS_VERSION 
    ro.product.device=TANOS_V2902-2022042802REL_M3.5.8_T4.1.4-2_RELEASE_20220428-202811
    ro.build.display.id=TANOS_MP_R16_RELEASE_20220428-202811
    ro.sys.cputype=R16.STM32.A3.G1
    ro.build.version.release=V2902
    ro.build.date.utc=1651148891
    
    uname -a
    Linux rockrobo 3.4.39 #1 SMP PREEMPT Thu Apr 28 20:27:25 CST 2022 armv7l GNU/Linux
    
    ::sysinit:/etc/init/rcS S start
    ::shutdown:/etc/init/rcS K stop
    ::respawn:WatchDoge $RR_ROOT/watchdog >> $RR_UDATA/rockrobo/rrlog/watchdog.log 2>&1
    ::respawn:/usr/bin/adbd
    ::respawn:/usr/sbin/dropbear -F
    ::respawn:/sbin/rr_login -d /dev/ttyS0 -b 115200 -p vt100
    
    $ /usr/bin/rr_try_mount
    Read Conf Dir:/tmp, blk_device:tmpfs, Type:tmpfs, opt:size=30m
            ignore Dir:/tmp, blk_device:tmpfs, because not '/dev/mmcblk0p*'
    
    
    Read Conf Dir:/run/shm, blk_device:tmpfs, Type:tmpfs, opt:size=100m
            ignore Dir:/run/shm, blk_device:tmpfs, because not '/dev/mmcblk0p*'
    
    
    Read Conf Dir:/mnt/data/, blk_device:/dev/mmcblk0p1, Type:ext4, opt:defaults
            Check /mnt/data/
            Check /dev/mmcblk0p1
            Info:/dev/mmcblk0p1 File type block device....OK
    Running /sbin/e2fsck on /dev/mmcblk0p1
    sh: /sbin/e2fsck: not found
    Result----Success!
    
    
    Read Conf Dir:/mnt/default/, blk_device:/dev/mmcblk0p6, Type:ext4, opt:ro
            Check /mnt/default/
            Check /dev/mmcblk0p6
            Info:/dev/mmcblk0p6 File type block device....OK
    Running /sbin/e2fsck on /dev/mmcblk0p6
    sh: /sbin/e2fsck: not found
    Result----Success!
    
    
    Read Conf Dir:/mnt/updbuf/, blk_device:/dev/mmcblk0p10, Type:ext4, opt:defaults
            Check /mnt/updbuf/
            Check /dev/mmcblk0p10
            Info:/dev/mmcblk0p10 File type block device....OK
    Running /sbin/e2fsck on /dev/mmcblk0p10
    sh: /sbin/e2fsck: not found
    Result----Success!
    
    
    Read Conf Dir:/mnt/reserve/, blk_device:/dev/mmcblk0p11, Type:ext4, opt:defaults
            Check /mnt/reserve/
            Check /dev/mmcblk0p11
            Info:/dev/mmcblk0p11 File type block device....OK
    Running /sbin/e2fsck on /dev/mmcblk0p11
    sh: /sbin/e2fsck: not found

***

# Autorun / Startup

SSH (dropbear) - NO

# Secrets

## /etc/shadow

`root:$6$mptOwWOW$DpR0O/CdKUfpapA3rEGl/4m6WZOkRYC5LSaCJSYKj9iHuZp2PUzfolgrGVeHW5tMtRSYlBWSlonusy67027JF/::0:99999:7:::`

***

# Software

> Binaries in this version (v02.29.02) match base version (v01.15.58)
>
>   
> ✅ `/sbin`
>
> ✅ `/usr/sbin`

* `/usr/sbin/chpasswd`
  * MD5: c88953805d7fde675be9bb06050a5fa5
  * SHA-1: 83c0cb04a54409035f90c152442960ef10b6832d
* `/usr/sbin/dnsmasq`
  * Dnsmasq version 2.68
  * MD5: 4036b0dbc14e55edef2a5ff3c6fe8569
  * SHA-1: 30399e3f54d1a5e7c3bf7a5cde0d877c59ad7809
* `/usr/sbin/dropbear`
  * Dropbear server v2013.60 [https://matt.ucc.asn.au/dropbear/dropbear.html](https://matt.ucc.asn.au/dropbear/dropbear.html "https://matt.ucc.asn.au/dropbear/dropbear.html")
  * MD5: 2fb4c505e6453b06b8a2efaa86d114d0
  * SHA-1: a4af69f09d0e24f39c486d38211779f93daa462b
  * MODDED
* `/usr/sbin/hostapd`
  * hostapd v2.1
  * MD5: 666417d2dc29cf52915bb2a873cf09a3
  * SHA-1: 2a2bd9c82abae22609b4a407d4d9afeb649902d0
* `/usr/sbin/hostapd_cli`
  * hostapd_cli v2.1
  * MD5: 19f12aef82030e3f79fd6fc2fde1ede5
  * SHA-1: ad1a62e6a39b12da7dc3c559cb6ab85a4e46acba
* `/usr/sbin/ntpdate`
  * ntpdate 4.2.6p5@1.2349 Tue Jun 21 08:19:0

    0 UTC 2016 (6)
  * MD5: 006a0967281c9a061362086b638a21a4
  * SHA-1: a2b23a0c461719a2828c0202b50c19ba14cd8d23
* `/usr/sbin/tcpdump`
  * tcpdump version 4.5.1
  * libpcap version 1.5.3
  * MD5: 50f2ed1f9707873bbd13bde776c9cff7
  * SHA-1: b41f74a66ce1116f8352700529848f25455dc1d5

* Utils - BusyBox v1.24.1 (2019-11-15 15:22:50 CST) built-in shell (ash)