+++
categories = []
date = 2022-07-11T14:28:22Z
description = ""
series = []
tags = []
title = "/sbin/rr_login"
toc = true

+++
![](/uploads/20220711-snipaste_2022-07-12_00-28-13.jpg)

![](/uploads/20220711-snipaste_2022-07-12_00-36-21.jpg)

***

Tries to access `/mnt/default/shadow` and `/mnt/default/shadow.sign` both which do not exist.  
Probably because old version?

***

Since those files don't exist on my device... I'll never get UART shell access

![](/uploads/20220719-snipaste_2022-07-19_22-24-51.jpg)

![](/uploads/20220719-snipaste_2022-07-19_22-51-42.jpg)

***

Also the `libuart_api.so` file has the public key in a funky format

![](/uploads/20220719-snipaste_2022-07-19_22-55-52.jpg)