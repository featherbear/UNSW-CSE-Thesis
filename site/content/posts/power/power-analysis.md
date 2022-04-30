+++
categories = []
date = 2022-04-30T16:08:29Z
description = ""
series = []
tags = []
title = "Power Analysis"
toc = true

+++
# Charger pinouts

![](/uploads/20220501_051651.jpg)

---


Charger output - 4.27V (open circuit)

At 3.7kΩ load, charger outputs \~20.4V

***

Device connected to charger without battery - turns off after a bit  
`haveged: haveged Stopping due to signal 15`

signal 15 -> SIGTERM

20\.4V, peak 140mA

***

Device connected to charger with battery  
20\.04V, idle 41.1mA

![](/uploads/20220501_031644.jpg)

Some funky power signal

![](/uploads/20220501_031428.jpg)  
![](/uploads/20220501_031636.jpg)

***

[https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-4-wire-power/](https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-4-wire-power/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-4-wire-power/")

[https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-2-wire-power/](https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-2-wire-power/ "https://featherbear.cc/UNSW-CSE-Thesis/posts/serial-dump-during-2-wire-power/")

---

![](/uploads/20220501_020251.jpg)