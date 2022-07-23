+++
categories = []
date = 2022-07-23T03:31:46Z
description = ""
series = []
tags = []
title = "Packet Analysis"
toc = true

+++
# Target

> IP: 10.10.10.8  
> MAC: 64:90:c1:1d:24:c4
> MAC OUI (64:90:C1) - Beijing Xiaomi Mobile Software Co, Ltd

***

# Filtering the data

> We have a 'lot' of network traffic that isn't related to the operation of the device - such as STP, SSDP, DHCP, ARP and other traffic that occurs - even without the presence of the device, so let's remove these.

![](/uploads/20220723-snipaste_2022-07-23_14-40-30.jpg)

On average, each hour there are 9716 packets that can be removed - around 2.82 MB worth of data

We could either blacklist - though this will require a lot of (probably) exclusions.  
A whitelist of just packets to/from our target could work - but will ignore any 'spoofs' / etc?

## Blacklist?

* `ARP` requests to/from the access point
* `CDP` packets - Cisco Discovery Protocol
* `STP` packets - Spanning Tree Protocol
* `MNDP` packets - Mikrotik Neighbor Discovery Protocol
* `LLDP` packets - Link Layer Discovery Protocol
* Packets from `10.10.10.9` / `18:c0:4d:3b:66:d2` - My computer
  * Wasn't completely on monitor mode
* Packets from `60:a4:b7:7a:b0:c3` - Managed switch
* Packets from `32:bc:cf:2d:96:ce` - ?
* Packets from `00:0c:42:cf:36:20` - Router

  ((((((((((((!stp) && !(arp.src.hw_mac == 00:27:22:fc:8f:93)) && !(arp.dst.hw_mac == 00:27:22:fc:8f:93)) && !(cdp)) && !(mndp)) && !(lldp)) && !(eth.addr == 18:c0:4d:3b:66:d2))) && !(arp.src.hw_mac == 60:a4:b7:7a:b0:c3)) && !(eth.src == 32:bc:cf:2d:96:ce)) && !(eth.src == 00:0c:42:cf:36:20)) && !(ip.src == 10.10.10.4)) && !(ip.dst == 10.10.10.4)

## Whitelist?

We could just whitelist packets to/from our target.

    (eth.src == 64:90:c1:1d:24:c4 || eth.dst == 64:90:c1:1d:24:c4)

***

## Command

    find . -iname "*.pcap*" -exec sh -c "tshark -r '{}' -Y \"(eth.src == 64:90:c1:1d:24:c4 || eth.dst == 64:90:c1:1d:24:c4)\" -w \"\$(dirname {})/clean.\$(basename {})\""  \;

***

# Filtering ZeroTier

    !((ip.src == 195.181.173.159) || (ip.dst == 195.181.173.159) || (ip.src == 50.7.73.34) || (ip.dst == 50.7.73.34) || (ip.src == 103.195.103.66) || (ip.dst == 103.195.103.66) || (ip.src ==  50.7.252.138) || (ip.dst ==  50.7.252.138) || (ip.src == 107.170.197.14) || (ip.dst == 107.170.197.14))

https://zerotier.atlassian.net/wiki/spaces/SD/pages/7241732/Root+Server+IP+Addresses

    root-ams-01.zerotier.com has address 195.181.173.159
    root-ams-01.zerotier.com has IPv6 address 2a02:6ea0:c024::
    root-sea-01.zerotier.com has address 50.7.73.34
    root-sea-01.zerotier.com has IPv6 address 2001:49f0:d002:6::2
    root-mia-01.zerotier.com has address 103.195.103.66
    root-mia-01.zerotier.com has IPv6 address 2605:9880:400:c3:254:f2bc:a1f7:19
    root-sgp-01.zerotier.com has address 50.7.252.138
    root-sgp-01.zerotier.com has IPv6 address 2001:49f0:d0db:2::2
    root-alice-sfo-01.zerotier.com has address 107.170.197.14
    root-alice-sfo-01.zerotier.com has IPv6 address 2604:a880:1:20::200:e001

Also, remove packets to/from `udp/9993`

    !((udp.srcport == 9993) || (udp.dstport == 9993))

***

# Analysis

Not gonna lie, I spent around 3 hours trying to figure out how to analyse the PCAP files...  
Some didn't work, some were too slow...

## Tools

* [CapAnalysis](https://www.capanalysis.net/ca/)
  * Note - Instructions on website point to an old version (1.2.2) which has a bug
  * [https://sourceforge.net/projects/capanalysis/files/version%201.2.3/capanalysis_1.2.3_amd64.deb/download](https://sourceforge.net/projects/capanalysis/files/version%201.2.3/capanalysis_1.2.3_amd64.deb/download "https://sourceforge.net/projects/capanalysis/files/version%201.2.3/capanalysis_1.2.3_amd64.deb/download")

## Results

### Version v01.15.58

#### DNS

![](/uploads/20220723-snipaste_2022-07-23_23-08-00.jpg)

![](/uploads/20220723-snipaste_2022-07-23_23-08-53.jpg)

![](/uploads/20220723-snipaste_2022-07-23_23-09-13.jpg)

Every 10 seconds - xx.ott.io.mi.com

Two times every second - xx.ot.io.mi.com

\[upload\] Every 2-5 seconds - (A, AAAA) awsde0.fds.api.xiaomi.com': {'18.184.67.79', '3.124.106.160', '52.28.1.106', '3.67.19.121', '3.65.97.228', '18.156.26.16'}}

Every now and then - a2.tuyaeu.com - {'3.125.199.146', '35.157.101.18', '3.125.234.101'}

Every now and then - ms.tuyaeu.com - {'3.121.141.195', '3.122.208.21', '3.122.217.21'}

#### rriot_tuya

* `ms.tuyaeu.com`
  * MQTT (tcp/8883)
  * Device info (i.e. brush life)

```json
{
  "id": 889,
  "result": [
    {
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
    }
  ]
}
```

```json
{
  "id": 1437,
  "method": "app_rc_move",
  "params": [
    {
      "duration": 1500,
      "omega": 0,
      "seqnum": 133,
      "velocity": -0.29
    }
  ]
}
```

* tells rrlogd to use awsde0.fds.api.xiaomi.com
* `a2.tuyaeu.com`
  \*
* `miio_client`
  * [`dns.io.mi.com`](https://whois.ipip.net/AS59019)
    * `110.43.0.83`
    * `110.43.0.83`
* `rriot_tuya`
  * `a2.tuyaeu.com`
    * `3.125.199.146`
    * 

#### a2.tuyaeu.com

> Control requests

![](/uploads/20220723-snipaste_2022-07-24_00-08-53.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-10-16.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-10-33.jpg)

    [07-09 20:51:49 TUYA Debug][iot_httpc.c:883] Post Data: {"devId":"bf7e9b4aacf4f733d8o3zz","lastFetchTime":"0","t":1657363909}
    [07-09 20:51:49 TUYA Debug][iot_httpc.c:894] Post URL: https://a2.tuyaeu.com/d.json?a=tuya.device.timer.count&devId=bf7e9b4aacf4f733d8o3zz&et=1&t=1657363909&v=4.0&sign=04f90848341607585ff064f82437c91c
    [07-09 20:51:49 TUYA Debug][httpc.c:742] Connect: a2.tuyaeu.com Port: 443  -->>
    [07-09 20:51:49 TUYA Debug][httpc.c:744] Connect: a2.tuyaeu.com Port: 443  --<<
    [07-09 20:51:49 TUYA Debug][tuya_tls.c:792] TUYA_TLS Begin Connect a2.tuyaeu.com:443  CustomNet:TRUE Enable_Cert:TRUE Default:TRUE 
    [07-09 20:51:49 TUYA Debug][tuya_tls.c:893] socket fd is set. set to inner send/recv to handshake
    [07-09 20:51:50 TUYA Debug][tuya_tls.c:920] handshake finish for a2.tuyaeu.com. set send/recv to user set
    [07-09 20:51:50 TUYA Debug][tuya_tls.c:932] TUYA_TLS Success Connect a2.tuyaeu.com:443  CustomNet:TRUE Suit:TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256
    [07-09 20:51:51 TUYA Debug][iot_httpc.c:570] chunked:0.
    [07-09 20:51:51 TUYA Debug][iot_httpc.c:534] Malloc Buffer Size:208
    [07-09 20:51:51 TUYA Debug][iot_httpc.c:660] Decode Rev:{"result":{"devId":"bf7e9b4aacf4f733d8o3zz","count":0,"lastFetchTime":0},"t":1657363911,"success":true}									
    [07-09 20:51:51 TUYA Debug][tuya_tls.c:1015] TUYA_TLS Disconnect Success
    [07-09 20:51:51 TUYA Debug][timer_task.c:261] timer query time equal. skip:0

    [07-09 21:21:07 TUYA Debug][iot_httpc.c:883] Post Data: {"subId":null,"t":1657365667}
    [07-09 21:21:07 TUYA Debug][iot_httpc.c:894] Post URL: https://a2.tuyaeu.com/d.json?a=tuya.device.upgrade.silent.get&devId=bf7e9b4aacf4f733d8o3zz&et=1&t=1657365667&v=4.3&sign=d220fd3f6fb2d42233491de6cf301834
    [07-09 21:21:07 TUYA Debug][httpc.c:742] Connect: a2.tuyaeu.com Port: 443  -->>
    [07-09 21:21:08 TUYA Debug][httpc.c:744] Connect: a2.tuyaeu.com Port: 443  --<<
    [07-09 21:21:08 TUYA Debug][tuya_tls.c:792] TUYA_TLS Begin Connect a2.tuyaeu.com:443  CustomNet:TRUE Enable_Cert:TRUE Default:TRUE 
    [07-09 21:21:08 TUYA Debug][tuya_tls.c:893] socket fd is set. set to inner send/recv to handshake
    [07-09 21:21:09 TUYA Debug][tuya_tls.c:920] handshake finish for a2.tuyaeu.com. set send/recv to user set
    [07-09 21:21:09 TUYA Debug][tuya_tls.c:932] TUYA_TLS Success Connect a2.tuyaeu.com:443  CustomNet:TRUE Suit:TLS-ECDHE-RSA-WITH-AES-128-CBC-SHA256
    [07-09 21:21:10 TUYA Debug][iot_httpc.c:570] chunked:0.
    [07-09 21:21:10 TUYA Debug][iot_httpc.c:534] Malloc Buffer Size:100
    [07-09 21:21:10 TUYA Debug][iot_httpc.c:660] Decode Rev:{"t":1657365670,"success":true}
    [07-09 21:21:10 TUYA Debug][tuya_tls.c:1015] TUYA_TLS Disconnect Success
    [07-09 21:21:10 TUYA Debug][gw_intf.c:4020] silent get gw firmware,no firmware available
    [07-09 21:21:10 TUYA Debug][gw_intf.c:4100] silent get gw firmware finish

#### awsde0.fds.api.xiaomi.com

![](/uploads/20220723-snipaste_2022-07-24_00-12-11.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-12-48.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-11-17.jpg)

#### ms.tuyaeu.com

![](/uploads/20220723-snipaste_2022-07-24_00-13-08.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-13-40.jpg)

![](/uploads/20220723-snipaste_2022-07-24_00-13-23.jpg)

### Version v02.29.02

#### Wireshark Filter

    !arp
    && !dns
    && !dhcp
    && !(tcp.srcport == 8883 || tcp.dstport == 8883)
    && !((ip.src == 3.125.234.101 || ip.dst == 3.125.234.101) || (ip.src == 3.125.199.146 || ip.dst == 3.125.199.146) || (ip.src == 35.157.101.18 || ip.dst == 35.157.101.18)) 
    && !((ip.src == 3.124.225.12 || ip.dst == 3.124.225.12) || (ip.src == 18.185.31.196 || ip.dst == 18.185.31.196) || (ip.src == 52.58.249.45 || ip.dst == 52.58.249.45) || (ip.src == 3.66.126.37 || ip.dst == 3.66.126.37) || (ip.src == 3.65.95.68 || ip.dst == 3.65.95.68) || (ip.src == 3.121.210.75 || ip.dst == 3.121.210.75) || (ip.src == 35.156.44.172 || ip.dst == 35.156.44.172) || (ip.src == 18.185.218.106 || ip.dst == 18.185.218.106) || (ip.src == 3.67.242.33 || ip.dst == 3.67.242.33) || (ip.src == 18.184.31.90 || ip.dst == 18.184.31.90))
    && !((ip.src == 3.124.106.160 || ip.dst == 3.124.106.160) || (ip.src == 52.28.1.106 || ip.dst == 52.28.1.106) || (ip.src == 3.65.97.228 || ip.dst == 3.65.97.228) || (ip.src == 18.184.67.79 || ip.dst == 18.184.67.79) )

* arp
* dhcp
* mqtt (m2.tuyaeu.com)
* a2.tuyaeu.com
* m2.tuyaeu.com
* awsde0.fds.api.xiaomi.com

#### DHCP

Every 5 minutes, DHCP lease requested

![](/uploads/20220723-snipaste_2022-07-23_22-24-23.jpg)

#### DNS

![](/uploads/20220723-2_dns_2_snipaste_2022-07-23_20-30-10.jpg)

* awsde0.fds.api.xiaomi.com {'3.124.106.160', '52.28.1.106', '3.65.97.228', '18.184.67.79'}
* a2.tuyaeu.com {'35.157.101.18', '3.125.234.101', '3.125.199.146'}
* m2.tuyaeu.com {'3.67.242.33', '35.156.44.172', '18.184.31.90', '3.124.225.12', '18.185.218.106', '52.58.249.45', '18.185.31.196', '52.57.38.165', '3.121.210.75', '3.66.126.37', '3.120.92.134', '3.65.95.68', '18.192.43.219', '3.64.85.28', '35.156.42.116'}

#### rriot_tuya

* Receives `(rr_down_stream_msg_handler##724): {"id":363,"method":"set_fds_endpoint","params":["awsde0.fds.api.xiaomi.com"]}`
* Instructs `rrlogd` where to upload the logs to
* `awsde0.fds.api.xiaomi.com`
  * CNAME: `lb-hadoop-fds-awsde0-eco-tcp-825301548.eu-central-1.elb.amazonaws.com`
    * 3.124.106.160
    * 3.65.97.228
    * 3.124.106.160
    * 18.184.67.79
  * ![](/uploads/20220723-snipaste_2022-07-23_21-43-24.jpg)
  * ![](/uploads/20220723-2_ssl_snipaste_2022-07-23_20-36-41.jpg)
  * ![](/uploads/20220723-snipaste_2022-07-23_21-44-48.jpg)
  * ![](/uploads/20220723-snipaste_2022-07-23_21-44-48.jpg)
* `m2.tuyaeu.com`
  * Many IPs
  * MQTT
  * tcp/8883
* `a2.tuyaeu.com`
  * Many IPs
  * tcp/443
* ![](/uploads/20220723-snipaste_2022-07-23_22-07-12.jpg)

#### Activity

Excluding log upload activity (i.e. to Hadoop), we can see that at 3am (local time) there is some regular activity.

> Also very possible that I was just awake at 3am.

![](/uploads/20220723-snipaste_2022-07-23_22-50-40.jpg)

![](/uploads/20220723-snipaste_2022-07-23_22-51-56.jpg)

#### Tuya Discovery (rriot_tuya)

* Every 5 seconds
  * 255.255.255.255 broadcast to udp/6667
  * Tuya discovery packet

```json
{
  ablilty: 0,
  active: 2,
  encrypt: true,
  gwId: "bf7e9b4aacf4f733d8o3zz",
  ip: "10.10.10.8",
  productKey: "mjae49buaskri74f",
  version: "3.3"
}
```

> Trace: `bf7e9b4aacf4f733d8o3zz`

    # rriot_tuya
    
    [01-01 18:12:15 TUYA Debug][gw_intf.c:2910] dev bf7e9b4aacf4f733d8o3zz bind schema [{"mode":"rw","property":{"type":"bool"},"id":2,"type":"obj"},{"mode":"rw","property":{"range":["auto","samrt","super","manual"],"type":"enum"},"id":5,"type":"obj"},{"mode":"ro","property":{"min":0,"max":100,"scale":0,"step":1,"type":"value"},"id":12,"type":"obj"},{"mode":"rw","property":{"min":0,"max":100,"scale":0,"step":1,"type":"value"},"id":16,"type":"obj"},{"mode":"rw","id":101,"type":"raw"},{"mode":"rw","id":102,"type":"raw"},{"mode":"rw","id":103,"type":"raw"},{"mode":"rw","property":{"min":0,"max":2147483647,"scale":0,"step":1,"type":"value"},"id":104,"type":"obj"},{"mode":"rw","id":105,"type":"raw"},{"mode":"rw","id":106,"type":"raw"},{"mode":"rw","id":107,"type":"raw"},{"mode":"rw","id":108,"type":"raw"},{"mode":"rw","id":109,"type":"raw"},{"mode":"rw","id":110,"type":"raw"},{"mode":"ro","property":{"min":0,"max":100000,"scale":1,"step":1,"type":"value"},"id":111,"type":"obj"}]
    [01-01 18:12:15 TUYA Debug][gw_intf.c:3305] Bind Dev Attach Success bf7e9b4aacf4f733d8o3zz 1

> Trace: `mjae49buaskri74f`

    # rriot_tuya
    
    [01-01 18:12:15 TUYA Debug][simplekv.c:1211] find key:2 gw_di
    [01-01 18:12:15 TUYA Debug][simplekv.c:1240] key:gw_di find value.Len:352
    [01-01 18:12:15 TUYA Debug][tuya_ws_db.c:320] read buf:{"abi":0,"id":"bf7e9b4aacf4f733d8o3zz","swv":"02.29.02","bv":"30.04","pv":"2.2","lpv":"3.3","pk":"mjae49buaskri74f","firmk":null,"cadv":"1.0.2","cdv":"1.0.0","dev_swv":"02.29.02","s_id":"0000002urc","dtp":0,"sync":0,"attr_num":0,"mst_tp_0":0,"mst_ver_0":null,"mst_tp_1":0,"mst_ver_1":null,"mst_tp_2":0,"mst_ver_2":null,"mst_tp_3":0,"mst_ver_3":null }
    [01-01 18:12:15 TUYA Debug][tuya_ws_db.c:766] gw_di read success
    [01-01 18:12:15 TUYA Notice][gw_intf.c:2667] gw_cntl.gw_if.abi:0 input:0
    [01-01 18:12:15 TUYA Notice][gw_intf.c:2668] gw_cntl.gw_if.product_key:mjae49buaskri74f, input:mjae49buaskri74f
    [01-01 18:12:15 TUYA Notice][gw_intf.c:2669] gw_cntl.gw_if.tp:0, input:0
    [01-01 18:12:15 TUYA Debug][simplekv.c:1171] read key:gw_ai isFuzzy:0 skipCnt:0