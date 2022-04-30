+++
categories = []
date = 2022-04-30T18:05:20Z
description = ""
series = []
tags = []
title = "Recovery Mode"
toc = true

+++
* flag_recovery: 0x0 - Normal

# Recovery Needed

    Loading file "roborock.conf" from mmc device 2:6
    32 bytes read
    language:language=en
    flag_recovery: 0x0
    flag_command:
    flag_restore_default:
    flag_bootB:0x4
    flag_bootA:0x2
    upgrade stage:0x63
    No upgradeover system found, check if has normal system, pmu: 0x73776368
    flag a=2,flag b=4,will be recover system
    play opt/rockrobo/resources/sounds/en/bl_recovery_bootfailed.wav
    Loading file "opt/rockrobo/resources/sounds/en/bl_recovery_bootfailed.wav" from mmc device 2:7
    195238 bytes read
    sunxi codec request dma 0x5ebb47b4
    rr_recovery_pre_check:716:found recovery num 3
    Loading file "/boot/zImage" from mmc device 2:7
    3882616 bytes read
    part recovery valid
    recovery from "recovery" to "system_a"
    cover init begin
    found recovery
    set src start=0,src_size=0
    found system_a
    set dest start=645922816,dest_size=536870912
    real_cover:141:total size=536870912,block=1048576
    
    MMC read: dev # 2, block # 253952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1302528, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 262144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1310720, count 8192 ... 8192 blocks write: OK
    
# ba