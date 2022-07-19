+++
categories = []
date = 2022-07-19T16:30:27Z
description = ""
series = []
tags = []
title = "OTA Updates blocked as of late-2019"
toc = true

+++
The device that I had was manufactured in June 2020 (06/2020).  
Unfortunately this means that MiIO OTA updates are blocked.

If you ever wanted some older stock image... [https://vacuumz.info/download/s6/stock/](https://vacuumz.info/download/s6/stock/ "https://vacuumz.info/download/s6/stock/")

* 
* [https://github.com/featherbear/zvldz-vacuum/blob/master/custom-script/custom_enable_local_ota.sh](https://github.com/featherbear/zvldz-vacuum/blob/master/custom-script/custom_enable_local_ota.sh "https://github.com/featherbear/zvldz-vacuum/blob/master/custom-script/custom_enable_local_ota.sh")

# MiIO Client 3.5.4

Looks like the miIO client was patched - <s>and a set of commands were removed; though remnants existed here and there</s> they added code to handle and drop an OTA update

![](/uploads/20220719-snipaste_2022-07-20_03-23-53.jpg)

![](/uploads/20220719-snipaste_2022-07-20_03-11-19.png)  
Instead of being handled by the broadcast routine (yellow), it just prints out "Recv OTA CMD!!!" and then that's it...

> Below: Replies to the request with nothing in the reply

![](/uploads/20220719-snipaste_2022-07-20_02-33-16.jpg)

    miio client - MIIO OT protocol implementation
    Copyright (C) 2015-2016 Xiaomi
    Author: Yin Kangkai <yinkangkai@xiaomi.com>
    Version: miio-client 3.5.4
    Build time: 12:34:47 Aug  1 2019

## Old Version - 3.3.9

![](/uploads/20220719-snipaste_2022-07-20_03-04-38.png)

> FYI - I renamed the subroutine `broadcast`

When the handler parses the packet, after going through the other handlers, it then passes the message to be broadcasted (locally)

![](/uploads/20220719-snipaste_2022-07-20_02-55-45.jpg)

The AppProxy should reply with something (here it seems it's because it knows it's not connected to the internet?)

![](/uploads/20220719-snipaste_2022-07-20_02-54-06.jpg)

    miio client - MIIO OT protocol implementation
    Copyright (C) 2015-2016 Xiaomi
    Author: Yin Kangkai <yinkangkai@xiaomi.com>
    Version: miio-client 3.3.9
    Build time: 18:05:32 Jun 20 2017
    
    Usage: ./c
            [-D --daemonize]
            [-H --host=<host>] enture mutual exclusion with -C,you can only use -C or -H at the same time
            [-p --port=<port>]
            [-i --interval=<int> ms] set sync interval of _otc.info
            [-l --loglevel=<level>] set loglevel (0-4), bigger = more verbose
            [-L --logfile=file] output log into file instead of stdout
            [-d --datadir=<path>] set miio data dir path, ending with '/'
            [-e --enckey] key(s) are encrypted saved
            [-E --encdata] data communication are encrypted
            [-C --dcountry] set the country domain where the device locates in,ignore if it in China
            [-h --help]

***

> Also confirmed by Dennis - [date >= 2019-11 (ver >= 2008)](https://twitter.com/dgi_DE/status/1273742178783805441)

![](/uploads/20220719-snipaste_2022-07-20_02-31-53.jpg)

***

# Patchy Patch 🤷‍♂️

![](/uploads/20220719-snipaste_2022-07-20_03-17-39.jpg)

![](/uploads/20220719-snipaste_2022-07-20_03-19-53.jpg)

![](/uploads/20220719-snipaste_2022-07-20_03-18-51.jpg)

![](/uploads/20220719-snipaste_2022-07-20_03-21-11.jpg)

![](/uploads/20220719-snipaste_2022-07-20_03-22-25.jpg)