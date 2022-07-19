+++
categories = []
date = 2022-07-19T07:12:49Z
description = ""
series = []
tags = []
title = "/usr/bin/qemu-arm-static"
toc = true

+++
> It's an x86 binary for debugging the ARM files

`/usr/sbin/qemu-arm-static`

***

You can also install your own version of qemu.

# qemu TL;DR

> `LD_LIBRARY_PATH=./lib/arm-linux-gnueabihf/ ./usr/bin/qemu-arm-static ./lib/ld-linux-armhf.so.3 {PROGRAM}`