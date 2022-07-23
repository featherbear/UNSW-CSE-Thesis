+++
categories = []
date = 2022-07-19T11:16:11Z
description = "Unless the program lets you."
series = []
tags = []
title = "PSA Don't combine program arguments"
toc = true

+++
![](/uploads/20220719-snipaste_2022-07-19_21-16-02.jpg)

* `dropbear -p 29 -FE`
  * Will not engage the -`E` flag
  * Also doesn't yell at us angrily


* `dropbear -p 29 -F -E`
  * Works

***

# Why

![](/uploads/20220719-snipaste_2022-07-19_21-17-35.jpg)

> Some programs use basic command line arg parsers, i.e. this instance of `dropbear`