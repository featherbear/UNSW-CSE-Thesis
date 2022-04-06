+++
categories = []
date = 2022-04-06T08:30:11Z
description = ""
series = []
tags = []
title = "WiFi Hardware"
toc = true

+++
* MAC - `64:90:c1:1d:24:c4`
* MAC2 - `66:90:c1:1d:24:c4`

---

```
root@rockrobo:~# ip -4 link
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 qdisc noqueue state UNKNOWN mode DEFAULT group default 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP mode DORMANT group default qlen 1000
    link/ether 64:90:c1:1d:24:c4 brd ff:ff:ff:ff:ff:ff
3: wlan1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT group default qlen 1000
    link/ether 66:90:c1:1d:24:c4 brd ff:ff:ff:ff:ff:ff
```

```
root@rockrobo:~# ip -6 addr
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 16436 
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 fe80::6690:c1ff:fe1d:24c4/64 scope link 
       valid_lft forever preferred_lft forever
```

```
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:16436  Metric:1
          RX packets:427 errors:0 dropped:0 overruns:0 frame:0
          TX packets:427 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:0
          RX bytes:37312 (37.3 KB)  TX bytes:37312 (37.3 KB)

wlan0     Link encap:Ethernet  HWaddr 64:90:c1:1d:24:c4
          inet addr:10.10.10.8  Bcast:10.10.10.255  Mask:255.255.255.0
          inet6 addr: fe80::6690:c1ff:fe1d:24c4/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:2221 errors:0 dropped:0 overruns:0 frame:0
          TX packets:219 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:792441 (792.4 KB)  TX bytes:27084 (27.0 KB)
```