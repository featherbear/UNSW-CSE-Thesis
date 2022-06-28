+++
categories = []
date = 2022-06-28T17:07:59Z
description = ""
series = []
tags = []
title = "Files in device that are missing from base"
toc = true

+++
# Of Interest

    /usr/bin/adbd 110b25922d0cf121deeb5b72342b93c8
    /usr/bin/bootring bf8f440f6fe7e1cbbdaafa491442a4a9
    /usr/bin/logrotate.sh 8129d3de3d967e2887447409ee84fb16 
    /usr/bin/peekfd 8d2f2dbb777b852b59b5b53038925b5c
    /usr/bin/qemu-arm-static 4a183d05ce4c2ade1732e4ab937acb1f 
    /usr/bin/rr_try_mount aef34ac426e24ecfa7090104660289bf 
    /usr/bin/rsync 512ba4abb7b0202f6574864a3cd24617 
    /usr/bin/scp 354d5bef5c9f5d02f316d6840351a0cd 
    /usr/sbin/nfnl_osf 0f8c4e6983614b80a1299a0fd220047e 
    /usr/sbin/tcpdump 50f2ed1f9707873bbd13bde776c9cff7 
    /usr/sbin/safe_finger 7d659ca42ea347335454480da9f070d2 

# Low Initial Interest

    /bin/fuser 73b744ea98518b3b238e7a17d9356a50
    /sbin/crda c6ccce7de9420eda06cf411bb31eeca1 
    /sbin/dhcpcd-bin 36f27f551c9b0710459c5b7261cb053a
    /sbin/dhcpcd3 2d6a61a6873a6bd2a2475f66a0564d06
    /sbin/fatlabel 4c795c3f37c9b895afcd3cb862e85346
    /sbin/fsck.fat 725bc854ed410d2bf5a0c43b07bc4651
    /sbin/iptables-apply bfa7ecc3aac4cb208f32c19e6503a082
    /sbin/iw 9b625d8eee80b5dd49843e86f0cbe51d 
    /sbin/mkfs.fat 323b9a49df09450240fc2b512f8cd5bb
    /sbin/regdbdump b594b7a4f1507a0a8353b700da0a99ee
    /sbin/wpa_action 51c21d89182521c79453b20f99125fa1
    /sbin/wpa_cli 86707e0c9d5f006a2b26b5ffc0dbea59
    /sbin/wpa_supplicant 37ee1c9ca2d563ae28892abee4601a39
    /sbin/xtables-multi d49bad0a9e3f098cc3913a8ee75fd73d
    /usr/bin/ccguess 438e1519d06cca1a91c93a83450213aa
    /usr/bin/ccrypt dc2adb7a044a7062ab2d4740dfc72cd7
    /usr/bin/create_ap fa856af527e32d1822784b1cae2dddde
    /usr/bin/c_rehash c73fa0868ce1f8cb607535e9b822895e
    /usr/bin/killall b3ef77ba9aa62c011d24cf03208ee922
    /usr/bin/lsof ca39db5daa1e61276680c3f12c51791a
    /usr/bin/openssl 97fe9fe716f6246a21c20b9b82138c0f
    /usr/bin/pigz bee97da5b9ee965590af32e10d5933c3
    /usr/bin/pmount 47bc39282350d98ee4fa150faba31491 
    /usr/bin/prtstat f92a8a0889e3894e3566caafb27b453a 
    /usr/bin/pstree e90ceb7b3b9280c3dfd1562b9c931850 
    /usr/bin/pumount 44662f72b22fc7a847faf150c435e6df 
    /usr/bin/sftp 935094af6142d4abccb2e70c6301b8f1 
    /usr/bin/ssh e26376e8c766369c0f55b14b70be0a3c 
    /usr/bin/ssh-add 7bb444cd561441b96c0683917bfafec9 
    /usr/bin/ssh-agent ee747c3e15201d67798e9c6925722cd4 
    /usr/bin/ssh-argv0 bb40f6cb60ce75974b8738bc02b30809 
    /usr/bin/ssh-copy-id 5ca9ed4378459b01a795289a54323940 
    /usr/bin/ssh-keygen 610488105a3891731b73a4b03c645296 
    /usr/bin/ssh-keyscan 900e70e7fdb859ec107709e49ccdef64 
    /usr/bin/unpigz bee97da5b9ee965590af32e10d5933c3 
    /usr/bin/wpa_passphrase f41559f5faa8e7d35fa1285b65351a61 
    /usr/bin/xauth d03d106b3bfee2fdff090eb45173c165 
    /usr/sbin/dnsmasq 4036b0dbc14e55edef2a5ff3c6fe8569 
    /usr/sbin/haveged 2ce982d29ee5c3d8071f82a8a882cfee 
    /usr/sbin/hostapd 666417d2dc29cf52915bb2a873cf09a3 
    /usr/sbin/hostapd_cli 19f12aef82030e3f79fd6fc2fde1ede5 
    /usr/sbin/iptables-apply bfa7ecc3aac4cb208f32c19e6503a082 
    /usr/sbin/sshd 67a24424efeabc897171e5f47c85fac3 
    /usr/sbin/tcpd cb12f7cb8d6faa876f0f505527f4a82a 
    /usr/sbin/tcpdchk 4a63dcc874c4313c026ba667d5dea56b 
    /usr/sbin/tcpdmatch e8998ab020cf0dbbf48aefe10ddae8cc 
    /usr/sbin/tcpdump 50f2ed1f9707873bbd13bde776c9cff7 
    /usr/sbin/try-from ea1bd16a749775d1da19277ffbbb665f 
    /usr/sbin/update-ca-certificates 33459711bf0dd5b5a92754e9702a943d

***

# /usr/bin/logrotate.sh

* `/etc/init/logrotate.conf`
  * init script to launch
* Makes backups of `/var/log/syslog`, `/var/log/kern.log` when larger than 5242880 (bytes?)
* Makes backups of `/var/log/upstart/*` if any file is larger than 1048576 (bytes?)
* Checks every 5s
* Will call
  * `/usr/sbin/logrotate /etc/logrotate.conf`
    * `/var/log/wtmp`
    * `/var/log/btmp`
    * `/var/log/*`
      * ish
  * or `/usr/sbin/logrotate -f /etc/logrotate.d/upstart`