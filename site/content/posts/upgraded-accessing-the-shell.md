+++
categories = []
date = 2022-07-11T13:54:25Z
description = ""
series = []
tags = []
title = "Upgraded - Accessing the shell"
toc = true

+++
> The old firmware stores the root password in the `vinda` file (`mmcblk0p6`), however newer firmware versions (supposedly after June 2020) don't seem to respect the contents of the file; with the existing password no longer working

***

# Shell Access

Firstly, get access to the UBoot shell (spam the `s` key during power on)

    setenv setargs_mmc ${setargs_mmc} init=/bin/bash
    boot

When you enter the shell, immediately enter in `echo 'V' > /dev/watchdog` to prevent the system from rebooting

After, set up the linux filesystem structure

    mount -n -t proc none /proc 
    mount -n -t tmpfs none /run
    mkdir -p /run/shm
    mount -n -t tmpfs tmpfs /var -o size=30m
    mkdir -p /var/tmp /var/log /var/modules /var/lib/misc/ /var/lib/dhcp
    ln -s /run /var/run
    mkdir -p /dev/pts
    mount -n -t devpts none /dev/pts
    mount -n -t sysfs none /sys
    ln -s /run/shm /dev/shm
    echo /sbin/mdev > /proc/sys/kernel/hotplug
    mdev -s
    
    # Source: https://valetudo.cloud/pages/general/rooting-instructions.html
    # Source: https://builder.dontvacuum.me/s5e-cheatsheet.txt

Then start all of the basic required services

    /etc/init/S01logging start
    /etc/init/S02hostname start
    /etc/init/S02network start
    /etc/init/S03mountall start    
    /opt/rockrobo/wlan/wifi_start.sh

***

# Root

> I have no idea what the root password is.. it's not matching the XOR'd `vinda` file anymore
>
> I tried nulling out the `/etc/passwd` file (aka setting `root:x:` to `root::` but local access still didn't work

Try reset the password with `passwd root` (or `passwd -d root` to clear)

* Note - this seems to affect the SSH login though :)

***

# Local Shell

Inside of `/etc/inittab` (SysV)

    ::sysinit:/etc/init/rcS S start
    ::shutdown:/etc/init/rcS K stop
    ::respawn:WatchDoge $RR_ROOT/watchdog >> $RR_UDATA/rockrobo/rrlog/watchdog.log 2>&1
    ::respawn:/usr/bin/adbd
    ::respawn:/usr/sbin/dropbear -F
    ::respawn:/sbin/rr_login -d /dev/ttyS0 -b 115200 -p vt100

We can see that the serial connection is handled by `/sbin/rr_login`.

> The SSH server is replaced with `dropbear`, and additionally no longer runs by default.  
> `dropbear -B` - Start SSH server (-B allows empty password)

We can comment out the `rr_login` line, and replace it with `ttyS0::respawn:/bin/login`