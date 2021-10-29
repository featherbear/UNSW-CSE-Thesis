+++
categories = []
date = 2021-10-29T13:57:53Z
description = "dump"
series = []
tags = []
title = "USB Port"
toc = true

+++
# Device ID

`Bus 001 Device 004: ID 1f3a:1001 Allwinner Technology Rockrobo ruby`

# dmesg output

    [5991703.724675] usb 1-2: new high-speed USB device number 4 using xhci_hcd
    [5991703.881398] usb 1-2: New USB device found, idVendor=1f3a, idProduct=1001, bcdDevice= 2.33
    [5991703.881400] usb 1-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
    [5991703.881402] usb 1-2: Product: Rockrobo ruby
    [5991703.881403] usb 1-2: Manufacturer: Rockrobo USB Developer
    [5991703.881404] usb 1-2: SerialNumber: 8a80ab8936d76c118000

    [5991703.724675] usb 1-2: new high-speed USB device number 4 using xhci_hcd
    [5991703.881398] usb 1-2: New USB device found, idVendor=1f3a, idProduct=1001, bcdDevice= 2.33
    [5991703.881400] usb 1-2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
    [5991703.881402] usb 1-2: Product: Rockrobo ruby
    [5991703.881403] usb 1-2: Manufacturer: Rockrobo USB Developer
    [5991703.881404] usb 1-2: SerialNumber: 8a80ab8936d76c118000
    [5992597.924031] usb 1-2: USB disconnect, device number 4

# lsusb output

    Bus 001 Device 004: ID 1f3a:1001 Allwinner Technology Rockrobo ruby
    Device Descriptor:
      bLength                18
      bDescriptorType         1
      bcdUSB               2.00
      bDeviceClass            0 
      bDeviceSubClass         0 
      bDeviceProtocol         0 
      bMaxPacketSize0        64
      idVendor           0x1f3a Allwinner Technology
      idProduct          0x1001 
      bcdDevice            2.33
      iManufacturer           1 Rockrobo USB Developer
      iProduct                2 Rockrobo ruby
      iSerial                 3 8a80ab8936d76c118000
      bNumConfigurations      1
      Configuration Descriptor:
        bLength                 9
        bDescriptorType         2
        wTotalLength       0x0020
        bNumInterfaces          1
        bConfigurationValue     1
        iConfiguration          0 
        bmAttributes         0xc0
          Self Powered
        MaxPower              224mA
        Interface Descriptor:
          bLength                 9
          bDescriptorType         4
          bInterfaceNumber        0
          bAlternateSetting       0
          bNumEndpoints           2
          bInterfaceClass       255 Vendor Specific Class
          bInterfaceSubClass     66 
          bInterfaceProtocol      1 
          iInterface              0 
          Endpoint Descriptor:
            bLength                 7
            bDescriptorType         5
            bEndpointAddress     0x81  EP 1 IN
            bmAttributes            2
              Transfer Type            Bulk
              Synch Type               None
              Usage Type               Data
            wMaxPacketSize     0x0200  1x 512 bytes
            bInterval               0
          Endpoint Descriptor:
            bLength                 7
            bDescriptorType         5
            bEndpointAddress     0x01  EP 1 OUT
            bmAttributes            2
              Transfer Type            Bulk
              Synch Type               None
              Usage Type               Data
            wMaxPacketSize     0x0200  1x 512 bytes
            bInterval               0
    Device Qualifier (for other device speed):
      bLength                10
      bDescriptorType         6
      bcdUSB               2.00
      bDeviceClass            0 
      bDeviceSubClass         0 
      bDeviceProtocol         0 
      bMaxPacketSize0        64
      bNumConfigurations      1
    can't get debug descriptor: Resource temporarily unavailable
    Device Status:     0x0001
      Self Powered

***

http://www.robotreviews.com/chat/viewtopic.php?f=6&t=19479&sid=6e9b84c899e07bceedbcadef7a16a110&start=220