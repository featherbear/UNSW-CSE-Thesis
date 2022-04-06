+++
categories = []
date = 2022-04-06T07:32:28Z
description = "Things to look into"
series = []
tags = []
title = "Research Notes"
toc = true

+++
Xiaomi / Roborock's Claims

* Previous incidents
* Statements

***

# IoT Concerns

Hardware Hacking

* Any difference in boot sequence if only +ve and -ve battery terminals connected 
  * No change in output during boot
  * But device will turn off after around 20 seconds

## Fingerprints

```
root@rockrobo:~# uname -m
armv7l

root@rockrobo:~# uname -a
Linux rockrobo 3.4.39 #1 SMP PREEMPT Wed Mar 25 20:47:59 CST 2020 armv7l armv7l armv7l GNU/Linux
```

```
root@rockrobo:~# lscpu
Architecture:          armv7l
Byte Order:            Little Endian
CPU(s):                4
On-line CPU(s) list:   0-3
Thread(s) per core:    1
Core(s) per socket:    4
Socket(s):             1
```


```
root@rockrobo:~# lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0boot0 179:16   0     2M  1 disk 
mmcblk0boot1 179:32   0     2M  1 disk 
mmcblk0      179:0    0   3.7G  0 disk 
|-mmcblk0p1  179:1    0   1.5G  0 part /mnt/data
|-mmcblk0p2  179:2    0     8M  0 part 
|-mmcblk0p3  179:3    0     1K  0 part 
|-mmcblk0p5  179:5    0    16M  0 part 
|-mmcblk0p6  179:6    0    64M  0 part /mnt/default
|-mmcblk0p7  179:7    0   512M  0 part 
|-mmcblk0p8  179:8    0   512M  0 part /
|-mmcblk0p9  179:9    0   512M  0 part 
|-mmcblk0p10 179:10   0   528M  0 part /mnt/updbuf
`-mmcblk0p11 179:11   0    16M  0 part /mnt/reserve
```

Software Hacking

Networking

* Are there any backdoors?
* Is there a firewall present
  * Yes there's `iptables` rules to drop SSH
    * Q: Why is there a server running then if it's blocked?
* Can I make outbound requests
* Can I plant persistent software

***

# Privacy

* Can we fingerprint the device?
  * When it's off
  * When it's not connected to WiFi
* Where is the data being sent to?
* When is the data being sent?
* What data is being sent? (also when, where)
* PII
* UGC