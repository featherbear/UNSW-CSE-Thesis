+++
categories = []
date = 2022-05-01T09:32:39Z
description = ""
series = []
tags = []
title = "htop during factory"
toc = true

+++
        1 root       20   0  3680  2232  1108 S  0.0  0.4  0:05.27 /sbin/init                                                                                                                                                                  
      228 root       20   0  2092   536   380 S  0.0  0.1  0:00.50 upstart-udev-bridge --daemon
      233 root       20   0  9104  1264   776 S  0.0  0.2  0:00.24 /lib/systemd/systemd-udevd --daemon
      418 root       20   0 27400   244   204 S  0.0  0.0  0:00.01 /usr/bin/adbd
      431 root       20   0 27400   244   204 S  0.0  0.0  0:00.00 /usr/bin/adbd
      432 root       20   0 27400   244   204 S  0.0  0.0  0:00.00 /usr/bin/adbd
      433 root       20   0 27400   244   204 S  0.0  0.0  0:00.00 /usr/bin/adbd
      509 syslog     20   0 30472   964   672 S  0.0  0.2  0:00.22 rsyslogd
      519 root       20   0  1804   708   592 S  0.0  0.1  0:00.01 /sbin/getty -8 38400 tty4
      522 root       20   0  1804   708   592 S  0.0  0.1  0:00.01 /sbin/getty -8 38400 tty5
      527 root       20   0  2388  1196   976 S  0.0  0.2  0:04.29 /bin/bash /usr/bin/logrotate.sh
      536 root       20   0  1804   708   592 S  0.0  0.1  0:00.00 /sbin/getty -8 38400 tty2
      538 root       20   0  1804   708   592 S  0.0  0.1  0:00.01 /sbin/getty -8 38400 tty3
      550 root       20   0  1804   708   592 S  0.0  0.1  0:00.01 /sbin/getty -8 38400 tty6
      629 root       20   0  5876  2132  1652 S  0.0  0.4  0:00.07 /usr/sbin/sshd -D
      644 syslog     20   0 30472   964   672 S  0.0  0.2  0:00.01 rsyslogd
      645 syslog     20   0 30472   964   672 S  0.0  0.2  0:00.06 rsyslogd
      646 syslog     20   0 30472   964   672 S  0.0  0.2  0:00.13 rsyslogd
      661 root       20   0  2252   732   556 S  0.0  0.1  0:00.00 cron
      723 root       20   0  4448  3392   316 S  0.0  0.7  0:02.37 /usr/sbin/haveged -w 1024
      728 root        0 -20 13996  2592  1980 S  2.0  0.5  0:23.08 WatchDoge /opt/rockrobo/watchdog
      733 root       20   0     0     0     0 Z  0.0  0.0  0:00.00 sysctl
      744 root       20   0 13996  2592  1980 S  0.0  0.5  0:00.00 WatchDoge /opt/rockrobo/watchdog
      752 root       20   0  1804   708   592 S  0.0  0.1  0:00.00 /sbin/getty -8 38400 tty1
      754 root       20   0  3312  1308   920 S  0.0  0.3  0:00.27 /bin/login --
      784 root       20   0 13996  2592  1980 S  0.0  0.5  0:00.01 WatchDoge /opt/rockrobo/watchdog
      786 root       20   0  2216   612   208 S  0.0  0.1  0:00.03 upstart-file-bridge --daemon
      791 root       20   0  2468  1004   260 S  0.0  0.2  0:00.04 upstart-socket-bridge --daemon
      809 root        0 -20 13996  2592  1980 S  0.0  0.5  0:00.03 WatchDoge /opt/rockrobo/watchdog
      812 root        2 -18 23772  5096  4012 S  0.0  1.0  0:03.51 rrlogd /opt/rockrobo/rrlog/rrlog.conf
      814 root        0 -20 23772  5096  4012 S  0.0  1.0  0:00.00 rrlogd /opt/rockrobo/rrlog/rrlog.conf
      830 root        0 -20 23772  5096  4012 S  0.0  1.0  0:00.01 rrlogd /opt/rockrobo/rrlog/rrlog.conf
      831 root        0 -20 23772  5096  4012 S  0.0  1.0  0:00.01 rrlogd /opt/rockrobo/rrlog/rrlog.conf
      843 root        0 -20  2372  1244  1036 S  0.0  0.2  0:00.09 /bin/bash /opt/rockrobo/rrlog/toprotation.sh
      844 root        0 -20  2556  1096   776 S  0.0  0.2  0:04.00 top -H -d 15 -b
      845 root        0 -20  2544  1064   776 S  2.0  0.2  0:07.07 top -d 5 -b
      881 root        0 -20  119M 35360 10192 S  1.0  6.9  0:21.03 rr_loader -d
      882 root        0 -20  119M 35360 10192 S  1.0  6.9  0:12.00 rr_loader -d
      883 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.56 rr_loader -d
      884 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.01 rr_loader -d
      886 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      888 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      889 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.48 rr_loader -d
      890 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.05 rr_loader -d
      898 root        0 -20  119M 35360 10192 S  0.0  6.9  0:01.09 rr_loader -d
      900 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      901 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      902 root        0 -20  119M 35360 10192 S  0.0  6.9  0:02.55 rr_loader -d
      903 root        0 -20  119M 35360 10192 S  0.0  6.9  0:02.06 rr_loader -d
      904 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.51 rr_loader -d
      908 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      909 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.49 rr_loader -d
      914 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      917 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.08 rr_loader -d
      921 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.03 rr_loader -d
      922 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      923 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      924 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      925 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.50 rr_loader -d
      949 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.19 rr_loader -d
      954 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.01 rr_loader -d
      955 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.00 rr_loader -d
      973 root        0 -20 20704  3296  2720 S  0.0  0.6  0:01.15 RoboController
      976 root        0 -20 25856  8340  3580 S  0.0  1.6  0:01.24 AppProxy
      978 root        0 -20  9476  1584  1188 S  0.0  0.3  0:00.62 wlanmgr
      982 root        0 -20  1696   724   608 S  0.0  0.1  0:00.86 miio_client -d /mnt/data/miio -l 2
      987 root        0 -20 13988  1192   444 S  0.0  0.2  0:00.39 rriot_tuya -d
      989 root        0 -20  9476  1584  1188 S  0.0  0.3  0:00.00 wlanmgr
      990 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.10 RoboController
      991 root        0 -20 13988  1192   444 S  0.0  0.2  0:00.10 rriot_tuya -d
      992 root        0 -20 13988  1192   444 S  0.0  0.2  0:00.28 rriot_tuya -d
      994 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.69 RoboController
      995 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.15 RoboController
      996 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.00 RoboController
     1000 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.13 AppProxy
     1012 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.17 AppProxy
     1013 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.02 AppProxy
     1014 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.00 AppProxy
     1015 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.69 AppProxy
     1016 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.02 AppProxy
     1018 root        0 -20 25856  8340  3580 S  0.0  1.6  0:00.02 AppProxy
     1026 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.00 RoboController
     1027 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.00 RoboController
     1028 root        0 -20 20704  3296  2720 S  0.0  0.6  0:00.00 RoboController
     1030 root        0 -20  119M 35360 10192 S  0.0  6.9  0:00.02 rr_loader -d
     1275 root        0 -20  9476  1584  1188 S  0.0  0.3  0:00.00 wlanmgr
     1276 root        0 -20  9476  1584  1188 S  0.0  0.3  0:00.19 wlanmgr
     1285 root        0 -20  2568  1404  1004 S  0.0  0.3  0:00.06 /bin/bash /opt/rockrobo/miio/miio_client_helper_nomqtt.sh
     1325 root        0 -20  1180   228   184 S  0.0  0.0  0:00.00 miio_recv_line
     1349 root        0 -20  2724  1644  1080 S  0.0  0.3  0:00.14 /bin/bash /usr/bin/create_ap -c 11 -n wlan0 -g 192.168.8.1 roborock-vacuum-s6_miap24C4
     1404 nobody      0 -20  2568   664   468 S  0.0  0.1  0:00.72 dnsmasq -C /tmp/create_ap.wlan0.conf.arN3AgFf/dnsmasq.conf -x /tmp/create_ap.wlan0.conf.arN3AgFf/dnsmasq.pid
     1405 root        0 -20  2724   964   400 S  0.0  0.2  0:01.59 /bin/bash /usr/bin/create_ap -c 11 -n wlan0 -g 192.168.8.1 roborock-vacuum-s6_miap24C4
     1406 root        0 -20  4364  1692  1384 S  0.0  0.3  0:00.04 hostapd /tmp/create_ap.wlan0.conf.arN3AgFf/hostapd.conf                                                                                                                     
     1473 root        0 -20 13996  2592  1980 S  0.0  0.5  0:00.00 WatchDoge /opt/rockrobo/watchdog
     1474 root        0 -20 13996  2592  1980 S  1.0  0.5  0:21.89 WatchDoge /opt/rockrobo/watchdog
     1687 root       20   0  2480  1520  1192 S  0.0  0.3  0:00.21 -bash       
     3575 root       20   0  9292  2868  2196 S  0.0  0.6  0:00.34 sshd: root@notty
     3600 root       20   0  1644   680   552 S  0.0  0.1  0:00.05 /usr/lib/openssh/sftp-server
     9690 root       20   0  9292  2776  2092 S  0.0  0.5  0:01.91 sshd: root@pts/1
     9820 root       20   0  2496  1540  1196 S  0.0  0.3  0:00.22 -bash       