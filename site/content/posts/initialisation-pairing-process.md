+++
categories = []
date = 2022-05-30T07:33:58Z
description = "Brief look at device pairing"
series = []
tags = []
title = "Initialisation / Pairing Process"
toc = true

+++
> Beyond the scope for this thesis, but interesting to see nonetheless

![](/uploads/Snipaste_2022-05-02_01-14-22.jpg)

During pairing (smartphone application to the device), the application will broadcast some UDP packets to port `55559`, which the robot listens to and stores.

***

Could be improved by means of some sort of asymmetric encryption challenge.  
RSA 1024 / ECB / PKCS1 + AES / CBC / PKCS7

[https://k4czp3r.xyz/reverse-engineering/tp-link/tapo/2020/10/15/reverse-engineering-tp-link-tapo.html](https://k4czp3r.xyz/reverse-engineering/tp-link/tapo/2020/10/15/reverse-engineering-tp-link-tapo.html "https://k4czp3r.xyz/reverse-engineering/tp-link/tapo/2020/10/15/reverse-engineering-tp-link-tapo.html")