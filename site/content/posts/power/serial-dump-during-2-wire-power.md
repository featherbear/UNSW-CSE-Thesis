+++
categories = []
date = 2022-04-06T08:10:52Z
description = ""
series = []
tags = []
title = "Serial Dump During 2-wire Power"
toc = true

+++
Only attached +ve and -ve rails

```
)*boot0 version : 4.0.0
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
[      0.796]board_status_probe
[      0.799]boot_reason init from pmic, set to env: 0x0
[      0.804]boot reason=0x0, is boot from poweroff
[      0.809]recovery detect id val: 0
[      0.812]usb vbus gpio fd: 1386422328
[      0.816]usb vbus cable not connectted
[      0.820]board_check_vbus2boot = 0
[      0.823]axp_probe_key loop: 499
[      0.838]axp_probe_key loop: 498
[      0.852]axp_probe_key loop: 497
[      0.866]axp_probe_key loop: 496
[      0.880]axp_probe_key loop: 495
[      0.894]axp_probe_key loop: 494
[      0.908]axp_probe_key loop: 493
[      0.922]axp_probe_key loop: 492
[      0.936]axp_probe_key loop: 491
[      0.950]axp_probe_key loop: 490
[      0.964]axp_probe_key loop: 489
[      0.978]axp_probe_key loop: 488
[      0.992]axp_probe_key loop: 487
[      1.006]axp_probe_key loop: 486
[      1.020]axp_probe_key loop: 485
[      1.034]axp_probe_key loop: 484
[      1.048]axp_probe_key loop: 483
[      1.062]axp_probe_key loop: 482
[      1.076]axp_probe_key loop: 481
[      1.090]axp_probe_key loop: 480
[      1.104]axp_probe_key loop: 479
[      1.118]axp_probe_key loop: 478
[      1.132]axp_probe_key loop: 477
[      1.146]axp_probe_key loop: 476
[      1.160]axp_probe_key loop: 475
[      1.174]axp_probe_key loop: 474
[      1.188]axp_probe_key loop: 473
[      1.202]axp_probe_key loop: 472
[      1.216]axp_probe_key loop: 471
[      1.230]axp_probe_key loop: 470
[      1.244]axp_probe_key loop: 469
[      1.258]axp_probe_key loop: 468
[      1.272]axp_probe_key loop: 467
[      1.286]axp_probe_key loop: 466
[      1.300]axp_probe_key loop: 465
[      1.314]axp_probe_key loop: 464
[      1.328]axp_probe_key loop: 463
[      1.342]axp_probe_key loop: 462
[      1.356]axp_probe_key loop: 461
[      1.370]axp_probe_key loop: 460
[      1.384]axp_probe_key loop: 459
[      1.398]axp_probe_key loop: 458
[      1.412]axp_probe_key loop: 457
[      1.426]axp_probe_key loop: 456
[      1.440]axp_probe_key loop: 455
[      1.454]axp_probe_key loop: 454
[      1.468]axp_probe_key loop: 453
[      1.482]axp_probe_key loop: 452
[      1.496]axp_probe_key loop: 451
[      1.510]axp_probe_key loop: 450
[      1.524]axp_probe_key loop: 449
[      1.538]axp_probe_key loop: 448
[      1.552]axp_probe_key loop: 447
[      1.566]axp_probe_key loop: 446
[      1.580]axp_probe_key loop: 445
[      1.594]axp_probe_key loop: 444
[      1.608]axp_probe_key loop: 443
[      1.622]axp_probe_key loop: 442
[      1.636]axp_probe_key loop: 441
[      1.650]axp_probe_key loop: 440
[      1.664]axp_probe_key loop: 439
[      1.678]axp_probe_key loop: 438
[      1.692]axp_probe_key loop: 437
[      1.706]axp_probe_key loop: 436
[      1.720]axp_probe_key loop: 435
[      1.734]axp_probe_key loop: 434
[      1.748]axp_probe_key loop: 433
[      1.762]axp_probe_key loop: 432
[      1.776]axp_probe_key loop: 431
[      1.790]axp_probe_key loop: 430
[      1.804]axp_probe_key loop: 429
[      1.818]axp_probe_key loop: 428
[      1.832]axp_probe_key loop: 427
[      1.846]axp_probe_key loop: 426
[      1.860]axp_probe_key loop: 425
[      1.874]AP boot into normal mode
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
[      1.989]Hit any key to stop autoboot:  0 
Loading file "/boot/zImage" from mmc device 2:8
3882616 bytes read
[      2.093]para err in disp_ioctl, cmd = 0xa,screen id = 1
reload config to 0x43000000 
[      2.149]Starting kernel ...
[      2.149]enable watchdog 1c20cb8 value 0xb1(16s)

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
[    0.000583] Mount-cache hash table entries: 512
[    0.001641] Initializing cgroup subsys debug
[    0.001662] Initializing cgroup subsys cpuacct
[    0.001674] Initializing cgroup subsys freezer
[    0.001721] CPU: Testing write buffer coherency: ok
[    0.001779] ftrace: allocating 19622 entries in 58 pages
[    0.030306] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
[    0.030327] [sunxi_smp_prepare_cpus] enter
[    0.030377] Setting up static identity map for 0x4050d630 - 0x4050d688
[    0.010000] CPU1: Booted secondary processor
[    0.010000] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001
[    0.010000] CPU2: Booted secondary processor
[    0.010000] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002
[    0.010000] CPU3: Booted secondary processor
[    0.010000] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003
[    0.210234] Brought up 4 CPUs
[    0.210253] SMP: Total of 4 processors activated (19200.00 BogoMIPS).
[    0.210551] devtmpfs: initialized
[    0.214323] pinctrl core: initialized pinctrl subsystem
[    0.214323] dummy: 
[    0.223871] NET: Registered protocol family 16
[    0.241788] DMA: preallocated 2048 KiB pool for atomic coherent allocations
[    0.241891] script_sysfs_init success
[    0.242190] sunxi pinctrl probe enter
[    0.242890] gpiochip_add: registered GPIOs 0 to 383 on device: sunxi-pinctrl
[    0.243970] sunxi-pinctrl sunxi-pinctrl: initialized sunXi PIO driver
[    0.244168] axp_pinctrl_probe enter...
[    0.244315] gpiochip_add: registered GPIOs 1024 to 1029 on device: axp-pinctrl
[    0.244338] mainkey total count : 77
[    0.244379] map mainkey [motor_para] to pinctrl, map number [2]
[    0.244446] axp pinctrl driver probe ok
[    0.245487] [sunxi-module]: [sunxi-module.0] probe success
[    0.245534] script config pll3 to 297 Mhz
[    0.245551] script config pll4 to 300 Mhz
[    0.245587] script config pll6 to 600 Mhz
[    0.245601] script config pll8 to 408 Mhz
[    0.245625] script config pll9 to 480 Mhz
[    0.245639] script config pll10 to 297 Mhz
[    0.245648] sunxi_default_clk_init
[    0.245657] try to set pll6ahb1 to 200000000
[    0.245711] try to set ahb clk source to pll6ahb1
[    0.245721] set ahb clk source to pll6ahb1
[    0.245740] set apb2 to low freq 1.2 Mhz
[    0.245769] set ahb clk source to pll6
[    0.245779] recove apb2 to pre freq 24000000
[    0.245795] try to set ahb1 to 200000000
[    0.245807] try to set apb1 to 100000000
[    0.245824] script config apb2 to 37 Mhz
[    0.250940] bio: create slab <bio-0> at 0
[    0.250940] [ARISC] :sunxi-arisc driver v1.60
[    0.288278] [ARISC] :arisc version: [v0.0.76]
[    0.288292] [sunxi-module]: arisc register success
[    0.507579] [ARISC] :sunxi-arisc driver v1.60 startup succeeded
[    0.510550] SCSI subsystem initialized
[    0.510696] usbcore: registered new interface driver usbfs
[    0.510773] usbcore: registered new interface driver hub
[    0.510815] usbcore: registered new device driver usb
[    0.510815] twi_chan_cfg()350 - [twi0] has no twi_regulator.
[    0.510815] twi_chan_cfg()350 - [twi1] has no twi_regulator.
[    0.510815] twi_chan_cfg()350 - [twi2] has no twi_regulator.
[    0.510815] Linux video capture interface: v2.00
[    0.510039] axp22_board axp22_board: AXP (CHIP ID: 0x06) detected
[    0.511803] axp22_dcdc1: 1600 <--> 3400 mV at 3300 mV 
[    0.511803] axp22_dcdc2: 600 <--> 1540 mV at 1100 mV 
[    0.511803] axp22_dcdc3: 600 <--> 1860 mV at 1240 mV 
[    0.511803] axp22_dcdc4: 600 <--> 1540 mV at 1100 mV 
[    0.511803] axp22_dcdc5: 1000 <--> 2550 mV at 1500 mV 
[    0.511803] axp22_rtc: 3000 mV 
[    0.511803] axp22_aldo1: 700 <--> 3300 mV at 3300 mV 
[    0.511803] axp22_aldo2: 700 <--> 3300 mV at 2500 mV 
[    0.511803] axp22_aldo3: 700 <--> 3300 mV at 3000 mV 
[    0.511803] axp22_dldo1: 700 <--> 3300 mV at 700 mV 
[    0.511803] axp22_dldo2: 700 <--> 3300 mV at 700 mV 
[    0.511803] axp22_dldo3: 700 <--> 3300 mV at 700 mV 
[    0.520206] axp22_dldo4: 700 <--> 3300 mV at 700 mV 
[    0.520219] axp22_eldo1: 700 <--> 3300 mV at 700 mV 
[    0.520219] axp22_eldo1: supplied by axp22_dcdc1
[    0.520297] axp22_eldo2: 700 <--> 3300 mV at 700 mV 
[    0.520297] axp22_eldo2: supplied by axp22_dcdc1
[    0.520297] axp22_eldo3: 700 <--> 3300 mV at 700 mV 
[    0.520297] axp22_eldo3: supplied by axp22_dcdc1
[    0.520297] axp22_dc5ldo: 700 <--> 1400 mV at 1100 mV 
[    0.520297] axp22_ldoio0: 700 <--> 3300 mV at 3800 mV 
[    0.520297] axp22_ldoio1: 700 <--> 3300 mV at 3800 mV 
[    0.520297] axp22_dc1sw: at 700 mV 
[    0.520297] axp22_dc1sw: supplied by axp22_dcdc1
[    0.520427] input: axp22-supplyer as /devices/platform/axp22_board/axp22-supplyer.20/input/input0
[    0.520733] now_rest_vol = 0
[    0.520733] Advanced Linux Sound Architecture Driver Version 1.0.25.
[    0.521114] cfg80211: Calling CRDA to update world regulatory domain
[    0.521179] Switching to clocksource arch_sys_counter
[    0.535636] FS-Cache: Loaded
[    0.535974] CacheFiles: Loaded
[    0.546670] [usb_manager]: CONFIG_USB_SUNXI_USB0_OTG
[    0.546709] get usbc0(usb_restrict pin) failed
[    0.547123] [sw_udc]: udc_init: version 20080411
[    0.547735] [ddrfreq] dram_clk value is 552
[    0.547746] [ddrfreq] sunxi_ddrfreq_max=552000
[    0.547757] [ddrfreq] dram_type value is 3
[    0.547768] [ddrfreq] dram_zq value is 0x3bbb
[    0.547778] [ddrfreq] dram_odt_en value is 1
[    0.547789] [ddrfreq] dram_para1 value is 0x10f20200
[    0.547800] [ddrfreq] dram_para2 value is 0x0
[    0.547811] [ddrfreq] dram_mr0 value is 0x1c70
[    0.547821] [ddrfreq] dram_mr1 value is 0x40
[    0.547831] [ddrfreq] dram_mr2 value is 0x18
[    0.547842] [ddrfreq] dram_mr3 value is 0x0
[    0.547852] [ddrfreq] dram_tpr0 value is 0x47214f
[    0.547863] [ddrfreq] dram_tpr1 value is 0x1c2294b
[    0.547875] [ddrfreq] dram_tpr2 value is 0x61043
[    0.547885] [ddrfreq] dram_tpr3 value is 0x0
[    0.547896] [ddrfreq] dram_tpr4 value is 0x0
[    0.547906] [ddrfreq] dram_tpr5 value is 0x0
[    0.547917] [ddrfreq] dram_tpr6 value is 0x0
[    0.547927] [ddrfreq] dram_tpr7 value is 0x0
[    0.547938] [ddrfreq] dram_tpr8 value is 0x0
[    0.547948] [ddrfreq] dram_tpr9 value is 0x0
[    0.547958] [ddrfreq] dram_tpr10 value is 0x0
[    0.547969] [ddrfreq] dram_tpr11 value is 0x0
[    0.547980] [ddrfreq] dram_tpr12 value is 168
[    0.547989] [ddrfreq] sunxi_ddrfreq_min=168000
[    0.548000] [ddrfreq] dram_tpr13 value is 0x10901
[    0.548183] [dsm] use sysconfig
[    0.548194] [dsm] -----------Dram scene-freq Table------------
[    0.548205] [dsm] scene =    0       frequency = 552000KHz
[    0.548216] [dsm] scene =    1       frequency = 360000KHz
[    0.548226] [dsm] scene =    2       frequency = 240000KHz
[    0.548237] [dsm] scene =    3       frequency = 168000KHz
[    0.548246] [dsm] --------------------------------------------
[    0.548369] [ddrfreq] LV_count value is 3
[    0.548394] [ddrfreq] ---------------Dram V-F Table---------------
[    0.548407] [ddrfreq] voltage = 1100mv       frequency = 552000KHz
[    0.548418] [ddrfreq] voltage = 1100mv       frequency = 360000KHz
[    0.548429] [ddrfreq] voltage = 1100mv       frequency =    0KHz
[    0.548439] [ddrfreq] --------------------------------------------
[    0.548588] [ddrfreq] last_vdd=1100
[    0.548665] [ddrfreq] __sram_start: 0xc07fd000, __sram_end: 0xc07fe074, __sram_text_start: 0xf0000000, __sram_data_end: 0xf0001074
[    0.548681] [ddrfreq] sunxi dramfreq probe ok!
[    0.549029] NET: Registered protocol family 2
[    0.549357] IP route cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.549997] TCP established hash table entries: 16384 (order: 5, 131072 bytes)
[    0.550307] TCP bind hash table entries: 16384 (order: 5, 196608 bytes)
[    0.550567] TCP: Hash tables configured (established 16384 bind 16384)
[    0.550581] TCP: reno registered
[    0.550596] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    0.550624] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    0.550956] NET: Registered protocol family 1
[    0.551393] RPC: Registered named UNIX socket transport module.
[    0.551408] RPC: Registered udp transport module.
[    0.551418] RPC: Registered tcp transport module.
[    0.551428] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.551878] [pm]aw_pm_init!
[    0.551892] standby_mode = 1. 
[    0.551902] wakeup src cnt is : 1. 
[    0.551914] [exstandby]leave extended_standby_enable_wakeup_src : event 0x2000
[    0.551926] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_map 0x80
[    0.551939] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_group 0x0
[    0.551953] sunxi_reg_init enter
[    0.555388] NTFS driver 2.1.30 [Flags: R/W].
[    0.555606] fuse init (API version 7.18)
[    0.556095] msgmni has been set to 996
[    0.557872] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 253)
[    0.557895] io scheduler noop registered
[    0.557907] io scheduler deadline registered
[    0.558019] io scheduler cfq registered (default)
[    0.558433] pwm module init!
[    0.559015] sw_uart_get_devinfo()1476 - uart0 has no uart_regulator.
[    0.559035] sw_uart_get_devinfo()1476 - uart1 has no uart_regulator.
[    0.559052] sw_uart_get_devinfo()1476 - uart2 has no uart_regulator.
[    0.559595] uart0: ttyS0 at MMIO 0x1c28000 (irq = 32) is a SUNXI
[    0.559619] sw_console_setup()1236 - console setup baud 115200 parity n bits 8, flow n
[    0.559644] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    0.595669] axp22_mfd_irq_work: 4000020000:600080cf6c
[    0.596026] axp22_mfd_irq_work: 20000:600080cf6c
[    0.709421] console [ttyS0] enabled
[    0.709792] uart1: ttyS1 at MMIO 0x1c28400 (irq = 33) is a SUNXI
[    0.710114] uart2: ttyS2 at MMIO 0x1c28800 (irq = 34) is a SUNXI
[    0.714841] loop: module loaded
[    0.715025] [MCU_UART] sent ap resume event to mcu
[    0.715205] TIMER1_INTVAL_REG = 5dc
[    0.715378] jiffies initialized success
[    0.715387] [lds]: lds_module_init module init!
[    0.715564] [lds]: lds_motor_probe
[    0.716047] input: lds_input as /devices/virtual/input/input1
[    0.716122] [wifi_pm]: select wifi: rtl8189es !!
[    0.716284] [rtl8189es]: exec rtl8189es_wifi_gpio_init
[    0.716296] [rtl8189es]: module power name axp22_dldo1
[    0.716305] [rtl8189es]: module power ext1 name axp22_dldo2
[    0.716314] [rtl8189es]: failed to fetch wifi_power_ext2
[    0.716323] [rtl8189es]: use wifi card shutdown pin
[    0.716331] [rtl8189es]: rtl8189es module power set by axp.
[    0.716430] [rtl8189es]: first time
[    0.803493] [rtl8189es]: regulator on.
[    1.996237] [rtl8189es]: gpio rtl8189es_shdn set val 0, act val 0
[    2.002933] [wifi_pm]: wifi gpio init is OK !!
[    2.007827] module init!
[    2.010620] [hwinfo]: hwinfo_mod_init E
[    2.014815] [hwinfo]: 0, 0
[    2.017770] [hwinfo]: 2, 0
[    2.020946] tun: Universal TUN/TAP device driver, 1.6
[    2.026463] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.033457] PPP generic driver version 2.4.2
[    2.038311] PPP BSD Compression module registered
[    2.043543] PPP Deflate Compression module registered
[    2.049934] PPP MPPE Compression module registered
[    2.055191] NET: Registered protocol family 24
[    2.060091] [sw_hcd0]: usb host driver initialize........
[    2.066080] [sw_hcd0]: open_usb_clock
[    2.070181] get usb_regulator id vbus is nocare
[    2.075121] [sunxi_hcd0]: host_init_state = 0
[    2.079871] [sw_hcd0]: platform is usb host
[    2.084503] [sw_hcd0]: sunxi_hcd_init_controller: sunxi_hcd_host0: USB Host mode controller at f1c19000 using PIO, IRQ 103
[    2.096593] sunxi_hcd_host0 sunxi_hcd_host0: sunxi_hcd host driver
[    2.103357] sunxi_hcd_host0 sunxi_hcd_host0: new USB bus registered, assigned bus number 1
[    2.113132] hub 1-0:1.0: USB hub found
[    2.117238] hub 1-0:1.0: 1 port detected
[    2.121958] [sw_hcd0]: sunxi_usb_host0_disable start
[    2.127379] [sw_hcd0]: sunxi_hcd_wait_for_disconnect cnt=0
[    2.133389] [sunxi_hcd_host0]: Set USB Power OFF
[    2.138429] -------sunxi_hcd0_soft_disconnect---------
[    2.143372] wrn: hcd is not enable, need not stop hcd
[    2.149557] [sunxi_hcd_host0]: Set USB Power OFF
[    2.154633] [sw_hcd0]: close_usb_clock
[    2.158743] [sw_hcd0]: sunxi_usb_host0_disable end
[    2.164758] sunxi-rtc sunxi-rtc: rtc core: registered sunxi-rtc as rtc0
[    2.172131] sunxi cedar version 0.1 
[    2.176074] [cedar]: install start!!!
[    2.180291] [cedar]: install end!!!
[    2.188006] sunxi_wdt_init_module: sunxi WatchDog Timer Driver v1.0
[    2.195090] sunxi_wdt_probe: devm_ioremap return wdt_reg 0xf1c20ca0, res->start 0x01c20ca0, res->end 0x01c20cbf
[    2.206159] sunxi wdt request irq 57 ok
[    2.210553] sunxi_wdt_probe: initialized (g_timeout=16s, g_nowayout=0)
[    2.217675] [boot_reason]: br_wdt_check entry
[    2.222621] sunxi wdt start in uboot
[    2.227081] device-mapper: ioctl: 4.22.0-ioctl (2011-10-19) initialised: dm-devel@redhat.com
[    2.236616] autohotplug_init init ok
[    2.240567] sunxi_cpufreq_initcall: clocks pll=1008000000,cpu=1008000000,axi=336000000
[    2.249212] cur: pll=1008000000, cpudiv=1, axidiv=3
[    2.254566] axp22_dcdc3: Failed to create debugfs directory
[    2.260675] sunxi_cpufreq_initcall, get cpu frequency from sysconfig, max freq: 1200MHz, min freq: 648MHz
[    2.271160] -------------------CPU V-F Table--------------------
[    2.277713]  frequency = 1536000KHz  voltage = 1500mv
[    2.283239]  frequency = 1344000KHz  voltage = 1460mv
[    2.288749]  frequency = 1200000KHz  voltage = 1360mv
[    2.294270]  frequency = 1008000KHz  voltage = 1240mv
[    2.299780]  frequency = 816000KHz   voltage = 1140mv
[    2.305208]  frequency = 648000KHz   voltage = 1140mv
[    2.310635]  frequency =    0KHz     voltage = 1120mv
[    2.315860]  frequency =    0KHz     voltage = 1120mv
[    2.321095] -----------------------------------------------------
[    2.328075] [mmc]: SD/MMC/SDIO Host Controller Driver(v1.117 2015-12-1 14:13) Compiled in Mar 25 2020 at 20:47:21
[    2.339331] [mmc]: get mmc1's sdc_power failed
[    2.344216] [mmc]: get mmc2's sdc_power failed
[    2.349062] [mmc]: get mmc2's 2xmode ok, val = 1
[    2.354114] [mmc]: get mmc2's ddrmode ok, val = 1
[    2.359250] [mmc]: MMC host used card: 0x6, boot card: 0x4, io_card 2
[    2.367826] [mmc]: mmc not poweroff notifiy
[    2.372452] [mmc]: sdc2 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.383169] [mmc]: sdc2 set ios: clk 0Hz bm PP pm UP vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.393047] [mmc]: mmc not poweroff notifiy
[    2.394246] [mmc]: sdc2 power_supply is null
[    2.402284] [mmc]: sdc1 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.410050] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.425482] usbcore: registered new interface driver usbhid
[    2.430893] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431768] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.431805] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.434318] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.436243] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 8,  RTO !!
[    2.436275] *******************Try sdio*******************
[    2.437108] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.437958] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.438808] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439660] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.439692] *******************Try sd *******************
[    2.440525] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.441378] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.442230] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443083] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.443114] *******************Try mmc*******************
[    2.443128] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443577] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443685] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.443792] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.446293] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481294] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.481966] [hwinfo]: 1, 0
[    2.481974] [hwinfo]: EMMC: 17, 0x34474130
[    2.493881] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.494030] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494104] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.494634] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing MMC-HS(SDR20) dt B
[    2.494839] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.494916] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.495036] mmc0: new high speed DDR MMC card at address 0001
[    2.495546] mmcblk0: mmc0:0001 004GA0 3.68 GiB 
[    2.495808] mmcblk0boot0: mmc0:0001 004GA0 partition 1 2.00 MiB
[    2.496059] mmcblk0boot1: mmc0:0001 004GA0 partition 2 2.00 MiB
[    2.497096]  mmcblk0: p1 p2 p3 < p5 p6 p7 p8 p9 p10 p11 >
[    2.497150] mmcblk0: p1 size 3268608 extends beyond EOD, truncated
[    2.500400]  mmcblk0boot1: unknown partition table
[    2.501690]  mmcblk0boot0: unknown partition table
[    2.501926] *******************mmc init ok *******************
[    2.599567] usbhid: USB HID core driver
[    2.695681] [audiocodec] : aif2 not used!
[    2.746778] [audiocodec] : aif3 not used!
[    2.752808] asoc: sndcodec <-> sunxi-codec mapping ok
[    2.759381] u32 classifier
[    2.762355]     Actions configured
[    2.766068] Netfilter messages via NETLINK v0.30.
[    2.771295] nf_conntrack version 0.5.0 (7973 buckets, 31892 max)
[    2.778262] ctnetlink v0.93: registering with nfnetlink.
[    2.784120] NF_TPROXY: Transparent proxy support initialized, version 4.1.0
[    2.791739] NF_TPROXY: Copyright (c) 2006-2007 BalaBit IT Ltd.
[    2.798536] xt_time: kernel timezone is -0000
[    2.803713] ip_tables: (C) 2000-2006 Netfilter Core Team
[    2.809693] arp_tables: (C) 2002 David S. Miller
[    2.814820] TCP: cubic registered
[    2.818431] Initializing XFRM netlink socket
[    2.823410] NET: Registered protocol family 10
[    2.829177] Mobile IPv6
[    2.831904] ip6_tables: (C) 2000-2006 Netfilter Core Team
[    2.837963] NET: Registered protocol family 17
[    2.842852] NET: Registered protocol family 15
[    2.847709] L2TP core driver, V2.0
[    2.851449] PPPoL2TP kernel driver, V2.0
[    2.855722] L2TP IP encapsulation support (L2TPv3)
[    2.861012] L2TP netlink interface
[    2.864760] L2TP ethernet pseudowire support (L2TPv3)
[    2.870496] VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
[    2.878864] ThumbEE CPU extension supported.
[    2.883544] Registering SWP/SWPB emulation handler
[    2.889559] axp22_dc5ldo: incomplete constraints, leaving on
[    2.896043] axp22_aldo3: incomplete constraints, leaving on
[    2.902197] axp22_aldo2: incomplete constraints, leaving on
[    2.908321] axp22_aldo1: incomplete constraints, leaving on
[    2.914473] axp22_rtc: incomplete constraints, leaving on
[    2.920420] axp22_dcdc5: incomplete constraints, leaving on
[    2.926624] axp22_dcdc4: incomplete constraints, leaving on
[    2.932782] axp22_dcdc3: incomplete constraints, leaving on
[    2.938908] axp22_dcdc2: incomplete constraints, leaving on
[    2.945057] axp22_dcdc1: incomplete constraints, leaving on
[    2.951379] [boot_reason]: module init!
[    2.955586] otg_wakelock_init: No USB transceiver found
[    2.961336] sunxi-rtc sunxi-rtc: setting system clock to 1970-01-01 00:00:06 UTC (6)
[    2.969811] ths_fetch_sysconfig_para: type err  device_used = 1. 
[    2.976487] ths_fetch_sysconfig_para: type err ths_trip1_3 = 110. 
[    2.983272] ths_fetch_sysconfig_para: type err ths_trip1_4 = 110. 
[    2.990024] ths_fetch_sysconfig_para: type err ths_trip1_5 = 110. 
[    2.996763] ths_fetch_sysconfig_para: type err ths_trip1_6 = 110. 
[    3.003526] ths_fetch_sysconfig_para: type err ths_trip1_7 = 110. 
[    3.010284] ths_fetch_sysconfig_para: type err ths_trip1_3_min = 0. 
[    3.017211] ths_fetch_sysconfig_para: type err ths_trip1_3_max = 0. 
[    3.024165] ths_fetch_sysconfig_para: type err ths_trip1_4_min = 0. 
[    3.031120] ths_fetch_sysconfig_para: type err ths_trip1_4_max = 0. 
[    3.038061] ths_fetch_sysconfig_para: type err ths_trip1_5_min = 0. 
[    3.045043] ths_fetch_sysconfig_para: type err ths_trip1_5_max = 0. 
[    3.051986] ths_fetch_sysconfig_para: type err ths_trip1_6_min = 0. 
[    3.058928] ths_fetch_sysconfig_para: type err ths_trip1_6_max = 0. 
[    3.065883] ths_fetch_sysconfig_para: type err ths_trip2_count = 0. 
[    3.072824] ths_fetch_sysconfig_para: type err ths_trip2_0 = 0. 
[    3.079612] input: sunxi-ths as /devices/virtual/input/input2
[    3.086420] suxi_ths: Kernel Thermal management registered
[    3.092514] fetch C0_LV_count from sysconfig failed
[    3.098317] CPU Budget:Register notifier
[    3.102633] CPU Budget:register Success
[    3.106817] sunxi-budget-cooling sunxi-budget-cooling: Cooling device registered: thermal-budget-0
[    3.119841] ALSA device list:
[    3.123121]   #0: audiocodec
[    3.126466] sw_uart_startup()603 - ttyS0 start up by swapper/0, pid 1
[    3.133569] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.149368] EXT4-fs (mmcblk0p8): mounted filesystem with ordered data mode. Opts: (null)
[    3.158303] VFS: Mounted root (ext4 filesystem) on device 179:8.
[    3.166585] devtmpfs: mounted
[    3.170081] Freeing init memory: 276K
Mount failed for selinuxfs on /sys/fs/selinux:  No such file or directory
[    3.240073] sw_uart_shutdown()635 - ttyS0 shut down by init, pid 1
[    3.313685] sw_uart_startup()603 - ttyS0 start up by init, pid 79
[    3.320486] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.351613] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 79
[    3.405227] init: plymouth-upstart-bridge main process (79) terminated with status 1
[    3.414089] init: plymouth-upstart-bridge main process ended, respawning
[    3.429174] sw_uart_startup()603 - ttyS0 start up by init, pid 89
[    3.436121] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.459461] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 89
[    3.487466] init: plymouth-upstart-bridge main process (89) terminated with status 1
[    3.496092] init: plymouth-upstart-bridge main process ended, respawning
[    3.505072] init: ureadahead main process (82) terminated with status 5
[    3.519150] sw_uart_startup()603 - ttyS0 start up by init, pid 92
[    3.526019] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.545525] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 92
[    3.567109] init: plymouth-upstart-bridge main process (92) terminated with status 1
[    3.575833] init: plymouth-upstart-bridge main process ended, respawning
[    3.596471] sw_uart_startup()603 - ttyS0 start up by init, pid 98
[    3.603259] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.665613] EXT4-fs (mmcblk0p1): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.765256] EXT4-fs (mmcblk0p6): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.852408] EXT4-fs (mmcblk0p10): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.945780] EXT4-fs (mmcblk0p11): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
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
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Starting Mount network filesystems                                    [ OK ]
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
 * Starting System V runlevel compatibility                              [ OK ]
 * Starting logrotate 5s check daemon                                    [ OK ]
 * Starting save kernel messages                                         [ OK ]

dnsmasq: unknown interface wlan0
 * Starting OpenSSH server                                               [ OK ]
 * Starting regular background program processing daemon                 [ OK ]
 * Stopping save kernel messages                                         [ OK ]
 * Starting DNS forwarder and DHCP server dnsmasq                        [fail] 
 * Starting rrwatchdoge daemon                                           [ OK ]
 * Stopping System V runlevel compatibility                              [ OK ]
[    7.457617] WDIOC_SETFUNCCONFIG: 1
[    7.462637] WDIOC_SETFUNCCONFIG: 1

Ubuntu 14.04.3 LTS rockrobo ttyS0

rockrobo login: wait-for-state stop/waiting
haveged: haveged Stopping due to signal 15

 * Stopping rsync daemon rsync                                           [ OK ] 
 * (not running)
 * Asking all remaining processes to terminate...                        [ OK ] 
 * All processes ended within 1 seconds...                               [ OK ] 
umount: /tmp: device is busy.
        (In some cases useful info about processes that use
         the device is found by lsof(8) or fuser(1))
 * Unmounting temporary filesystems...                                   [fail] 
 * Deactivating swap...                                                  [ OK ] 
 * Unmounting local filesystems...                                       [ OK ] 
 * Will now halt
[   26.948171] [MCU_UART] sent ap poweroff event to mcu
```