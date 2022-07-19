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
> ✅ `/bin`  
> ✅ `/sbin`
>
> 🟨 `/usr/bin`  
> ✅ `/usr/sbin`

## ✅ /bin

* `/bin/bash`
  * GNU bash, version 4.3.11(1)-release (arm-unknown-linux-

    gnueabihf)
* `/bin/chmod`
  * chmod (GNU coreutils) 8.21
* `/bin/chown`
  * chown (GNU coreutils) 8.21
* `/bin/dd`
  * dd (coreutils) 8.21
* `/bin/pidof`
  * .
* `/bin/tar`
  * tar (GNU tar) 1.27.1

    6553d3232d065ffef4a822dfc7315245  bash
    00131fe7c4835dda1a8bb02fc7922364  chmod
    2fa55f966295a7a46d30ebdeae7fbc46  chown
    70efc37e6afb7f5be6c4cf76afd3965b  dd
    73863d79612c16d88f7bedbacb89190a  pidof
    30e4067a03cfe4ba8fc3963c0f8ba616  tar

## ✅ /sbin

* `/sbin/ip6tables`
  * ip6tables v1.4.21
* `/sbin/iptables`
  * iptables v1.4.21
* `/sbin/iw`
  * iw version 3.4
* `/sbin/ldconfig`
  * ldconfig (Ubuntu EGLIBC 2.19-0ubuntu6.6) 2.19
* `/sbin/ldconfig.real`
  * ldconfig (Ubuntu EGLIBC 2.19-0ubuntu6.6) 2.19
* `/sbin/mkfs.ext4`
  * mke2fs 1.42.9 (4-Feb-2014)
  * EXT2FS Library version 1.42.9
* `/sbin/rr_login`
* `/sbin/wpa_cli`
  * wpa_cli v2.0-devel_rtw_r25669.20171213
* `/sbin/wpa_supplicant`
  * wpa_supplicant v2.0-devel_rtw_r25669.20171213
* `/sbin/xtables-multi`
  * .

    d49bad0a9e3f098cc3913a8ee75fd73d  ip6tables
    d49bad0a9e3f098cc3913a8ee75fd73d  iptables
    9b625d8eee80b5dd49843e86f0cbe51d  iw
    85e9e2c4a9c0a7af309c906516aa4548  ldconfig
    0dc3219be0c361b51bbb8d404c870387  ldconfig.real
    46747e533e25641bb14eeaf4a60040bd  mkfs.ext4
    96bf1f1e1a2c745ea85d7db0fa59a952  rr_login
    cedf096ec580ff1dd66ea1b5b326f08d  wpa_cli
    18ae34458be1593946dc9f885ba275dc  wpa_supplicant
    d49bad0a9e3f098cc3913a8ee75fd73d  xtables-multi

## 🟨 /usr/bin

* `/usr/bin/adbd`
  * Probably moved logs to stderr?
  * Old version went to stdout
* `/usr/bin/base64`
  * base64 (GNU coreutils) 8.21
* `/usr/bin/bootring`
  * different
* `/usr/bin/create_ap`
  * version 0.1
* `/usr/bin/iconv`
  * iconv (Ubuntu EGLIBC 2.19-0ubuntu6.6) 2.19
* `/usr/bin/ionice`
  * ionice from util-linux 2.20.1
* `/usr/bin/ldd`
  * ldd (Ubuntu EGLIBC 2.19-0ubuntu6.6) 2.19
* `/usr/bin/logrotate.sh`
  * no ver
* `/usr/bin/nohup`
  * nohup (GNU coreutils) 8.21
* `/usr/bin/openssl`
  * OpenSSL 1.0.1f 6 Jan 2014
* `/usr/bin/pkill`
  * pkill from procps-ng 3.3.9
* `/usr/bin/qemu-arm-static`
  * different
* `/usr/bin/rr_try_mount`
  * different
* `/usr/bin/scp`
  * no ver
* `/usr/bin/top`
  * procps-ng version 3.3.9
* `/usr/bin/uart_test`
  * different
* `/usr/bin/wpa_passphrase`
  * no ver
* `/usr/bin/xz`
  * Original version does not use

    4e567a306e1569e7fd633331affa3e12  adbd
    67dc1de09b22238b155dcafc2d1a5c3c  base64
    bf8f440f6fe7e1cbbdaafa491442a4a9  bootring
    fa856af527e32d1822784b1cae2dddde  create_ap
    f75a585effc29768ea74bf36ca74be1b  iconv
    b13dbb5753fef064dfeb89b024bdf0ec  ionice
    a719dd374725a76f64161c2346df99cd  ldd
    8129d3de3d967e2887447409ee84fb16  logrotate.sh
    db2b65aed02b801746f8597d9a63f97d  nohup
    97fe9fe716f6246a21c20b9b82138c0f  openssl
    16601b3eace3dfd544d6f1ad5b3fd6b2  pkill
    fa7add6bcd5a30ce2072646248fd87ef  qemu-arm-static
    f820524e196df94d6299d75033d51b3c  rr_try_mount
    354d5bef5c9f5d02f316d6840351a0cd  scp
    411b32fa0ebd4aadf42f6dc0d755dcfc  top
    c5bbf0b4a9a09bfb1e1d46ccfe594bc5  uart_test
    18b02d8d26edb6d1ec204543baf81524  wpa_passphrase
    372e8fc127f8abb05c417387b2ba9a6c  xz

## ✅ /usr/sbin

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
  * ntpdate 4.2.6p5@1.2349 Tue Jun 21 08:19:00 UTC 2016 (6)
  * MD5: 006a0967281c9a061362086b638a21a4
  * SHA-1: a2b23a0c461719a2828c0202b50c19ba14cd8d23
* `/usr/sbin/tcpdump`
  * tcpdump version 4.5.1
  * libpcap version 1.5.3
  * MD5: 50f2ed1f9707873bbd13bde776c9cff7
  * SHA-1: b41f74a66ce1116f8352700529848f25455dc1d5

***

# Possible Leads

## WPA - [CVE-2014-3686](https://bugzilla.redhat.com/show_bug.cgi?id=1151259)

[https://www.openwall.com/lists/oss-security/2014/10/09/28](https://www.openwall.com/lists/oss-security/2014/10/09/28 "https://www.openwall.com/lists/oss-security/2014/10/09/28")

>     wpa_cli is a component distributed with wpa_supplicant and hostapd_cli
>     is a component distributed with hostapd. The vulnerability affects only
>     cases where wpa_cli or hostapd_cli is used to run action scripts (-a
>     command line option)

* `/etc/wpa_supplicant/ifupdown.sh`
  * Sources `/etc/wpa_supplicant/functions.sh`
    * `-a env:WPA_ACTION_SCRIPT`
    * `WPA_ACTION_SCRIPT=/sbin/wpa_action`
* What even calls `ifupdown.sh`???
* 
* 
* 
* 
* Utils - BusyBox v1.24.1 (2019-11-15 15:22:50 CST) built-in shell (ash)