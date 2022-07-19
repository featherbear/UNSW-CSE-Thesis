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

1. Then on your host computer,

> `gdb-multiarch -ex="target remote:1234" [PROGRAM]`

***

# Cross-compilation TL;DR

Install toolchain. e.g. Ubuntu: `sudo apt-get install gcc-arm-linux-gnueabihf`

* Configure against ARM platform
  * `./configure --host arm-linux-gnueabihf`
  * May need to pass `LDFLAGS='-static -pthread'` as an arg
    * e.g. `./configure --host arm-linux-gnueabihf LDFLAGS='-static -pthread'` 
* Compile directly with `gcc`
  * `arm-linux-gnueabihf-gcc program.c`
* Compile with `make`
  * `CC=arm-linux-gnueabihf-gcc make`

> REMEMBER TO CHECK SYSTEM'S LIBC VERSION (ahem 2.19 on stock firmware)
>
> Else, statically compile?

## strace

> `./configure --host arm-linux-gnueabihf LD_FLAGS='-static -pthread'`

***

[http://doppioandante.github.io/2015/07/10/Simple-ARM-programming-on-linux.html](http://doppioandante.github.io/2015/07/10/Simple-ARM-programming-on-linux.html "http://doppioandante.github.io/2015/07/10/Simple-ARM-programming-on-linux.html")