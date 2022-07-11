+++
categories = []
date = 2022-07-11T13:44:33Z
description = ""
series = []
tags = []
title = "Upgrade Notes"
toc = true

+++
* Firmware is upgraded incrementally rather than straight to the latest version
  * Probably because of dependencies, etc

## Process

1. Download to blk10
2. Flash blk10 to blk9
3. Boot into blk9 (new)
4. Flash blk10 to blk8

***

# Upgrade Log

The original firmware that was on the device was `01.15.58`

There was an upgrade notice to go to `v01.17.08`  
Once upgraded, there was another upgrade to go to `01.17.08`  
Once upgraded, there was another upgrade to go to `01.19.98`

> I think I got locked out at this point, because the UART shell didn't accept my root credentials

## Notice

* Newer versions no longer use the `vinda` file, and use <s>an embedded linux OS rather than Ubuntu 14. Now uses</s> busybox.
  * Edit: `/etc/os-release` still seems to suggest `VERSION="14.04.3 LTS, Trusty Tahr"`, but the system is much more heavily locked down
* The serial/console login seems to be handled by [`/sbin/rr_login`](../sbin-rr_login/)
  * Tries to access `/mnt/default/shadow` - but it doesn't exist on the system and hence always errors out
  * We can modify `/etc/inittab` and switch out `/sbin/rr_login` for the default login handler
* IPv6 is blocked with `ip6tables`
* Dropbear is used as the SSH server
  * The `WatchDoge` process will re-run the iptables SSH drop rule, rendering simple conf commenting void
  * Have to patch the `WatchDoge` process