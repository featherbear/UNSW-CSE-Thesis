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

# Changes

The original firmware that was on the device was `01.15.58`

There was an upgrade notice to go to `v01.17.08`  
Once upgraded, there was another upgrade to go to `01.17.08`  
Once upgraded, there was another upgrade to go to `01.19.98`

> I think I got locked out at this point

## Notice

Newer versions no longer use the `vinda` file, and use an embedded linux OS rather than Ubuntu 14. Now uses busybox.

The serial/console login seems to be handled by `/sbin/rr_login`