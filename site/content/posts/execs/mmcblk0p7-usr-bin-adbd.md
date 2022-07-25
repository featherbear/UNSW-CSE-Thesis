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
locksec_init_key: locksec_init_key, rockrobo%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}rubydevicemodel
locksec_apply_key: locksec_apply_key, erI09cyW%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: adb source str: erI09cyW%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: locksec_apply_passwd, passwd: 0y\[ad8@w

> Custom adbd binary that has an authentication challenge before giving you access

## Note: Debug Logging

Supply `ADB_TRACE=1` as an env (either prefix, or set as env) to see more verbose logs

***

## Auth Flow

* Requires you to know the vinda password (prior to XOR)
* Request the challenge key with `adb shell [VINDAVALUE]rockrobo dynamickey`
* Response is generated via the challenge key + device serial
* Access shell with `adb shell [VINDAVALUE][RESPONSE] [COMMAND]`
* A new challenge is generated every time a new connection is opened

### Commands

* `uart_test` - UART but will probably fail because tty2 is in use already
* `ruby_flash` - Boots into FEL "efex"
* `dynamickey` - Get the dynamic key (again)

Commands are validated (`0x11dbc`) to check they that don't contain `;` `&` `|` <code>\`</code>

> However, we _can_ use the `>` redirection command - tested!

## Access Levels

* There are different so-called "levels", \[possibly\] determined by the value of `adb_lock` in the `/mnt/default/adb.conf` file (file default is 1, app default on parse error is 0)

## Lock State

* There's a second type of lock?
* 
  * ![](/uploads/20220725-snipaste_2022-07-26_00-29-43.jpg)
  * 0x8b5a0
  * Bit-shift left by 0x1F (31) puts the LSB into a value's `sign` bit.
  * If signed bit is `1` then the value is negative
  * Therefore - this condition is true when `is_unlocked` is 0 (aka is **locked**)

## Passwords

* `adb_passwd` - generated challenge response
* `sys_passwd` - vinda

***

![](/uploads/20220725-snipaste_2022-07-26_03-14-37.jpg)

***

## Challenge Response Generation

> Address 0x18d60 on adbd (MD5 110b25922d0cf121deeb5b72342b93c8)

![](/uploads/20220725-snipaste_2022-07-25_23-49-57.jpg)

See [vinda.c](../vinda.c)