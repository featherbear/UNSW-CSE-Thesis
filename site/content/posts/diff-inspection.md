+++
categories = []
date = 2022-06-28T16:28:46Z
description = ""
series = []
tags = []
title = "Diff Inspection"
toc = true

+++
See [File System Comparison](../file-system-comparison)

# /usr/sbin/ntpdate

ntpdate is a program for retrieving the date and time from NTP servers

> device md5: 006a0967281c9a061362086b638a21a4

    28 Jun 16:28:29 ntpdate[7790]: ntpdate 4.2.6p5@1.2349 Tue Jun 21 08:19:00 UTC 2016 (6)
    28 Jun 16:28:29 ntpdate[7790]: no servers can be used, exiting
    
> base md5: 122890cbbaff8ca98f9664add64492bd

    ntpdate 4.2.6p5@1.2349-o Mon Apr 13 13:42:56 UTC 2015 (1)

---
```
ntpdate 4.2.6p5@1.2349-o Mon Apr 13 13:42:56 UTC 2015 (1)
```

This version fixed [`CVE-2009-3563`](https://doc.ntp.org/support/securitynotice/ntpbug1331/)  

> Possible: https://nvd.nist.gov/vuln/detail/CVE-2014-9295  
> Multiple buffer overflow flaws were discovered in ntpd's crypto_recv(), ctl_putdata(), and configure() functions. A remote attacker could use either of these flaws to send a specially crafted request packet that could crash ntpd or, potentially, execute arbitrary code with the privileges of the ntp user. Note: the crypto_recv() flaw requires non default configurations to be active, while the ctl_putdata() flaw, by default, can only be exploited via local attackers, and the configure() flaw requires additional authentication to exploit.

---

