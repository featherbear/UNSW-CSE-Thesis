+++
categories = []
date = 2022-03-18T14:24:06Z
description = "???"
series = []
tags = []
title = "Running Questions"
toc = true

+++
## Are files cleaned when factory reset?

* mmcblk01\\rockrobo\\robot.db

## Unknown / non-standard files

* mmcblk01\\rockrobo\\rrlog\\**\\*.rr.gz
  * Look out for code/scripts that operate on these files
    * `rr.`?

## Interesting

* mmcblk0p11\\endpoint.bin
  * AWS address + key?
* mmcblk0p6\\adb.conf
  * `adb_lock=1`
* mmcblk0p7\\boot\\zImage
* mmclbk0p7\\etc\\init\\adbd.conf
* vinda usage
* mmcblk0p7\\opt\\rockrobo
* adb
* mmcblk0p7\\usr\\sbin\\tcpdump
* mmcblk0p8\\var\\log\\upstart\\adbd.log
  * passwords

syslog

Look for IPs, emails, host/domains, passwords, keys

## Fun

* mmcblk0p7\\etc\\init\\bootring.conf