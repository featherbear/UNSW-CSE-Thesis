+++
categories = []
date = 2021-10-30T05:09:12Z
description = "We've got root, now what?"
series = []
tags = []
title = "System Imaging"
toc = true

+++
Once root [is acquired](../i-am-root/), we need a way to dump the entire filesystem on the flash chip - so that we can do some (safer) offline analysis of the system. What's the best way to do this?

***

## dd

Make an exact (byte-to-byte) copy of the disk - will also include unused space

    sudo dd if=/dev/mmcblk0 of=/path/to/backup/directory/backup.img bs=1M

## rsync

> File-level sync

## dump

> apt install dump

    dump -0af sda1-root-level0.dump /dev/sda

The upsides:

* `dump` gets a complete copy of the filesystem, including ACLs, extended attributes, ownership, sparse files, special filesystem attributes — everything is dumped as-is.
* It'll only copy the blocks you need, ignoring unused ones.
* It's standard unix tool and readable by a lot of other unix tools.

The downsides:

* it will produce corrupted snapshots if the file system is written to during the dump
* it's more difficult to mount the backed up image (which you can do with disk images) or get to individual files (which you can get with `rsync` backups).
* It's filesystem type-specific. You can dump an `ext3` filesystem and restore it in an `ext4` one, but you can'd dump _any_ type of filesystem. Most mature filesystems have their ownd `dump` versions. The standard Debian `dump` does `ext2`, `ext3` and `ext4`. If you use a Flash-specific

Source: [https://unix.stackexchange.com/questions/41399/system-image-of-running-debian-system](https://unix.stackexchange.com/questions/41399/system-image-of-running-debian-system "https://unix.stackexchange.com/questions/41399/system-image-of-running-debian-system")

***

## Networked Backups

Since there is limited storage on the device, we will need to create the backup over the network. Probably just pipe it with `netcat` I guess