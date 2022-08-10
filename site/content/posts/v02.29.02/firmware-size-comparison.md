+++
categories = ["v02.29.02"]
date = 2022-07-24T16:50:28Z
description = ""
series = []
tags = []
title = "Firmware size comparison (v02.29.02 to v01.15.58)"
toc = true

+++
![](/uploads/20220724-snipaste_2022-07-25_02-50-06.jpg)

```
> find v01.15.58 -type f | wc -l
10680
> du -sh v01.15.58
242M    v01.15.58

###

> find v02.29.02 -type f | wc -l
1976
> du -sh v02.29.02
98M     v02.29.02
```