+++
categories = []
date = 2022-07-11T17:59:43Z
description = ""
series = []
tags = []
title = "Upgraded - tcpdump usage"
toc = true

+++
In `v02.29.02`, `tcpdump` gets called!

# /opt/rockrobo/wlan/wlanmgr

![](/uploads/20220711-snipaste_2022-07-12_03-58-09.jpg)

> `tcpdump -i any -s 0 -C %lu -W %d -Z root -w %s/%s/%s &`

## wifi_debug_do(i)

* `i=0` - Cleanup
* `i=1` - Do capture
* `i=2` - Stop capture
* `i=3` - `wifi_debug_collect.sh`

# /mnt/data/debug

> `/opt/rockrobo/wlan/wifi_debug_collect.sh`

* Contains `/etc/resolv.conf`
* Contains `netstat -anp` as `netstat.txt`
* Contains `ifconfig` as `ifconfig.txt`
* Contains packet capture (as `network_packet.pcap`)

# /opt/rockrobo/rrlog/rrlogd

![](/uploads/20220711-snipaste_2022-07-12_04-14-11.jpg)