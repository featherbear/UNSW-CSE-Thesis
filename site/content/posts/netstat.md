+++
categories = []
date = 2022-05-01T16:11:11Z
description = ""
series = []
tags = []
title = "netstat"
toc = true

+++
On idle

    root@rockrobo:~# netstat -nltp
    Active Internet connections (only servers)
    Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
    tcp        0      0 127.0.0.1:54322         0.0.0.0:*               LISTEN      991/miio_client 
    tcp        0      0 127.0.0.1:54323         0.0.0.0:*               LISTEN      991/miio_client 
    tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      1644/sshd       
    tcp        0      0 127.0.0.1:55551         0.0.0.0:*               LISTEN      998/rriot_tuya  
    tcp        0      0 0.0.0.0:6668            0.0.0.0:*               LISTEN      998/rriot_tuya  
    tcp6       0      0 :::22                   :::*                    LISTEN      1644/sshd       