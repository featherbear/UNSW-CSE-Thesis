+++
categories = []
date = 2022-07-13T10:55:08Z
description = ""
series = []
tags = []
title = "Upgraded - netstat"
toc = true

+++
> Compare to: [netstat](../netstat)  
> Compare to: [Which Process, Which Port, Which Connection](../which-process-which-port-which-connection)

```
[root@rockrobo z5206677]# netstat -pa
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:ssh             0.0.0.0:*               LISTEN      372/dropbear
tcp        0      0 localhost:55551         0.0.0.0:*               LISTEN      559/rriot_tuya
tcp        0      0 localhost:55552         0.0.0.0:*               LISTEN      561/rriot_rr
tcp        0      0 0.0.0.0:6668            0.0.0.0:*               LISTEN      559/rriot_tuya
tcp        0      0 localhost:47944         localhost:55551         ESTABLISHED 555/AppProxy
tcp        0      0 localhost:55551         localhost:47944         ESTABLISHED 559/rriot_tuya
tcp        0      0 10.10.10.8:46455        ec2-52-58-249-45.eu-central-1.compute.amazonaws.com:8883 ESTABLISHED 559/rriot_tuya
tcp        0      0 :::ssh                  :::*                    LISTEN      372/dropbear
udp        0      0 0.0.0.0:55559           0.0.0.0:*                           561/rriot_rr
udp        0      0 10.10.10.8:42021        0.0.0.0:*                           559/rriot_tuya
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node PID/Program name    Path
unix  5      [ ]         DGRAM                      4130 99/syslogd          /dev/log
unix  10     [ ]         DGRAM                      2766 432/rrlogd          /var/run/rrlogd
unix  4      [ ]         DGRAM                      3060 730/wpa_supplicant  /var/run/wpa_supplicant/wlan0
unix  2      [ ]         DGRAM                      3062 557/wlanmgr         /tmp/wifiman.sock.1
unix  2      [ ]         DGRAM                      3064 557/wlanmgr         /tmp/wifiman.sock.2
unix  2      [ ]         DGRAM                      6191 757/udhcpc          
unix  3      [ ]         STREAM     CONNECTED       3067 557/wlanmgr         
unix  3      [ ]         STREAM     CONNECTED       3066 557/wlanmgr         
unix  2      [ ]         DGRAM                      3007 370/WatchDoge       
unix  2      [ ]         DGRAM                      1272 555/AppProxy        
unix  2      [ ]         DGRAM                      2992 559/rriot_tuya      
unix  2      [ ]         DGRAM                      5287 561/rriot_rr        
unix  2      [ ]         DGRAM                      5065 553/RoboController  
unix  2      [ ]         DGRAM                      2966 557/wlanmgr         
unix  2      [ ]         DGRAM                      5053 526/rr_loader       
unix  2      [ ]         DGRAM                      2768 432/rrlogd          
unix  2      [ ]         DGRAM                      4501 372/dropbear        
unix  3      [ ]         STREAM     CONNECTED       1231 371/adbd            
unix  3      [ ]         STREAM     CONNECTED       1230 371/adbd            
unix  3      [ ]         STREAM     CONNECTED       1229 371/adbd            
unix  3      [ ]         STREAM     CONNECTED       1228 371/adbd            
unix  3      [ ]         STREAM     CONNECTED       1227 371/adbd            
unix  3      [ ]         STREAM     CONNECTED       1226 371/adbd            
unix  2      [ ]         DGRAM                      2305 102/klogd           
```