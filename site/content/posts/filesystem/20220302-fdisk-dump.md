+++
categories = ["Filesystem"]
date = 2022-03-02T06:01:48Z
description = "fdisk -l"
series = []
tags = []
title = "fdisk dump"
toc = true

+++
```
root@rockrobo:/home# fdisk -l

Disk /dev/mmcblk0: 3959 MB, 3959422976 bytes
1 heads, 16 sectors/track, 483328 cylinders, total 7733248 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

        Device Boot      Start         End      Blocks   Id  System
/dev/mmcblk0p1   *     4513792     7782399     1634304    b  W95 FAT32
/dev/mmcblk0p2           73728       90111        8192    6  FAT16
/dev/mmcblk0p3               1     4423680     2211840    5  Extended
/dev/mmcblk0p5           90112      122879       16384   83  Linux
/dev/mmcblk0p6          122880      253951       65536   83  Linux
/dev/mmcblk0p7          253952     1302527      524288   83  Linux
/dev/mmcblk0p8         1302528     2351103      524288   83  Linux
/dev/mmcblk0p9         2351104     3399679      524288   83  Linux
/dev/mmcblk0p10        3399680     4481023      540672   83  Linux
/dev/mmcblk0p11        4481024     4513791       16384   83  Linux


Partition table entries are not in disk order

Disk /dev/mmcblk0boot1: 2 MB, 2097152 bytes
4 heads, 16 sectors/track, 64 cylinders, total 4096 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/mmcblk0boot1 doesn't contain a valid partition table

Disk /dev/mmcblk0boot0: 2 MB, 2097152 bytes
4 heads, 16 sectors/track, 64 cylinders, total 4096 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x00000000

Disk /dev/mmcblk0boot0 doesn't contain a valid partition table
```