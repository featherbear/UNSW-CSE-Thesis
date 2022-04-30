+++
categories = []
date = 2022-04-30T17:22:04Z
description = ""
series = []
tags = []
title = "Post-login Actions"
toc = true

+++
    mkdir -p ~/z5206677
    
    # The system doesn't have curl, wget, htop
    
    
    # Turn off iptables
    

# Gaining SSH Access

> Enter commands via serial (baud 115200)

* Remove drop port 22 rule
  * `iptables -D INPUT -p tcp -m tcp --dport 22 -j DROP`

## Set up SSH access via public key

* `ssh-keygen`
* `ssh-copy-id root@192.168.8.1` (IP address during AP mode \[i.e. setup\])

# Imaging

    # Dump the eMMC via SSH to a local computer
    
    IP=192.168.8.1
    for partition in `ssh root@$IP "ls /dev/mmcblk0?* -1"`
    do
        ssh root@$IP "sudo dd if=$partition bs=1M" | dd of=$(basename $partition).img
    done

[https://featherbear.cc/UNSW-CSE-Thesis/posts/device-actions/](https://featherbear.cc/UNSW-CSE-Thesis/posts/device-actions/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/device-actions/")

    hj