+++
categories = []
date = 2022-03-18T14:04:37Z
description = "Overview"
series = []
tags = []
title = "Filesystem Exploration"
toc = true

+++
> [https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/](https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/fdisk-dump/")
>
> [https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/](https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/emmc-layout/")

> \[    0.000000\] Kernel command line: rootwait boot_fs=a console=ttyS0,115200 root=/dev/mmcblk0p8 rootfstype=ext4 loglevel=7 partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1 boot_reason=0x0 location=en boot_ver=2011.09-rc1-dirty

boot-res@mmcblk0p2

env@mmcblk0p5

app@mmcblk0p6            (default)    (read only)

recovery@mmcblk0p7

system_a@mmcblk0p8

system_b@mmcblk0p9

Download@mmcblk0p10       (updbuf)

reserve@mmcblk0p11      (reserve)

UDISK@mmcblk0p1         (data)

| --- | --- | --- | --- | --- | --- | --- | --- |
| Label | Device | Boot | Start | End | Blocks | Id | System |
| UDISK | /dev/mmcblk0p1 | * | 4513792 | 7782399 | 1634304 | b | W95 FAT32 |
| boot-res | /dev/mmcblk0p2 | 73728 | 90111 | 8192 | 6 | FAT16 |
|  | /dev/mmcblk0p3 | 1 | 4423680 | 2211840 | 5 | Extended |
| env | /dev/mmcblk0p5 | 90112 | 122879 | 16384 | 83 | Linux |
| app | /dev/mmcblk0p6 | 122880 | 253951 | 65536 | 83 | Linux |
| recovery | /dev/mmcblk0p7 | 253952 | 1302527 | 524288 | 83 | Linux |
| system_a | /dev/mmcblk0p8 | 1302528 | 2351103 | 524288 | 83 | Linux |
| system_b | /dev/mmcblk0p9 | 2351104 | 3399679 | 524288 | 83 | Linux |
| Download | /dev/mmcblk0p10 | 3399680 | 4481023 | 540672 | 83 | Linux |
| reserve | /dev/mmcblk0p11 | 4481024 | 4513791 | 16384 | 83 | Linux |

***

Refer to Commentree JSON

[https://github.com/dgiese/dustcloud/wiki/Partition-Information](https://github.com/dgiese/dustcloud/wiki/Partition-Information "https://github.com/dgiese/dustcloud/wiki/Partition-Information")

---

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


---

```
root@rockrobo:~# mount            
/dev/root on / type ext4 (rw)
none on /proc type proc (rw,noexec,nosuid,nodev)
sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
devtmpfs on /dev type devtmpfs (rw,mode=0755)
none on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=0620)
none on /proc/sys/fs/binfmt_misc type binfmt_misc (rw,noexec,nosuid,nodev)
none on /sys/fs/cgroup type tmpfs (rw)
none on /sys/fs/fuse/connections type fusectl (rw)
none on /sys/kernel/debug type debugfs (rw)
tmpfs on /tmp type tmpfs (rw,size=30m)
none on /run type tmpfs (rw,noexec,nosuid,size=10%,mode=0755)
none on /run/lock type tmpfs (rw,noexec,nosuid,nodev,size=5242880)
tmpfs on /run/shm type tmpfs (rw,size=100m)
none on /run/user type tmpfs (rw,noexec,nosuid,nodev,size=104857600,mode=0755)
/dev/mmcblk0p11 on /mnt/reserve type ext4 (rw)
/dev/mmcblk0p10 on /mnt/updbuf type ext4 (rw)
/dev/mmcblk0p6 on /mnt/default type ext4 (ro)
/dev/mmcblk0p1 on /mnt/data type ext4 (rw)
```
