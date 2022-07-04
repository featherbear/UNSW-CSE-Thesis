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

---

# Binary Ninja

> We can compile C code in Binary Ninja (though we must override main... and I don't know if there's a way to keep the existing program body

Right click a function and then go `[Patch]` -> `[Compile C Source]`

```c
/* Send test to 10.251.252.253:28422 */
int main() {
  int sock = create_udp4_connection(IPV4_ADDR(10,251,252,253), 28422);
  char *buf = "test";
  send(sock, (void*) buf,  4, 0);
}
```

---

# Full Code

```c
#include <arpa/inet.h>
#include <stdio.h>
#include <string.h>
#include <sys/socket.h>
#include <unistd.h>

static int doIt();

int main(void) {
    return doIt();
}

static int doIt() {
    struct sockaddr_in server_addr;
    char client_message[] = "Hello";

    int socket_desc;
    socket_desc = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);

    if (socket_desc < 0) {
        printf("Error while creating socket\n");
        return -1;
    }

    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(28422);
    server_addr.sin_addr.s_addr = inet_addr("10.251.252.253");

    if (sendto(socket_desc, client_message, strlen(client_message), 0,
               (struct sockaddr*)&server_addr, sizeof server_addr) < 0) {
        printf("Unable to send message\n");
        return -1;
    }

    close(socket_desc);

    return 0;
}
```