+++
date = 2022-07-22T08:28:19Z
layout = "bundle"
outputs = ["Reveal"]
title = "Final Thesis Presentation | Andrew Wong"
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

* Topic recap
* Thesis statement
* Thesis A and B results
* Where we left off (new progress)
* Discussion
* Conclusion

{{% note %}}
This presentation is hopefully less about the 'results' but more addressing the question about security and privacy
{{% /note %}}

---

<style>
.marquee-parent {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 200px;
  overflow-x: hidden;
  border-radius: 10px;
}

.marquee-child {
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  max-width: unset !important;
  max-height: 100% !important;
  animation: marquee 360s linear infinite;
}

.marquee-child:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-87.5%); }
}

</style>

<br />
<div class="marquee-parent"><img src="/uploads/20211115-lightbulbs-marquee.png" class="marquee-child" ></div>
</br>
{{% section %}}

_...so there are a lot of IOT devices and IOT brands out there..._

{{% note %}}
Smart watches, smart washing machines, smart flip-flop shoes...
{{% /note %}}

---

🕵️‍♂️ Are competing products looking suspiciously similar to you?  
Most are <u>white-labelled</u> products, the biggest ecosystem vendor being <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/tuya_logo.png" height="40px" alt="Tuya" ></span>

<label>Pros</label>

👨‍💻 Use someone else's code  
💹 Fast profit turnaround

<label>Cons</label>  

⚠️ Use someone else's code  
🔓 Potentially security vulnerabilities

{{% note %}}
FYI not here to tell you whether or not IOT devices are good or not... that's for you to judge. My research is on whether these big players have been doing their part (as providers) to keep us safe
{{% /note %}}

---

IOT ecosystems often have a centralised system to manage their fleet <span style='font-size: 18px'> (devices)</span>.

<label>Pros</label>

A centralised management is <u><i>so</i></u> much simpler/easier/faster/cheaper/'better' than a decentralised one.

<label>Cons</label>  

⚠️ Device functionality dependent on system availability  
⚠️ Little transparency about what/where/when/why data is transmitted

{{% note %}}
Remotely issue firmware updates, commands, send logs, monitor network stability, etcetera
{{% /note %}}

{{% /section %}}

---

# Statement

{{% section %}}

>

<div>
How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?
<div style="text-align: right; font-size: 20px;">(Specifically Roborock / Xiaomi / Tuya)</span>
</div>

> 

<br />
<br />

* Digital Privacy
    * Investigate the nature of network data
    * i.e. content, frequency, destination, usage
* Product Security
    * Investigate security vulnerabilities
    * Assess the effectiveness of security fortifications

---

<div style="display: flex; flex-direction: row">

<div>
Device in scope: <label>Roborock S6</label> (2019)

A smart vacuum cleaner, with integrations to both <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/tuya_logo.png" height="40px" alt="Tuya" ></span> and <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/xiaomi_smartlife_logo.webp" height="40px" alt="Mijia (Xiaomi)" ></span> (depending on model)
</div>

<img src="/uploads/20211103-s6-pure-banner.webp" width="500px">
</div>

&nbsp;  

> It works pretty well, according to reviews.  
> But is it safe to connect to your home?  

{{% note %}}
Roborock was first tasked by Xiaomi to develop their vacuum cleaner (Mi Robot Vacuum Cleaner) in 2017 - they have since become their own company, developing their own line of vacuum cleaners
{{% /note %}}

{{% /section %}}

---

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

# Where we left off

---

{{% section %}}

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

# Thesis A | Results

---

{{< slide transition="fade" >}}

Thesis A - Disassembled the device (many, many screws)

[<img round src="/uploads/20211030_040050.jpg">](https://www.youtube.com/watch?v=MnvvZbCDcA8)

---

{{< slide transition="fade" >}}

Thesis A - Found the UART pins and got some terminal

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-a/?noControls#/19/5"></iframe>

---

{{< slide transition="fade" >}}

Thesis A - Got root access (Device runs Ubuntu 14.04.3 LTS)

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-a/?noControls#/19/7"></iframe>

{{% /section %}}

---

{{% section %}}

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

# Thesis B | Results

---

{{< slide transition="fade" >}}

Thesis B - Firmware dump (`dd`) for offline/static analysis

[<img round src="/uploads/20220501-0T4A9824.JPG">](../posts/20220302-progress/#backup)

{{% note %}}
Could have dumped with a flash dumper but I don't own one of those!  
This does mean I only have access to the eMMC rather than being able to dump the firmware of the STM or other chips on the motherboard... but it's probably enough.  

Plus also if there's a firmware update to those chips, I could just look at that.
{{% /note %}}

---

{{< slide transition="fade" >}}

Thesis B - Inspection of system (privileged processes)

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/7/2"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Recovery partition manipulation (see [proof of concept](https://www.youtube.com/watch?v=eABmzUfZ22A))

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/12/3"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Capture of device traffic (port-mirroring)

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/6"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Inspection of system services (`netstat`, `ip{,6}tables`)

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/7/3"></iframe>

---


{{< slide transition="fade" >}}

Thesis B - Remote access persistence (see [proof of concept](https://www.youtube.com/watch?v=om2yzYHU1A0))
<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/8"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Investigating `tcpdump`

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/11/4"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Investigating `rrlogd`

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/11/6"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Investigating `adbd`

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/11/8"></iframe>

{{% /section %}}

---

{{% section %}}

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

# Where we left off

---

## From Thesis B (security)

* Finish analysing firmware binaries
* Comparing files against the stock Ubuntu OS
* Check if an IPv6 address is assigned (hence SSH)
  * ans: [no.](../../posts/ipv6-check/)

## From Thesis C (privacy)

* LAN/WAN traffic analysis
  * Look at network behaviour
  * Hook into transmit and receive functions (pre-encrypt / post-decrypt)
* Update to latest version <span style="font-size: 18px">(and hope we don't get locked out)</span>
  * <span style="color: grey">disclaimer: we did. hahah....</span>
  * Compare file changes
* Factory reset device, check for remnant files

---

# Let's Talk Threats

> Talk about threat models

-
-
-
-
-

---

{{% note %}}
Now that we're throwing in a new firmware version, or a few new versions actually...  
What's the best way to explore these?

All of firmware A, then all of firmware B, then all of firmware C?

Or topic 1, firmware A and B and C
then topic 2, firmware A and B and C

The second idea is probably better - as we should be focussing on the _changes_ (i.e. efforts that the company has done) between firmware version
{{% /note %}}

# Firmware Comparison

/etc/OS_VERSION
ro.product.device=MI1558_TANOS_MP_S2020032500REL_M3.3.0_RELEASE_20200325-204847

Notes

* The Roborock S6 was released in June 2019
* The device I was working on was manufactured June 2020
* There has since been firmware upgrades since 2019
  * As a result my device has a firmware from 25th March 2020
* Note the presence of "MI" at the start of the product string

---


## Stock Ubuntu 14.04.3 LTS

Performed an md5 + diff between the firmware and the stock [Ubuntu 14.04.3 Core LTS (armhf)](http://cdimage.ubuntu.com/ubuntu-base/releases/14.04/release/ubuntu-base-14.04.3-core-armhf.tar.gz) firmware.

All binaries that were present on the device matched the stock firmware, <i>except</i> for `ntpdate` (synchronise computer time via NTP)

Whilst somewhat dissimilar in signature, still functionally equivalent.  
Just has less function exports than the stock version.

![](/uploads/20220724-snipaste_2022-06-29_02-32-15.jpg)


---

# Firmware Upgrade

```diff
-ro.product.device=MI1558_TANOS_MP_S2020032500REL_M3.3.0_RELEASE_20200325-204847
-ro.build.display.id=TANOS_MP_R16_RELEASE_20200325-204847
+ro.product.device=TANOS_V2902-2022042802REL_M3.5.8_T4.1.4-2_RELEASE_20220428-202811
+ro.build.display.id=TANOS_MP_R16_RELEASE_20220428-202811
 ro.sys.cputype=R16.STM32.A3.G1
-ro.build.version.release=1558
-ro.build.date.utc=1585140527
+ro.build.version.release=V2902
+ro.build.date.utc=1651148891
```
Remember this?

> Update to latest version (and hope we don't get locked out)

no longer use vinda

https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-notes/

We got locked out 🙃
https://featherbear.cc/UNSW-CSE-Thesis/posts/upgraded-accessing-the-shell/
* SSH server 

---


## Lockdown: Admin

`[mmcblk0p6]/vinda` is no longer used!  
Programs now request a verification from `[mmcblk0p6]/shadow` and `[mmcblk0p6]/shadow.sign`.

But these don't exist on my device...

So they fail

Affected: `rr_login` (serial), `dropbear` (SSH), `adbd` (USB)




## System Changes

```diff
-aa
+Linux rockrobo 3.4.39 #1 SMP PREEMPT Thu Apr 28 20:27:25 CST 2022 armv7l GNU/Linux
```



*: Also an optimisation to reduce space

![](/uploads/20220724-snipaste_2022-07-25_02-50-06.jpg)

Utils - BusyBox v1.24.1 (2019-11-15 15:22:50 CST) built-in shell (ash)
- no longer use default Ubuntu
apt, dpkg

---

## Lockdown: Shell

* Serial handler no longer uses `getty` - now a modified version called `rr_login`
* OpenSSH replaced with modified `dropbear` - `root` access only

- rr_login - root only   https://featherbear.cc/UNSW-CSE-Thesis/posts/sbin-rr_login/
  - used to be getty


{{% note %}}
Serial handler is responsible for giving us the UART shell interface)
{{% /note %}}

---

## Lockdown: Firewall

- ipv6 blocked!
  - apps also no longer ping for AAAA records (fds)
- several processes re-run iptables block
  - rrlogd, watchdoge

---


Analysis of binaries
[Hooking](../posts/pre-encryption-and-post-decryption-hooks/) into pre-encryption / post-decryption routines
* WAN - security, PII
* LAN - traffic? (tcpdump)

* Applications have less verbosity in their output
* When do logs get sent?
  * On docking - configurable in the settings

* Before / After checks
  * Scope
    * Changes to file system
    * Binaries
    * Configurations
    * Firewalls
  * Tests
    * Reboots
    * Firmware Upgrade
    * Factory Reset

---


# The IPv6 World

No IPv6 lease was assigned
Regardless, there are now `ip6tables` rules to drop all
Firewall

---

# OTA Rooting 

OTA Update
After 11/2019 (remember the product was release 06/2019, ours was manufactuered 06/2020) - OTA was blocked
Beforehand - we could remotely root it

https://featherbear.cc/UNSW-CSE-Thesis/posts/ota-updates-blocked-as-of-late-2019/



rrlogd (RSA + AES)

rriot_rr
/dev/shm/.migrate_to_rriot

encrypts the files before sending.
Instead of decrypting this we can just look at the log files that it extracts

rriot_tuya - used to have `tuya_iot_impl_upload_file` function but no longer has

Threat models

# Network Inspection

# Behavioural Analysis


# What

hooking into code.. [](../posts/pre-encryption-and-post-decryption-hooks/)
some apps have logging so we can just redirect the output


Network analysis
* MQTT at [ms|m2].tuyaeu.com
* Control at a2.tuyaeu.com
* Used to use Mi IO for `gslb`
  * Likely stands for "Global Server Load Balancing"
* Ubuntu artifacts (SSDP)
* DHCP request
* 3am and 3pm activity
* Connections to America, Germany, China
* UNSW Elec - MUD - they could do this to heighten security
  * note - doesn't prevent them from being malicious from within their own C2 server, but will mitigate modified devices

adb --- touched though didn't crack

rrlogd can trigger wlanmgr to do a tcpdump (makes sense kinda) - MSG_LOG_DEBUG_ENABLE - MSG_LOG_DEBUG_UPLOAD_DATA
DROP iptables now https://featherbear.cc/UNSW-CSE-Thesis/posts/updated-opt-rockrobo-rrlog-rrlogd/

wlanmgr can also call tcpdump during debug
https://featherbear.cc/UNSW-CSE-Thesis/posts/upgraded-tcpdump-usage/

photorec no because flashing


# Reset Persistence

https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-reset-persistence/

reset persistence
- /mnt/reserve kept


## ATTACK

- patch the recovery partition mmcblk0p7

# Persistence in Upgrade
https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-upgrade-persistence/
/mnt/data (blk1?)
/mnt/reserve 

## Attack
https://featherbear.cc/UNSW-CSE-Thesis/posts/achieving-upgrade-persistence/


---

talk about miIO vuln
miIO ota - patched

https://featherbear.cc/UNSW-CSE-Thesis/posts/disclosures/
Response to disclosures
tuya and roborock only have one disclosure listed on their site?
Hard to find
xiaomi has a 

Takeaway
Summary (answer main point)

tldr
Who
What 
When
Why
Where
How


---


Address the statement

---

# Thesis in a Year

![](/uploads/screely-1658645824986.png)


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