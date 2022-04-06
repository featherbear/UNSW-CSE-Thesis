+++
categories = []
date = 2022-04-06T08:37:51Z
description = ""
series = []
tags = []
title = "lsblk dump"
toc = true

+++
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