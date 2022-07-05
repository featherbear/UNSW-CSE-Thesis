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
* @0x25c18: `"rm -rf %s/*;mkdir -p %s/rockrobo/rrlog;mv %s/rrlog.log %s/rockrobo/rrlog/rrlog.log;reboot"`
* Call to `system` in function at `0x15b6c`
* @0x28ca: `"iptables -I INPUT -j ACCEPT -p tcp --dport 22"`
* `/dev/shm/`
* `/dev/shm/endpoint.bin`
* IPC
* `Authorization: Galaxy-V2 %s:%s`
* `User-Agent: python-requests/2.9.1`
* Cryptography - public keys
* `mbedtls_pk_encrypt`
* `rr_get_logserver`

# Encryption Routine

> Location: 0x19304

![](/uploads/20220705-snipaste_2022-07-05_20-04-51.jpg)