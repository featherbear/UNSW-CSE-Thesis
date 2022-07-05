+++
categories = []
date = 2022-07-05T08:23:32Z
description = ""
series = []
tags = []
title = "/opt/rockrobo/rriot/rriot_tuya"
toc = true

+++
# Library Imports

* curl
* network
* mbedtls (PolarSSL)

# Strings

* /mnt/data/rriot/tuya_db
* /mnt/default/roborock/device.json
* `tuya_iot_impl_upload_file`
* https://%siot.roborock.com/fwapi/tuyakey
* rr_write_callback

# Notes

* Handles output
* Program is spawned by WatchDoge
  * Program doesn't have any stdout log destinations, so we can edit `/opt/rockrobo/watchdog/ProcessList.conf`
  * Modify: `rriot_tuya,setsid rriot_tuya >> /mnt/data/z5206677/rriot_tuya.log 2>&1&,0,3,0`

## MQTT connection

> TODO: See if this is logged anywhere, else we'll redirect it ourselves

    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:490\] MQTT Protocol URL:ms.tuyaeu.com Port:8883
    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:502\] TLS in not disable. disable mqtt time check
    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:413\] TLS Mode is NOT TLS_DISABLE:4 .set username = gwid
    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:413\] TLS Mode is NOT TLS_DISABLE:4 .set username = gwid
    \[01-01 18:12:15 TUYA Debug\]\[mqtt_client.c:206\] subcribe_topic:smart/device/in/bf7e9b4aacf4f733d8o3zz
    \[01-01 18:12:15 TUYA Debug\]\[mqtt_client.c:207\] client_id:bf7e9b4aacf4f733d8o3zz
    \[01-01 18:12:15 TUYA Debug\]\[mqtt_client.c:208\] user_name:bf7e9b4aacf4f733d8o3zz
    \[01-01 18:12:15 TUYA Debug\]\[mqtt_client.c:209\] passwd:595239d12a6bb9db
    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:542\] mqtt send topic:smart/device/out/bf7e9b4aacf4f733d8o3zz
    \[01-01 18:12:15 TUYA Debug\]\[mqc_app.c:544\] mqtt-media send topic:d/m/o/bf7e9b4aacf4f733d8o3zz