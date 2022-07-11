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

* SSH Server - dropbear
* Utils - BusyBox v1.24.1 (2019-11-15 15:22:50 CST) built-in shell (ash)

***

# Autorun / Startup

SSH (dropbear) - NO

# Secrets

## /etc/shadow

`root:$6$mptOwWOW$DpR0O/CdKUfpapA3rEGl/4m6WZOkRYC5LSaCJSYKj9iHuZp2PUzfolgrGVeHW5tMtRSYlBWSlonusy67027JF/::0:99999:7:::`