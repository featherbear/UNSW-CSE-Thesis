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

Talk about threat models

Talk about thesis A
talk about thesis b
Talk about thesis c

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