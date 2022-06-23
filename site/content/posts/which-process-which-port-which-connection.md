+++
categories = []
date = 2022-06-23T16:35:54Z
description = ""
series = []
tags = []
title = "Which Process, Which Port, Which Connection"
toc = true

+++
* String search in the binary
* `netstat`
* `lsof`

***

# netstat

```
root@rockrobo:/tmp# netstat -anp
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 127.0.0.1:54322         0.0.0.0:*               LISTEN      991/miio_client 
tcp        0      0 127.0.0.1:54323         0.0.0.0:*               LISTEN      991/miio_client 
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1673/sshd       
tcp        0      0 127.0.0.1:55551         0.0.0.0:*               LISTEN      1000/rriot_tuya 
tcp        0      0 0.0.0.0:6668            0.0.0.0:*               LISTEN      1000/rriot_tuya 
tcp        0      0 127.0.0.1:54322         127.0.0.1:50445         ESTABLISHED 991/miio_client 
tcp        0      0 127.0.0.1:54322         127.0.0.1:50455         ESTABLISHED 991/miio_client 
tcp        0      0 127.0.0.1:55551         127.0.0.1:38227         ESTABLISHED 1000/rriot_tuya 
tcp        0      0 127.0.0.1:50455         127.0.0.1:54322         ESTABLISHED 1518/miio_recv_line
tcp        0    440 10.147.20.251:22        10.147.20.87:16983      ESTABLISHED 9819/1          
tcp        0      0 192.168.2.206:57460     3.122.217.21:8883       ESTABLISHED 1000/rriot_tuya 
tcp        0      1 192.168.2.206:59924     110.43.0.83:80          LAST_ACK    -               
tcp        0      0 127.0.0.1:50445         127.0.0.1:54322         ESTABLISHED 985/AppProxy    
tcp        0      0 127.0.0.1:38227         127.0.0.1:55551         ESTABLISHED 985/AppProxy    
tcp6       0      0 :::22                   :::*                    LISTEN      1673/sshd       
udp        0      0 192.168.2.206:45950     0.0.0.0:*                           1000/rriot_tuya 
udp        0      0 0.0.0.0:36559           0.0.0.0:*                           1624/dhclient   
udp        0      0 0.0.0.0:54321           0.0.0.0:*                           991/miio_client 
udp        0      0 0.0.0.0:68              0.0.0.0:*                           1624/dhclient   
udp6       0      0 :::52520                :::*                                1624/dhclient   
Active UNIX domain sockets (servers and established)
Proto RefCnt Flags       Type       State         I-Node   PID/Program name    Path
unix  2      [ ACC ]     STREAM     LISTENING     2159     1/init              @/com/ubuntu/upstart
unix  2      [ ]         DGRAM                    5711     1444/wpa_supplicant /var/run/wpa_supplicant/wlan0
unix  5      [ ]         DGRAM                    1690     512/rsyslogd        /dev/log
unix  9      [ ]         DGRAM                    5533     825/rrlogd          /var/run/rrlogd
unix  2      [ ACC ]     SEQPACKET  LISTENING     2256     233/systemd-udevd   /run/udev/control
unix  2      [ ]         DGRAM                    28943    9819/1              
unix  2      [ ]         DGRAM                    10379    764/WatchDoge       
unix  2      [ ]         DGRAM                    10322    1624/dhclient       
unix  2      [ ]         DGRAM                    2874     985/AppProxy        
unix  2      [ ]         DGRAM                    5050     1000/rriot_tuya     
unix  2      [ ]         DGRAM                    5048     987/wlanmgr         
unix  2      [ ]         DGRAM                    2867     982/RoboController  
unix  2      [ ]         DGRAM                    5037     882/rr_loader       
unix  2      [ ]         DGRAM                    5535     825/rrlogd          
unix  2      [ ]         DGRAM                    2569     723/haveged         
unix  3      [ ]         STREAM     CONNECTED     5429     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     5428     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     4426     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     4425     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     4424     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     4423     424/adbd            
unix  3      [ ]         STREAM     CONNECTED     1631     1/init              @/com/ubuntu/upstart
unix  3      [ ]         STREAM     CONNECTED     4419     783/upstart-file-br 
unix  3      [ ]         STREAM     CONNECTED     2434     1/init              @/com/ubuntu/upstart
unix  3      [ ]         STREAM     CONNECTED     4382     787/upstart-socket- 
unix  3      [ ]         DGRAM                    1323     233/systemd-udevd   
unix  3      [ ]         DGRAM                    1322     233/systemd-udevd   
unix  3      [ ]         STREAM     CONNECTED     2245     1/init              @/com/ubuntu/upstart
unix  3      [ ]         STREAM     CONNECTED     1316     228/upstart-udev-br 
```

* `192.168.2.206` <-- device

***

# lsof

```
root@rockrobo:~# lsof -nPi
COMMAND    PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
AppProxy   983 root   34u  IPv4   7879      0t0  TCP 127.0.0.1:37830->127.0.0.1:54322 (ESTABLISHED)
AppProxy   983 root   35u  IPv4   7880      0t0  TCP 127.0.0.1:59387->127.0.0.1:55551 (ESTABLISHED)
miio_clie  990 root    8u  IPv4   2741      0t0  UDP *:54321 
miio_clie  990 root   10u  IPv4   2742      0t0  TCP 127.0.0.1:54322 (LISTEN)
miio_clie  990 root   12u  IPv4   2743      0t0  TCP 127.0.0.1:54323 (LISTEN)
miio_clie  990 root   17u  IPv4   4841      0t0  TCP 127.0.0.1:54322->127.0.0.1:37830 (ESTABLISHED)
miio_clie  990 root   19u  IPv4   9342      0t0  TCP 127.0.0.1:54322->127.0.0.1:37840 (ESTABLISHED)
rriot_tuy  997 root   15u  IPv4   2751      0t0  TCP 127.0.0.1:55551 (LISTEN)
rriot_tuy  997 root   18u  IPv4   4843      0t0  TCP 127.0.0.1:55551->127.0.0.1:59387 (ESTABLISHED)
rriot_tuy  997 root   19u  IPv4   9428      0t0  TCP 192.168.2.206:49788->3.122.217.21:8883 (ESTABLISHED)
rriot_tuy  997 root   20u  IPv4   9474      0t0  TCP *:6668 (LISTEN)
rriot_tuy  997 root   21u  IPv4  10242      0t0  UDP 192.168.2.206:45895 
miio_recv 1492 root    8u  IPv4   4962      0t0  TCP 127.0.0.1:37840->127.0.0.1:54322 (ESTABLISHED)
dhclient  1611 root   20u  IPv4   8343      0t0  UDP *:39190 
dhclient  1611 root   21u  IPv6   8344      0t0  UDP *:55551 
dhclient  1611 root   23u  IPv4   8359      0t0  UDP *:68 
sshd      1668 root    3u  IPv4   8136      0t0  TCP *:22 (LISTEN)
sshd      1668 root    4u  IPv6   8138      0t0  TCP *:22 (LISTEN)
sshd      4533 root    3u  IPv4  14828      0t0  TCP 10.147.20.251:22->10.147.20.87:1422 (ESTABLISHED)
```