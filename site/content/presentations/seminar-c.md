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
## Today's Agenda

* <label>Topic Recap</label>
  * The world of IOT devices
  * Thesis statement
* <label>Where we left off</label>
  * Previous results and findings
* <label>New progress</label>
* <label>Discussion</label>
* <label>Conclusion</label>

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
🐱‍💻 Potentially security vulnerabilities

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
Our device in scope: <label>Roborock S6</label> (2019)

A smart vacuum cleaner, with integrations to both <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/tuya_logo.png" height="40px" alt="Tuya" ></span> and <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/xiaomi_smartlife_logo.webp" height="40px" alt="Mijia (Xiaomi)" ></span> (depending on model)
</div>

<img src="/uploads/20211103-s6-pure-banner.webp" width="500px">
</div>

> It works pretty (very) well, according to reviews.  
But is it safe to connect to your home?  

{{% /section %}}

---


Talk about thesis A
talk about thesis b
Talk about thesis c

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

Thesis B - Inspection of system services (`netstat`, `iptables`, `ip6tables`)

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/7/3"></iframe>

---


{{< slide transition="fade" >}}

Thesis B - Remote access persistence (see [proof of concept](https://www.youtube.com/watch?v=om2yzYHU1A0))
<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/8"></iframe>

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

# Thesis B | Observations

---

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

# Thesis B | Future Challenges

---

{{< slide transition="fade" >}}

Thesis B - Comparing files

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/13/4"></iframe>

---

{{< slide transition="fade" >}}

Thesis B - Hooking into pre-encryption / post-decryption routines

<iframe style="border: 2px solid white; border-radius: 10px; pointer-events: none;" width=1280 height=720 src="../seminar-b/?noControls#/13"></iframe>

{{% /section %}}

---

#### <label>Thesis B Completion</label>

* Analysis of firmware binaries to identify vulnerabilities
  * Still in progress
* Search for unsecured secrets, logs, configurations
  * Completed (excluding encrypted `rrlog` files)

#### <label>Revised Thesis C Plan</label>

* WAN - security, PII
* LAN - traffic? (tcpdump)
* Firmware upgrade
* Update to a newer firmware version and look at changes
* Check what files gets cleared during a format
* Binary assessment
* Verify IPv6 SSH access

# The IPv6 World



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


# Let's Talk Threats

> Talk about threat models

---

What files?
- compare against stock
- lots of hash matches




threat models

work done in thesis c

hooking into code..

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
wlanmgr can also call tcpdump during debug

no ipv6

photorec no because flashing

Compare against stock OS

-- upgrade 
- ipv6 blocked!
  - also no longer pings fds AAAA
- no longer use default Ubuntu
- no apt, dpkg
- dropbear (SSH)
  - also not started by default
  - very old, only uses diffie for key exch
- rr_login - root only
  - used to be getty
  - new way to get shell
- applications check /mnt/default/shadow (non-existent)
  - dropbear
  - rr_login
- several processes re-run iptables block
  - rrlogd, watchdoge
- busybox
- persistence
  - /mnt/data
  - /mnt/reserve
- malware persistence idea
- need new way to transfer files / cross-compile




reset persistence
- /mnt/reserve kept
- patch the recovery partition mmcblk0p7

talk about miIO vuln
miIO ota - patched

Response to disclosures
tuya and roborock only have one disclosure listed on their site?
Hard to find


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