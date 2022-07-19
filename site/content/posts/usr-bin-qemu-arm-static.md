+++
categories = []
date = 2022-07-19T07:12:49Z
description = ""
series = []
tags = []
title = "/usr/bin/qemu-arm-static"
toc = true

+++
# qemu TL;DR

The file located at `/usr/sbin/qemu-arm-static` is an x86 binary for debugging the ARM files.  
You can also install your own version of `qemu-arm-static`

> `LD_LIBRARY_PATH=./lib/arm-linux-gnueabihf/ ./usr/bin/qemu-arm-static ./lib/ld-linux-armhf.so.3 [PROGRAM]`

***

# gdb TL;DR

Install `gdb-multiarch` on your host machine. e.g Ubuntu: `sudo apt install gdb-multiarch`

1. Add parameter `-g [PORT]` to the qemu line.

> `LD_LIBRARY_PATH=./lib/arm-linux-gnueabihf/ ./usr/bin/qemu-arm-static -g 1234 ./lib/ld-linux-armhf.so.3 [PROGRAM]`

2. Then on your host computer,

> `gdb-multiarch -ex="target remote:1234" [PROGRAM]`

***