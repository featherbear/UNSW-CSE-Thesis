+++
categories = []
date = 2021-10-29T15:39:50Z
description = ""
series = []
tags = []
title = "UART Communication (Boot)"
toc = true

+++
```
��U*U)boot0 version : 4.0.0kkk
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
vbus exist
vbus pc exist, limit to pc
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
[      0.848]board_check_vbus2boot = 1
[      0.851]usb vbus triger boot up directly!
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
[      0.972]Hit any key to stop autoboot:  0 
Loading file "/boot/zImage" from mmc device 2:8
3882616 bytes read
[      1.075]para err in disp_ioctl, cmd = 0xa,screen id = 1
reload config to 0x43000000 
[      1.128]Starting kernel ...
[      1.128]enable watchdog 1c20cb8 value 0xb1(16s)

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
[    0.000243] Calibrating delay loop (skipped), value calculated using timer frequency.. 4800.00 BogoMIPS (lpj=24000000)
[    0.000270] pid_max: default: 32768 minimum: 301
[    0.000586] Mount-cache hash table entries: 512
[    0.001647] Initializing cgroup subsys debug
[    0.001669] Initializing cgroup subsys cpuacct
[    0.001682] Initializing cgroup subsys freezer
[    0.001728] CPU: Testing write buffer coherency: ok
[    0.001787] ftrace: allocating 19622 entries in 58 pages
[    0.030307] CPU0: thread -1, cpu 0, socket 0, mpidr 80000000
[    0.030327] [sunxi_smp_prepare_cpus] enter
[    0.030374] Setting up static identity map for 0x4050d630 - 0x4050d688
[    0.010000] CPU1: Booted secondary processor
[    0.010000] CPU1: thread -1, cpu 1, socket 0, mpidr 80000001
[    0.010000] CPU2: Booted secondary processor
[    0.010000] CPU2: thread -1, cpu 2, socket 0, mpidr 80000002
[    0.010000] CPU3: Booted secondary processor
[    0.010000] CPU3: thread -1, cpu 3, socket 0, mpidr 80000003
[    0.210236] Brought up 4 CPUs
[    0.210256] SMP: Total of 4 processors activated (19200.00 BogoMIPS).
[    0.210554] devtmpfs: initialized
[    0.214328] pinctrl core: initialized pinctrl subsystem
[    0.214328] dummy: 
[    0.223875] NET: Registered protocol family 16
[    0.241809] DMA: preallocated 2048 KiB pool for atomic coherent allocations
[    0.241913] script_sysfs_init success
[    0.242212] sunxi pinctrl probe enter
[    0.242913] gpiochip_add: registered GPIOs 0 to 383 on device: sunxi-pinctrl
[    0.243994] sunxi-pinctrl sunxi-pinctrl: initialized sunXi PIO driver
[    0.244194] axp_pinctrl_probe enter...
[    0.244341] gpiochip_add: registered GPIOs 1024 to 1029 on device: axp-pinctrl
[    0.244363] mainkey total count : 77
[    0.244403] map mainkey [motor_para] to pinctrl, map number [2]
[    0.244470] axp pinctrl driver probe ok
[    0.245510] [sunxi-module]: [sunxi-module.0] probe success
[    0.245554] script config pll3 to 297 Mhz
[    0.245571] script config pll4 to 300 Mhz
[    0.245607] script config pll6 to 600 Mhz
[    0.245621] script config pll8 to 408 Mhz
[    0.245644] script config pll9 to 480 Mhz
[    0.245659] script config pll10 to 297 Mhz
[    0.245668] sunxi_default_clk_init
[    0.245677] try to set pll6ahb1 to 200000000
[    0.245730] try to set ahb clk source to pll6ahb1
[    0.245741] set ahb clk source to pll6ahb1
[    0.245760] set apb2 to low freq 1.2 Mhz
[    0.245789] set ahb clk source to pll6
[    0.245798] recove apb2 to pre freq 24000000
[    0.245814] try to set ahb1 to 200000000
[    0.245827] try to set apb1 to 100000000
[    0.245844] script config apb2 to 37 Mhz
[    0.250956] bio: create slab <bio-0> at 0
[    0.250956] [ARISC] :sunxi-arisc driver v1.60
[    0.288258] [ARISC] :arisc version: [v0.0.76]
[    0.288271] [sunxi-module]: arisc register success
[    0.507558] [ARISC] :sunxi-arisc driver v1.60 startup succeeded
[    0.510552] SCSI subsystem initialized
[    0.510700] usbcore: registered new interface driver usbfs
[    0.510777] usbcore: registered new interface driver hub
[    0.510819] usbcore: registered new device driver usb
[    0.510819] twi_chan_cfg()350 - [twi0] has no twi_regulator.
[    0.510819] twi_chan_cfg()350 - [twi1] has no twi_regulator.
[    0.510819] twi_chan_cfg()350 - [twi2] has no twi_regulator.
[    0.510819] Linux video capture interface: v2.00
[    0.510039] axp22_board axp22_board: AXP (CHIP ID: 0x06) detected
[    0.511811] axp22_dcdc1: 1600 <--> 3400 mV at 3300 mV 
[    0.511811] axp22_dcdc2: 600 <--> 1540 mV at 1100 mV 
[    0.511811] axp22_dcdc3: 600 <--> 1860 mV at 1240 mV 
[    0.511811] axp22_dcdc4: 600 <--> 1540 mV at 1100 mV 
[    0.511811] axp22_dcdc5: 1000 <--> 2550 mV at 1500 mV 
[    0.511811] axp22_rtc: 3000 mV 
[    0.511811] axp22_aldo1: 700 <--> 3300 mV at 3300 mV 
[    0.511811] axp22_aldo2: 700 <--> 3300 mV at 2500 mV 
[    0.511811] axp22_aldo3: 700 <--> 3300 mV at 3000 mV 
[    0.511811] axp22_dldo1: 700 <--> 3300 mV at 700 mV 
[    0.511811] axp22_dldo2: 700 <--> 3300 mV at 700 mV 
[    0.511811] axp22_dldo3: 700 <--> 3300 mV at 700 mV 
[    0.520177] axp22_dldo4: 700 <--> 3300 mV at 700 mV 
[    0.520223] axp22_eldo1: 700 <--> 3300 mV at 700 mV 
[    0.520223] axp22_eldo1: supplied by axp22_dcdc1
[    0.520295] axp22_eldo2: 700 <--> 3300 mV at 700 mV 
[    0.520295] axp22_eldo2: supplied by axp22_dcdc1
[    0.520295] axp22_eldo3: 700 <--> 3300 mV at 700 mV 
[    0.520295] axp22_eldo3: supplied by axp22_dcdc1
[    0.520300] axp22_dc5ldo: 700 <--> 1400 mV at 1100 mV 
[    0.520300] axp22_ldoio0: 700 <--> 3300 mV at 3800 mV 
[    0.520300] axp22_ldoio1: 700 <--> 3300 mV at 3800 mV 
[    0.520300] axp22_dc1sw: at 700 mV 
[    0.520300] axp22_dc1sw: supplied by axp22_dcdc1
[    0.520425] input: axp22-supplyer as /devices/platform/axp22_board/axp22-supplyer.20/input/input0
[    0.520735] now_rest_vol = 0
[    0.520735] Advanced Linux Sound Architecture Driver Version 1.0.25.
[    0.521112] cfg80211: Calling CRDA to update world regulatory domain
[    0.521179] Switching to clocksource arch_sys_counter
[    0.535639] FS-Cache: Loaded
[    0.535977] CacheFiles: Loaded
[    0.546667] [usb_manager]: CONFIG_USB_SUNXI_USB0_OTG
[    0.546707] get usbc0(usb_restrict pin) failed
[    0.547124] [sw_udc]: udc_init: version 20080411
[    0.547727] [ddrfreq] dram_clk value is 552
[    0.547739] [ddrfreq] sunxi_ddrfreq_max=552000
[    0.547750] [ddrfreq] dram_type value is 3
[    0.547761] [ddrfreq] dram_zq value is 0x3bbb
[    0.547772] [ddrfreq] dram_odt_en value is 1
[    0.547783] [ddrfreq] dram_para1 value is 0x10f20200
[    0.547793] [ddrfreq] dram_para2 value is 0x0
[    0.547804] [ddrfreq] dram_mr0 value is 0x1c70
[    0.547815] [ddrfreq] dram_mr1 value is 0x40
[    0.547825] [ddrfreq] dram_mr2 value is 0x18
[    0.547836] [ddrfreq] dram_mr3 value is 0x0
[    0.547846] [ddrfreq] dram_tpr0 value is 0x47214f
[    0.547857] [ddrfreq] dram_tpr1 value is 0x1c2294b
[    0.547868] [ddrfreq] dram_tpr2 value is 0x61043
[    0.547879] [ddrfreq] dram_tpr3 value is 0x0
[    0.547889] [ddrfreq] dram_tpr4 value is 0x0
[    0.547899] [ddrfreq] dram_tpr5 value is 0x0
[    0.547910] [ddrfreq] dram_tpr6 value is 0x0
[    0.547921] [ddrfreq] dram_tpr7 value is 0x0
[    0.547931] [ddrfreq] dram_tpr8 value is 0x0
[    0.547941] [ddrfreq] dram_tpr9 value is 0x0
[    0.547952] [ddrfreq] dram_tpr10 value is 0x0
[    0.547963] [ddrfreq] dram_tpr11 value is 0x0
[    0.547973] [ddrfreq] dram_tpr12 value is 168
[    0.547983] [ddrfreq] sunxi_ddrfreq_min=168000
[    0.547993] [ddrfreq] dram_tpr13 value is 0x10901
[    0.548177] [dsm] use sysconfig
[    0.548188] [dsm] -----------Dram scene-freq Table------------
[    0.548201] [dsm] scene =    0       frequency = 552000KHz
[    0.548212] [dsm] scene =    1       frequency = 360000KHz
[    0.548222] [dsm] scene =    2       frequency = 240000KHz
[    0.548233] [dsm] scene =    3       frequency = 168000KHz
[    0.548242] [dsm] --------------------------------------------
[    0.548368] [ddrfreq] LV_count value is 3
[    0.548393] [ddrfreq] ---------------Dram V-F Table---------------
[    0.548406] [ddrfreq] voltage = 1100mv       frequency = 552000KHz
[    0.548417] [ddrfreq] voltage = 1100mv       frequency = 360000KHz
[    0.548428] [ddrfreq] voltage = 1100mv       frequency =    0KHz
[    0.548439] [ddrfreq] --------------------------------------------
[    0.548585] [ddrfreq] last_vdd=1100
[    0.548664] [ddrfreq] __sram_start: 0xc07fd000, __sram_end: 0xc07fe074, __sram_text_start: 0xf0000000, __sram_data_end: 0xf0001074
[    0.548680] [ddrfreq] sunxi dramfreq probe ok!
[    0.549030] NET: Registered protocol family 2
[    0.549356] IP route cache hash table entries: 4096 (order: 2, 16384 bytes)
[    0.550003] TCP established hash table entries: 16384 (order: 5, 131072 bytes)
[    0.550316] TCP bind hash table entries: 16384 (order: 5, 196608 bytes)
[    0.550579] TCP: Hash tables configured (established 16384 bind 16384)
[    0.550593] TCP: reno registered
[    0.550609] UDP hash table entries: 256 (order: 1, 8192 bytes)
[    0.550637] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes)
[    0.550973] NET: Registered protocol family 1
[    0.551410] RPC: Registered named UNIX socket transport module.
[    0.551426] RPC: Registered udp transport module.
[    0.551436] RPC: Registered tcp transport module.
[    0.551446] RPC: Registered tcp NFSv4.1 backchannel transport module.
[    0.551895] [pm]aw_pm_init!
[    0.551910] standby_mode = 1. 
[    0.551919] wakeup src cnt is : 1. 
[    0.551932] [exstandby]leave extended_standby_enable_wakeup_src : event 0x2000
[    0.551944] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_map 0x80
[    0.551957] [exstandby]leave extended_standby_enable_wakeup_src : wakeup_gpio_group 0x0
[    0.551971] sunxi_reg_init enter
[    0.555408] NTFS driver 2.1.30 [Flags: R/W].
[    0.555627] fuse init (API version 7.18)
[    0.556119] msgmni has been set to 996
[    0.557876] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 253)
[    0.557896] io scheduler noop registered
[    0.557907] io scheduler deadline registered
[    0.558012] io scheduler cfq registered (default)
[    0.558427] pwm module init!
[    0.559015] sw_uart_get_devinfo()1476 - uart0 has no uart_regulator.
[    0.559036] sw_uart_get_devinfo()1476 - uart1 has no uart_regulator.
[    0.559053] sw_uart_get_devinfo()1476 - uart2 has no uart_regulator.
[    0.559600] uart0: ttyS0 at MMIO 0x1c28000 (irq = 32) is a SUNXI
[    0.559625] sw_console_setup()1236 - console setup baud 115200 parity n bits 8, flow n
[    0.559651] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    0.709413] console [ttyS0] enabled
[    0.803729] uart1: ttyS1 at MMIO 0x1c28400 (irq = 33) is a SUNXI
[    0.987980] uart2: ttyS2 at MMIO 0x1c28800 (irq = 34) is a SUNXI
[    1.011598] axp22_mfd_irq_work: 2000000000:600080cf6c
[    1.011967] axp22_mfd_irq_work: 0:600080cf6c
[    1.086141] loop: module loaded
[    1.086324] [MCU_UART] sent ap resume event to mcu
[    1.086528] TIMER1_INTVAL_REG = 5dc
[    1.086696] jiffies initialized success
[    1.086705] [lds]: lds_module_init module init!
[    1.086889] [lds]: lds_motor_probe
[    1.087373] input: lds_input as /devices/virtual/input/input1
[    1.087446] [wifi_pm]: select wifi: rtl8189es !!
[    1.087606] [rtl8189es]: exec rtl8189es_wifi_gpio_init
[    1.087617] [rtl8189es]: module power name axp22_dldo1
[    1.087626] [rtl8189es]: module power ext1 name axp22_dldo2
[    1.087635] [rtl8189es]: failed to fetch wifi_power_ext2
[    1.087644] [rtl8189es]: use wifi card shutdown pin
[    1.087652] [rtl8189es]: rtl8189es module power set by axp.
[    1.087753] [rtl8189es]: first time
[    1.268737] [rtl8189es]: regulator on.
[    1.616786] axp22_mfd_irq_work: 4000020000:600080cf6c
[    1.968217] axp22_mfd_irq_work: 20000:600080cf6c
[    2.001906] [rtl8189es]: gpio rtl8189es_shdn set val 0, act val 0
[    2.008575] [wifi_pm]: wifi gpio init is OK !!
[    2.013513] module init!
[    2.016281] [hwinfo]: hwinfo_mod_init E
[    2.020486] [hwinfo]: 0, 0
[    2.023438] [hwinfo]: 2, 0
[    2.026596] tun: Universal TUN/TAP device driver, 1.6
[    2.032140] tun: (C) 1999-2004 Max Krasnyansky <maxk@qualcomm.com>
[    2.039112] PPP generic driver version 2.4.2
[    2.043981] PPP BSD Compression module registered
[    2.049114] PPP Deflate Compression module registered
[    2.055541] PPP MPPE Compression module registered
[    2.060793] NET: Registered protocol family 24
[    2.065677] [sw_hcd0]: usb host driver initialize........
[    2.071676] [sw_hcd0]: open_usb_clock
[    2.075757] get usb_regulator id vbus is nocare
[    2.080717] [sunxi_hcd0]: host_init_state = 0
[    2.085468] [sw_hcd0]: platform is usb host
[    2.090093] [sw_hcd0]: sunxi_hcd_init_controller: sunxi_hcd_host0: USB Host mode controller at f1c19000 using PIO, IRQ 103
[    2.102183] sunxi_hcd_host0 sunxi_hcd_host0: sunxi_hcd host driver
[    2.108934] sunxi_hcd_host0 sunxi_hcd_host0: new USB bus registered, assigned bus number 1
[    2.118685] hub 1-0:1.0: USB hub found
[    2.122813] hub 1-0:1.0: 1 port detected
[    2.127528] [sw_hcd0]: sunxi_usb_host0_disable start
[    2.132974] [sw_hcd0]: sunxi_hcd_wait_for_disconnect cnt=0
[    2.138965] [sunxi_hcd_host0]: Set USB Power OFF
[    2.144019] -------sunxi_hcd0_soft_disconnect---------
[    2.149624] wrn: hcd is not enable, need not stop hcd
[    2.155146] [sunxi_hcd_host0]: Set USB Power OFF
[    2.160222] [sw_hcd0]: close_usb_clock
[    2.164332] [sw_hcd0]: sunxi_usb_host0_disable end
[    2.170350] sunxi-rtc sunxi-rtc: rtc core: registered sunxi-rtc as rtc0
[    2.177706] sunxi cedar version 0.1 
[    2.181672] [cedar]: install start!!!
[    2.185877] [cedar]: install end!!!
[    2.193629] sunxi_wdt_init_module: sunxi WatchDog Timer Driver v1.0
[    2.200715] sunxi_wdt_probe: devm_ioremap return wdt_reg 0xf1c20ca0, res->start 0x01c20ca0, res->end 0x01c20cbf
[    2.211730] sunxi wdt request irq 57 ok
[    2.216107] sunxi_wdt_probe: initialized (g_timeout=16s, g_nowayout=0)
[    2.223319] [boot_reason]: br_wdt_check entry
[    2.228182] sunxi wdt start in uboot
[    2.232656] device-mapper: ioctl: 4.22.0-ioctl (2011-10-19) initialised: dm-devel@redhat.com
[    2.242203] autohotplug_init init ok
[    2.246138] sunxi_cpufreq_initcall: clocks pll=1008000000,cpu=1008000000,axi=336000000
[    2.254805] cur: pll=1008000000, cpudiv=1, axidiv=3
[    2.260160] axp22_dcdc3: Failed to create debugfs directory
[    2.266260] sunxi_cpufreq_initcall, get cpu frequency from sysconfig, max freq: 1200MHz, min freq: 648MHz
[    2.276748] -------------------CPU V-F Table--------------------
[    2.283319]  frequency = 1536000KHz  voltage = 1500mv
[    2.288832]  frequency = 1344000KHz  voltage = 1460mv
[    2.294361]  frequency = 1200000KHz  voltage = 1360mv
[    2.299876]  frequency = 1008000KHz  voltage = 1240mv
[    2.305404]  frequency = 816000KHz   voltage = 1140mv
[    2.310837]  frequency = 648000KHz   voltage = 1140mv
[    2.316255]  frequency =    0KHz     voltage = 1120mv
[    2.321495]  frequency =    0KHz     voltage = 1120mv
[    2.326723] -----------------------------------------------------
[    2.333712] [mmc]: SD/MMC/SDIO Host Controller Driver(v1.117 2015-12-1 14:13) Compiled in Mar 25 2020 at 20:47:21
[    2.344974] [mmc]: get mmc1's sdc_power failed
[    2.349847] [mmc]: get mmc2's sdc_power failed
[    2.354714] [mmc]: get mmc2's 2xmode ok, val = 1
[    2.359753] [mmc]: get mmc2's ddrmode ok, val = 1
[    2.364906] [mmc]: MMC host used card: 0x6, boot card: 0x4, io_card 2
[    2.373466] [mmc]: mmc not poweroff notifiy
[    2.378045] [mmc]: sdc2 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.388816] [mmc]: sdc2 set ios: clk 0Hz bm PP pm UP vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.398631] [mmc]: mmc not poweroff notifiy
[    2.399886] [mmc]: sdc2 power_supply is null
[    2.407873] [mmc]: sdc1 set ios: clk 0Hz bm OD pm OFF vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.420040] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.420985] usbcore: registered new interface driver usbhid
[    2.420994] usbhid: USB HID core driver
[    2.422086] [audiocodec] : aif2 not used!
[    2.422095] [audiocodec] : aif3 not used!
[    2.449605] asoc: sndcodec <-> sunxi-codec mapping ok
[    2.456216] u32 classifier
[    2.459205]     Actions configured
[    2.462991] Netfilter messages via NETLINK v0.30.
[    2.468189] nf_conntrack version 0.5.0 (7973 buckets, 31892 max)
[    2.470855] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.471714] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 52,  RTO !!
[    2.471746] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.474250] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.476164] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 8,  RTO !!
[    2.476193] *******************Try sdio*******************
[    2.477022] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.477869] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.478714] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.479559] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 5,  RTO !!
[    2.479585] *******************Try sd *******************
[    2.480417] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.481264] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.482112] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.482959] [mmc]: *** sunxi_mci_dump_errinfo(L828): smc 2 err, cmd 55,  RTO !!
[    2.482986] *******************Try mmc*******************
[    2.482998] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.483434] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.483531] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.483626] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.486114] [mmc]: sdc2 set ios: clk 400000Hz bm OD pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.521265] [mmc]: sdc2 set ios: clk 400000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.521923] [hwinfo]: 1, 0
[    2.521930] [hwinfo]: EMMC: 17, 0x34474130
[    2.533792] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing LEGACY(SDR12) dt B
[    2.533919] [mmc]: sdc2 set ios: clk 25000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.533982] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 1 timing MMC-HS(SDR20) dt B
[    2.534489] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing MMC-HS(SDR20) dt B
[    2.534665] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.534731] [mmc]: sdc2 set ios: clk 50000000Hz bm PP pm ON vdd 3.3V width 8 timing UHS-DDR50 dt B
[    2.534835] mmc0: new high speed DDR MMC card at address 0001
[    2.535378] mmcblk0: mmc0:0001 004GA0 3.68 GiB 
[    2.535599] mmcblk0boot0: mmc0:0001 004GA0 partition 1 2.00 MiB
[    2.535787] mmcblk0boot1: mmc0:0001 004GA0 partition 2 2.00 MiB
[    2.536737]  mmcblk0: p1 p2 p3 < p5 p6 p7 p8 p9 p10 p11 >
[    2.536788] mmcblk0: p1 size 3268608 extends beyond EOD, truncated
[    2.539619]  mmcblk0boot1: unknown partition table
[    2.540863]  mmcblk0boot0: unknown partition table
[    2.541075] *******************mmc init ok *******************
[    2.780969] ctnetlink v0.93: registering with nfnetlink.
[    2.786817] NF_TPROXY: Transparent proxy support initialized, version 4.1.0
[    2.794438] NF_TPROXY: Copyright (c) 2006-2007 BalaBit IT Ltd.
[    2.801263] xt_time: kernel timezone is -0000
[    2.806413] ip_tables: (C) 2000-2006 Netfilter Core Team
[    2.812405] arp_tables: (C) 2002 David S. Miller
[    2.817505] TCP: cubic registered
[    2.821133] Initializing XFRM netlink socket
[    2.826161] NET: Registered protocol family 10
[    2.831951] Mobile IPv6
[    2.834647] ip6_tables: (C) 2000-2006 Netfilter Core Team
[    2.840742] NET: Registered protocol family 17
[    2.845607] NET: Registered protocol family 15
[    2.850499] L2TP core driver, V2.0
[    2.854252] PPPoL2TP kernel driver, V2.0
[    2.858514] L2TP IP encapsulation support (L2TPv3)
[    2.863800] L2TP netlink interface
[    2.867537] L2TP ethernet pseudowire support (L2TPv3)
[    2.873268] VFP support v0.3: implementor 41 architecture 2 part 30 variant 7 rev 5
[    2.881712] ThumbEE CPU extension supported.
[    2.886387] Registering SWP/SWPB emulation handler
[    2.892419] axp22_dc5ldo: incomplete constraints, leaving on
[    2.898890] axp22_aldo3: incomplete constraints, leaving on
[    2.905041] axp22_aldo2: incomplete constraints, leaving on
[    2.911192] axp22_aldo1: incomplete constraints, leaving on
[    2.917315] axp22_rtc: incomplete constraints, leaving on
[    2.923277] axp22_dcdc5: incomplete constraints, leaving on
[    2.929400] axp22_dcdc4: incomplete constraints, leaving on
[    2.935556] axp22_dcdc3: incomplete constraints, leaving on
[    2.941783] axp22_dcdc2: incomplete constraints, leaving on
[    2.947906] axp22_dcdc1: incomplete constraints, leaving on
[    2.954246] [boot_reason]: module init!
[    2.958452] otg_wakelock_init: No USB transceiver found
[    2.964199] sunxi-rtc sunxi-rtc: setting system clock to 1970-01-01 00:00:05 UTC (5)
[    2.972680] ths_fetch_sysconfig_para: type err  device_used = 1. 
[    2.979341] ths_fetch_sysconfig_para: type err ths_trip1_3 = 110. 
[    2.986088] ths_fetch_sysconfig_para: type err ths_trip1_4 = 110. 
[    2.992838] ths_fetch_sysconfig_para: type err ths_trip1_5 = 110. 
[    2.999587] ths_fetch_sysconfig_para: type err ths_trip1_6 = 110. 
[    3.006352] ths_fetch_sysconfig_para: type err ths_trip1_7 = 110. 
[    3.013245] ths_fetch_sysconfig_para: type err ths_trip1_3_min = 0. 
[    3.020204] ths_fetch_sysconfig_para: type err ths_trip1_3_max = 0. 
[    3.027128] ths_fetch_sysconfig_para: type err ths_trip1_4_min = 0. 
[    3.034081] ths_fetch_sysconfig_para: type err ths_trip1_4_max = 0. 
[    3.041099] ths_fetch_sysconfig_para: type err ths_trip1_5_min = 0. 
[    3.048024] ths_fetch_sysconfig_para: type err ths_trip1_5_max = 0. 
[    3.054976] ths_fetch_sysconfig_para: type err ths_trip1_6_min = 0. 
[    3.061928] ths_fetch_sysconfig_para: type err ths_trip1_6_max = 0. 
[    3.068852] ths_fetch_sysconfig_para: type err ths_trip2_count = 0. 
[    3.075803] ths_fetch_sysconfig_para: type err ths_trip2_0 = 0. 
[    3.082652] input: sunxi-ths as /devices/virtual/input/input2
[    3.089388] suxi_ths: Kernel Thermal management registered
[    3.095399] fetch C0_LV_count from sysconfig failed
[    3.101215] CPU Budget:Register notifier
[    3.105548] CPU Budget:register Success
[    3.109727] sunxi-budget-cooling sunxi-budget-cooling: Cooling device registered: thermal-budget-0
[    3.122770] ALSA device list:
[    3.126019]   #0: audiocodec
[    3.129391] sw_uart_startup()603 - ttyS0 start up by swapper/0, pid 1
[    3.136514] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.152375] EXT4-fs (mmcblk0p8): mounted filesystem with ordered data mode. Opts: (null)
[    3.161293] VFS: Mounted root (ext4 filesystem) on device 179:8.
[    3.169505] devtmpfs: mounted
[    3.173002] Freeing init memory: 276K
Mount failed for selinuxfs on /sys/fs/selinux:  No such file or directory
[    3.240055] sw_uart_shutdown()635 - ttyS0 shut down by init, pid 1
[    3.314790] sw_uart_startup()603 - ttyS0 start up by init, pid 80
[    3.321580] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.350881] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 80
[    3.394346] init: plymouth-upstart-bridge main process (80) terminated with status 1
[    3.403052] init: plymouth-upstart-bridge main process ended, respawning
[    3.416204] sw_uart_startup()603 - ttyS0 start up by init, pid 90
[    3.423038] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.442737] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 90
[    3.466194] init: plymouth-upstart-bridge main process (90) terminated with status 1
[    3.474759] init: plymouth-upstart-bridge main process ended, respawning
[    3.483293] init: ureadahead main process (83) terminated with status 5
[    3.496331] sw_uart_startup()603 - ttyS0 start up by init, pid 93
[    3.503128] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.521333] sw_uart_shutdown()635 - ttyS0 shut down by plymouth-upstar, pid 93
[    3.540980] init: plymouth-upstart-bridge main process (93) terminated with status 1
[    3.549591] init: plymouth-upstart-bridge main process ended, respawning
[    3.568196] sw_uart_startup()603 - ttyS0 start up by init, pid 99
[    3.574970] sw_uart_set_termios()692 - sw_uart_set_termios:uart0 set baudrate: 115200, real baud is 117187
[    3.633028] EXT4-fs (mmcblk0p1): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.766432] EXT4-fs (mmcblk0p6): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.854376] EXT4-fs (mmcblk0p10): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
[    3.966224] EXT4-fs (mmcblk0p11): mounted filesystem with ordered data mode. Opts: nomblk_io_submit,errors=remount-ro
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
 * Stopping cold plug devices                                            [ OK ]
 * Starting userspace bootsplash                                         [ OK ]
 * Stopping log initial device creation                                  [ OK ]
 * Stopping userspace bootsplash                                         [ OK ]
 * Stopping Read required files in advance (for other mountpoints)       [ OK ]
 * Starting Send an event to indicate plymouth is up                     [ OK ]
 * Starting Signal sysvinit that local filesystems are mounted           [ OK ]
 * Starting configure network device security                            [ OK ]
 * Starting configure network device                                     [ OK ]
 * Stopping Send an event to indicate plymouth is up                     [ OK ]
 * Starting flush early job output to logs                               [ OK ]
 * Starting adb daemon                                                   [ OK ]
 * Stopping Failsafe Boot Delay                                          [ OK ]
 * Starting System V initialisation compatibility                        [ OK ]
 * Stopping flush early job output to logs                               [ OK ]
 * Stopping Mount network filesystems                                    [ OK ]
 * Starting configure virtual network devices                            [ OK ]
 * Stopping System V initialisation compatibility                        [ OK ]
 * Starting rrwatchdoge daemon                                           [ OK ]
 * Starting system logging daemon                                        [ OK ]
 * Starting System V runlevel compatibility                              [ OK ]
 * Starting logrotate 5s check daemon                                    [ OK ]
 * Starting save kernel messages                                         [ OK ]

dnsmasq: unknown interface wlan0
 * Starting regular background program processing daemon                 [ OK ]
 * Stopping save kernel messages                                         [ OK ]
 * Starting OpenSSH serverand DHCP server dnsmasq                        [ OK ] 
                                                                         [fail]
 * Starting Bridge file events into upstart                              [ OK ]
 * Stopping System V runlevel compatibility                              [ OK ]
[    7.297967] WDIOC_SETFUNCCONFIG: 1
[    7.302863] WDIOC_SETFUNCCONFIG: 1

Ubuntu 14.04.3 LTS rockrobo ttyS0

rockrobo login: 


```