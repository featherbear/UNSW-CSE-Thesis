+++
categories = []
date = 2022-07-11T17:37:10Z
description = "POC"
series = []
tags = []
title = "Achieving Upgrade Persistence"
toc = true

+++
# Issue

> Upgrading will reflash the `mmcblk0p8` and `mmcblk0p9` from `mmcblk0p10` (extracted upgrade firmware), rather than `mmcblk0p7` (recovery).

This means that any modifications to `mmcblk0p7` won't be carried into upgraded firmware installs

# Idea

A persistent file could be kept in the upgrade image by a timed / repeat call to modify the contents of `mmcblk0p10`, such that when `mmcblk0p10` is flashing over `mmcblk0p8` and `mmcblk0p9`, the malicious files will remain.

This requires the existing system to routinely schedule execution (i.e. crontab, service, or modify an existing program)

## Example

`echo "* * * * * echo z5206677 - upgrade persistence > /mnt/updbuf/pwn" | crontab`

Note: During firmware upgrades, it takes much less than a minute to perform the extract + unmount, so you'll need hope that this executes during the extraction. Otherwise use a faster scheduled command, or modify an existing program