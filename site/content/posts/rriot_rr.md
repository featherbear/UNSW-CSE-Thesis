+++
categories = []
date = 2022-07-24T14:45:37Z
description = "The binary that's not being used"
series = []
tags = []
title = "rriot_rr"
toc = true

+++
> The newer firmwares have a `rriot_rr` binary

***

![](/uploads/20220724-snipaste_2022-07-25_00-45-55.jpg)

![](/uploads/20220724-snipaste_2022-07-25_00-54-46.jpg)

Check for the existence of `/dev/shm/.migrate_to_rriot` then migrate

# References

* rriot_tuya
* rriot_rr
* AppProxy

# Strings

`/dev/shm/.migrate_to_rriot`
`https://api-%s.roborock.com`

***

> Not used for our model, though it's also not very well written..

So many calls to time().. just store the variable somewhere!

**![](/uploads/20220724-snipaste_2022-07-25_00-51-07.jpg)**