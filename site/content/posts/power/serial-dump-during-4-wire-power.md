+++
categories = []
date = 2022-04-06T08:15:34Z
description = ""
series = []
tags = []
title = "Serial Dump During 4-wire Power"
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
[      0.795]board_status_probe
[      0.798]boot_reason init from pmic, set to env: 0x0
[      0.803]boot reason=0x0, is boot from poweroff
[      0.808]recovery detect id val: 0
[      0.811]usb vbus gpio fd: 1386422328
[      0.815]usb vbus cable not connectted
[      0.819]board_check_vbus2boot = 0
[      0.822]axp_probe_key loop: 499
[      0.837]axp_probe_key loop: 498
[      0.851]axp_probe_key loop: 497
[      0.865]axp_probe_key loop: 496
[      0.879]axp_probe_key loop: 495
[      0.893]axp_probe_key loop: 494
[      0.907]axp_probe_key loop: 493
[      0.921]axp_probe_key loop: 492
[      0.935]axp_probe_key loop: 491
[      0.949]axp_probe_key loop: 490
[      0.963]axp_probe_key loop: 489
[      0.977]axp_probe_key loop: 488
[      0.991]axp_probe_key loop: 487
[      1.005]axp_probe_key loop: 486
[      1.019]axp_probe_key loop: 485
[      1.033]axp_probe_key loop: 484
[      1.047]axp_probe_key loop: 483
[      1.061]axp_probe_key loop: 482
[      1.075]axp_probe_key loop: 481
[      1.089]axp_probe_key loop: 480
[      1.103]axp_probe_key loop: 479
[      1.117]axp_probe_key loop: 478
[      1.131]axp_probe_key loop: 477
[      1.145]axp_probe_key loop: 476
[      1.159]axp_probe_key loop: 475
[      1.173]axp_probe_key loop: 474
[      1.187]axp_probe_key loop: 473
[      1.201]axp_probe_key loop: 472
[      1.215]axp_probe_key loop: 471
[      1.229]axp_probe_key loop: 470
[      1.243]axp_probe_key loop: 469
[      1.257]axp_probe_key loop: 468
[      1.271]axp_probe_key loop: 467
[      1.285]axp_probe_key loop: 466
[      1.299]axp_probe_key loop: 465
[      1.313]axp_probe_key loop: 464
[      1.327]axp_probe_key loop: 463
[      1.341]axp_probe_key loop: 462
[      1.355]axp_probe_key loop: 461
[      1.369]axp_probe_key loop: 460
[      1.383]axp_probe_key loop: 459
[      1.397]axp_probe_key loop: 458
[      1.411]axp_probe_key loop: 457
[      1.425]axp_probe_key loop: 456
[      1.439]axp_probe_key loop: 455
[      1.453]axp_probe_key loop: 454
[      1.467]axp_probe_key loop: 453
[      1.481]axp_probe_key loop: 452
[      1.495]axp_probe_key loop: 451
[      1.509]axp_probe_key loop: 450
[      1.523]axp_probe_key loop: 449
[      1.537]axp_probe_key loop: 448
[      1.551]axp_probe_key loop: 447
[      1.565]axp_probe_key loop: 446
[      1.579]axp_probe_key loop: 445
[      1.593]axp_probe_key loop: 444
[      1.607]axp_probe_key loop: 443
[      1.621]axp_probe_key loop: 442
[      1.635]axp_probe_key loop: 441
[      1.649]axp_probe_key loop: 440
[      1.663]axp_probe_key loop: 439
[      1.677]axp_probe_key loop: 438
[      1.691]axp_probe_key loop: 437
[      1.705]axp_probe_key loop: 436
[      1.719]axp_probe_key loop: 435
[      1.733]axp_probe_key loop: 434
[      1.747]axp_probe_key loop: 433
[      1.761]axp_probe_key loop: 432
[      1.775]axp_probe_key loop: 431
[      1.789]axp_probe_key loop: 430
[      1.803]axp_probe_key loop: 429
[      1.817]axp_probe_key loop: 428
[      1.831]axp_probe_key loop: 427
[      1.845]axp_probe_key loop: 426
[      1.859]axp_probe_key loop: 425
[      1.873]AP boot into normal mode
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
[      1.988]Hit any key to stop autoboot:  0 
Loading file "/boot/zImage" from mmc device 2:8
3882616 bytes read
[      2.092]para err in disp_ioctl, cmd = 0xa,screen id = 1
reload config to 0x43000000 
[      2.144]Starting kernel ...
[      2.144]enable watchdog 1c20cb8 value 0xb1(16s)

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
[    0.000242] Calibrating delay loop (skipped), value calculated using timer frequency.. 4800.00 BogoMIPS (lpj=24000000)
[    0.000269] pid_max: default: 32768 minimum: 301
[    0.000581] Mount-cache hash table entries: 512
[    0.001645] Initializing cgroup subsys debug
[    0.001665] Initializing cgroup subsys cpuacct
[    0.001678] Initializing cgroup subsys freezer
[    0.001723] CPU: Testing write buffer coherency: ok
[    0.001781] ftrace: allocating 19622 entries in 58 pages
[    0.030308] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
[    0.030328] [sunxi_smp_prepare_cpus] enter
[    0.030377] Setting up static identity map for 0x4050d630 - 0x4050d688
[    0.010000] CPU1: Booted secondary processor
[    0.010000] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001
[    0.010000] CPU2: Booted secondary processor
[    0.010000] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002
[    0.010000] CPU3: Booted secondary processor
[    0.010000] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003
[    0.210233] Brought up 4 CPUs
[    0.210253] SMP: Total of 4 processors activated (19200.00 BogoMIPS).
[    0.210552] devtmpfs: initialized
[    0.214325] pinctrl core: initialized pinctrl subsystem
[    0.214325] dummy: 
[    0.223877] NET: Registered protocol family 16
[    0.241779] DMA: preallocated 2048 KiB pool for atomic coherent allocations
[    0.241880] script_sysfs_init success
[    0.242175] sunxi pinctrl probe enter
[    0.242879] gpiochip_add: registered GPIOs 0 to 383 on device: sunxi-pinctrl
[    0.243958] sunxi-pinctrl sunxi-pinctrl: initialized sunXi PIO driver
[    0.244157] axp_pinctrl_probe enter...
[    0.244309] gpiochip_add: registered GPIOs 1024 to 1029 on device: axp-pinctrl
[    0.244330] mainkey total count : 77
[    0.244373] map mainkey [motor_para] to pinctrl, map number [2]
[    0.244437] axp pinctrl driver probe ok
[    0.245475] [sunxi-module]: [sunxi-module.0] probe success
[    0.245522] script config pll3 to 297 Mhz
[    0.245538] script config pll4 to 300 Mhz
[    0.245574] script config pll6 to 600 Mhz
[    0.245588] script config pll8 to 408 Mhz
[    0.245612] script config pll9 to 480 Mhz
[    0.245627] script config pll10 to 297 Mhz
[    0.245636] sunxi_default_clk_init
[    0.245644] try to set pll6ahb1 to 200000000
[    0.245698] try to set ahb clk source to pll6ahb1
[    0.245708] set ahb clk source to pll6ahb1
[    0.245727] set apb2 to low freq 1.2 Mhz
[    0.245757] set ahb clk source to pll6
[    0.245766] recove apb2 to pre freq 24000000
[    0.245782] try to set ahb1 to 200000000
[    0.245795] try to set apb1 to 100000000
[    0.245812] script config apb2 to 37 Mhz
[    0.250910] bio: create slab <bio-0> at 0
[    0.250910] [ARISC] :sunxi-arisc driver v1.60
[    0.288235] [ARISC] :arisc version: [v0.0.76]
[    0.288248] [sunxi-module]: arisc register success
[    0.507535] [ARISC] :sunxi-arisc driver v1.60 startup succeeded
[    0.510554] SCSI subsystem initialized
[    0.510703] usbcore: registered new interface driver usbfs
[    0.510779] usbcore: registered new interface driver hub
[    0.510824] usbcore: registered new device driver usb
[    0.510824] twi_chan_cfg()350 - [twi0] has no twi_regulator.
[    0.510824] twi_chan_cfg()350 - [twi1] has no twi_regulator.
[    0.510824] twi_chan_cfg()350 - [twi2] has no twi_regulator.
[    0.510824] Linux video capture interface: v2.00
[    0.510043] axp22_board axp22_board: AXP (CHIP ID: 0x06) detected
[    0.511806] axp22_dcdc1: 1600 <--> 3400 mV at 3300 mV 
[    0.511806] axp22_dcdc2: 600 <--> 1540 mV at 1100 mV 
[    0.511806] axp22_dcdc3: 600 <--> 1860 mV at 1240 mV 
[    0.511806] axp22_dcdc4: 600 <--> 1540 mV at 1100 mV 
[    0.511806] axp22_dcdc5: 1000 <--> 2550 mV at 1500 mV 
[    0.511806] axp22_rtc: 3000 mV 
[    0.511806] axp22_aldo1: 700 <--> 3300 mV at 3300 mV 
[    0.511806] axp22_aldo2: 700 <--> 3300 mV at 2500 mV 
[    0.511806] axp22_aldo3: 700 <--> 3300 mV at 3000 mV 
[    0.511806] axp22_dldo1: 700 <--> 3300 mV at 700 mV 
[    0.511806] axp22_dldo2: 700 <--> 3300 mV at 700 mV 
[    0.511806] axp22_dldo3: 700 <--> 3300 mV at 700 mV 
[    0.520174] axp22_dldo4: 700 <--> 3300 mV at 700 mV 
[    0.520218] axp22_eldo1: 700 <--> 3300 mV at 700 mV 
[    0.520218] axp22_eldo1: supplied by axp22_dcdc1
[    0.520298] axp22_eldo2: 700 <--> 3300 mV at 700 mV 
[    0.520298] axp22_eldo2: supplied by axp22_dcdc1
[    0.520298] axp22_eldo3: 700 <--> 3300 mV at 700 mV 
[    0.520298] axp22_eldo3: supplied by axp22_dcdc1
[    0.520298] axp22_dc5ldo: 700 <--> 1400 mV at 1100 mV 
[    0.520298] axp22_ldoio0: 700 <--> 3300 mV at 3800 mV 
[    0.520298] axp22_ldoio1: 700 <--> 3300 mV at 3800 mV 
[    0.520298] axp22_dc1sw: at 700 mV 
[    0.520298] axp22_dc1sw: supplied by axp22_dcdc1
[    0.520432] input: axp22-supplyer as /devices/platform/axp22_board/axp22-supplyer.20/input/input0
[    0.520733] now_rest_vol = 0
[    0.520733] Advanced Linux Sound Architecture Driver Version 1.0.25.
[    0.521106] cfg80211: Calling CRDA to update world regulatory domain
[    0.521170] Switching to clocksource arch_sys_counter
[    0.535627] FS-Cache: Loaded
[    0.535961] CacheFiles: Loaded
[    0.546663] [usb_manager]: CONFIG_USB_SUNXI_USB0_OTG
[    0.546700] get usbc0(usb_restrict pin) failed
[    0.547114] [sw_udc]: udc_init: version 20080411
[    0.547722] [ddrfreq] dram_clk value is 552
[    0.547734] [ddrfreq] sunxi_ddrfreq_max=552000
[    0.547745] [ddrfreq] dram_type value is 3
[    0.547756] [ddrfreq] dram_zq value is 0x3bbb
[    0.547766] [ddrfreq] dram_odt_en value is 1
[    0.547777] [ddrfreq] dram_para1 value is 0x10f20200
[    0.547788] [ddrfreq] dram_para2 value is 0x0
[    0.547798] [ddrfreq] dram_mr0 value is 0x1c70
[    0.547809] [ddrfreq] dram_mr1 value is 0x40
[    0.547820] [ddrfreq] dram_mr2 value is 0x18
[    0.547830] [ddrfreq] dram_mr3 value is 0x0
[    0.547841] [ddrfreq] dram_tpr0 value is 0x47214f
[    0.547852] [ddrfreq] dram_tpr1 value is 0x1c2294b
[    0.547863] [ddrfreq] dram_tpr2 value is 0x61043
[    0.547874] [ddrfreq] dram_tpr3 value is 0x0
[    0.547884] [ddrfreq] dram_tpr4 value is 0x0
[    0.547894] [ddrfreq] dram_tpr5 value is 0x0
[    0.547905] [ddrfreq] dram_tpr6 value is 0x0
[    0.547915] [ddrfreq] dram_tpr7 value is 0x0
[    0.547926] [ddrfreq] dram_tpr8 value is 0x0
[    0.547936] [ddrfreq] dram_tpr9 value is 0x0
[    0.547947] [ddrfreq] dram_tpr10 value is 0x0
[    0.547957] [ddrfreq] dram_tpr11 value is 0x0
[    0.547968] [ddrfreq] dram_tpr12 value is 168
[    0.547977] [ddrfreq] sunxi_ddrfreq_min=168000
[    0.547988] [ddrfreq] dram_tpr13 value is 0x10901
[    0.548171] [dsm] use sysconfig
[    0.548181] [dsm] -----------Dram scene-freq Table------------
[    0.548194] [dsm] scene =    0       frequency = 552000KHz
[    0.548204] [dsm] scene =    1       frequency = 360000KHz
[    0.548215] [dsm] scene =    2       frequency = 240000KHz
[    0.548225] [dsm] scene =    3       frequency = 168000KHz
[    0.548235] [dsm] --------------------------------------------
[    0.548357] [ddrfreq] LV_count value is 3
[    0.548381] [ddrfreq] ---------------Dram V-F Table---------------
[    0.548394] [ddrfreq] voltage = 1100mv       frequency = 552000KHz
[    0.548405] [ddrfreq] voltage = 1100mv       frequency = 360000KHz
[    0.548416] [ddrfreq] voltage = 1100mv       frequency =    0KHz
[    0.548427] [ddrfreq] --------------------------------------------
[    0.548578] [ddrfreq] last_vdd=1100
[    0.548654] [ddrfreq] __sram_start: 0xc07fd000, __sram_end: 0xc07fe074, __sram_text_start: 0xf0000000, __sram_data_end: 0xf0001074
[    0.548671] [ddrfreq] sunxi dramfreq probe ok!
[    0.549022] NET: Registered protocol family 2
[    0.549354] IP route cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.549999] TCP established hash table entries: 16384 (order: 5, 131072 bytes)
[    0.550312] TCP bind hash table entries: 16384 (order: 5, 196608 bytes)
[    0.550573] TCP: Hash tables configured (established 16384 bind 16384)
[    0.550587] TCP: reno registered
[    0.550601] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    0.550629] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    0.550964] NET: Registered protocol family 1
[    0.551408] RPC: Registered named UNIX socket transport module.
[    0.551422] RPC: Registered udp transport module.
[    0.551432] RPC: Registered tcp transport module.
[    0.551442] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.551886] [pm]aw_pm_init!
[    0.551901] standby_mode = 1. 
[    0.551911] wakeup src cnt is : 1. 
[    0.551923] [exstandby]leave extended_standby_enable_wakeup_src : event 0x2000
[    0.551936] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_map 0x80
[    0.551949] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_group 0x0
[    0.551963] sunxi_reg_init enter
[    0.555378] NTFS driver 2.1.30 [Flags: R/W].
[    0.555600] fuse init (API version 7.18)
[    0.556086] msgmni has been set to 996
[    0.557865] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 253)
[    0.557887] io scheduler noop registered
[    0.557900] io scheduler deadline registered
[    0.558004] io scheduler cfq registered (default)
[    0.558428] pwm module init!
[    0.559001] sw_uart_get_devinfo()1476 - uart0 has no uart_regulator.
[    0.559022] sw_uart_get_devinfo()1476 - uart1 has no uart_regulator.
[    0.559039] sw_uart_get_devinfo()1476 - uart2 has no uart_regulator.
[    0.559585] uart0: ttyS0 at MMIO 0x1c28000 (irq = 32) is a SUNXI
[    0.559610] sw_console_setup()1236 - console setup baud 115200 parity n bits 8, flow n
[    0.559635] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    0.600105] axp22_mfd_irq_work: 4000020000:600080cf6c
[    0.600432] axp22_mfd_irq_work: 20000:600080cf6c
[    0.709409] console [ttyS0] enabled
[    0.709783] uart1: ttyS1 at MMIO 0x1c28400 (irq = 33) is a SUNXI
[    0.710105] uart2: ttyS2 at MMIO 0x1c28800 (irq = 34) is a SUNXI
[    0.714826] loop: module loaded
[    0.715007] [MCU_UART] sent ap resume event to mcu
[    0.715191] TIMER1_INTVAL_REG = 5dc
[    0.715364] jiffies initialized success
[    0.715372] [lds]: lds_module_init module init!
[    0.715551] [lds]: lds_motor_probe
[    0.716046] input: lds_input as /devices/virtual/input/input1
[    0.716123] [wifi_pm]: select wifi: rtl8189es !!
[    0.716284] [rtl8189es]: exec rtl8189es_wifi_gpio_init
[    0.716296] [rtl8189es]: module power name axp22_dldo1
[    0.716306] [rtl8189es]: module power ext1 name axp22_dldo2
[    0.716314] [rtl8189es]: failed to fetch wifi_power_ext2
[    0.716324] [rtl8189es]: use wifi card shutdown pin
[    0.716331] [rtl8189es]: rtl8189es module power set by axp.
[    0.716433] [rtl8189es]: first time
[    0.803477] [rtl8189es]: regulator on.
[    1.996202] [rtl8189es]: gpio rtl8189es_shdn set val 0, act val 0
[    2.002898] [wifi_pm]: wifi gpio init is OK !!
[    2.007789] module init!
[    2.010581] [hwinfo]: hwinfo_mod_init E
[    2.014775] [hwinfo]: 0, 0
[    2.017731] [hwinfo]: 2, 0
[    2.020904] tun: Universal TUN/TAP device driver, 1.6
[    2.026423] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.033417] PPP generic driver version 2.4.2
[    2.038267] PPP BSD Compression module registered
[    2.043499] PPP Deflate Compression module registered
[    2.049895] PPP MPPE Compression module registered
[    2.055152] NET: Registered protocol family 24
[    2.060051] [sw_hcd0]: usb host driver initialize........
[    2.066039] [sw_hcd0]: open_usb_clock
[    2.070140] get usb_regulator id vbus is nocare
[    2.075081] [sunxi_hcd0]: host_init_state = 0
[    2.079831] [sw_hcd0]: platform is usb host
[    2.084462] [sw_hcd0]: sunxi_hcd_init_controller: sunxi_hcd_host0: USB Host mode controller at f1c19000 using PIO, IRQ 103
[    2.096548] sunxi_hcd_host0 sunxi_hcd_host0: sunxi_hcd host driver
[    2.103312] sunxi_hcd_host0 sunxi_hcd_host0: new USB bus registered, assigned bus number 1
[    2.113097] hub 1-0:1.0: USB hub found
[    2.117202] hub 1-0:1.0: 1 port detected
[    2.121911] [sw_hcd0]: sunxi_usb_host0_disable start
[    2.127331] [sw_hcd0]: sunxi_hcd_wait_for_disconnect cnt=0
[    2.133342] [sunxi_hcd_host0]: Set USB Power OFF
[    2.138381] -------sunxi_hcd0_soft_disconnect---------
[    2.143324] wrn: hcd is not enable, need not stop hcd
[    2.149509] [sunxi_hcd_host0]: Set USB Power OFF
[    2.154587] [sw_hcd0]: close_usb_clock
[    2.158697] [sw_hcd0]: sunxi_usb_host0_disable end
[    2.164709] sunxi-rtc sunxi-rtc: rtc core: registered sunxi-rtc as rtc0
[    2.172085] sunxi cedar version 0.1 
[    2.176029] [cedar]: install start!!!
[    2.180245] [cedar]: install end!!!
[    2.187957] sunxi_wdt_init_module: sunxi WatchDog Timer Driver v1.0
[    2.195030] sunxi_wdt_probe: devm_ioremap return wdt_reg 0xf1c20ca0, res->start 0x01c20ca0, res->end 0x01c20cbf
[    2.206103] sunxi wdt request irq 57 ok
[    2.210500] sunxi_wdt_probe: initialized (g_timeout=16s, g_nowayout=0)
[    2.217622] [boot_reason]: br_wdt_check entry
[    2.222566] sunxi wdt start in uboot
[    2.227012] device-mapper: ioctl: 4.22.0-ioctl (2011-10-19) initialised: dm-devel@redhat.com
[    2.236554] autohotplug_init init ok
[    2.240504] sunxi_cpufreq_initcall: clocks pll=1008000000,cpu=1008000000,axi=336000000
[    2.249149] cur: pll=1008000000, cpudiv=1, axidiv=3
[    2.254500] axp22_dcdc3: Failed to create debugfs directory
[    2.260610] sunxi_cpufreq_initcall, get cpu frequency from sysconfig, max freq: 1200MHz, min freq: 648MHz
[    2.271096] -------------------CPU V-F Table--------------------
[    2.277649]  frequency = 1536000KHz  voltage = 1500mv
[    2.283172]  frequency = 1344000KHz  voltage = 1460mv
[    2.288682]  frequency = 1200000KHz  voltage = 1360mv
[    2.294202]  frequency = 1008000KHz  voltage = 1240mv
[    2.299712]  frequency = 816000KHz   voltage = 1140mv
[    2.305137]  frequency = 648000KHz   voltage = 1140mv
[    2.310565]  frequency =    0KHz     voltage = 1120mv
[    2.315790]  frequency =    0KHz     voltage = 1120mv
[    2.321026] -----------------------------------------------------
[    2.328009] [mmc]: SD/MMC/SDIO Host Controller Driver(v1.117 2015-12-1 14:13) Compiled in Mar 25 2020 at 20:47:21
[    2.339266] [mmc]: get mmc1's sdc_power failed
[    2.344149] [mmc]: get mmc2's sdc_power failed
[    2.348996] [mmc]: get mmc2's 2xmode ok, val = 1
[    2.354049] [mmc]: get mmc2's ddrmode ok, val = 1
[    2.359184] [mmc]: MMC host used card: 0x6, boot card: 0x4, io_card 2
[    2.367760] [mmc]: mmc not poweroff notifiy
[    2.372388] [mmc]: sdc2 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.383104] [mmc]: sdc2 set ios: clk 0Hz bm PP pm UP vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.392987] [mmc]: mmc not poweroff notifiy
[    2.394181] [mmc]: sdc2 power_supply is null
[    2.402225] [mmc]: sdc1 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.410049] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.425423] usbcore: registered new interface driver usbhid
[    2.430894] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431771] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431809] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.434320] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.436247] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 8,  RTO !!
[    2.436278] *******************Try sdio*******************
[    2.437109] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.437959] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.438809] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439661] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439693] *******************Try sd *******************
[    2.440526] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.441379] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.442231] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443084] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443116] *******************Try mmc*******************
[    2.443130] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443578] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443686] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443791] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.446291] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481298] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481973] [hwinfo]: 1, 0
[    2.481981] [hwinfo]: EMMC: 17, 0x34474130
[    2.493892] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.494040] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494115] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494644] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing MMC-HS(SDR20) dt B
[    2.494849] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.494926] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.495047] mmc0: new high speed DDR MMC card at address 0001
[    2.495556] mmcblk0: mmc0:0001 004GA0 3.68 GiB 
[    2.495817] mmcblk0boot0: mmc0:0001 004GA0 partition 1 2.00 MiB
[    2.496069] mmcblk0boot1: mmc0:0001 004GA0 partition 2 2.00 MiB
[    2.497111]  mmcblk0: p1 p2 p3 < p5 p6 p7 p8 p9 p10 p11 >
[    2.497164] mmcblk0: p1 size 3268608 extends beyond EOD, truncated
[    2.500446]  mmcblk0boot1: unknown partition table
[    2.501748]  mmcblk0boot0: unknown partition table
[    2.501989] *******************mmc init ok *******************
[    2.599518] usbhid: USB HID core driver
[    2.696107] [audiocodec] : aif2 not used!
[    2.747409] [audiocodec] : aif3 not used!
[    2.753444] asoc: sndcodec <-> sunxi-codec mapping ok
[    2.760110] u32 classifier
[    2.763094]     Actions configured
[    2.766804] Netfilter messages via NETLINK v0.30.
[    2.772035] nf_conntrack version 0.5.0 (7973 buckets, 31892 max)
[    2.779013] ctnetlink v0.93: registering with nfnetlink.
[    2.784912] NF_TPROXY: Transparent proxy support initialized, version 4.1.0
[    2.792543] NF_TPROXY: Copyright (c) 2006-2007 BalaBit IT Ltd.
[    2.799346] xt_time: kernel timezone is -0000
[    2.804515] ip_tables: (C) 2000-2006 Netfilter Core Team
[    2.810550] arp_tables: (C) 2002 David S. Miller
[    2.815670] TCP: cubic registered
[    2.819288] Initializing XFRM netlink socket
[    2.824302] NET: Registered protocol family 10
[    2.830155] Mobile IPv6
[    2.832850] ip6_tables: (C) 2000-2006 Netfilter Core Team
[    2.838936] NET: Registered protocol family 17
[    2.843826] NET: Registered protocol family 15
[    2.848723] L2TP core driver, V2.0
[    2.852453] PPPoL2TP kernel driver, V2.0
[    2.856746] L2TP IP encapsulation support (L2TPv3)
[    2.862092] L2TP netlink interface
[    2.865843] L2TP ethernet pseudowire support (L2TPv3)
[    2.871570] VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
[    2.879975] ThumbEE CPU extension supported.
[    2.884690] Registering SWP/SWPB emulation handler
[    2.890733] axp22_dc5ldo: incomplete constraints, leaving on
[    2.897224] axp22_aldo3: incomplete constraints, leaving on
[    2.903400] axp22_aldo2: incomplete constraints, leaving on
[    2.909536] axp22_aldo1: incomplete constraints, leaving on
[    2.915685] axp22_rtc: incomplete constraints, leaving on
[    2.921681] axp22_dcdc5: incomplete constraints, leaving on
[    2.927829] axp22_dcdc4: incomplete constraints, leaving on
[    2.933967] axp22_dcdc3: incomplete constraints, leaving on
[    2.940118] axp22_dcdc2: incomplete constraints, leaving on
[    2.946268] axp22_dcdc1: incomplete constraints, leaving on
[    2.952613] [boot_reason]: module init!
[    2.956869] otg_wakelock_init: No USB transceiver found
[    2.962621] sunxi-rtc sunxi-rtc: setting system clock to 1970-01-01 00:00:06 UTC (6)
[    2.971157] ths_fetch_sysconfig_para: type err  device_used = 1. 
[    2.977822] ths_fetch_sysconfig_para: type err ths_trip1_3 = 110. 
[    2.984659] ths_fetch_sysconfig_para: type err ths_trip1_4 = 110. 
[    2.991440] ths_fetch_sysconfig_para: type err ths_trip1_5 = 110. 
[    2.998199] ths_fetch_sysconfig_para: type err ths_trip1_6 = 110. 
[    3.004982] ths_fetch_sysconfig_para: type err ths_trip1_7 = 110. 
[    3.011768] ths_fetch_sysconfig_para: type err ths_trip1_3_min = 0. 
[    3.018722] ths_fetch_sysconfig_para: type err ths_trip1_3_max = 0. 
[    3.025741] ths_fetch_sysconfig_para: type err ths_trip1_4_min = 0. 
[    3.032692] ths_fetch_sysconfig_para: type err ths_trip1_4_max = 0. 
[    3.039656] ths_fetch_sysconfig_para: type err ths_trip1_5_min = 0. 
[    3.046663] ths_fetch_sysconfig_para: type err ths_trip1_5_max = 0. 
[    3.053631] ths_fetch_sysconfig_para: type err ths_trip1_6_min = 0. 
[    3.060576] ths_fetch_sysconfig_para: type err ths_trip1_6_max = 0. 
[    3.067577] ths_fetch_sysconfig_para: type err ths_trip2_count = 0. 
[    3.074537] ths_fetch_sysconfig_para: type err ths_trip2_0 = 0. 
[    3.081355] input: sunxi-ths as /devices/virtual/input/input2
[    3.088076] suxi_ths: Kernel Thermal management registered
[    3.094157] fetch C0_LV_count from sysconfig failed
[    3.099981] CPU Budget:Register notifier
[    3.104316] CPU Budget:register Success
[    3.108539] sunxi-budget-cooling sunxi-budget-cooling: Cooling device registered: thermal-budget-0
[    3.121641] ALSA device list:
[    3.124905]   #0: audiocodec
[    3.128250] sw_uart_startup()603 - ttyS0 start up by swapper/0, pid 1
[    3.135400] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.151228] EXT4-fs (mmcblk0p8): mounted filesystem with ordered data mode. Opts: (null)
[    3.160265] VFS: Mounted root (ext4 filesystem) on device 179:8.
[    3.168587] devtmpfs: mounted
[    3.172102] Freeing init memory: 276K
Mount failed for selinuxfs on /sys/fs/selinux:  No such file or directory
[    3.240076] sw_uart_shutdown()635 - ttyS0 shut down by init, pid 1
[    3.314657] sw_uart_startup()603 - ttyS0 start up by init, pid 79
[    3.321489] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.352832] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 79
[    3.406652] init: plymouth-upstart-bridge main process (79) terminated with status 1
[    3.415438] init: plymouth-upstart-bridge main process ended, respawning
[    3.429541] sw_uart_startup()603 - ttyS0 start up by init, pid 89
[    3.436447] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.458943] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 89
[    3.486714] init: plymouth-upstart-bridge main process (89) terminated with status 1
[    3.495346] init: plymouth-upstart-bridge main process ended, respawning
[    3.504312] init: ureadahead main process (82) terminated with status 5
[    3.518449] sw_uart_startup()603 - ttyS0 start up by init, pid 92
[    3.525286] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.545644] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 92
[    3.569839] init: plymouth-upstart-bridge main process (92) terminated with status 1
[    3.578614] init: plymouth-upstart-bridge main process ended, respawning
[    3.601838] sw_uart_startup()603 - ttyS0 start up by init, pid 98
[    3.608615] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.681192] EXT4-fs (mmcblk0p1): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.810326] EXT4-fs (mmcblk0p6): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.925955] EXT4-fs (mmcblk0p10): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    4.035759] EXT4-fs (mmcblk0p11): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
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
 * Starting Bridge udev events into upstart                              [ OK ]
 * Starting Signal sysvinit that remote filesystems are mounted          [ OK ]
 * Starting device node and kernel event manager                         [ OK ]
 * Starting load modules from /etc/modules                               [ OK ]
 * Starting cold plug devices                                            [ OK ]
 * Starting rockrobo play bootring service                               [ OK ]
 * Starting log initial device creation                                  [ OK ]
 * Stopping load modules from /etc/modules                               [ OK ]
 * Starting configure network device security                            [ OK ]
 * Starting Mount network filesystems                                    [ OK ]
 * Starting set console font                                             [ OK ]
 * Stopping set console font                                             [ OK ]
 * Starting userspace bootsplash                                         [ OK ]
 * Stopping cold plug devices                                            [ OK ]
 * Stopping userspace bootsplash                                         [ OK ]
 * Starting Send an event to indicate plymouth is up                     [ OK ]
 * Stopping log initial device creation                                  [ OK ]
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Stopping Send an event to indicate plymouth is up                     [ OK ]
 * Starting configure network device                                     [ OK ]
 * Stopping Mount network filesystems                                    [ OK ]
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

dnsmasq: unknown interface wlan0
 * Starting DNS forwarder and DHCP server dnsmasq        * Starting Syste[ OK ]nlevel compatibility
 * Starting logrotate 5s check daemon                                    [ OK ]
 * Starting regular background program processing daemon                 [ OK ]
 * Starting save kernel messages                                         [ OK ]
 * Starting OpenSSH server                                               [ OK ]
 * Stopping save kernel messages                                         [ OK ] 
                                                                         [fail]
 * Stopping System V runlevel compatibility                              [ OK ]
 * Starting rrwatchdoge daemon                                           [ OK ]
[    7.776633] WDIOC_SETFUNCCONFIG: 1
[    7.781321] WDIOC_SETFUNCCONFIG: 1

Ubuntu 14.04.3 LTS rockrobo ttyS0

rockrobo login: 
```