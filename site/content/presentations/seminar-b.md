+++
date = 2022-04-16T08:28:19Z
layout = "bundle"
outputs = ["Reveal"]
title = "Seminar B | Andrew Wong"
+++

{{< slide background-image="/uploads/covers/0T4A9791.JPG" transition="fade" >}}

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### "Smart" Vacuum Cleaners

##### An Audit Into The Security and Integrity of IoT Systems

###### Andrew Wong | UNSW Sydney

---

# Statement

>

How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?

> 

{{% fragment %}}
&nbsp;  
&nbsp;  

* Digital Privacy - Investigate the nature of network data (i.e. content, frequency, destination) and how the data is used.
* Product Security - Investigate potential security vulnerabilities and assess the effectiveness of current security fortifications.

{{%/ fragment %}}

---

{{< slide background-image="/uploads/20211030_040050.jpg" transition="fade" >}}

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Work Performed

---

# Fingerprinting

```
[ 0.340]U-Boot 2011.09-rc1-dirty (Mar 25 2020 - 20:45:43) Allwinner Technology
[ 0.000000] Linux version 3.4.39 (rockrobo@apimg) (gcc version 4.8.4 (Ubuntu/Linaro 4.8.4-2ubuntu1~14.04.1) ) #1 SMP PREEMPT Wed Mar 25 20:47:59 CST 2020
[ 0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[ 0.000000] Machine: sun8i
...
```

<!-- https://en.wikipedia.org/wiki/Linaro -->

CPU: Allwinner R16 (ARM Cortex-A7)  
ACU: STM32F103VCT6 (ARM Cortex-M3)  
Roborock Firmware version: 3.5.4_1558  
Operating system: Ubuntu 14.04.3 LTS  

---
# Going wireless - establishing SSH

<div style="display: flex; flex-direction: row; align-items: center">
<img src="iptables.png" width="65%" style="flex: 1"/>
<div style="flex: 1">

* Why is there an SSH server running?
* What's running on port 6665
  * `player`
  * Why not file-based IPC?
* Can I ping the internet
  * Yep!
* Can I add persistent access?
  * Yes, modify `rrwatchdoge.conf`
  * Can also add remote access
    * e.g. ZeroTier

</div>
</div>

<!-- https://featherbear.cc/UNSW-CSE-Thesis/posts/device-actions/ -->

---

{{% section %}}
# Trivial Power Analysis

> Batteries dont't last forever!

![](/uploads/20220501_051651.jpg)


<!-- lol you could have just opened it up in the first place -->

---

> What if I unplug the battery?

* No change in output during boot
* But device will turn off after around 20 seconds

See [2-wire log](https://featherbear.cc/UNSW-CSE-Thesis/posts/power/serial-dump-during-2-wire-power/), [4-wire log](https://featherbear.cc/UNSW-CSE-Thesis/posts/power/serial-dump-during-4-wire-power/)


{{% /section %}}

---

{{% section %}}
# File System Imaging

The eMMC only has 4GB of storage, so we can't (also shouldn't) image the flash onto itself... but we can image it remotely! 

```bash
IP=10.10.10.8
for partition in `ssh root@$IP "ls /dev/mmcblk0?* -1"`
do
    ssh root@$IP "sudo dd if=$partition bs=1M" | dd of=$(basename $partition).img
done
```

{{% center %}}<img src="/uploads/20220430-disk_imaging.jpg"/>{{% /center %}}

---

# File System Structure

|partition|label|description|
|:--------|:----|:---------|
|mmcblk0p1 | UDISK | user data |
|mmcblk0p2 | boot-res | bootloader stuff |
|mmcblk0p5 | env | |
|mmcblk0p6 | app (RO) | device data |
|mmcblk0p7 | recovery | stock firmware |
|mmcblk0p8 | system_a | Main OS (boot) |
|mmcblk0p9 | system_b | Backup OS |
|mmcblk0p10 | Download | Update temp |
|mmcblk0p11 | reserve | blackbox??? |

---
# Recovery Reset

Recovery supposedly resets `system_a`, `system_b`, `UDISK` and `Download`

{{%center%}}<img src="/uploads/20220501-recovery.png" width="70%"/>{{%/center%}}

What about the other partitions? If we want to plant malicious software, can put it in `recovery` and `system_a`?

<!-- https://featherbear.cc/UNSW-CSE-Thesis/posts/recovery-mode/ -->

---

<div style="display: flex; flex-direction: row; align-items: center">
<img src="/uploads/Snipaste_2022-05-01_05-53-51.jpg" width="65%" style="flex: 1"/>
<div style="flex: 1">

> 28,189 files...

> Well there's for sure a lot of files to look at...

</div>
</div>

---

# I did a thing - [Commentree](https://github.com/featherbear/commentree)

> Plain-text annotation / commentary tool

![](commentree.png)

<!-- Easy to transfer around -->

{{% /section %}}

---

<!-- 20220311 -->

## Interesting Files

device.token=utnevRELra5sqef3
device.uid=1738271950
mmcblk0p1/rockrobo/




    mmcblk0p11\endpoint.bin
        AWS address + key?
    mmcblk0p6\adb.conf
        adb_lock=1
    mmcblk0p7\boot\zImage
    mmclbk0p7\etc\init\adbd.conf
    vinda usage
    mmcblk0p7\opt\rockrobo
    adb
    mmcblk0p7\usr\sbin\tcpdump
    mmcblk0p8\var\log\upstart\adbd.log
        passwords




syslogs


    Look for IPs, emails, host/domains, passwords, keys
    Check where DID and UID is used
    Dummy data to check if it’s logged



What other files were changed?

compare against base ubuntu system?



## Interesting Binaries


    miio
    rockrobo
        rrlog
    ADB
    rriot



### adb

adb custom 
https://featherbear.cc/UNSW-CSE-Thesis/posts/mmcblk0p7-usr-bin-adbd/

<!-- https://www.youtube.com/watch?v=L8jKgX04PMg -->

---


---

# Relate back to the question about  security / privacy


* Wifi password in plain text
  * wpa_supplicant --> underlying linux framework
How easy is it for someone to attack the system?

* netcat?
* There is an SSH server running (though restricted via iptables)
  * Why?
* Hands-on access a system = game over
  * But should it be?

* Some logs are encrypted locally


Are there any backdoors?

outbound requests

persistent software (install to recovery + system_a)

WiFi is always scanning 


---



---

![](proc_misc.png)




* Can I plant software (y)

---

* Why is netcat installed but not curl, wget?
* TODO: Check what gets cleared during a format / update


---

# Current Challenges

Electricity is dangerous.
Thank you Gigabyte for having ESD-protected USB ports

---

Still a lot of files


![](/uploads/20220501-ubuntu_release_date.png) 

![](Snipaste_2022-05-01_06-43-50.jpg)

Ubuntu 14.04.3 LTS was released back in 2014

# Project Timeline

#### <label>Thesis A</label>

* Initial research and research environment setup
* Teardown and initial hands-on of Roborock S6

#### <label>Thesis B - Binary Assessment</label>

* Disassembly and analysis of firmware binaries to identify vulnerabilities
  * inc. ADB binary functionality
* Search for unsecured secrets, logs, configurations

#### <label>Thesis C - Connectivity Assessment</label>

* Inspection of outbound internet traffic - security, PII, etc
* Inspection of local network traffic
* Inspection of interaction with nearby devices
* Protocol analysis


---

# [Static] Binary assessment




# Retrospective of this term

* Time management
* Work
* COVID-19

# In the mean time


# Findings




---

## Project Plan

## Revised Project Plan

---


# Next Steps

- Dump the firmware and begin RE / forensics
- Redo (and further investigate) live system analysis
  - i.e. Properly capture _all_ network traffic

---

# Any Questions?

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<hr >

Andrew Wong

<sub>
<p>w: <a href="https://featherbear.cc/UNSW-CSE-Thesis">featherbear.cc/UNSW-CSE-Thesis</a></p>
<p>e: <script>document.write(atob('YW5kcmV3Lmoud29uZ0BzdHVkZW50LnVuc3cuZWR1LmF1'))</script></p>
</sub>