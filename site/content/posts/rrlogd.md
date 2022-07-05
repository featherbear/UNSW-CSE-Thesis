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

## Wrapper

> Location: 0x19448

![](/uploads/20220705-snipaste_2022-07-05_20-19-23.jpg)

## RSA Encryption

> Location: 0x19304

![](/uploads/20220705-snipaste_2022-07-05_20-20-34.jpg)

### Key

```
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
```

## AES Encryption