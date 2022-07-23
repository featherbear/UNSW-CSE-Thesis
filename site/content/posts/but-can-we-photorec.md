+++
categories = []
date = 2022-07-13T14:26:36Z
description = ""
series = []
tags = []
title = "But Can We Photorec?"
toc = true

+++
During a factory reset, `mmcblk0p7` gets flashed onto `mmcblk0p8` and `mmcblk0p9`, including writing over the unused bytes. Therefore we probably can't use recovery tools like `photorec` to extract data from these two system partitions..

# But what about our user data partition?

We could likely recover some contents from `mmcblk0p1`