+++
date = 2022-04-16T08:28:19Z
layout = "bundle"
outputs = ["Reveal"]
title = "Seminar B | Andrew Wong"
+++

{{< slide background-image="https://featherbear.cc/UNSW-CSE-Thesis/uploads/covers/0T4A9791.JPG" transition="fade" >}}

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

<style>
img[round] {
  border-radius: 10px;
}
</style>

# Today's Agenda

* Thesis B plan
* Thesis B review
* Thesis B retrospective
* Thesis C revised plan

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

{{% /fragment %}}

---

# Original Project Timeline

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

{{< slide background-image="https://featherbear.cc/UNSW-CSE-Thesis/uploads/20211030_040050.jpg" transition="fade" >}}

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

### Thesis B in Review

---

# More logging

Previously packet captures only logged WAN traffic...

{{% section %}}
* Now port mirroring from a switch ([TP-Link TL-SG105E](https://www.tp-link.com/au/business-networking/easy-smart-switch/tl-sg105e/))
* Now getting all LAN data too! (port mirrored from AP)

![](/uploads/Snipaste_2022-05-05_01-31-27.jpg)

---

<div style="display: flex; flex-direction: row"> 
<div><img round src="/uploads/Snipaste_2022-05-05_01-32-07.jpg"/></div>
<div><img round src="/uploads/Snipaste_2022-05-05_01-31-55.jpg"/></div>
</div>

* The switch doesn't have true port mirroring - also seeing sink traffic
* Disabled IPv4 and (attempt to disable) IPv6 on the network adapter
* Can filter out irrelevant packets later

<!-- tshark -i en4 -w capture.pcap -b interval:3600 -->

---

> Will later use dumps to check frequency and access

{{% center %}}<img round src="/uploads/Snipaste_2022-05-05_17-23-11.jpg" width="65%">{{% /center %}}

{{% /section %}}

---

# Speaking of packets...

> 🚩 WiFi credentials in plain text during setup

{{% center %}}<img round src="/uploads/Snipaste_2022-05-02_01-14-22.jpg" width="80%">{{% /center %}}

* Minor issue, only exploitable during time of setup

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
Proto Recv-Q Send-Q Local Address           Foreign Address      State       PID/Program name
tcp        0      0 127.0.0.1:54322         0.0.0.0:*            LISTEN      991/miio_client 
tcp        0      0 127.0.0.1:54323         0.0.0.0:*            LISTEN      991/miio_client 
tcp        0      0 0.0.0.0:22              0.0.0.0:*            LISTEN      1644/sshd       
tcp        0      0 127.0.0.1:55551         0.0.0.0:*            LISTEN      998/rriot_tuya  
tcp        0      0 0.0.0.0:6668            0.0.0.0:*            LISTEN      998/rriot_tuya  
tcp6       0      0 :::22                   :::*                 LISTEN      1644/sshd       
```

🚩 `tcp/22` and `tcp/6668` are exposed

<!-- miio_send and miio_recv uses 54322 -->

---

<label>Firewall</label>

🤷‍♂️ At least port 22 is blocked by `iptables`

```
root@rockrobo:~# iptables -L
Chain INPUT (policy ACCEPT)
target     prot opt source           destination         
DROP       udp  --  anywhere         anywhere           udp dpt:6665
DROP       tcp  --  anywhere         anywhere           tcp dpt:6665
DROP       tcp  --  anywhere         anywhere           tcp dpt:ssh

Chain FORWARD (policy ACCEPT)
target     prot opt source           destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source           destination      
```

* What runs on port `6665`
  * `player`
  * What about file-based IPC?

---

```
root@rockrobo:~# ip6tables -L
Chain INPUT (policy ACCEPT)
target     prot opt source           destination         

Chain FORWARD (policy ACCEPT)
target     prot opt source           destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source           destination
```

🚩 ... except IPv6 isn't..


> Future work: Test IPv6 lease

---

<label>Other small tests</label>

* Can I ping the internet / make outbound connections?
  * Yes
* Can I run my own software
  * Yes (`armhf` architecture)

{{% /section %}}

---
# Going wireless - establishing SSH

<div style="display: flex; flex-direction: row; align-items: center">
<div style="flex: 1">
<img round src="iptables.png" />
<img round src="/uploads/Snipaste_2022-05-05_05-06-28.jpg" />
</div>
<div style="flex: 1">

* Remove iptables rule to gain access
  * (and so could an attacker)
* Can I add persistent access?
  * Yes, modify `rrwatchdoge.conf`
* Can also add remote access
  * 👈 e.g. ZeroTier

![zerotier persistence](/uploads/Snipaste_2022-05-02_01-42-29.jpg)

</div>
</div>

<!-- https://featherbear.cc/UNSW-CSE-Thesis/posts/device-actions/ -->

---

{{% section %}}
# Trivial Power Analysis

> Batteries don't last forever!

![](/uploads/20220501_051651.jpg)


<!-- lol you could have just opened it up in the first place -->

---

> Test: What if I unplug the battery?

* No change in output during boot
* But device will turn off after around 20 seconds

```
Ubuntu 14.04.3 LTS rockrobo ttyS0

rockrobo login:                                                 #### Usual login prompt
wait-for-state stop/waiting
haveged: haveged Stopping due to signal 15                      #### Shutdown SIGTERM 

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
[   26.948171] [MCU_UART] sent ap poweroff event to mcu         #### Device turns off
```

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

* What about the other partitions?  
* Can we install software in the `recovery` partition? <label>A: Yes</label> 🚩

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

![](commentree.png) <!-- 20220311 -->

<!-- Monaco editor, easy to transfer around -->

{{% /section %}}

---
# (some) Interesting Files

{{% section %}}

## The Search

* Looked for any passwords, secrets, keys, IDs, function calls, logs, ...
* Find changed files (*)
* See where they are used
* See how they are used
* Anything of general interested

---

* mmcblk0p1
  * miio/device.token
  * miio/device.uid
  * rockrobo/  
  * rockrobo/rrlog/ (logs are encrypted!)
* mmcblk0p8/opt/rockrobo
  * Binaries
  * scripts/pipes.sh
  * rrlog/misc.sh
* mmcblk0p11/endpoint.bin - AWS address + key?  

---

> `mmcblk0p8/opt/rockrobo/rrlog/misc.sh`

```bash
...

#echo "=======device.conf==========" >> /dev/shm/misc.log
#cat /mnt/default/device.conf >> /dev/shm/misc.log

...
```

> `mmcblk0p6/device.conf`

```bash
did=DDDDDDDDD                    # (9 digits)
key=XXXXXXXXXXXXXXXX             # (16 alpha-num, case-sensitive)
mac=64:90:C1:1D:24:C4
vendor=roborock
model=roborock.vacuum.s6
```

---

> Calls for `system`

<!-- find . ! -iname "*.sh" ! -iname "*.conf" -type f -executable -exec sh -c "echo {}; nm -D {} | grep 'system\|exec\|fork'" \; -->

![](/uploads/Snipaste_2022-05-09_00-34-19.jpg)

---

> `/var/log/apt/history.log`

Installed packages that are not part of the base system

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

* Why does a vacuum cleaner need `rsync` or `tcpdump`?
* No usage calls found yet

---

> `mmcblk0p7/usr/sbin/tcpdump`

* External but unmodified binary
* Only hub traffic visible (wireless)
* (not really that interesting)

![](/uploads/Snipaste_2022-05-01_19-37-08.jpg)

---

> `mmcblk0p8/opt/rockrobo/rrlog/rrlogd`

✅ Logs are encrypted at rest (after being packed)  
✅ Originally used to be a symmetric key, now using a public key  
😕 Logging program has the functionality to unblock port 22?

<!-- RoCKR0B0@BEIJING . although https://github.com/Hypfer/Valetudo/issues/44 -->

<!-- ![](/uploads/Snipaste_2022-05-02_03-10-57.jpg) -->

<!-- Possible functionality to perform any arbitrary command?

![`system()` call](/uploads/Snipaste_2022-05-02_02-34-04.jpg) -->

<div style="display: flex; flex-direction: row">
<div><img src="/uploads/Snipaste_2022-05-02_02-37-10.jpg"/></div>
<div><img src="/uploads/Snipaste_2022-05-02_02-46-06.jpg"/></div>
</div>


```
iptables -I INPUT -j ACCEPT -p tcp --dport 22
```

---

> `mmcblk0p6/vinda`

Previously... XOR this file to get the `root` password

<label>File References</label>

![](/uploads/Snipaste_2022-05-09_00-56-25.jpg)

---

> `mmcblk0p7/usr/bin/adbd`

* Custom ADB binary
* Had a brief look [(more)](https://featherbear.cc/UNSW-CSE-Thesis/posts/mmcblk0p7-usr-bin-adbd/)

```
locksec_init_key: can not find the prefix str from adb conf file, use default
locksec_init_key: can not find the suffix str from adb conf file, use default
locksec_init_serial: adb read 465 bytes from /proc/cpuinfo
locksec_init_key: locksec_init_key, rockrobo%()+-[]_8a80ab8936d76c118000:;<=>?@{}rubydevicemodel
locksec_apply_key: locksec_apply_key, erI09cyW%()+-[]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: adb source str: erI09cyW%()+-[]_8a80ab8936d76c118000:;<=>?@{}CzD2xuMNlwabTK7
locksec_apply_passwd: locksec_apply_passwd, passwd: 0y[ad8@w
```

<label>Related files</label>

* mmcblk0p6/vinda
* mmcblk0p6/adb.conf
* mmcblk0p8/var/log/upstart/adbd.log

<!-- https://www.youtube.com/watch?v=L8jKgX04PMg -->

---

## Future: the other programs

* cleaner
* miio
* rockrobo
* rrlog
* rriot

{{% /section %}}

---
# Issues, thoughts & discussions

<small>How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?</small>

{{% note %}}We're not answering the question just yet, just some thoughts{{% /note %}}

{{% section %}}

> 🚩 Wireless credentials are stored in plain text

* Anyone with <label>physical</label> access to the machine can gain wireless credentials
* However, takes a lot of effort to open up the device
* Why? `wpa_supplicant` is part of the underlying Linux framework

---

> ⚠️ SSH server exposed on `tcp/22`

* Why does this server exist?
* When / where is it used?
  * Allow rule inside the `rrlogd` binary
* Roborock has made an attempt to protect their product with `iptables`
* But did not fully product their product against access via IPv6

---

> 🚩 Processes are running as `root`

* Any vulnerability in any of the programs can result in elevated access
  * Dropping of iptables restrictions
  * Persistence planting
  * System takeover
* Should run as a de-privileged user
* Why? Compatibility, perhaps ease of development
  * i.e. `udev` rules

---

> 🚩 Recovery partition is modifiable

* Can be modified to contain malicious software that persists a factory reset
* Mountable - `mount /dev/mmcblk0p7 ...`
* Why? Allows easy updates of the 'factory image'
* But the partition could somehow be encrypted 

---

<label>A note on hardware and software</label>

> access to the hardware = game over?

* Are there tamper-proof / tamper-evident design possibilities?
* What about some sort of "Secure Element"
* Or read protection?
* Choice of OS
* Choice of auth implementation (e.g. `vinda`)
* Limitation on what programs are allowed to execute?

---

✅ <label>The Good Things</label>

* An effort to restrict SSH access via `iptables`
* AuthN / AuthZ is present within interfaces to the device
* UART shell requires a password
* Logs are encrypted locally

{{% /section %}}

---

# Current Challenges

{{% section %}}

> Intercepting encrypted data / TLS traffic

* Ubuntu 14.04 has some issues (?)
  * `PolarProxy` is too new (libc requirements)
  * apt update doesn't work with socks5:// or http proxies properly???
* Routing?
* Hook into the encryption/decryption process somehow?
  * Use `Frida`?
  * Or look at the data communicated by the smartphone app?
    * `Objection` tool didn't work with the RoboRock app


<!-- On the smart app side -->

<!-- Frida nope -->
<!-- windows env nope  -->
<!-- ![APK objection failing](/uploads/Snipaste_2022-05-02_00-52-40.jpg) -->
<!-- https://github.com/NickstaDB/patch-apk -->
<!-- https://blog.silentsignal.eu/2020/05/04/decrypting-and-analyzing-https-traffic-without-mitm/ -->
<!-- RoboRock app -->

---

> Electricity is funny.

Using my main personal computer is not a good idea for a test-bench...  
👏 Thank you Gigabyte for having ESD-protected USB ports

<img round src="/uploads/20220501_031636.jpg" />

---

> Still a lot of files to look at

Need to figure out which files are worthwhile to inspect..

---

<label>File Inspection Approach 1 - Filter by date modified</label>

> Ubuntu 14.04.3 LTS was released back in 2014, any changes would have a later timestamp (hopefully)

<div style="display: flex; flex-direction: row">
<div><img src="/uploads/20220501-ubuntu_release_date.png"/></div>
<div><img src="/uploads/Snipaste_2022-05-01_06-43-50.jpg" alt="sort by date might give some clues"/></div>
</div>

---

<label>File Inspection Approach 2 - Binary Comparisons</label>

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
# Thesis B Retrospective

* Time management - could have done more work
  * Busy / other commitments
  * Hardware work restricts me to only working at home
* Project breadth / depth / scope
  * Binary analysis takes a lot of time

{{% fragment %}}
<label>Response</label>

* Schedule more focus times
* Hardware work pretty much completed - likely able to work remotely now
* Restrict binary analysis to the most likely binaries
  * May consequently miss something

{{% /fragment %}}

{{% note %}}
These could possibly just be excuses
{{% /note %}}

---
#### <label>Thesis B Completion</label>

* Analysis of firmware binaries to identify vulnerabilities
  * Still in progress
* Search for unsecured secrets, logs, configurations
  * Completed (excluding encrypted `rrlog` files)

#### <label>Revised Thesis C Plan</label>

* (priority) Inspection of outbound WAN traffic - security, PII, etc
* <s style="color: grey">Inspection of LAN traffic</s> rather, see if it is stored
* <s style="color: grey">Inspection of interaction with nearby devices</s>
* <s style="color: grey">Protocol analysis</s>
* Update to a newer firmware version and look at changes
* Check what files gets cleared during a format
* Binary assessment
* Verify IPv6 SSH access

---

## Incoming Timeline

* <label>22T2 W1</label> - IPv6 SSH verification, continue binary assessment
* <label>22T2 W2</label> - WAN traffic analysis
  * Look at network behaviour
  * Try view WAN data pre-encryption / post-decryption
* <label>22T2 W4</label> - Update to latest version (and hope we don't get locked out)
  * Do another vacuum clean, reimage, compare binaries
* <label>22T2 W5</label> - Factory reset device, check for remnant files
* <label>22T2 W8</label> - Demo submission
* <label>22T2 W11</label> - Report submission

---
# Thank You

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