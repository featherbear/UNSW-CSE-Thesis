+++
categories = []
date = 2021-10-29T16:35:19Z
description = ""
series = []
tags = []
title = "Shutdown log (v01.15.58)"
toc = true

+++

```
*-boot0 version : 4.0.0
fel_flag = 0x00000000
rtc[0] value = 0x00000000
rtc[1] value = 0x00000000
rtc[2] value = 0x00000000
rtc[3] value = 0x00000000
DRAM DRIVE INFO: V1.7
DRAM Type =3 (2:DDR2,3:DDR3,6:LPDDR2,7:LPDDR3)
DRAM zq value: 00003bbbDRAM CLK =552 MHZ
ID CHECK VERSION: V0.1
using ic R16
USE PLL DDR1
USE PLL NORMAL
PLL FREQUENCE = 1104 MHZ
DRAM PLL DDR1 frequency extend open !
DRAM master priority setting ok.
Auto calculate timing parameter!
para_dram_tpr0 = 0047214f
para_dram_tpr1 = 01c2294b
para_dram_tpr2 = 00061043
tcl = 6,tcwl = 4
DRAM TIMING PARA0 = 0b0e180b
DRAM TIMING PARA1 = 0003040f
DRAM TIMING PARA2 = 0406050a
DRAM TIMING PARA3 = 0000400c
DRAM TIMING PARA4 = 05020405
DRAM TIMING PARA5 = 05050403
DRAM TIMING PARA8 = 90003310
DRAM PHY INTERFACE PARA = 02040102
DRAM VTC is disable
DRAM dynamic DQS/DQ ODT is on
DRAM DQS gate is PD mode.
DRAM one rank training is on,the value is 91003587
DRAM work mode register value = 004318e4
DRAM SIZE =512 M
set one rank ODTMAP
DRAM simple test OK.
dram size =512
card boot number = 2
card no is 2
sdcard 2 line count 4
[mmc]: mmc driver ver 2015-04-13 15:56:39
[mmc]: ***Try SD card 2***
[mmc]: mmc 2 cmd 8 err 00000100
[mmc]: mmc 2 cmd 8 err 00000100
[mmc]: mmc 2 send if cond failed
[mmc]: mmc 2 cmd 55 err 00000100
[mmc]: mmc 2 cmd 55 err 00000100
[mmc]: mmc 2 send app cmd failed
[mmc]: ***Try MMC card 2***
[mmc]: mmc re-update_phase
[mmc]: mmc re-update_phase
[mmc]: 4bit bus ddr!!! 
[mmc]: mmc re-update_phase
[mmc]: MMC ver 5.0
[mmc]: SD/MMC Card: 4bit, capacity: 3776MB
[mmc]: vendor: Man 00110100 Snr 025e3285
[mmc]: product: 004GA
[mmc]: revision: 3.0
[mmc]: ***SD/MMC 2 init OK!!!***
sdcard 2 init ok
The size of uboot is 000c0000.
sum=c77486de
src_sum=c77486de
set_mmc_para,sdly 50M 0
set_mmc_para,sdly 25M 0
Succeed in loading uboot from sdmmc flash.
Ready to disable icache.
Jump to secend Boot.
[      0.340]U-Boot 2011.09-rc1-dirty (Mar 25 2020 - 20:45:43) Allwinner Technology 
normal or secure os
pmbus:   ready
PMU: AXP221
BOOT_POWER22_POK_SET: 59
BOOT_POWER22_POK_SET: 1
PMU: AXP22x found
bat_vol=2, ratio=100
PMU: dcdc3 1240
PMU: pll1 1008 Mhz,PLL6=600 Mhz
AXI=336 Mhz,AHB=200 Mhz, APB1=100 Mhz 
set power on vol to default
dcdc1_vol = 3300
dcdc2_vol = 1100
dcdc3_vol = 1240
dcdc5_vol = 1500
aldo1_vol = 3300
aldo2_vol = 2500
aldo3_vol = 3000
find power_sply to end
vbus not exist
vbus dc exist, limit to dc
fel key old mode
run key detect
no key found
no key input
dram_para_set start
dram_para_set end
DRAM:  512 MiB
relocation Offset is: 1b00c000
save config for small mem_size 
smcl's set manager is NULL
workmode = 0
MMC:     2

sunxi flash init ok
[      0.798]board_status_probe
[      0.801]boot_reason init from pmic, set to env: 0x0
[      0.806]boot reason=0x0, is boot from poweroff
[      0.811]recovery detect id val: 0
[      0.814]usb vbus gpio fd: 1386422328
[      0.818]usb vbus cable not connectted
[      0.822]board_check_vbus2boot = 0
[      0.825]axp_probe_key loop: 499
[      0.840]axp_probe_key loop: 498
[      0.854]axp_probe_key loop: 497
[      0.868]axp_probe_key loop: 496
[      0.882]axp_probe_key loop: 495
[      0.896]axp_probe_key loop: 494
[      0.910]axp_probe_key loop: 493
[      0.924]axp_probe_key loop: 492
[      0.938]axp_probe_key loop: 491
[      0.952]axp_probe_key loop: 490
[      0.966]axp_probe_key loop: 489
[      0.980]axp_probe_key loop: 488
[      0.994]axp_probe_key loop: 487
[      1.008]axp_probe_key loop: 486
[      1.022]axp_probe_key loop: 485
[      1.036]axp_probe_key loop: 484
[      1.050]axp_probe_key loop: 483
[      1.064]axp_probe_key loop: 482
[      1.078]axp_probe_key loop: 481
[      1.092]axp_probe_key loop: 480
[      1.106]axp_probe_key loop: 479
[      1.120]axp_probe_key loop: 478
[      1.134]axp_probe_key loop: 477
[      1.148]axp_probe_key loop: 476
[      1.162]axp_probe_key loop: 475
[      1.176]axp_probe_key loop: 474
[      1.190]axp_probe_key loop: 473
[      1.204]axp_probe_key loop: 472
[      1.218]axp_probe_key loop: 471
[      1.232]axp_probe_key loop: 470
[      1.246]axp_probe_key loop: 469
[      1.260]axp_probe_key loop: 468
[      1.274]axp_probe_key loop: 467
[      1.288]axp_probe_key loop: 466
[      1.302]axp_probe_key loop: 465
[      1.316]axp_probe_key loop: 464
[      1.330]axp_probe_key loop: 463
[      1.344]axp_probe_key loop: 462
[      1.358]axp_probe_key loop: 461
[      1.372]axp_probe_key loop: 460
[      1.386]axp_probe_key loop: 459
[      1.400]axp_probe_key loop: 458
[      1.414]axp_probe_key loop: 457
[      1.428]axp_probe_key loop: 456
[      1.442]axp_probe_key loop: 455
[      1.456]axp_probe_key loop: 454
[      1.470]axp_probe_key loop: 453
[      1.484]axp_probe_key loop: 452
[      1.498]axp_probe_key loop: 451
[      1.512]axp_probe_key loop: 450
[      1.526]axp_probe_key loop: 449
[      1.540]axp_probe_key loop: 448
[      1.554]axp_probe_key loop: 447
[      1.568]axp_probe_key loop: 446
[      1.582]axp_probe_key loop: 445
[      1.596]axp_probe_key loop: 444
[      1.610]axp_probe_key loop: 443
[      1.624]axp_probe_key loop: 442
[      1.638]axp_probe_key loop: 441
[      1.652]axp_probe_key loop: 440
[      1.666]axp_probe_key loop: 439
[      1.680]axp_probe_key loop: 438
[      1.694]axp_probe_key loop: 437
[      1.708]axp_probe_key loop: 436
[      1.722]axp_probe_key loop: 435
[      1.736]axp_probe_key loop: 434
[      1.750]axp_probe_key loop: 433
[      1.764]axp_probe_key loop: 432
[      1.778]axp_probe_key loop: 431
[      1.792]axp_probe_key loop: 430
[      1.806]axp_probe_key loop: 429
[      1.820]axp_probe_key loop: 428
[      1.834]axp_probe_key loop: 427
[      1.848]axp_probe_key loop: 426
[      1.862]axp_probe_key loop: 425
[      1.876]axp_probe_key loop: 424
[      1.890]axp_probe_key loop: 423
[      1.904]axp_probe_key loop: 422
[      1.918]axp_probe_key loop: 421
[      1.932]axp_probe_key loop: 420
[      1.946]axp_probe_key loop: 419
[      1.960]axp_probe_key loop: 418
[      1.974]axp_probe_key loop: 417
[      1.988]axp_probe_key loop: 416
[      2.002]axp_probe_key loop: 415
[      2.016]axp_probe_key loop: 414
[      2.030]axp_probe_key loop: 413
[      2.044]axp_probe_key loop: 412
[      2.058]axp_probe_key loop: 411
[      2.072]axp_probe_key loop: 410
[      2.086]axp_probe_key loop: 409
[      2.100]axp_probe_key loop: 408
[      2.114]axp_probe_key loop: 407
[      2.128]axp_probe_key loop: 406
[      2.142]axp_probe_key loop: 405
[      2.156]axp_probe_key loop: 404
[      2.170]axp_probe_key loop: 403
[      2.184]axp_probe_key loop: 402
[      2.198]axp_probe_key loop: 401
[      2.212]axp_probe_key loop: 400
[      2.226]axp_probe_key loop: 399
[      2.240]axp_probe_key loop: 398
[      2.254]axp_probe_key loop: 397
[      2.268]axp_probe_key loop: 396
[      2.282]axp_probe_key loop: 395
[      2.296]axp_probe_key loop: 394
[      2.310]axp_probe_key loop: 393
[      2.324]axp_probe_key loop: 392
[      2.338]axp_probe_key loop: 391
[      2.352]axp_probe_key loop: 390
[      2.366]axp_probe_key loop: 389
[      2.380]axp_probe_key loop: 388
[      2.394]axp_probe_key loop: 387
[      2.408]axp_probe_key loop: 386
[      2.422]axp_probe_key loop: 385
[      2.436]axp_probe_key loop: 384
[      2.450]axp_probe_key loop: 383
[      2.464]axp_probe_key loop: 382
[      2.478]axp_probe_key loop: 381
[      2.492]axp_probe_key loop: 380
[      2.506]axp_probe_key loop: 379
[      2.520]axp_probe_key loop: 378
[      2.534]axp_probe_key loop: 377
[      2.548]axp_probe_key loop: 376
[      2.562]axp_probe_key loop: 375
[      2.576]axp_probe_key loop: 374
[      2.590]axp_probe_key loop: 373
[      2.604]axp_probe_key loop: 372
[      2.618]axp_probe_key loop: 371
[      2.632]axp_probe_key loop: 370
[      2.646]axp_probe_key loop: 369
[      2.660]axp_probe_key loop: 368
[      2.674]axp_probe_key loop: 367
[      2.688]axp_probe_key loop: 366
[      2.702]axp_probe_key loop: 365
[      2.716]axp_probe_key loop: 364
[      2.730]axp_probe_key loop: 363
[      2.744]axp_probe_key loop: 362
[      2.758]axp_probe_key loop: 361
[      2.772]axp_probe_key loop: 360
[      2.786]axp_probe_key loop: 359
[      2.800]axp_probe_key loop: 358
[      2.814]axp_probe_key loop: 357
[      2.828]axp_probe_key loop: 356
[      2.842]axp_probe_key loop: 355
[      2.856]axp_probe_key loop: 354
[      2.870]axp_probe_key loop: 353
[      2.884]axp_probe_key loop: 352
[      2.898]axp_probe_key loop: 351
[      2.912]axp_probe_key loop: 350
[      2.926]axp_probe_key loop: 349
[      2.940]axp_probe_key loop: 348
[      2.954]axp_probe_key loop: 347
[      2.968]axp_probe_key loop: 346
[      2.982]axp_probe_key loop: 345
[      2.996]axp_probe_key loop: 344
[      3.010]axp_probe_key loop: 343
[      3.024]axp_probe_key loop: 342
[      3.038]axp_probe_key loop: 341
[      3.052]axp_probe_key loop: 340
[      3.066]axp_probe_key loop: 339
[      3.080]axp_probe_key loop: 338
[      3.094]axp_probe_key loop: 337
[      3.108]axp_probe_key loop: 336
[      3.122]axp_probe_key loop: 335
[      3.136]axp_probe_key loop: 334
[      3.150]axp_probe_key loop: 333
[      3.164]axp_probe_key loop: 332
[      3.178]axp_probe_key loop: 331
[      3.192]axp_probe_key loop: 330
[      3.206]axp_probe_key loop: 329
[      3.220]axp_probe_key loop: 328
[      3.234]axp_probe_key loop: 327
[      3.248]axp_probe_key loop: 326
[      3.262]axp_probe_key loop: 325
[      3.276]axp_probe_key loop: 324
[      3.290]axp_probe_key loop: 323
[      3.304]axp_probe_key loop: 322
[      3.318]axp_probe_key loop: 321
[      3.332]axp_probe_key loop: 320
[      3.346]axp_probe_key loop: 319
[      3.360]axp_probe_key loop: 318
[      3.374]axp_probe_key loop: 317
[      3.388]axp_probe_key loop: 316
[      3.402]axp_probe_key loop: 315
[      3.416]AP boot into normal mode
In:    serial
Out:   serial
Err:   serial
--------fastboot partitions--------
-total partitions:9-
-name-        -start-       -size-      
boot-res    : 1000000       800000      
env         : 1800000       1000000     
app         : 2800000       4000000     
recovery    : 6800000       20000000    
system_a    : 26800000      20000000    
system_b    : 46800000      20000000    
Download    : 66800000      21000000    
reserve     : 87800000      1000000     
UDISK       : 88800000      0           
-----------------------------------
Loading file "./rockrobo/dram.size" from mmc device 2:1
** File not found ./rockrobo/dram.size
unable to open file ./rockrobo/dram.size
base bootcmd=run setargs_mmc boot_normal
bootcmd set setargs_mmc
Loading file "roborock.conf" from mmc device 2:6
32 bytes read
language:language=en
flag_recovery: 0x0
flag_command:
flag_restore_default:
flag_bootB:0x4
flag_bootA:0x1
upgrade stage:0x63
No upgradeover system found, check if has normal system, pmu: 0x0
board_common.c:check_android_misc:will be boot A system
to be run cmd=run setargs_mmc boot_normal
boot A system
WORK_MODE_BOOT
[      3.531]Hit any key to stop autoboot:  0 
Loading file "/boot/zImage" from mmc device 2:8
3882616 bytes read
[      3.635]para err in disp_ioctl, cmd = 0xa,screen id = 1
reload config to 0x43000000 
[      3.687]Starting kernel ...
[      3.687]enable watchdog 1c20cb8 value 0xb1(16s)

Uncompressing Linux... done, booting the kernel.
[    0.000000] Booting Linux on physical CPU 0
[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Linux version 3.4.39 (rockrobo@apimg) (gcc version 4.8.4 (Ubuntu/Linaro 4.8.4-2ubuntu1~14.04.1) ) #1 SMP PREEMPT Wed Mar 25 20:47:59 CST 2020
[    0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
[    0.000000] Machine: sun8i
[    0.000000] cma: CMA: reserved 96 MiB at 5a000000
[    0.000000] Memory policy: ECC disabled, Data cache writealloc
[    0.000000] script_init enter!
[    0.000000] script_init exit!
[    0.000000] PERCPU: Embedded 8 pages/cpu @c0cec000 s10752 r8192 d13824 u32768
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 129920
[    0.000000] Kernel command line: rootwait boot_fs=a console=ttyS0,115200 root=/dev/mmcblk0p8 rootfstype=ext4 loglevel=7 partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1 boot_reason=0x0 location=en boot_ver=2011.09-rc1-dirty
[    0.000000] PID hash table entries: 2048 (order: 1, 8192 bytes)
[    0.000000] Dentry cache hash table entries: 65536 (order: 6, 262144 bytes)
[    0.000000] Inode-cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.000000] Memory: 512MB = 512MB total
[    0.000000] Memory: 411968k/411968k available, 112320k reserved, 0K highmem
[    0.000000] Virtual kernel memory layout:
[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
[    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
[    0.000000]     vmalloc : 0xe0800000 - 0xff000000   ( 488 MB)
[    0.000000]     lowmem  : 0xc0000000 - 0xe0000000   ( 512 MB)
[    0.000000]     modules : 0xbf000000 - 0xc0000000   (  16 MB)
[    0.000000]       .text : 0xc0008000 - 0xc0755628   (7478 kB)
[    0.000000]       .init : 0xc0756000 - 0xc079ba00   ( 279 kB)
[    0.000000]       .data : 0xc079c000 - 0xc07fcea0   ( 388 kB)
[    0.000000]        .bss : 0xc07fe098 - 0xc0858180   ( 361 kB)
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000] NR_IRQS:416
[    0.000000] try to syncboot of clk ats
[    0.000000] try to syncboot of clk sdmmc2mod
[    0.000000] try to syncboot of clk uart0
[    0.000000] try to syncboot of clk pll_ddr1
[    0.000000] try to syncboot of clk debe0
[    0.000000] try to syncboot of clk dma
<6>[    0.000000] try to syncboot of clk sat
[    0.000000] try to syncboot of clk pio
[    0.000000] try to syncboot of clk mbus
[    0.000000] try to syncboot of clk drc0
[    0.000000] try to syncboot of clk lvds
[    0.000000] try to syncboot of clk axi
[    0.000000] Architected local timer running at 24.00MHz.
[    0.000000] Switching to timer-based delay loop
[    0.000000] sched_clock: 32 bits at 24MHz, resolution 41ns, wraps every 178956ms
[    0.000000] Console: colour dummy device 80x30
[    0.000240] Calibrating delay loop (skipped), value calculated using timer frequency.. 4800.00 BogoMIPS (lpj=24000000)
[    0.000268] pid_max: default: 32768 minimum: 301
[    0.000581] Mount-cache hash table entries: 512
[    0.001641] Initializing cgroup subsys debug
[    0.001661] Initializing cgroup subsys cpuacct
[    0.001674] Initializing cgroup subsys freezer
[    0.001719] CPU: Testing write buffer coherency: ok
[    0.001777] ftrace: allocating 19622 entries in 58 pages
[    0.030304] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
[    0.030325] [sunxi_smp_prepare_cpus] enter
[    0.030374] Setting up static identity map for 0x4050d630 - 0x4050d688
[    0.010000] CPU1: Booted secondary processor
[    0.010000] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001
[    0.010000] CPU2: Booted secondary processor
[    0.010000] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002
[    0.010000] CPU3: Booted secondary processor
[    0.010000] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003
[    0.210233] Brought up 4 CPUs
[    0.210253] SMP: Total of 4 processors activated (19200.00 BogoMIPS).
[    0.210550] devtmpfs: initialized
[    0.214326] pinctrl core: initialized pinctrl subsystem
[    0.214326] dummy: 
[    0.223873] NET: Registered protocol family 16
[    0.241807] DMA: preallocated 2048 KiB pool for atomic coherent allocations
[    0.241912] script_sysfs_init success
[    0.242210] sunxi pinctrl probe enter
[    0.242910] gpiochip_add: registered GPIOs 0 to 383 on device: sunxi-pinctrl
[    0.243986] sunxi-pinctrl sunxi-pinctrl: initialized sunXi PIO driver
[    0.244183] axp_pinctrl_probe enter...
[    0.244334] gpiochip_add: registered GPIOs 1024 to 1029 on device: axp-pinctrl
[    0.244357] mainkey total count : 77
[    0.244398] map mainkey [motor_para] to pinctrl, map number [2]
[    0.244463] axp pinctrl driver probe ok
[    0.245505] [sunxi-module]: [sunxi-module.0] probe success
[    0.245550] script config pll3 to 297 Mhz
[    0.245567] script config pll4 to 300 Mhz
[    0.245603] script config pll6 to 600 Mhz
[    0.245618] script config pll8 to 408 Mhz
[    0.245641] script config pll9 to 480 Mhz
[    0.245656] script config pll10 to 297 Mhz
[    0.245665] sunxi_default_clk_init
[    0.245674] try to set pll6ahb1 to 200000000
[    0.245727] try to set ahb clk source to pll6ahb1
[    0.245737] set ahb clk source to pll6ahb1
[    0.245757] set apb2 to low freq 1.2 Mhz
[    0.245786] set ahb clk source to pll6
[    0.245796] recove apb2 to pre freq 24000000
[    0.245811] try to set ahb1 to 200000000
[    0.245824] try to set apb1 to 100000000
[    0.245841] script config apb2 to 37 Mhz
[    0.250929] bio: create slab <bio-0> at 0
[    0.250929] [ARISC] :sunxi-arisc driver v1.60
[    0.288229] [ARISC] :arisc version: [v0.0.76]
[    0.288244] [sunxi-module]: arisc register success
[    0.507529] [ARISC] :sunxi-arisc driver v1.60 startup succeeded
[    0.510548] SCSI subsystem initialized
[    0.510694] usbcore: registered new interface driver usbfs
[    0.510771] usbcore: registered new interface driver hub
[    0.510815] usbcore: registered new device driver usb
[    0.510815] twi_chan_cfg()350 - [twi0] has no twi_regulator.
[    0.510815] twi_chan_cfg()350 - [twi1] has no twi_regulator.
[    0.510815] twi_chan_cfg()350 - [twi2] has no twi_regulator.
[    0.510815] Linux video capture interface: v2.00
[    0.510041] axp22_board axp22_board: AXP (CHIP ID: 0x06) detected
[    0.511814] axp22_dcdc1: 1600 <--> 3400 mV at 3300 mV 
[    0.511814] axp22_dcdc2: 600 <--> 1540 mV at 1100 mV 
[    0.511814] axp22_dcdc3: 600 <--> 1860 mV at 1240 mV 
[    0.511814] axp22_dcdc4: 600 <--> 1540 mV at 1100 mV 
[    0.511814] axp22_dcdc5: 1000 <--> 2550 mV at 1500 mV 
[    0.511814] axp22_rtc: 3000 mV 
[    0.511814] axp22_aldo1: 700 <--> 3300 mV at 3300 mV 
[    0.511814] axp22_aldo2: 700 <--> 3300 mV at 2500 mV 
[    0.511814] axp22_aldo3: 700 <--> 3300 mV at 3000 mV 
[    0.511814] axp22_dldo1: 700 <--> 3300 mV at 700 mV 
[    0.511814] axp22_dldo2: 700 <--> 3300 mV at 700 mV 
[    0.511814] axp22_dldo3: 700 <--> 3300 mV at 700 mV 
[    0.520139] axp22_dldo4: 700 <--> 3300 mV at 700 mV 
[    0.520222] axp22_eldo1: 700 <--> 3300 mV at 700 mV 
[    0.520222] axp22_eldo1: supplied by axp22_dcdc1
[    0.520296] axp22_eldo2: 700 <--> 3300 mV at 700 mV 
[    0.520296] axp22_eldo2: supplied by axp22_dcdc1
[    0.520296] axp22_eldo3: 700 <--> 3300 mV at 700 mV 
[    0.520296] axp22_eldo3: supplied by axp22_dcdc1
[    0.520296] axp22_dc5ldo: 700 <--> 1400 mV at 1100 mV 
[    0.520296] axp22_ldoio0: 700 <--> 3300 mV at 3800 mV 
[    0.520296] axp22_ldoio1: 700 <--> 3300 mV at 3800 mV 
[    0.520296] axp22_dc1sw: at 700 mV 
[    0.520296] axp22_dc1sw: supplied by axp22_dcdc1
[    0.520434] input: axp22-supplyer as /devices/platform/axp22_board/axp22-supplyer.20/input/input0
[    0.520733] now_rest_vol = 0
[    0.520733] Advanced Linux Sound Architecture Driver Version 1.0.25.
[    0.521114] cfg80211: Calling CRDA to update world regulatory domain
[    0.521178] Switching to clocksource arch_sys_counter
[    0.535652] FS-Cache: Loaded
[    0.535992] CacheFiles: Loaded
[    0.546665] [usb_manager]: CONFIG_USB_SUNXI_USB0_OTG
[    0.546704] get usbc0(usb_restrict pin) failed
[    0.547115] [sw_udc]: udc_init: version 20080411
[    0.547724] [ddrfreq] dram_clk value is 552
[    0.547736] [ddrfreq] sunxi_ddrfreq_max=552000
[    0.547747] [ddrfreq] dram_type value is 3
[    0.547758] [ddrfreq] dram_zq value is 0x3bbb
[    0.547768] [ddrfreq] dram_odt_en value is 1
[    0.547779] [ddrfreq] dram_para1 value is 0x10f20200
[    0.547790] [ddrfreq] dram_para2 value is 0x0
[    0.547800] [ddrfreq] dram_mr0 value is 0x1c70
[    0.547811] [ddrfreq] dram_mr1 value is 0x40
[    0.547821] [ddrfreq] dram_mr2 value is 0x18
[    0.547832] [ddrfreq] dram_mr3 value is 0x0
[    0.547842] [ddrfreq] dram_tpr0 value is 0x47214f
[    0.547853] [ddrfreq] dram_tpr1 value is 0x1c2294b
[    0.547865] [ddrfreq] dram_tpr2 value is 0x61043
[    0.547875] [ddrfreq] dram_tpr3 value is 0x0
[    0.547886] [ddrfreq] dram_tpr4 value is 0x0
[    0.547896] [ddrfreq] dram_tpr5 value is 0x0
[    0.547906] [ddrfreq] dram_tpr6 value is 0x0
[    0.547917] [ddrfreq] dram_tpr7 value is 0x0
[    0.547927] [ddrfreq] dram_tpr8 value is 0x0
[    0.547938] [ddrfreq] dram_tpr9 value is 0x0
[    0.547948] [ddrfreq] dram_tpr10 value is 0x0
[    0.547959] [ddrfreq] dram_tpr11 value is 0x0
[    0.547970] [ddrfreq] dram_tpr12 value is 168
[    0.547979] [ddrfreq] sunxi_ddrfreq_min=168000
[    0.547990] [ddrfreq] dram_tpr13 value is 0x10901
[    0.548175] [dsm] use sysconfig
[    0.548185] [dsm] -----------Dram scene-freq Table------------
[    0.548197] [dsm] scene =    0       frequency = 552000KHz
[    0.548208] [dsm] scene =    1       frequency = 360000KHz
[    0.548218] [dsm] scene =    2       frequency = 240000KHz
[    0.548229] [dsm] scene =    3       frequency = 168000KHz
[    0.548238] [dsm] --------------------------------------------
[    0.548365] [ddrfreq] LV_count value is 3
[    0.548389] [ddrfreq] ---------------Dram V-F Table---------------
[    0.548402] [ddrfreq] voltage = 1100mv       frequency = 552000KHz
[    0.548413] [ddrfreq] voltage = 1100mv       frequency = 360000KHz
[    0.548424] [ddrfreq] voltage = 1100mv       frequency =    0KHz
[    0.548434] [ddrfreq] --------------------------------------------
[    0.548583] [ddrfreq] last_vdd=1100
[    0.548661] [ddrfreq] __sram_start: 0xc07fd000, __sram_end: 0xc07fe074, __sram_text_start: 0xf0000000, __sram_data_end: 0xf0001074
[    0.548677] [ddrfreq] sunxi dramfreq probe ok!
[    0.549021] NET: Registered protocol family 2
[    0.549347] IP route cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.549992] TCP established hash table entries: 16384 (order: 5, 131072 bytes)
[    0.550308] TCP bind hash table entries: 16384 (order: 5, 196608 bytes)
[    0.550569] TCP: Hash tables configured (established 16384 bind 16384)
[    0.550582] TCP: reno registered
[    0.550598] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    0.550626] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    0.550965] NET: Registered protocol family 1
[    0.551406] RPC: Registered named UNIX socket transport module.
[    0.551422] RPC: Registered udp transport module.
[    0.551432] RPC: Registered tcp transport module.
[    0.551442] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.551892] [pm]aw_pm_init!
[    0.551907] standby_mode = 1. 
[    0.551917] wakeup src cnt is : 1. 
[    0.551929] [exstandby]leave extended_standby_enable_wakeup_src : event 0x2000
[    0.551942] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_map 0x80
[    0.551955] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_group 0x0
[    0.551969] sunxi_reg_init enter
[    0.555421] NTFS driver 2.1.30 [Flags: R/W].
[    0.555641] fuse init (API version 7.18)
[    0.556130] msgmni has been set to 996
[    0.557884] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 253)
[    0.557905] io scheduler noop registered
[    0.557916] io scheduler deadline registered
[    0.558022] io scheduler cfq registered (default)
[    0.558439] pwm module init!
[    0.559019] sw_uart_get_devinfo()1476 - uart0 has no uart_regulator.
[    0.559040] sw_uart_get_devinfo()1476 - uart1 has no uart_regulator.
[    0.559056] sw_uart_get_devinfo()1476 - uart2 has no uart_regulator.
[    0.559599] uart0: ttyS0 at MMIO 0x1c28000 (irq = 32) is a SUNXI
[    0.559623] sw_console_setup()1236 - console setup baud 115200 parity n bits 8, flow n
[    0.559648] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    0.595951] axp22_mfd_irq_work: 4000020000:600080cf6c
[    0.596299] axp22_mfd_irq_work: 20000:600080cf6c
[    0.709424] console [ttyS0] enabled
[    0.709795] uart1: ttyS1 at MMIO 0x1c28400 (irq = 33) is a SUNXI
[    0.710119] uart2: ttyS2 at MMIO 0x1c28800 (irq = 34) is a SUNXI
[    0.714853] loop: module loaded
[    0.715037] [MCU_UART] sent ap resume event to mcu
[    0.715237] TIMER1_INTVAL_REG = 5dc
[    0.715408] jiffies initialized success
[    0.715416] [lds]: lds_module_init module init!
[    0.715595] [lds]: lds_motor_probe
[    0.716089] input: lds_input as /devices/virtual/input/input1
[    0.716164] [wifi_pm]: select wifi: rtl8189es !!
[    0.716325] [rtl8189es]: exec rtl8189es_wifi_gpio_init
[    0.716336] [rtl8189es]: module power name axp22_dldo1
[    0.716345] [rtl8189es]: module power ext1 name axp22_dldo2
[    0.716354] [rtl8189es]: failed to fetch wifi_power_ext2
[    0.716364] [rtl8189es]: use wifi card shutdown pin
[    0.716371] [rtl8189es]: rtl8189es module power set by axp.
[    0.716471] [rtl8189es]: first time
[    0.803493] [rtl8189es]: regulator on.
[    1.996218] [rtl8189es]: gpio rtl8189es_shdn set val 0, act val 0
[    2.002915] [wifi_pm]: wifi gpio init is OK !!
[    2.007806] module init!
[    2.010597] [hwinfo]: hwinfo_mod_init E
[    2.014790] [hwinfo]: 0, 0
[    2.017746] [hwinfo]: 2, 0
[    2.020922] tun: Universal TUN/TAP device driver, 1.6
[    2.026437] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.033431] PPP generic driver version 2.4.2
[    2.038287] PPP BSD Compression module registered
[    2.043519] PPP Deflate Compression module registered
[    2.049912] PPP MPPE Compression module registered
[    2.055169] NET: Registered protocol family 24
[    2.060067] [sw_hcd0]: usb host driver initialize........
[    2.066055] [sw_hcd0]: open_usb_clock
[    2.070158] get usb_regulator id vbus is nocare
[    2.075099] [sunxi_hcd0]: host_init_state = 0
[    2.079849] [sw_hcd0]: platform is usb host
[    2.084481] [sw_hcd0]: sunxi_hcd_init_controller: sunxi_hcd_host0: USB Host mode controller at f1c19000 using PIO, IRQ 103
[    2.096566] sunxi_hcd_host0 sunxi_hcd_host0: sunxi_hcd host driver
[    2.103329] sunxi_hcd_host0 sunxi_hcd_host0: new USB bus registered, assigned bus number 1
[    2.113108] hub 1-0:1.0: USB hub found
[    2.117214] hub 1-0:1.0: 1 port detected
[    2.121928] [sw_hcd0]: sunxi_usb_host0_disable start
[    2.127350] [sw_hcd0]: sunxi_hcd_wait_for_disconnect cnt=0
[    2.133360] [sunxi_hcd_host0]: Set USB Power OFF
[    2.138400] -------sunxi_hcd0_soft_disconnect---------
[    2.143343] wrn: hcd is not enable, need not stop hcd
[    2.149529] [sunxi_hcd_host0]: Set USB Power OFF
[    2.154605] [sw_hcd0]: close_usb_clock
[    2.158715] [sw_hcd0]: sunxi_usb_host0_disable end
[    2.164743] sunxi-rtc sunxi-rtc: rtc core: registered sunxi-rtc as rtc0
[    2.172126] sunxi cedar version 0.1 
[    2.176071] [cedar]: install start!!!
[    2.180291] [cedar]: install end!!!
[    2.188001] sunxi_wdt_init_module: sunxi WatchDog Timer Driver v1.0
[    2.195078] sunxi_wdt_probe: devm_ioremap return wdt_reg 0xf1c20ca0, res->start 0x01c20ca0, res->end 0x01c20cbf
[    2.206131] sunxi wdt request irq 57 ok
[    2.210527] sunxi_wdt_probe: initialized (g_timeout=16s, g_nowayout=0)
[    2.217649] [boot_reason]: br_wdt_check entry
[    2.222602] sunxi wdt start in uboot
[    2.227053] device-mapper: ioctl: 4.22.0-ioctl (2011-10-19) initialised: dm-devel@redhat.com
[    2.236589] autohotplug_init init ok
[    2.240541] sunxi_cpufreq_initcall: clocks pll=1008000000,cpu=1008000000,axi=336000000
[    2.249185] cur: pll=1008000000, cpudiv=1, axidiv=3
[    2.254536] axp22_dcdc3: Failed to create debugfs directory
[    2.260647] sunxi_cpufreq_initcall, get cpu frequency from sysconfig, max freq: 1200MHz, min freq: 648MHz
[    2.271132] -------------------CPU V-F Table--------------------
[    2.277684]  frequency = 1536000KHz  voltage = 1500mv
[    2.283211]  frequency = 1344000KHz  voltage = 1460mv
[    2.288722]  frequency = 1200000KHz  voltage = 1360mv
[    2.294243]  frequency = 1008000KHz  voltage = 1240mv
[    2.299752]  frequency = 816000KHz   voltage = 1140mv
[    2.305181]  frequency = 648000KHz   voltage = 1140mv
[    2.310607]  frequency =    0KHz     voltage = 1120mv
[    2.315832]  frequency =    0KHz     voltage = 1120mv
[    2.321068] -----------------------------------------------------
[    2.328051] [mmc]: SD/MMC/SDIO Host Controller Driver(v1.117 2015-12-1 14:13) Compiled in Mar 25 2020 at 20:47:21
[    2.339311] [mmc]: get mmc1's sdc_power failed
[    2.344195] [mmc]: get mmc2's sdc_power failed
[    2.349041] [mmc]: get mmc2's 2xmode ok, val = 1
[    2.354094] [mmc]: get mmc2's ddrmode ok, val = 1
[    2.359229] [mmc]: MMC host used card: 0x6, boot card: 0x4, io_card 2
[    2.367789] [mmc]: mmc not poweroff notifiy
[    2.372415] [mmc]: sdc2 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.383135] [mmc]: sdc2 set ios: clk 0Hz bm PP pm UP vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.393016] [mmc]: mmc not poweroff notifiy
[    2.394216] [mmc]: sdc2 power_supply is null
[    2.402252] [mmc]: sdc1 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.410047] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.425455] usbcore: registered new interface driver usbhid
[    2.430893] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431766] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431804] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.434313] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.436239] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 8,  RTO !!
[    2.436272] *******************Try sdio*******************
[    2.437104] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.437954] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.438804] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439654] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439686] *******************Try sd *******************
[    2.440519] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.441372] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.442224] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443077] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443108] *******************Try mmc*******************
[    2.443122] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443571] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443682] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443789] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.446289] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481293] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481964] [hwinfo]: 1, 0
[    2.481973] [hwinfo]: EMMC: 17, 0x34474130
[    2.493883] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.494031] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494105] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494635] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing MMC-HS(SDR20) dt B
[    2.494840] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.494917] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.495037] mmc0: new high speed DDR MMC card at address 0001
[    2.495549] mmcblk0: mmc0:0001 004GA0 3.68 GiB 
[    2.495812] mmcblk0boot0: mmc0:0001 004GA0 partition 1 2.00 MiB
[    2.496038] mmcblk0boot1: mmc0:0001 004GA0 partition 2 2.00 MiB
[    2.497081]  mmcblk0: p1 p2 p3 < p5 p6 p7 p8 p9 p10 p11 >
[    2.497138] mmcblk0: p1 size 3268608 extends beyond EOD, truncated
[    2.500411]  mmcblk0boot1: unknown partition table
[    2.501714]  mmcblk0boot0: unknown partition table
[    2.501951] *******************mmc init ok *******************
[    2.599534] usbhid: USB HID core driver
[    2.695622] [audiocodec] : aif2 not used!
[    2.746621] [audiocodec] : aif3 not used!
[    2.752637] asoc: sndcodec <-> sunxi-codec mapping ok
[    2.759176] u32 classifier
[    2.762144]     Actions configured
[    2.765852] Netfilter messages via NETLINK v0.30.
[    2.771071] nf_conntrack version 0.5.0 (7973 buckets, 31892 max)
[    2.778036] ctnetlink v0.93: registering with nfnetlink.
[    2.783898] NF_TPROXY: Transparent proxy support initialized, version 4.1.0
[    2.791499] NF_TPROXY: Copyright (c) 2006-2007 BalaBit IT Ltd.
[    2.798291] xt_time: kernel timezone is -0000
[    2.803460] ip_tables: (C) 2000-2006 Netfilter Core Team
[    2.809433] arp_tables: (C) 2002 David S. Miller
[    2.814554] TCP: cubic registered
[    2.818164] Initializing XFRM netlink socket
[    2.823144] NET: Registered protocol family 10
[    2.828911] Mobile IPv6
[    2.831633] ip6_tables: (C) 2000-2006 Netfilter Core Team
[    2.837692] NET: Registered protocol family 17
[    2.842573] NET: Registered protocol family 15
[    2.847421] L2TP core driver, V2.0
[    2.851154] PPPoL2TP kernel driver, V2.0
[    2.855428] L2TP IP encapsulation support (L2TPv3)
[    2.860718] L2TP netlink interface
[    2.864454] L2TP ethernet pseudowire support (L2TPv3)
[    2.870178] VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
[    2.878538] ThumbEE CPU extension supported.
[    2.883215] Registering SWP/SWPB emulation handler
[    2.889230] axp22_dc5ldo: incomplete constraints, leaving on
[    2.895713] axp22_aldo3: incomplete constraints, leaving on
[    2.901853] axp22_aldo2: incomplete constraints, leaving on
[    2.907975] axp22_aldo1: incomplete constraints, leaving on
[    2.914114] axp22_rtc: incomplete constraints, leaving on
[    2.920061] axp22_dcdc5: incomplete constraints, leaving on
[    2.926183] axp22_dcdc4: incomplete constraints, leaving on
[    2.932329] axp22_dcdc3: incomplete constraints, leaving on
[    2.938451] axp22_dcdc2: incomplete constraints, leaving on
[    2.944588] axp22_dcdc1: incomplete constraints, leaving on
[    2.950912] [boot_reason]: module init!
[    2.955109] otg_wakelock_init: No USB transceiver found
[    2.960857] sunxi-rtc sunxi-rtc: setting system clock to 1970-01-01 00:00:07 UTC (7)
[    2.969334] ths_fetch_sysconfig_para: type err  device_used = 1. 
[    2.975998] ths_fetch_sysconfig_para: type err ths_trip1_3 = 110. 
[    2.982769] ths_fetch_sysconfig_para: type err ths_trip1_4 = 110. 
[    2.989508] ths_fetch_sysconfig_para: type err ths_trip1_5 = 110. 
[    2.996261] ths_fetch_sysconfig_para: type err ths_trip1_6 = 110. 
[    3.003011] ths_fetch_sysconfig_para: type err ths_trip1_7 = 110. 
[    3.009755] ths_fetch_sysconfig_para: type err ths_trip1_3_min = 0. 
[    3.016696] ths_fetch_sysconfig_para: type err ths_trip1_3_max = 0. 
[    3.023638] ths_fetch_sysconfig_para: type err ths_trip1_4_min = 0. 
[    3.030576] ths_fetch_sysconfig_para: type err ths_trip1_4_max = 0. 
[    3.037504] ths_fetch_sysconfig_para: type err ths_trip1_5_min = 0. 
[    3.044472] ths_fetch_sysconfig_para: type err ths_trip1_5_max = 0. 
[    3.051416] ths_fetch_sysconfig_para: type err ths_trip1_6_min = 0. 
[    3.058347] ths_fetch_sysconfig_para: type err ths_trip1_6_max = 0. 
[    3.065288] ths_fetch_sysconfig_para: type err ths_trip2_count = 0. 
[    3.072229] ths_fetch_sysconfig_para: type err ths_trip2_0 = 0. 
[    3.078998] input: sunxi-ths as /devices/virtual/input/input2
[    3.085722] suxi_ths: Kernel Thermal management registered
[    3.091734] fetch C0_LV_count from sysconfig failed
[    3.097528] CPU Budget:Register notifier
[    3.101830] CPU Budget:register Success
[    3.106014] sunxi-budget-cooling sunxi-budget-cooling: Cooling device registered: thermal-budget-0
[    3.119038] ALSA device list:
[    3.122318]   #0: audiocodec
[    3.125659] sw_uart_startup()603 - ttyS0 start up by swapper/0, pid 1
[    3.132761] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.148585] EXT4-fs (mmcblk0p8): mounted filesystem with ordered data mode. Opts: (null)
[    3.157640] VFS: Mounted root (ext4 filesystem) on device 179:8.
[    3.165946] devtmpfs: mounted
[    3.169421] Freeing init memory: 276K
Mount failed for selinuxfs on /sys/fs/selinux:  No such file or directory
[    3.240070] sw_uart_shutdown()635 - ttyS0 shut down by init, pid 1
[    3.313994] sw_uart_startup()603 - ttyS0 start up by init, pid 79
[    3.320822] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.352090] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 79
[    3.406011] init: plymouth-upstart-bridge main process (79) terminated with status 1
[    3.414763] init: plymouth-upstart-bridge main process ended, respawning
[    3.428705] sw_uart_startup()603 - ttyS0 start up by init, pid 89
[    3.435622] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.458320] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 89
[    3.486228] init: plymouth-upstart-bridge main process (89) terminated with status 1
[    3.494856] init: plymouth-upstart-bridge main process ended, respawning
[    3.503862] init: ureadahead main process (82) terminated with status 5
[    3.518153] sw_uart_startup()603 - ttyS0 start up by init, pid 92
[    3.524955] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.544354] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 92
[    3.566103] init: plymouth-upstart-bridge main process (92) terminated with status 1
[    3.574834] init: plymouth-upstart-bridge main process ended, respawning
[    3.595515] sw_uart_startup()603 - ttyS0 start up by init, pid 98
[    3.602299] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.661637] EXT4-fs (mmcblk0p1): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.785758] EXT4-fs (mmcblk0p6): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.882416] EXT4-fs (mmcblk0p10): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.962677] EXT4-fs (mmcblk0p11): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
 * Starting Signal sysvinit that the rootfs is mounted                   [ OK ]
 * Starting Populate /dev filesystem                                     [ OK ]
 * Stopping Populate /dev filesystem                                     [ OK ]
 * Starting Clean /tmp directory                                         [ OK ]
 * Stopping Clean /tmp directory                                         [ OK ]
 * Starting Populate and link to /run filesystem                         [ OK ]
 * Stopping Populate and link to /run filesystem                         [ OK ]
 * Stopping Track if upstart is running in a container                   [ OK ]
 * Starting Initialize or finalize resolvconf                            [ OK ]
 * Starting set console keymap                                           [ OK ]
 * Starting Signal sysvinit that virtual filesystems are mounted         [ OK ]
 * Starting Signal sysvinit that virtual filesystems are mounted         [ OK ]
 * Stopping set console keymap                                           [ OK ]
 * Starting Signal sysvinit that remote filesystems are mounted          [ OK ]
 * Starting Bridge udev events into upstart                              [ OK ]
 * Starting device node and kernel event manager                         [ OK ]
 * Starting load modules from /etc/modules                               [ OK ]
 * Starting cold plug devices                                            [ OK ]
 * Starting rockrobo play bootring service                               [ OK ]
 * Starting log initial device creation                                  [ OK ]
 * Stopping load modules from /etc/modules                               [ OK ]
 * Starting configure network device security                            [ OK ]
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Starting Mount network filesystems                                    [ OK ]
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Starting userspace bootsplash                                         [ OK ]
 * Stopping cold plug devices                                            [ OK ]
 * Stopping userspace bootsplash                                         [ OK ]
 * Starting Send an event to indicate plymouth is up                     [ OK ]
 * Stopping log initial device creation                                  [ OK ]
 * Stopping Mount network filesystems                                    [ OK ]
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Stopping Send an event to indicate plymouth is up                     [ OK ]
 * Starting configure network device                                     [ OK ]
 * Starting Signal sysvinit that local filesystems are mounted           [ OK ]
 * Starting configure network device security                            [ OK ]
 * Starting flush early job output to logs                               [ OK ]
 * Starting adb daemon                                                   [ OK ]
 * Stopping Failsafe Boot Delay                                          [ OK ]
 * Starting System V initialisation compatibility                        [ OK ]
 * Stopping flush early job output to logs                               [ OK ]
 * Starting configure virtual network devices                            [ OK ]
 * Stopping System V initialisation compatibility                        [ OK ]
 * Starting system logging daemon                                        [ OK ]
 * Starting System V runlevel compatibility                              [ OK ]
 * Starting logrotate 5s check daemon                                    [ OK ]
 * Starting save kernel messages                                         [ OK ]
 * Starting regular background program processing daemon                 [ OK ]
 * Stopping save kernel messages                                         [ OK ]

dnsmasq: unknown interface wlan0
 * Starting OpenSSH server                                               [ OK ]
 * Starting DNS forwarder and DHCP server dnsmasq                        [fail] 
 * Starting rrwatchdoge daemon                                           [ OK ]
 * Stopping System V runlevel compatibility                              [ OK ]
[    7.494567] WDIOC_SETFUNCCONFIG: 1
[    7.499753] WDIOC_SETFUNCCONFIG: 1

Ubuntu 14.04.3 LTS rockrobo ttyS0

rockrobo login: 
```

![](/uploads/20211103-serial-comms.gif)
