# Abstract

TODO: Write this at the end

---
# Acknowledgements

---
# ToC

TODO: Is a list of figures / tables necessary?

---

# Abbreviations

TODO: Put in appendix or?

---
# Introduction

---

# Background

+ definitions, context
+ history of research on the topic


assessment scope diagram


Device
Cloud Endpoint
Cloud Gateway
App
Local Network
Internet
* Not looking at the IoT cloud functions
* Just looking at local comms


## Threat Modelling - STRIDE

> Talk about the STRIDE model

* Spoof
* Tampering
* Repudiation
* Information Disclosure
* Denial of Service
* Elevation of Privilege

> Model the Roborock device against the STRIDE model

* Spoof
* Tampering
* Repudiation
* Information Disclosure
* Denial of Service
* Elevation of Privilege


spoofing, modification of firmware, hijack, denial of service, jamming, faking the data source, insecure communication, manipulation of configurations, targetted attacks, 
OWASP: Access control, crypto vulns , injection, insecure design, misconfiguratoin, outdated vuln components, id/auth failure, integrity failure, logging failure, ssrf

## Threat Scenarios

TM


1. Attacker planting persistence
2. Attacker far away
3. Attacker within proximity
4. Attacker with device physically compromised

* Backdoor / supply chain
* Someone trying to MITM
* I paid for the device, don't lock me out

* device is shipped out and backdoored
* device is in house and someone with network access nearby is able to alter
* someone with network access far away
* I have physical access


atacker power

---
# Literature Review

>> Feedback from Report A
> Would be good to give more detailed threat modelling - eg what is potentially at stake here and why including more on the the cleaner as a potential insider and what trust is required in the company and some consideration of that.  Privacy and security assessments contain good (and impressive) description of work done but need more assessment - eg summary and reflection on what was found to assess the security and privacy for the reader.

TODO: Put existing literature review and update the commentary + active voice and action (if taken)

TODO:: Add threat Models for an IoT System
- https://arxiv.org/pdf/2201.09493.pdf
- Going to ignore any wireless contention issues
- ... this paper is not very in depth

TODO: Reference to Xiaomi standards
FIXME: Perhaps put this in evaluation/conclusion; making mention that Xiaomi is proactive in their ecosystem security 
::: See if they enforce?
https://github.com/MiSecurity/Cyber-Security-Baseline-for-Consumer-Internet-of-Things


---

# Evaluation

> What did you do
> What did you find
> What does it mean
> What does it lead to
> How does it affect the threat scenarios

TODO: How much depth
TODO: Should I talk about challenges faced; or moreso the results

persistence
-> zerotier
-> see if patched

* Try bad usb?

TODO: Create Proof of Concepts
e.g Persistence planting via recovery image
* one command


Pairing process  
https://featherbear.cc/UNSW-CSE-Thesis/uploads/Snipaste_2022-05-02_01-14-22.jpg
Plain text broadcast
Give mention to https://k4czp3r.xyz/reverse-engineering/tp-link/tapo/2020/10/15/reverse-engineering-tp-link-tapo.html



Evaluation: Should I use this device?

---

# Summary and Future Works

Look at newer models, older models, other firmware, Tuya server, cloud servers

---

# References

---





Thesis C Report	Research Thesis C	90%	10/8/2022	-
Thesis C Demo	Research Thesis C	10%	24/7/2022	-






>>> Research direction is excellent but would benefit from a more precise statement of a specific research question.

>> Good document layout and presentation. Would benefit from more linking structure so the reader understands the implications of each section and how they fit together.  Language good but need to avoid passive voice and make clearer who is the actor - e.g. which things did you do and which things did someone else do and you are just reporting on them.

> "Through research into the bootloader source code, it was revealed that the injection of the s character during boot would trigger the bootloader to enter a shell. Which granted access to read and decrypt the root password that was encrypted in a file called vinda"

>>>> Which things did you yourself actually do here (I know, but the reader doesn't, and it is impressive so you should make sure the reader does know), and which are you just reporting on others having done?