+++
categories = ["v02.29.02"]
date = 2022-07-11T15:51:06Z
description = ""
series = []
tags = []
title = "/opt/rockrobo/rrlog/rrlogd (v02.29.02)"
toc = true

+++
![](/uploads/20220711-snipaste_2022-07-12_01-50-51.jpg)

The updated `rrlogd` now runs iptables to drop SSH on the false branch of the version check.

If ver > 1 (e.g. 2 or 3) - allow  
Else drop

> [See old version](../rrlogd/)