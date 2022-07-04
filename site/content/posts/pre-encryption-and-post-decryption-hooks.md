+++
categories = []
date = 2022-07-04T15:31:25Z
description = ""
series = []
tags = []
title = "Pre-Encryption and Post-Decryption Hooks"
toc = true

+++
Capturing and reading encrypted outbound network packets in transit is somewhat difficult, especially when there are asymmetric keys at work. Instead though... we could hook into the encryption routine, and dump the message somewhere to read later.

When it comes to decryption, we can just wait for the decryption to finish, and then dump the decrypted message somewhere as well!

***

Some time soon I'll have figure out how to actually log these messages. Here are some thoughts

* Have the processes write to their own file, which we can then transfer/extract later
* Or... have some sort of broker process that receives messages from different processes, and then centralises how it writes.
  * Will need some IPC (or other magic) here
* Or... write the packet out to the network via UDP
  * Use UDP because there's no handshake
  * We can also log the traffic in our network packet capture