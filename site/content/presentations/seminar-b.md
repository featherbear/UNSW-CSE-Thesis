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

# Today's Agenda



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

{{% section %}}

<label>System</label>

```
[ 0.340]U-Boot 2011.09-rc1-dirty (Mar 25 2020 - 20:45:43) Allwinner Technology
[ 0.000000] Linux version 3.4.39 (rockrobo@apimg) (gcc version 4.8.4 (Ubuntu/Linaro 4.8.4-2ubuntu1~14.04.1) ) #1 SMP PREEMPT Wed Mar 25 20:47:59 CST 2020
[ 0.000000] CPU: ARMv7 Processor [410fc075] revision 5 (ARMv7), cr=10c5387d
[ 0.000000] Machine: sun8i
...
```

<!-- https://en.wikipedia.org/wiki/Linaro -->

CPU: Allwinner R16 (ARM Cortex-A7) - ARMv7l / armhf  
ACU: STM32F103VCT6 (ARM Cortex-M3)  
Roborock Firmware version: 3.5.4_1558  
Operating system: Ubuntu 14.04.3 LTS  

---

<label>Users</label>

<div style="display: flex; flex-direction: row"> 
<div><img round src="/uploads/Snipaste_2022-05-01_20-00-22.jpg"/></div>
<div><img round src="/uploads/Snipaste_2022-05-01_20-00-48.jpg"/></div>
</div>

> No additional users

>

```
root@rockrobo:~# ls /home
ruby
```

`/home/ruby` exists but no user `ruby`, though exists in `/etc/passwd~`

---

<label>Processes</label>

🚩 Everything is running as root

{{% center %}}<img src="/uploads/Snipaste_2022-05-01_19-33-46.jpg" width="80%"/>{{% /center %}}

---

<label>Ports</label>

```bash
root@rockrobo:~# netstat -nltp
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:54322         0.0.0.0:*               LISTEN      991/miio_client 
tcp        0      0 127.0.0.1:54323         0.0.0.0:*               LISTEN      991/miio_client 
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1644/sshd       
tcp        0      0 127.0.0.1:55551         0.0.0.0:*               LISTEN      998/rriot_tuya  
tcp        0      0 0.0.0.0:6668            0.0.0.0:*               LISTEN      998/rriot_tuya  
tcp6       0      0 :::22                   :::*                    LISTEN      1644/sshd       
```

`tcp/22` and `tcp/6668` are exposed

<!-- miio_send and miio_recv uses 54322 -->

---

<label>Firewall</label>

iptables?

<!-- TODO: Move iptables dump here, split next slide -->

---

{{% /section %}}

---
# Going wireless - establishing SSH

<div style="display: flex; flex-direction: row; align-items: center">
<img src="iptables.png" width="65%" style="flex: 1"/>
<div style="flex: 1">

* Why is there an SSH server running?
* What's runs on port 6665
  * `player`
  * Why not file-based IPC?
* Can I ping the internet
  * Yep!
* Can I add persistent access?
  * Yes, modify `rrwatchdoge.conf`
  * Can also add remote access
    * e.g. ZeroTier
* IPv6

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

|partition|label|size|description|
|:--------|:----|:---|:---------|
|mmcblk0p1 | UDISK | 1.5 GB | user data |
|mmcblk0p2 | boot-res | 8 MB | bootloader stuff |
|mmcblk0p5 | env | 16 MB | |
|mmcblk0p6 | app (RO) | 64 MB | device data |
|mmcblk0p7 | recovery | 512 MB | stock firmware |
|mmcblk0p8 | system_a | 512 MB | Main OS (boot) |
|mmcblk0p9 | system_b | 512 MB | Backup OS |
|mmcblk0p10 | Download | 528 MB | Update temp |
|mmcblk0p11 | reserve | 16 MB | blackbox??? |

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

TODO: Recovery partition is modifiable

---

# I did a thing - [Commentree](https://github.com/featherbear/commentree)

> Plain-text annotation / commentary tool

![](commentree.png) <!-- 20220311 -->

<!-- Easy to transfer around -->

{{% /section %}}

---
## Interesting Files

mmcblk0p1/miio/device.token=utnevRELra5sqef3
mmcblk0p1/miio/device.uid=1738271950
mmcblk0p1/rockrobo/
mmcblk0p11\endpoint.bin - AWS address + key?
mmcblk0p7\boot\zImage - bootloader
vinda usage

passwords
syslogs


    Look for IPs, emails, host/domains, passwords, keys
    Check where DID and UID is used
    Dummy data to check if it’s logged



What other files were changed?

compare against base ubuntu system?

miio
mmcblk0p7\opt\rockrobo
rrlog
rriot

ADB
### adb

adb custom 

https://featherbear.cc/UNSW-CSE-Thesis/posts/mmcblk0p7-usr-bin-adbd/

    mmcblk0p6\adb.conf

    mmcblk0p8\var\log\upstart\adbd.log

<!-- https://www.youtube.com/watch?v=L8jKgX04PMg -->

---

/usr/sbin/tcpdump

![](/uploads/Snipaste_2022-05-01_19-44-27.jpg)

![](/uploads/Snipaste_2022-05-01_19-37-08.jpg)

---

mmcblk0p7\usr\sbin\tcpdump


/var/log/apt/history.log

```
Start-Date: 2016-01-25  11:18:05
Commandline: /usr/bin/apt-get install rsync
Install: rsync:armhf (3.1.0-2ubuntu0.2)
End-Date: 2016-01-25  11:18:11

Start-Date: 2016-04-05  12:30:59
Commandline: /usr/bin/apt-get install ccrypt
Install: ccrypt:armhf (1.10-4)
End-Date: 2016-04-05  12:31:01

Start-Date: 2016-04-25  09:58:29
Commandline: /usr/bin/apt-get install tcpdump
Install: tcpdump:armhf (4.5.1-2ubuntu1.2), libpcap0.8:armhf (1.5.3-2, automatic)
End-Date: 2016-04-25  09:58:33
```

---
Static binaries

`./htop --sort-key=PID -C`

---

Compare against standards (i.e. Xiaomi's standard)


---

# Thesis consideration - some thoughts and discussions

<small>How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?</small>

{{% note %}}We're not answering the question just yet, just some thoughts{{% /note %}}

* Wireless credentials are stored in plain text
  * wpa_supplicant is part of the underlying Linux framework
* SSH server running (though iptables)
* `player` exposes port 6665
* Processes are running as root
  * Any vulnerability in any of the programs can result in system takeover, dropping of iptables, persistence planting
* Recovery partition is modifiable
  * `mount /dev/mmcblk0p7 ...`
* netcat, tcpdump, ccrypt?

* Easier to interface with devices (udev rules)

How easy is it for someone to attack the system?

##

What's Good

* iptables
* some logs are encrypted locally


* Hands-on access a system = game over
  * But should it be?



Are there any backdoors?
outbound requests
persistent software (install to recovery + system_a)


---



---

![](proc_misc.png)




* Can I plant software (y)

---

* Why is netcat installed but not curl, wget?
* TODO: Check what gets cleared during a format / update


---

# Capturing network data during device registration

* Have shell access but 
* PolarProxy is too new for Ubuntu 14.04
* apt update doesn't work with socks5:// or http proxies properly

On the smart app side

Frida nope
windows env nope 
https://github.com/NickstaDB/patch-apk
https://blog.silentsignal.eu/2020/05/04/decrypting-and-analyzing-https-traffic-without-mitm/
RoboRock app

during pairing the password is transmitted in plaintext

---

<!-- ![APK objection failing](/uploads/Snipaste_2022-05-02_00-52-40.jpg) -->

![plain text wifi auth wireshark](/uploads/Snipaste_2022-05-02_01-14-22.jpg)
![zerotier persistence](/uploads/Snipaste_2022-05-02_01-42-29.jpg)

---

# Current Challenges - Equipment

<style>
img[round] {
  border-radius: 10px;
}
</style>

* Electricity is dangerous
* Using personal equipment is not a good idea for a test-bench
* 👏 Thank you Gigabyte for having ESD-protected USB ports

<img round src="/uploads/20220501_031636.jpg" />


---
# rrlogd

{{% section %}}

Logs are encrypted at rest (after being packed)

![](Snipaste_2022-05-02_03-10-57.jpg)

---

Possible functionality to perform any arbitrary command?

![`system()` call](/uploads/Snipaste_2022-05-02_02-34-04.jpg)


---

<div style="display: flex; flex-direction: row">
<div><img src="/uploads/Snipaste_2022-05-02_02-37-10.jpg"/></div>
<div><img src="/uploads/Snipaste_2022-05-02_02-46-06.jpg"/></div>
</div>

Logging program has the potential to unblock port 22?

```
iptables -I INPUT -j ACCEPT -p tcp --dport 22
```

<!-- RoCKR0B0@BEIJING . although https://github.com/Hypfer/Valetudo/issues/44 -->

{{% /section %}}

---




---
# Unfinished Work

* Still a lot of files to look at
* Need to figure out which files are worthwhile to inspect

{{% section %}}

---

<label>Approach 1 - Filter by date modified</label>

> Ubuntu 14.04.3 LTS was released back in 2014, any changes would have a later timestamp

<div style="display: flex; flex-direction: row">
<div><img src="/uploads/20220501-ubuntu_release_date.png"/></div>
<div><img src="/uploads/Snipaste_2022-05-01_06-43-50.jpg" alt="sort by date might give some clues"/></div>
</div>

<!-- Pros, Cons -->

---

<label>Approach 2 - File Comparisons</label>

<div style="display: flex; flex-direction: row; align-items; center">
<div style="width: 65%"><img src="/uploads/20220501-ubuntu_14.04.3.png"/></div>
<div>

Compare executable files and find  
differences in binary function

[bindiff](https://www.zynamics.com/software.html), [binwalk](https://github.com/ReFirmLabs/binwalk), [ssdeep](https://github.com/ssdeep-project/ssdeep), [sdhash](https://github.com/sdhash/sdhash)

<small>As seen in <label>A Large-Scale Analysis of the Security of Embedded Firmwares</label> - Andrei C, Jonas Z, Aur'elien F, Davide B</small>

</div>
</div>

{{% note %}}
From literature review
{{% /note %}}

{{% /section %}}

---
# Retrospective

* Time management / busy / other work
* Could have done more work

---
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