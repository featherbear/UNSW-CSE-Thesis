+++
categories = []
date = 2022-04-06T16:01:14Z
description = ""
series = []
tags = []
title = "/usr/bin/adbd"
toc = true

+++
```
locksec_init_key: can not find the prefix str from adb conf file, use default
locksec_init_key: can not find the suffix str from adb conf file, use default
locksec_init_serial: adb read 465 bytes from /proc/cpuinfo
locksec_init_key: locksec_init_key, rockrobo%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}rubydevicemodel
locksec_apply_key: locksec_apply_key, erI09cyW%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: adb source str: erI09cyW%()+-\[\]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: locksec_apply_passwd, passwd: 0y\[ad8@w
```

> Custom adbd binary that has an authentication challenge before giving you access. The shell is however limited (seemingly)

## Note: Debug Logging

Supply `ADB_TRACE=1` as an env (either prefix, or set as env) to see more verbose logs

***

## Auth Flow

* Requires you to know the `vinda` password (prior to the XOR stage)
* Request the challenge with `adb shell [VINDAVALUE]rockrobo dynamickey`
* Response is generated using the challenge + device serial
* Access shell with `adb shell [VINDAVALUE][RESPONSE] [COMMAND]`
* A new challenge is generated every time a new connection is opened

### Commands

* `uart_test` - UART but will probably fail because tty2 is in use already
* `ruby_flash` - Boots into FEL "efex"
* `dynamickey` - Get the dynamic key (again)

Not sure if we are meant to be able to run our own commands (read below)?

    src/rr_ruby.c::adb_check_unlock_level1():not support /adb shell sys_passwd#adb_passwd echo TESTING/ in level 1

Commands are validated (`0x11dbc`) to check they that don't contain `;` `&` `|` <code>\`</code>

> However, with the `uart_test` command, the program launches our input in a /bin/sh shell... We can inject some things!

![](/uploads/20220725-snipaste_2022-07-26_03-52-41.jpg)

![](/uploads/20220725-snipaste_2022-07-26_03-56-14.jpg)

![](/uploads/20220725-snipaste_2022-07-26_04-02-13.jpg)

## Access Levels

* There are different so-called "levels", \[possibly\] determined by the value of `adb_lock` in the `/mnt/default/adb.conf` file (error default is 1)
* Saw 0,1,2,3,4,(5?)
* Level 0 is the best? As its allows us arbitrary command execution
  * However, it looks like the app resets the value to a non-zero value

![](/uploads/20220725-snipaste_2022-07-26_04-35-15.jpg)

## Lock State

* There's a second type of lock?
* Seems to be only in the v1 functions (tests revealed the app was using v2 functions)
  * ![](/uploads/20220725-snipaste_2022-07-26_00-29-43.jpg)
  * 0x8b5a0
  * Bit-shift left by 0x1F (31) puts the LSB into a value's `sign` bit.
  * If signed bit is `1` then the value is negative
  * Therefore - this condition is true when `is_unlocked` is 0 (aka is **locked**)

## Passwords

* `sys_passwd` - vinda
* `adb_passwd` - generated challenge response

***

![](/uploads/20220725-snipaste_2022-07-26_03-14-37.jpg)

***

## Challenge Response Generation

> Address 0x18d60 on adbd (MD5 110b25922d0cf121deeb5b72342b93c8)

![](/uploads/20220725-snipaste_2022-07-25_23-49-57.jpg)

See [vinda.c](../vinda.c)