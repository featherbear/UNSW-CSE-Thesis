+++
categories = []
date = 2022-07-05T09:31:13Z
description = ""
series = []
tags = []
title = "/opt/rockrobo/rrlog/rrlogd (v1.15.58)"
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

* Could patch the binary to remove the source log deletes, although we _can_ see that they're located in `/var/shm`

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

## Wrapper

> Location: 0x19448

![](/uploads/20220705-snipaste_2022-07-05_20-26-04.jpg)

## RSA Encryption

> Location: 0x19304

![](/uploads/20220705-snipaste_2022-07-05_20-20-34.jpg)

### Key

    -----BEGIN PUBLIC KEY-----
    MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAwWA83A+GTpWYtPaGzSY/
    T9qljcHS3M6SwtV/z1irxlZAOIWFRPgnEWk1J5PhovX9q/MRYSpZg7Rst2OiA//F
    MnZphgCILa+OBun2VBpMoG/NErjqigS5oVTXe6wyPCeVf33B15W5WsWj0wqUGkAg
    oQZf2xw1Eu0Ylh137mtwBoaSzeAn1X5tm9zdRJYn+r4S2U5P7MxzjiOyTWG4JjWy
    xx+oKJj+RhYxnmJ9LF7M5HIFhjcWJ5deIblWOM0Wql2MX63WAAiQJOfgaH1sqnED
    B9fm09RD3aKElm3k7V01lTD9g/1gkhqLVRtH3sjwtnFcHxzsKUDrvIy6YhJz/H8W
    2umAU8XZcREMRErmnCd+XAOMBj9WMihNBWDoT0k4i/W+E0iNe6uWL+dSYozBY7jZ
    hsjWnPR7FBQJ1kzaK4m0GMdn9SriA2RfydHctyHcOQHN53lFoRKqkJxgCNuCdES1
    HcwkxBOysLQDZDH0+hw2SAZclTtsY+l/pz6buBrZxJEEnMoPYJAaE+OR6b1MfjNC
    8Vj+thp7a0Wf+xW782NXgctI2FQ4wkC+F9u0rwF91qcfAN1Ei6t6edsecK8QfRkP
    NDqBMoqexwz9N+ye4ZEgFpaRLfsH85ZfHUOwvWYsllfsTgj2bz+kTqDc7MN1+4Oe
    oxI+9D/1bE6CFBYrwmGIgBMCAwEAAQ==
    -----END PUBLIC KEY-----

## AES Encryption

Generated if some seed isn't provided

![](/uploads/20220705-snipaste_2022-07-05_20-35-00.jpg)

***

# Compress/Crypt Scope

![](/uploads/20220705-snipaste_2022-07-05_20-36-52.jpg) ![](/uploads/20220705-snipaste_2022-07-05_20-37-49.jpg)

***

# Calls to `system`

* Didn't see any remotely controlled system inputs

![](/uploads/20220705-snipaste_2022-07-05_20-33-03.jpg)

# iptables

## Version Check

![](/uploads/20220705-snipaste_2022-07-05_20-53-02.jpg)

## Allow-list

> Location: 0x1545a

![](/uploads/20220705-snipaste_2022-07-05_20-57-36.jpg) ![](/uploads/20220705-snipaste_2022-07-05_20-58-04.jpg)

***

# Network Handler

> Location: 0x1d6d8

![](/uploads/20220705-snipaste_2022-07-05_21-34-32.jpg)

Only one function that calls `recv` / `recvfrom` which is at `0x1d6d8`

* Can arbitrary files be request to be uploaded?
  * Don't think so..

## Some sort of `curl`

> Location: 0x1bad0

aka internally: `perform_curl`

![](/uploads/20220705-snipaste_2022-07-05_21-37-51.jpg)

* Looks like PUT request <s>to Amazon (Kinesis Firehose? / S3?)</s>
  * Nevermind it's some [Xiaomi Galaxy File Data Storage](http://docs.api.xiaomi.com/en/fds/)
* `Authorization: Galaxy-V2 %s:%s`
* `User-Agent: python-requests/2.9.1`
  * I mean...

***

# Other

* Some existence of `/opt/rockrobo/rrlog/devtest.conf`

![](/uploads/20220705-snipaste_2022-07-05_22-26-06.jpg)