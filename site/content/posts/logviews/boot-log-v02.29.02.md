+++
categories = []
date = 2022-07-11T13:54:06Z
description = ""
series = []
tags = []
title = "Boot log (v02.29.02)"
toc = true

+++
```
-boot0 version : 4.0.0
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
[      0.338]U-Boot 2011.09-rc1-dirty (Mar 25 2020 - 20:45:43) Allwinner Technology 
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
MMC:	 2

sunxi flash init ok
[      0.792]board_status_probe
[      0.795]boot_reason init from pmic, set to env: 0x0
[      0.800]boot reason=0x0, is boot from poweroff
[      0.805]recovery detect id val: 0
[      0.808]usb vbus gpio fd: 1386422328
[      0.812]usb vbus cable not connectted
[      0.816]board_check_vbus2boot = 0
[      0.819]axp_probe_key loop: 499
[      0.834]axp_probe_key loop: 498
[      0.848]axp_probe_key loop: 497
[      0.862]axp_probe_key loop: 496
[      0.876]axp_probe_key loop: 495
[      0.890]axp_probe_key loop: 494
[      0.904]axp_probe_key loop: 493
[      0.918]axp_probe_key loop: 492
[      0.932]axp_probe_key loop: 491
[      0.946]axp_probe_key loop: 490
[      0.960]axp_probe_key loop: 489
[      0.974]axp_probe_key loop: 488
[      0.988]axp_probe_key loop: 487
[      1.002]axp_probe_key loop: 486
[      1.016]axp_probe_key loop: 485
[      1.030]axp_probe_key loop: 484
[      1.044]axp_probe_key loop: 483
[      1.058]axp_probe_key loop: 482
[      1.072]axp_probe_key loop: 481
[      1.086]axp_probe_key loop: 480
[      1.100]axp_probe_key loop: 479
[      1.114]axp_probe_key loop: 478
[      1.128]axp_probe_key loop: 477
[      1.142]axp_probe_key loop: 476
[      1.156]axp_probe_key loop: 475
[      1.170]axp_probe_key loop: 474
[      1.184]axp_probe_key loop: 473
[      1.198]axp_probe_key loop: 472
[      1.212]axp_probe_key loop: 471
[      1.226]axp_probe_key loop: 470
[      1.240]axp_probe_key loop: 469
[      1.254]axp_probe_key loop: 468
[      1.268]axp_probe_key loop: 467
[      1.282]axp_probe_key loop: 466
[      1.296]axp_probe_key loop: 465
[      1.310]axp_probe_key loop: 464
[      1.324]axp_probe_key loop: 463
[      1.338]axp_probe_key loop: 462
[      1.352]axp_probe_key loop: 461
[      1.366]axp_probe_key loop: 460
[      1.380]axp_probe_key loop: 459
[      1.394]axp_probe_key loop: 458
[      1.408]axp_probe_key loop: 457
[      1.422]axp_probe_key loop: 456
[      1.436]axp_probe_key loop: 455
[      1.450]axp_probe_key loop: 454
[      1.464]axp_probe_key loop: 453
[      1.478]axp_probe_key loop: 452
[      1.492]axp_probe_key loop: 451
[      1.506]axp_probe_key loop: 450
[      1.520]axp_probe_key loop: 449
[      1.534]axp_probe_key loop: 448
[      1.548]axp_probe_key loop: 447
[      1.562]axp_probe_key loop: 446
[      1.576]axp_probe_key loop: 445
[      1.590]axp_probe_key loop: 444
[      1.604]axp_probe_key loop: 443
[      1.618]axp_probe_key loop: 442
[      1.632]axp_probe_key loop: 441
[      1.646]axp_probe_key loop: 440
[      1.660]axp_probe_key loop: 439
[      1.674]axp_probe_key loop: 438
[      1.688]axp_probe_key loop: 437
[      1.702]axp_probe_key loop: 436
[      1.716]axp_probe_key loop: 435
[      1.730]axp_probe_key loop: 434
[      1.744]axp_probe_key loop: 433
[      1.758]axp_probe_key loop: 432
[      1.772]axp_probe_key loop: 431
[      1.786]axp_probe_key loop: 430
[      1.800]axp_probe_key loop: 429
[      1.814]axp_probe_key loop: 428
[      1.828]axp_probe_key loop: 427
[      1.842]axp_probe_key loop: 426
[      1.856]axp_probe_key loop: 425
[      1.870]axp_probe_key loop: 424
[      1.884]axp_probe_key loop: 423
[      1.898]axp_probe_key loop: 422
[      1.912]axp_probe_key loop: 421
[      1.926]axp_probe_key loop: 420
[      1.940]axp_probe_key loop: 419
[      1.954]axp_probe_key loop: 418
[      1.968]axp_probe_key loop: 417
[      1.982]axp_probe_key loop: 416
[      1.996]axp_probe_key loop: 415
[      2.010]axp_probe_key loop: 414
[      2.024]axp_probe_key loop: 413
[      2.038]axp_probe_key loop: 412
[      2.052]axp_probe_key loop: 411
[      2.066]axp_probe_key loop: 410
[      2.080]axp_probe_key loop: 409
[      2.094]axp_probe_key loop: 408
[      2.108]axp_probe_key loop: 407
[      2.122]axp_probe_key loop: 406
[      2.136]axp_probe_key loop: 405
[      2.150]axp_probe_key loop: 404
[      2.164]axp_probe_key loop: 403
[      2.178]axp_probe_key loop: 402
[      2.192]axp_probe_key loop: 401
[      2.206]axp_probe_key loop: 400
[      2.220]axp_probe_key loop: 399
[      2.234]axp_probe_key loop: 398
[      2.248]axp_probe_key loop: 397
[      2.262]axp_probe_key loop: 396
[      2.276]axp_probe_key loop: 395
[      2.290]axp_probe_key loop: 394
[      2.304]axp_probe_key loop: 393
[      2.318]axp_probe_key loop: 392
[      2.332]axp_probe_key loop: 391
[      2.346]axp_probe_key loop: 390
[      2.360]axp_probe_key loop: 389
[      2.374]axp_probe_key loop: 388
[      2.388]axp_probe_key loop: 387
[      2.402]axp_probe_key loop: 386
[      2.416]axp_probe_key loop: 385
[      2.430]axp_probe_key loop: 384
[      2.444]axp_probe_key loop: 383
[      2.458]axp_probe_key loop: 382
[      2.472]axp_probe_key loop: 381
[      2.486]axp_probe_key loop: 380
[      2.500]axp_probe_key loop: 379
[      2.514]axp_probe_key loop: 378
[      2.528]axp_probe_key loop: 377
[      2.542]axp_probe_key loop: 376
[      2.556]axp_probe_key loop: 375
[      2.570]axp_probe_key loop: 374
[      2.584]axp_probe_key loop: 373
[      2.598]axp_probe_key loop: 372
[      2.612]axp_probe_key loop: 371
[      2.626]axp_probe_key loop: 370
[      2.640]axp_probe_key loop: 369
[      2.654]axp_probe_key loop: 368
[      2.668]axp_probe_key loop: 367
[      2.682]axp_probe_key loop: 366
[      2.696]axp_probe_key loop: 365
[      2.710]axp_probe_key loop: 364
[      2.724]axp_probe_key loop: 363
[      2.738]axp_probe_key loop: 362
[      2.752]axp_probe_key loop: 361
[      2.766]axp_probe_key loop: 360
[      2.780]axp_probe_key loop: 359
[      2.794]axp_probe_key loop: 358
[      2.808]axp_probe_key loop: 357
[      2.822]axp_probe_key loop: 356
[      2.836]axp_probe_key loop: 355
[      2.850]axp_probe_key loop: 354
[      2.864]axp_probe_key loop: 353
[      2.878]AP boot into normal mode
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
flag_recovery: 0x12
flag_command:
flag_restore_default:
flag_bootB:0x1
flag_bootA:0x1
upgrade stage:0x0
No upgradeover system found, check if has normal system, pmu: 0x0
board_common.c:check_android_misc:will be boot A system
to be run cmd=run setargs_mmc boot_normal
boot A system
WORK_MODE_BOOT
[      2.996]Hit any key to stop autoboot:  0 
Loading file "/boot/zImage" from mmc device 2:8
3887552 bytes read
[      3.099]para err in disp_ioctl, cmd = 0xa,screen id = 1
reload config to 0x43000000 
[      3.164]Starting kernel ...
[      3.164]enable watchdog 1c20cb8 value 0xb1(16s)

Uncompressing Linux... done, booting the kernel.
[    0.000000] Booting Linux on physical CPU 0
[    0.000000] Initializing cgroup subsys cpuset
[    0.000000] Initializing cgroup subsys cpu
[    0.000000] Linux version 3.4.39 (rockrobo@ruby2) (gcc version 4.8.4 (Ubuntu/Linaro 4.8.4-2ubuntu1~14.04.1) ) #1 SMP PREEMPT Thu Apr 28 20:27:25 CST 2022
[    0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[    0.000000] CPU: PIPT / VIPT nonaliasing data cache, VIPT aliasing instruction cache
[    0.000000] Machine: sun8i
[    0.000000] cma: CMA: reserved 96 MiB at 5a000000
[    0.000000] Memory policy: ECC disabled, Data cache writealloc
[    0.000000] script_init enter!
[    0.000000] script_init exit!
[    0.000000] PERCPU: Embedded 8 pages/cpu @c0cee000 s10752 r8192 d13824 u32768
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 129920
[    0.000000] Kernel command line: rootwait boot_fs=a console=ttyS0,115200 root=/dev/mmcblk0p8 rootfstype=ext4 loglevel=7 partitions=boot-res@mmcblk0p2:env@mmcblk0p5:app@mmcblk0p6:recovery@mmcblk0p7:system_a@mmcblk0p8:system_b@mmcblk0p9:Download@mmcblk0p10:reserve@mmcblk0p11:UDISK@mmcblk0p1 boot_reason=0x0 location=en boot_ver=2011.09-rc1-dirty
[    0.000000] PID hash table entries: 2048 (order: 1, 8192 bytes)
[    0.000000] Dentry cache hash table entries: 65536 (order: 6, 262144 bytes)
[    0.000000] Inode-cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.000000] Memory: 512MB = 512MB total
[    0.000000] Memory: 411960k/411960k available, 112328k reserved, 0K highmem
[    0.000000] Virtual kernel memory layout:
[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
[    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
[    0.000000]     vmalloc : 0xe0800000 - 0xff000000   ( 488 MB)
[    0.000000]     lowmem  : 0xc0000000 - 0xe0000000   ( 512 MB)
[    0.000000]     modules : 0xbf000000 - 0xc0000000   (  16 MB)
[    0.000000]       .text : 0xc0008000 - 0xc0756704   (7482 kB)
[    0.000000]       .init : 0xc0757000 - 0xc079ca00   ( 279 kB)
[    0.000000]       .data : 0xc079e000 - 0xc07feea0   ( 388 kB)
[    0.000000]        .bss : 0xc0800098 - 0xc085a1c0   ( 361 kB)
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
[    0.000246] Calibrating delay loop (skipped), value calculated using timer frequency.. 4800.00 BogoMIPS (lpj=24000000)
[    0.000274] pid_max: default: 32768 minimum: 301
[    0.000590] Mount-cache hash table entries: 512
[    0.001648] Initializing cgroup subsys debug
[    0.001670] Initializing cgroup subsys cpuacct
[    0.001683] Initializing cgroup subsys freezer
[    0.001728] CPU: Testing write buffer coherency: ok
[    0.001784] ftrace: allocating 19632 entries in 58 pages
[    0.030306] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
[    0.030328] [sunxi_smp_prepare_cpus] enter
[    0.030377] Setting up static identity map for 0x4050e4d0 - 0x4050e528
[    0.010000] CPU1: Booted secondary processor
[    0.010000] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001
[    0.010000] CPU2: Booted secondary processor
[    0.010000] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002
[    0.010000] CPU3: Booted secondary processor
[    0.010000] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003
[    0.210239] Brought up 4 CPUs
[    0.210259] SMP: Total of 4 processors activated (19200.00 BogoMIPS).
[    0.210557] devtmpfs: initialized
[    0.214323] pinctrl core: initialized pinctrl subsystem
[    0.214323] dummy: 
[    0.223904] NET: Registered protocol family 16
[    0.241835] DMA: preallocated 2048 KiB pool for atomic coherent allocations
[    0.241941] script_sysfs_init success
[    0.242240] sunxi pinctrl probe enter
[    0.242942] gpiochip_add: registered GPIOs 0 to 383 on device: sunxi-pinctrl
[    0.244027] sunxi-pinctrl sunxi-pinctrl: initialized sunXi PIO driver
[    0.244225] axp_pinctrl_probe enter...
[    0.244383] gpiochip_add: registered GPIOs 1024 to 1029 on device: axp-pinctrl
[    0.244405] mainkey total count : 77
[    0.244446] map mainkey [motor_para] to pinctrl, map number [2]
[    0.244511] axp pinctrl driver probe ok
[    0.245554] [sunxi-module]: [sunxi-module.0] probe success
[    0.245598] script config pll3 to 297 Mhz
[    0.245615] script config pll4 to 300 Mhz
[    0.245651] script config pll6 to 600 Mhz
[    0.245666] script config pll8 to 408 Mhz
[    0.245690] script config pll9 to 480 Mhz
[    0.245705] script config pll10 to 297 Mhz
[    0.245714] sunxi_default_clk_init
[    0.245723] try to set pll6ahb1 to 200000000
[    0.245777] try to set ahb clk source to pll6ahb1
[    0.245788] set ahb clk source to pll6ahb1
[    0.245807] set apb2 to low freq 1.2 Mhz
[    0.245835] set ahb clk source to pll6
[    0.245845] recove apb2 to pre freq 24000000
[    0.245861] try to set ahb1 to 200000000
[    0.245873] try to set apb1 to 100000000
[    0.245890] script config apb2 to 37 Mhz
[    0.251023] bio: create slab <bio-0> at 0
[    0.251023] [ARISC] :sunxi-arisc driver v1.60
[    0.288327] [ARISC] :arisc version: [v0.0.76]
[    0.288342] [sunxi-module]: arisc register success
[    0.507623] [ARISC] :sunxi-arisc driver v1.60 startup succeeded
[    0.510553] SCSI subsystem initialized
[    0.510702] usbcore: registered new interface driver usbfs
[    0.510779] usbcore: registered new interface driver hub
[    0.510826] usbcore: registered new device driver usb
[    0.510826] twi_chan_cfg()350 - [twi0] has no twi_regulator.
[    0.510826] twi_chan_cfg()350 - [twi1] has no twi_regulator.
[    0.510826] twi_chan_cfg()350 - [twi2] has no twi_regulator.
[    0.510826] twi_chan_cfg()358 - [twi1] has no power_ctrl!
[    0.510826] Linux video capture interface: v2.00
[    0.510041] axp22_board axp22_board: AXP (CHIP ID: 0x06) detected
[    0.511837] axp22_dcdc1: 1600 <--> 3400 mV at 3300 mV 
[    0.511837] axp22_dcdc2: 600 <--> 1540 mV at 1100 mV 
[    0.511837] axp22_dcdc3: 600 <--> 1860 mV at 1240 mV 
[    0.511837] axp22_dcdc4: 600 <--> 1540 mV at 1100 mV 
[    0.511837] axp22_dcdc5: 1000 <--> 2550 mV at 1500 mV 
[    0.511837] axp22_rtc: 3000 mV 
[    0.511837] axp22_aldo1: 700 <--> 3300 mV at 3300 mV 
[    0.511837] axp22_aldo2: 700 <--> 3300 mV at 2500 mV 
[    0.511837] axp22_aldo3: 700 <--> 3300 mV at 3000 mV 
[    0.511837] axp22_dldo1: 700 <--> 3300 mV at 700 mV 
[    0.511837] axp22_dldo2: 700 <--> 3300 mV at 700 mV 
[    0.520037] axp22_dldo3: 700 <--> 3300 mV at 700 mV 
[    0.520221] axp22_dldo4: 700 <--> 3300 mV at 700 mV 
[    0.520221] axp22_eldo1: 700 <--> 3300 mV at 700 mV 
[    0.520221] axp22_eldo1: supplied by axp22_dcdc1
[    0.520299] axp22_eldo2: 700 <--> 3300 mV at 700 mV 
[    0.520299] axp22_eldo2: supplied by axp22_dcdc1
[    0.520299] axp22_eldo3: 700 <--> 3300 mV at 700 mV 
[    0.520299] axp22_eldo3: supplied by axp22_dcdc1
[    0.520299] axp22_dc5ldo: 700 <--> 1400 mV at 1100 mV 
[    0.520299] axp22_ldoio0: 700 <--> 3300 mV at 3800 mV 
[    0.520299] axp22_ldoio1: 700 <--> 3300 mV at 3800 mV 
[    0.520299] axp22_dc1sw: at 700 mV 
[    0.520299] axp22_dc1sw: supplied by axp22_dcdc1
[    0.520436] input: axp22-supplyer as /devices/platform/axp22_board/axp22-supplyer.20/input/input0
[    0.520730] now_rest_vol = 0
[    0.520730] Advanced Linux Sound Architecture Driver Version 1.0.25.
[    0.521116] cfg80211: Calling CRDA to update world regulatory domain
[    0.521181] Switching to clocksource arch_sys_counter
[    0.536144] FS-Cache: Loaded
[    0.536485] CacheFiles: Loaded
[    0.547289] [usb_manager]: CONFIG_USB_SUNXI_USB0_OTG
[    0.547329] get usbc0(usb_restrict pin) failed
[    0.547749] [sw_udc]: udc_init: version 20080411
[    0.548360] [ddrfreq] dram_clk value is 552
[    0.548372] [ddrfreq] sunxi_ddrfreq_max=552000
[    0.548383] [ddrfreq] dram_type value is 3
[    0.548394] [ddrfreq] dram_zq value is 0x3bbb
[    0.548404] [ddrfreq] dram_odt_en value is 1
[    0.548415] [ddrfreq] dram_para1 value is 0x10f20200
[    0.548427] [ddrfreq] dram_para2 value is 0x0
[    0.548437] [ddrfreq] dram_mr0 value is 0x1c70
[    0.548448] [ddrfreq] dram_mr1 value is 0x40
[    0.548458] [ddrfreq] dram_mr2 value is 0x18
[    0.548469] [ddrfreq] dram_mr3 value is 0x0
[    0.548480] [ddrfreq] dram_tpr0 value is 0x47214f
[    0.548491] [ddrfreq] dram_tpr1 value is 0x1c2294b
[    0.548503] [ddrfreq] dram_tpr2 value is 0x61043
[    0.548514] [ddrfreq] dram_tpr3 value is 0x0
[    0.548525] [ddrfreq] dram_tpr4 value is 0x0
[    0.548535] [ddrfreq] dram_tpr5 value is 0x0
[    0.548546] [ddrfreq] dram_tpr6 value is 0x0
[    0.548557] [ddrfreq] dram_tpr7 value is 0x0
[    0.548567] [ddrfreq] dram_tpr8 value is 0x0
[    0.548578] [ddrfreq] dram_tpr9 value is 0x0
[    0.548588] [ddrfreq] dram_tpr10 value is 0x0
[    0.548599] [ddrfreq] dram_tpr11 value is 0x0
[    0.548610] [ddrfreq] dram_tpr12 value is 168
[    0.548619] [ddrfreq] sunxi_ddrfreq_min=168000
[    0.548630] [ddrfreq] dram_tpr13 value is 0x10901
[    0.548815] [dsm] use sysconfig
[    0.548826] [dsm] -----------Dram scene-freq Table------------
[    0.548838] [dsm] scene =    0 	frequency = 552000KHz
[    0.548848] [dsm] scene =    1 	frequency = 360000KHz
[    0.548859] [dsm] scene =    2 	frequency = 240000KHz
[    0.548869] [dsm] scene =    3 	frequency = 168000KHz
[    0.548879] [dsm] --------------------------------------------
[    0.549008] [ddrfreq] LV_count value is 3
[    0.549033] [ddrfreq] ---------------Dram V-F Table---------------
[    0.549045] [ddrfreq] voltage = 1100mv 	frequency = 552000KHz
[    0.549057] [ddrfreq] voltage = 1100mv 	frequency = 360000KHz
[    0.549068] [ddrfreq] voltage = 1100mv 	frequency =    0KHz
[    0.549078] [ddrfreq] --------------------------------------------
[    0.549228] [ddrfreq] last_vdd=1100
[    0.549306] [ddrfreq] __sram_start: 0xc07ff000, __sram_end: 0xc0800074, __sram_text_start: 0xf0000000, __sram_data_end: 0xf0001074
[    0.549322] [ddrfreq] sunxi dramfreq probe ok!
[    0.549675] NET: Registered protocol family 2
[    0.550003] IP route cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.550728] TCP established hash table entries: 16384 (order: 5, 131072 bytes)
[    0.550977] TCP bind hash table entries: 16384 (order: 5, 196608 bytes)
[    0.551238] TCP: Hash tables configured (established 16384 bind 16384)
[    0.551251] TCP: reno registered
[    0.551265] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    0.551294] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    0.551620] NET: Registered protocol family 1
[    0.552059] RPC: Registered named UNIX socket transport module.
[    0.552073] RPC: Registered udp transport module.
[    0.552083] RPC: Registered tcp transport module.
[    0.552093] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.552547] [pm]aw_pm_init!
[    0.552562] standby_mode = 1. 
[    0.552572] wakeup src cnt is : 1. 
[    0.552584] [exstandby]leave extended_standby_enable_wakeup_src : event 0x2000
[    0.552597] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_map 0x80
[    0.552610] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_group 0x0
[    0.552624] sunxi_reg_init enter
[    0.556086] NTFS driver 2.1.30 [Flags: R/W].
[    0.556305] fuse init (API version 7.18)
[    0.556795] msgmni has been set to 996
[    0.558576] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 253)
[    0.558595] io scheduler noop registered
[    0.558606] io scheduler deadline registered
[    0.558712] io scheduler cfq registered (default)
[    0.559132] pwm module init!
[    0.559709] sw_uart_get_devinfo()1483 - uart0 has no uart_regulator.
[    0.559729] sw_uart_get_devinfo()1483 - uart1 has no uart_regulator.
[    0.559747] sw_uart_get_devinfo()1483 - uart2 has no uart_regulator.
[    0.560349] uart0: ttyS0 at MMIO 0x1c28000 (irq = 32) is a SUNXI
[    0.560373] sw_console_setup()1243 - console setup baud 115200 parity n bits 8, flow n
[    0.560398] sw_uart_set_termios()699 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    0.585732] axp22_mfd_irq_work: 4000020000:600080cf6c
[    0.586083] axp22_mfd_irq_work: 20000:600080cf6c
[    0.710171] console [ttyS0] enabled
[    0.710538] uart1: ttyS1 at MMIO 0x1c28400 (irq = 33) is a SUNXI
[    0.710849] uart2: ttyS2 at MMIO 0x1c28800 (irq = 34) is a SUNXI
[    0.715588] loop: module loaded
[    0.715775] [MCU_UART] sent ap resume event to mcu
[    0.715980] TIMER1_INTVAL_REG = 5dc
[    0.716154] jiffies initialized success
[    0.716162] [lds]: lds_module_init module init!
[    0.716344] [lds]: lds_motor_probe
[    0.716846] input: lds_input as /devices/virtual/input/input1
[    0.716923] [wifi_pm]: select wifi: rtl8189es !!
[    0.717085] [rtl8189es]: exec rtl8189es_wifi_gpio_init
[    0.717096] [rtl8189es]: module power name axp22_dldo1
[    0.717105] [rtl8189es]: module power ext1 name axp22_dldo2
[    0.717114] [rtl8189es]: failed to fetch wifi_power_ext2
[    0.717123] [rtl8189es]: use wifi card shutdown pin
[    0.717131] [rtl8189es]: rtl8189es module power set by axp.
[    0.717234] [rtl8189es]: first time
[    0.898118] [rtl8189es]: regulator on.
[    1.183029] [rtl8189es]: gpio rtl8189es_shdn set val 0, act val 0
[    2.009643] [wifi_pm]: wifi gpio init is OK !!
[    2.014553] module init!
[    2.017326] [hwinfo]: hwinfo_mod_init E
[    2.021539] [hwinfo]: 0, 0
[    2.024495] [hwinfo]: 2, 0
[    2.027911] tun: Universal TUN/TAP device driver, 1.6
[    2.033456] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.040524] PPP generic driver version 2.4.2
[    2.045379] PPP BSD Compression module registered
[    2.050534] PPP Deflate Compression module registered
[    2.056954] PPP MPPE Compression module registered
[    2.062222] NET: Registered protocol family 24
[    2.067106] [sw_hcd0]: usb host driver initialize........
[    2.073123] [sw_hcd0]: open_usb_clock
[    2.077207] get usb_regulator id vbus is nocare
[    2.082175] [sunxi_hcd0]: host_init_state = 0
[    2.086926] [sw_hcd0]: platform is usb host
[    2.091557] [sw_hcd0]: sunxi_hcd_init_controller: sunxi_hcd_host0: USB Host mode controller at f1c19000 using PIO, IRQ 103
[    2.103645] sunxi_hcd_host0 sunxi_hcd_host0: sunxi_hcd host driver
[    2.110416] sunxi_hcd_host0 sunxi_hcd_host0: new USB bus registered, assigned bus number 1
[    2.120222] hub 1-0:1.0: USB hub found
[    2.124329] hub 1-0:1.0: 1 port detected
[    2.129006] [sw_hcd0]: sunxi_usb_host0_disable start
[    2.134449] [sw_hcd0]: sunxi_hcd_wait_for_disconnect cnt=0
[    2.140456] [sunxi_hcd_host0]: Set USB Power OFF
[    2.145496] -------sunxi_hcd0_soft_disconnect---------
[    2.150441] wrn: hcd is not enable, need not stop hcd
[    2.156623] [sunxi_hcd_host0]: Set USB Power OFF
[    2.161699] [sw_hcd0]: close_usb_clock
[    2.165809] [sw_hcd0]: sunxi_usb_host0_disable end
[    2.171841] sunxi-rtc sunxi-rtc: rtc core: registered sunxi-rtc as rtc0
[    2.179196] sunxi cedar version 0.1 
[    2.183161] [cedar]: install start!!!
[    2.187361] [cedar]: install end!!!
[    2.195133] sunxi_wdt_init_module: sunxi WatchDog Timer Driver v1.0
[    2.202214] sunxi_wdt_probe: devm_ioremap return wdt_reg 0xf1c20ca0, res->start 0x01c20ca0, res->end 0x01c20cbf
[    2.213289] sunxi wdt request irq 57 ok
[    2.217666] sunxi_wdt_probe: initialized (g_timeout=16s, g_nowayout=0)
[    2.224877] [boot_reason]: br_wdt_check entry
[    2.229741] sunxi wdt start in uboot
[    2.234212] device-mapper: ioctl: 4.22.0-ioctl (2011-10-19) initialised: dm-devel@redhat.com
[    2.243754] autohotplug_init init ok
[    2.247684] sunxi_cpufreq_initcall: clocks pll=1008000000,cpu=1008000000,axi=336000000
[    2.256351] cur: pll=1008000000, cpudiv=1, axidiv=3
[    2.261705] axp22_dcdc3: Failed to create debugfs directory
[    2.267801] sunxi_cpufreq_initcall, get cpu frequency from sysconfig, max freq: 1200MHz, min freq: 648MHz
[    2.278285] -------------------CPU V-F Table--------------------
[    2.284853] 	frequency = 1536000KHz 	voltage = 1500mv
[    2.290379] 	frequency = 1344000KHz 	voltage = 1460mv
[    2.295889] 	frequency = 1200000KHz 	voltage = 1360mv
[    2.301414] 	frequency = 1008000KHz 	voltage = 1240mv
[    2.306924] 	frequency = 816000KHz 	voltage = 1140mv
[    2.312351] 	frequency = 648000KHz 	voltage = 1140mv
[    2.317766] 	frequency =    0KHz 	voltage = 1120mv
[    2.323004] 	frequency =    0KHz 	voltage = 1120mv
[    2.328229] -----------------------------------------------------
[    2.335229] [mmc]: SD/MMC/SDIO Host Controller Driver(v1.117 2015-12-1 14:13) Compiled in Apr 28 2022 at 20:26:33
[    2.346487] [mmc]: get mmc1's sdc_power failed
[    2.351375] [mmc]: get mmc2's sdc_power failed
[    2.356222] [mmc]: get mmc2's 2xmode ok, val = 1
[    2.361271] [mmc]: get mmc2's ddrmode ok, val = 1
[    2.366408] [mmc]: MMC host used card: 0x6, boot card: 0x4, io_card 2
[    2.375027] [mmc]: mmc not poweroff notifiy
[    2.379599] [mmc]: sdc2 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.390363] [mmc]: sdc2 set ios: clk 0Hz bm PP pm UP vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.400196] [mmc]: mmc not poweroff notifiy
[    2.401373] [mmc]: sdc2 power_supply is null
[    2.409414] [mmc]: sdc1 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.420043] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.422501] usbcore: registered new interface driver usbhid
[    2.422511] usbhid: USB HID core driver
[    2.423630] [audiocodec] : aif2 not used!
[    2.423639] [audiocodec] : aif3 not used!
[    2.449580] asoc: sndcodec <-> sunxi-codec mapping ok
[    2.456129] u32 classifier
[    2.459078]     Actions configured
[    2.460870] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.461729] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.461762] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.464262] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.466177] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 8,  RTO !!
[    2.466205] *******************Try sdio*******************
[    2.467034] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.467882] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.468727] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.469572] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.469599] *******************Try sd *******************
[    2.470430] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.471277] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.472125] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.472972] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.472999] *******************Try mmc*******************
[    2.473011] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.473447] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.473546] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.473641] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.476127] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.511268] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.511925] [hwinfo]: 1, 0
[    2.511933] [hwinfo]: EMMC: 17, 0x34474130
[    2.523793] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.523919] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.523983] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.524491] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing MMC-HS(SDR20) dt B
[    2.524672] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.524737] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.524840] mmc0: new high speed DDR MMC card at address 0001
[    2.525333] mmcblk0: mmc0:0001 004GA0 3.68 GiB 
[    2.525521] mmcblk0boot0: mmc0:0001 004GA0 partition 1 2.00 MiB
[    2.525711] mmcblk0boot1: mmc0:0001 004GA0 partition 2 2.00 MiB
[    2.526629]  mmcblk0: p1 p2 p3 < p5 p6 p7 p8 p9 p10 p11 >
[    2.526678] mmcblk0: p1 size 3268608 extends beyond EOD, truncated
[    2.529548]  mmcblk0boot1: unknown partition table
[    2.530780]  mmcblk0boot0: unknown partition table
[    2.531003] *******************mmc init ok *******************
[    2.583247] Netfilter messages via NETLINK v0.30.
[    2.772875] nf_conntrack version 0.5.0 (7972 buckets, 31888 max)
[    2.780475] ctnetlink v0.93: registering with nfnetlink.
[    2.786323] NF_TPROXY: Transparent proxy support initialized, version 4.1.0
[    2.793939] NF_TPROXY: Copyright (c) 2006-2007 BalaBit IT Ltd.
[    2.800770] xt_time: kernel timezone is -0000
[    2.805915] ip_tables: (C) 2000-2006 Netfilter Core Team
[    2.811927] arp_tables: (C) 2002 David S. Miller
[    2.817023] TCP: cubic registered
[    2.820656] Initializing XFRM netlink socket
[    2.825630] NET: Registered protocol family 10
[    2.831429] Mobile IPv6
[    2.834127] ip6_tables: (C) 2000-2006 Netfilter Core Team
[    2.840218] NET: Registered protocol family 17
[    2.845092] NET: Registered protocol family 15
[    2.849940] L2TP core driver, V2.0
[    2.853691] PPPoL2TP kernel driver, V2.0
[    2.857971] L2TP IP encapsulation support (L2TPv3)
[    2.863261] L2TP netlink interface
[    2.867008] L2TP ethernet pseudowire support (L2TPv3)
[    2.872743] VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
[    2.881125] ThumbEE CPU extension supported.
[    2.885790] Registering SWP/SWPB emulation handler
[    2.891827] axp22_dc5ldo: incomplete constraints, leaving on
[    2.898285] axp22_aldo3: incomplete constraints, leaving on
[    2.904438] axp22_aldo2: incomplete constraints, leaving on
[    2.910590] axp22_aldo1: incomplete constraints, leaving on
[    2.916714] axp22_rtc: incomplete constraints, leaving on
[    2.922674] axp22_dcdc5: incomplete constraints, leaving on
[    2.928811] axp22_dcdc4: incomplete constraints, leaving on
[    2.934960] axp22_dcdc3: incomplete constraints, leaving on
[    2.941109] axp22_dcdc2: incomplete constraints, leaving on
[    2.947246] axp22_dcdc1: incomplete constraints, leaving on
[    2.953588] [boot_reason]: module init!
[    2.957794] otg_wakelock_init: No USB transceiver found
[    2.963557] sunxi-rtc sunxi-rtc: setting system clock to 1970-01-01 00:00:31 UTC (31)
[    2.972138] ths_fetch_sysconfig_para: type err  device_used = 1. 
[    2.978799] ths_fetch_sysconfig_para: type err ths_trip1_3 = 110. 
[    2.985554] ths_fetch_sysconfig_para: type err ths_trip1_4 = 110. 
[    2.992323] ths_fetch_sysconfig_para: type err ths_trip1_5 = 110. 
[    2.999074] ths_fetch_sysconfig_para: type err ths_trip1_6 = 110. 
[    3.005826] ths_fetch_sysconfig_para: type err ths_trip1_7 = 110. 
[    3.012587] ths_fetch_sysconfig_para: type err ths_trip1_3_min = 0. 
[    3.019519] ths_fetch_sysconfig_para: type err ths_trip1_3_max = 0. 
[    3.026460] ths_fetch_sysconfig_para: type err ths_trip1_4_min = 0. 
[    3.033400] ths_fetch_sysconfig_para: type err ths_trip1_4_max = 0. 
[    3.040383] ths_fetch_sysconfig_para: type err ths_trip1_5_min = 0. 
[    3.047328] ths_fetch_sysconfig_para: type err ths_trip1_5_max = 0. 
[    3.054272] ths_fetch_sysconfig_para: type err ths_trip1_6_min = 0. 
[    3.061228] ths_fetch_sysconfig_para: type err ths_trip1_6_max = 0. 
[    3.068157] ths_fetch_sysconfig_para: type err ths_trip2_count = 0. 
[    3.075098] ths_fetch_sysconfig_para: type err ths_trip2_0 = 0. 
[    3.081874] input: sunxi-ths as /devices/virtual/input/input2
[    3.088598] suxi_ths: Kernel Thermal management registered
[    3.094614] fetch C0_LV_count from sysconfig failed
[    3.100436] CPU Budget:Register notifier
[    3.104716] CPU Budget:register Success
[    3.108898] sunxi-budget-cooling sunxi-budget-cooling: Cooling device registered: thermal-budget-0
[    3.122025] ALSA device list:
[    3.125268]   #0: audiocodec
[    3.128607] sw_uart_startup()610 - ttyS0 start up by swapper/0, pid 1
[    3.135724] sw_uart_set_termios()699 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.167126] EXT4-fs (mmcblk0p8): recovery complete
[    3.172954] EXT4-fs (mmcblk0p8): mounted filesystem with ordered data mode. Opts: (null)
[    3.181841] VFS: Mounted root (ext4 filesystem) on device 179:8.
[    3.189182] devtmpfs: mounted
[    3.192699] Freeing init memory: 276K
[3.39] start logging
[3.42] init network
[3.44] insmod kernel modules
[3.55] mount all fs
[4.08] play boot ring
[4.11] init watchdoge
kernel.softlockup_panic = 1
[5.15] init adbd

rockrobo login:


```