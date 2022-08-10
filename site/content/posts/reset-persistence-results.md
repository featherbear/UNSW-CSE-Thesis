+++
categories = []
date = 2022-07-11T16:01:09Z
description = ""
series = ["Persistence"]
tags = []
title = "Reset Persistence Results"
toc = true

+++
> Factory default restore will delete every single cleaning's log including every cleaning's duration, size and map. But the total duration, total times of cleaning and total size will be still kept there.
>
> Source: [How to reset Roborock to factory default? – Roborock Support Center](https://support.roborock.com/hc/en-us/articles/360035372632-How-to-reset-Roborock-to-factory-default-)

***

# Pre-Reset

> `find / -type d -exec sh -c "echo reset-{} > {}/z5206677.was.here.reset" \;`

***

# Reset Results

Note: Back on the old Linux device

    root@rockrobo:/# find / -type f -name "z5206677.was.here.reset"
    /mnt/reserve/rriot/z5206677.was.here.reset
    /mnt/reserve/z5206677.was.here.reset
    /mnt/reserve/lost+found/z5206677.was.here.reset