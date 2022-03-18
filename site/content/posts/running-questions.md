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
* mmcblk0p11\\endpoint.bin
  * AWS address + key?
* mmcblk0p6\\adb.conf
  * `adb_lock=1`