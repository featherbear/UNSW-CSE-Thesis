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

# TL;DR - Get access to serial shell

    # Hold 's' during power on to enter UBoot's shell
    setenv setargs_mmc ${setargs_mmc} init=/bin/bash
    boot
    
    # When you access the /bin/bash shell, enter in:
    echo 'V' > /dev/watchdog
    
    # Edit the /etc/inittab file
    # Prepend a # to ::respawn:/sbin/rr_login -d /dev/ttyS0 -b 115200 -p vt100
    # Append ttyS0::respawn:/bin/login
    
    # Reboot
    
    # Login with root and previous password
    

***

# Initial Shell Access with Normal System Functional

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
    
    # Source: /etc/init/rcS

Then start all of the basic required services

    /etc/init/S01logging start
    /etc/init/S02hostname start
    /etc/init/S02network start
    /etc/init/S03mountall start    
    /opt/rockrobo/wlan/wifi_start.sh

***

# Root

> After getting the UART shell... I have no idea what the root password is.. it's not matching the XOR'd `vinda` file anymore
>
> I tried nulling out the `/etc/passwd` file (aka setting `root:x:` to `root::` but local access still didn't work

**UPDATE - BECAUSE of** [**`rr_login`**](../sbin-rr_login/)

Try reset the password with `passwd root` (or `passwd -d root` to clear)

* Note - this seems to affect the SSH login though :)
* Note - also affects `/bin/login`

***

# Local Shell

Inside of `/etc/inittab` (SysV)

    ::sysinit:/etc/init/rcS S start
    ::shutdown:/etc/init/rcS K stop
    ::respawn:WatchDoge $RR_ROOT/watchdog >> $RR_UDATA/rockrobo/rrlog/watchdog.log 2>&1
    ::respawn:/usr/bin/adbd
    ::respawn:/usr/sbin/dropbear -F
    ::respawn:/sbin/rr_login -d /dev/ttyS0 -b 115200 -p vt100

We can see that the serial connection is handled by [`/sbin/rr_login`](../sbin-rr_login/).

> The SSH server is replaced with `dropbear` <s>, and additionally no longer runs by default.</s>  
> `dropbear -B` - Start SSH server (-B allows empty password)

### Fix

We can comment out the `rr_login` line, and replace it with `ttyS0::respawn:/bin/login`

This will cause `ttyS0` connections to be handled by `/bin/login` (which respects our `/etc/passwd`

***

# SSH

> UPDATE: In later versions, Dropbear verifies against a non-existent (at least in my system) `[default]/shadow` file and so will always fail
>
> ![](/uploads/20220719-snipaste_2022-07-19_22-24-51.jpg)  

Dropbear is used instead of the OpenSSH server. It's very old and supports outdated key exchange algorithms which are not enabled by default on OpenSSH clients.

You'll need to SSH with some options: `ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 root@[host]`

You can attempt to patch out the iptable drop commands located in `/etc/init/rrwatchdoge.conf` and `/etc/init/S04wdgenv`...

![](/uploads/20220711-snipaste_2022-07-12_01-35-49.jpg)

However the `WatchDoge` process will reinstate it...  
Literally, it's the first instruction!

![](/uploads/20220711-snipaste_2022-07-12_01-25-43.jpg)

> At least they're blocking IPv6 now!

\--> Might need to force `iptables -I INPUT -j ACCEPT -p tcp --dport 22` somewhere?

***