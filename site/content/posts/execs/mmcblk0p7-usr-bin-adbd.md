+++
categories = []
date = 2022-04-06T16:01:14Z
description = ""
series = []
tags = []
title = "/usr/bin/adbd"
toc = true

+++
    locksec_init_key: can not find the prefix str from adb conf file, use default
    locksec_init_key: can not find the suffix str from adb conf file, use default
    locksec_init_serial: adb read 465 bytes from /proc/cpuinfo
    locksec_init_key: locksec_init_key, rockrobo%()+-[]_8a80ab8936d76c118000:;<=>?@{}rubydevicemodel
    locksec_apply_key: locksec_apply_key, erI09cyW%()+-[]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
    locksec_apply_passwd: adb source str: erI09cyW%()+-[]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
    locksec_apply_passwd: locksec_apply_passwd, passwd: 0y[ad8@w

Custom adbd binary that has an authentication challenge before giving you access

## Auth Flow

* Requires you to know the vinda password
* Request the challenge key with `adb shell [VINDAVALUE]rockrobo dynamickey`
* Response is generated via the challenge key + device serial
* Access shell with `adb shell [VINDAVALUE][RESPONSE]command`

## Access Levels

* There are different so-called "levels", determined by the value of `adb_lock` in the `/mnt/default/adb.conf` file (file default is 1, app default on parse error is 0)
* Lock and unlock state?

adb shell

adb_passwd

sys_passwd

shell

***

> Address 0x18d60 on adbd (MD5 110b25922d0cf121deeb5b72342b93c8)

![](/uploads/20220725-snipaste_2022-07-25_23-49-57.jpg)

See [vinda.c](../vinda.c)