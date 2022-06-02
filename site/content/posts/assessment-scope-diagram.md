+++
categories = []
date = 2022-06-02T07:07:47Z
description = "Consolidating my focus"
series = []
tags = []
title = "Assessment Scope Diagram"
toc = true

+++
![](/uploads/20220602-assessment-scope-diagram.png)

# Nearby Devices

## Bluetooth Devices

Will check for interaction with Bluetooth devices (if any)

## Connected WiFi Network

### During Initialisation

Activity during pairing

### During Operation

Activity during general power-on and running operation

## Connected Wired Network

* Connectivity and activity assessment from/to a wired device on a network.
* Unlikely to see any data due to Ethernet switch behaviour

## Smartphone Application

> Not investigating the interaction between the smartphone application and the device

## Roborock S6

* Analysis of internal behaviour
* Analysis of interaction and capture of sensory data
  * e.g. mapping data, camera feed, microphone, location

# Xiaomi Cloud

> Will **not** be looking at internal cloud functions or cloud vulnerabilities

Requests transmitted to the cloud endpoint, and the responses received.

# Tuya Cloud

> Not investigating this network as my device was configured for Xiaomi's Cloud servers

# Internet

Overall network activity. Quantity, destination, time, duration, frequency