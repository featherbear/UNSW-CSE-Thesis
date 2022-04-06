+++
categories = []
date = 2022-04-06T08:46:06Z
description = ""
series = []
tags = []
title = "proc dump"
toc = true

+++
```
root@rockrobo:/proc# cat cmdline 
rootwait boot_fs=a console=ttyS0,115200 root=/dev/mmcblk0p8 rootfstype=ext4 loglevel=7 partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1 boot_reason=0x0 location=en boot_ver=2011.09-rc1-dirty
```

```
root@rockrobo:/proc# cat cpuinfo 
Processor       : ARMv7 Processor rev 5 (v7l)
processor       : 0
BogoMIPS        : 3085.71

processor       : 1
BogoMIPS        : 3085.71

processor       : 2
BogoMIPS        : 3085.71

processor       : 3
BogoMIPS        : 3085.71

Features        : swp half thumb fastmult vfp edsp thumbee neon vfpv3 tls vfpv4 idiva idivt 
CPU implementer : 0x41
CPU architecture: 7
CPU variant     : 0x0
CPU part        : 0xc07
CPU revision    : 5

Hardware        : sun8i
Revision        : 0000
Serial          : 8a80ab8936d76c118000
Chipid          : 6c118000ab8936d78a8051c20461872a
```

```
root@rockrobo:/proc# cat crypto 
name         : ecb(arc4)
driver       : ecb(arc4-generic)
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : blkcipher
blocksize    : 1
min keysize  : 1
max keysize  : 256
ivsize       : 0
geniv        : <default>

name         : stdrng
driver       : krng
module       : kernel
priority     : 200
refcnt       : 1
selftest     : passed
type         : rng
seedsize     : 0

name         : lzo
driver       : lzo-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : compression

name         : crc32c
driver       : crc32c-generic
module       : kernel
priority     : 100
refcnt       : 2
selftest     : passed
type         : shash
blocksize    : 1
digestsize   : 4

name         : zlib
driver       : zlib-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : pcomp

name         : deflate
driver       : deflate-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : compression

name         : arc4
driver       : arc4-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : cipher
blocksize    : 1
min keysize  : 1
max keysize  : 256

name         : aes
driver       : aes-generic
module       : kernel
priority     : 100
refcnt       : 1
selftest     : passed
type         : cipher
blocksize    : 16
min keysize  : 16
max keysize  : 32

name         : twofish
driver       : twofish-generic
module       : kernel
priority     : 100
refcnt       : 1
selftest     : passed
type         : cipher
blocksize    : 16
min keysize  : 16
max keysize  : 32

name         : des3_ede
driver       : des3_ede-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : cipher
blocksize    : 8
min keysize  : 24
max keysize  : 24

name         : des
driver       : des-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : cipher
blocksize    : 8
min keysize  : 8
max keysize  : 8

name         : sha256
driver       : sha256-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : shash
blocksize    : 64
digestsize   : 32

name         : sha224
driver       : sha224-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : shash
blocksize    : 64
digestsize   : 28

name         : sha1
driver       : sha1-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : shash
blocksize    : 64
digestsize   : 20

name         : md5
driver       : md5-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : shash
blocksize    : 64
digestsize   : 16

name         : md4
driver       : md4-generic
module       : kernel
priority     : 0
refcnt       : 1
selftest     : passed
type         : shash
blocksize    : 64
digestsize   : 16
```

```
root@rockrobo:/proc# cat devices 
Character devices:
  1 mem
  4 /dev/vc/0
  4 tty
  5 /dev/tty
  5 /dev/console
  5 /dev/ptmx
  7 vcs
 10 misc
 13 input
 29 fb
 81 video4linux
108 ppp
116 alsa
128 ptm
136 pts
150 cedar_dev
180 usb
189 usb_device
248 ump
249 capture
250 disp
251 ttyS
252 sunxi_pwm
253 bsg
254 rtc

Block devices:
259 blkext
  7 loop
  8 sd
 65 sd
 66 sd
 67 sd
 68 sd
 69 sd
 70 sd
 71 sd
128 sd
129 sd
130 sd
131 sd
132 sd
133 sd
134 sd
135 sd
179 mmc
254 device-mapper
```

```
root@rockrobo:/proc# cat filesystems 
nodev   sysfs
nodev   rootfs
nodev   bdev
nodev   proc
nodev   cgroup
nodev   cpuset
nodev   tmpfs
nodev   devtmpfs
nodev   binfmt_misc
nodev   debugfs
nodev   sockfs
nodev   pipefs
nodev   anon_inodefs
nodev   rpc_pipefs
nodev   devpts
        ext3
        ext2
        ext4
        cramfs
nodev   ramfs
        vfat
        msdos
nodev   nfs
nodev   cifs
        ntfs
        fuseblk
nodev   fuse
nodev   fusectl
```

```
root@rockrobo:/proc# cat meminfo 
MemTotal:         510548 kB
MemFree:          367276 kB
Buffers:            5404 kB
Cached:            52548 kB
SwapCached:            0 kB
Active:            62312 kB
Inactive:          41968 kB
Active(anon):      48420 kB
Inactive(anon):     3432 kB
Active(file):      13892 kB
Inactive(file):    38536 kB
Unevictable:           0 kB
Mlocked:               0 kB
SwapTotal:             0 kB
SwapFree:              0 kB
Dirty:                28 kB
Writeback:             0 kB
AnonPages:         46312 kB
Mapped:            17204 kB
Shmem:              5540 kB
Slab:              14608 kB
SReclaimable:       5764 kB
SUnreclaim:         8844 kB
KernelStack:        1336 kB
PageTables:          960 kB
NFS_Unstable:          0 kB
Bounce:                0 kB
WritebackTmp:          0 kB
CommitLimit:      255272 kB
Committed_AS:     190280 kB
VmallocTotal:     499712 kB
VmallocUsed:        5124 kB
VmallocChunk:     246984 kB
```

```
root@rockrobo:/proc# cat misc 
 48 android_adb
 49 mali
 50 network_throughput
 51 network_latency
 52 cpu_dma_latency
 53 xt_qtaguid
 54 leds
236 device-mapper
130 watchdog
200 tun
 55 lds_motor
 56 jiffies
 57 uart_lds
 58 uart_mcu
237 loop-control
 59 sw_sync
 60 cuse
229 fuse
 61 sunxi-reg
 62 cachefiles
 63 ion
```

```
root@rockrobo:/proc# cat modules 
8189es 1527904 0 - Live 0xbf16f000
g_android 37611 1 - Live 0xbf15f000
mali 209771 5 - Live 0xbf118000 (O)
ump 41678 2 - Live 0xbf107000 (O)
disp 991461 2 mali, Live 0xbf000000
```

```
root@rockrobo:/proc# cat partitions 
major minor  #blocks  name

 179        0    3866624 mmcblk0
 179        1    1609728 mmcblk0p1
 179        2       8192 mmcblk0p2
 179        3          1 mmcblk0p3
 179        5      16384 mmcblk0p5
 179        6      65536 mmcblk0p6
 179        7     524288 mmcblk0p7
 179        8     524288 mmcblk0p8
 179        9     524288 mmcblk0p9
 179       10     540672 mmcblk0p10
 179       11      16384 mmcblk0p11
 179       32       2048 mmcblk0boot1
 179       16       2048 mmcblk0boot0
```

```
root@rockrobo:/proc# cat stat
cpu  7735 0 23513 665817 205 3 406 0 0 0
cpu0 1933 0 5886 164796 18 3 399 0 0 0
cpu1 1989 0 6273 166586 69 0 0 0 0 0
cpu2 1848 0 5757 167229 59 0 7 0 0 0
cpu3 1965 0 5597 167206 59 0 0 0 0 0
intr 3646853 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1556414 0 0 8620 0 28465 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1591648 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1569 65 0 0 0 0 0 0 0 0 0 0 245679 8009 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
ctxt 3418717
btime 3
processes 23701
procs_running 1
procs_blocked 0
softirq 1033934 0 354387 4 4166 0 0 230160 193827 244 251146
```
