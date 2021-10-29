+++
categories = []
date = 2021-10-29T16:38:37Z
description = "Gaining root access"
series = []
tags = []
title = "I am root!"
toc = true

+++
From the bootloader, we can dump the file `vinda` in the ext4 partition at `emmc2:6`.

    sunxi#ext4load
    ext4load - load binary file from a Ext4 filesystem
    
    Usage:
    ext4load <interface> <dev[:part]> [addr] [filename] [bytes]
              - load binary file 'filename' from 'dev' on 'interface'
                     to address 'addr' from ext4 filesystem
    
    
    sunxi#ext4load mmc 2:6 0 vinda
    Loading file "vinda" from mmc device 2:6
    16 bytes read
    
    sunxi#md 0 4
    00000000: 5b415243 51454346 54505042 525f5655    CRA[FCEQBPPTUV_R

The string of bytes can be XOR'd with the byte `0x37` to gain the root password.  
For my device, the decrypted password is `tevlqtrfuggcbahe`.

***

## uname -a

    Linux rockrobo 3.4.39 #1 SMP PREEMPT Wed Mar 25 20:47:59 CST 2020 armv7l armv7l armv7l GNU/Linux