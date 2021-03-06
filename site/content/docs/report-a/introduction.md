---
date: ""
description: ""
title: "1. Introduction"
toc: false
weight: 2
---

# Introduction

Consumer grade Internet of Things (IoT) devices have become widely adopted with continuously growing demand. With demands for such devices growing by 12% each year [@ResearchMarkets-2021], this AU$130B industry has cordially invited thousands of households to invest in smart devices such as light bulbs, fans, televisions and fridges. Giving the abundance and affordability of these products, IoT devices have become an integral part of many homes, where 4 in 5 consumers would be more inclined to choose a property over another if the former were to have such technologies [@RichBrown-2015].

Although convenient, these devices come with hidden costs and risks. Behind the seemingly 'simple', 'smart' and 'secure' product features that attract the general populus lies a hidden complex network of services and devices, where functionality is often obscured and private. Without the transparency of what data is being sent, and of where that data is being sent to, consumers inevitably pay for convenience with not only their money but with their privacy and security [@8939043].

Whilst manufacturers and vendors claim to be secure and/or confidential in how they treat **UGC** and **PII**, it lies evident from various incidents that we cannot completely trust such claims. From involuntary exposure of leaked Facebook user data [@LawrenceAbrams-2021], to rumours of corporations monetising user data without consent [@RhettJones-2017], there lies an equal need for consumers to understand the terms of service to which they agree to, but additionally for companies to be audited against those very same terms of service.

The infrastructural security and product security of IoT devices must also be scrutinised, given the rapid product lifecycle of IoT developments [@DennisGiese-2021]. As security is often not a sellable feature in contrast to new products and most mistakenly, convenience, proper and wholistic security precautions are often overlooked by companies who are more concerned with profits and high return on investments. Consequently, the prevalence of malicious actors in the cyberworld is alarming, where the overall lack of security awareness between consumers invites target devices to be easily accessed with default passwords or through unpatched vulnerabilities[^shodan_webcam].

[^shodan_webcam]: https://www.shodan.io/search?query=webcam

The black-box nature of IoT network communication raises both privacy and security concerns that may often be overlooked or trivialised in exchange for convenience. This this will involve the audit of an internet-connected robotic vacuum cleaner (Roborock S6) to assess the internal operations and nature of data that is transmitted, as to investigate any potential vulnerabilities that may render the device insecure.

The outline of this thesis is as follows: In Chapter 2, we study the motivations behind wanting to audit the privacy and security of IoT systems. In Chapter 3, we will review existing research, results and methods that comprise the current state of the art of security research on robot vacuum cleaners. Gaps in existing research will then be formalised through the thesis plan in Chapter 4. Finally we will conclude this report in a discussion of preliminary results that will be carried forwards into the later stages of research
