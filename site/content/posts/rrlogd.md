+++
categories = []
date = 2022-07-05T09:31:13Z
description = ""
series = []
tags = []
title = "rrlogd"
toc = true

+++
> Responsible for compressing, (encrypting and) upload log files

* Possibly works with `logrotate.sh` (system logs)

![](/uploads/20220705-snipaste_2022-07-05_19-30-19.jpg)

# Libraries

* Protobuf
* curl
* mbedtls (Polar SSL)

# Note

Compression is given low [priority](https://linux.die.net/man/1/nice): `nice -n 19 tar zcf ...`

> Nicenesses range from **-20** (most favorable scheduling) to 19 (least favorable).

# Interesting

* `rockrobo/noupload`
* `rockrobo/devtest`