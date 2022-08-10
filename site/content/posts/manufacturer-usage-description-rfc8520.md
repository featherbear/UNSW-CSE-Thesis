+++
categories = []
date = 2022-07-19T05:13:45Z
description = ""
series = []
tags = []
title = "Manufacturer Usage Description (RFC 8520)"
toc = true

+++

## Generated Profiles

* MUD Profile for [v01.15.58](https://raw.githubusercontent.com/featherbear/UNSW-CSE-Thesis/master/network_captures/mud_gen/v01.15.58/roborock-s6Mud.json)  
* MUD Profile for [v02.29.02](https://raw.githubusercontent.com/featherbear/UNSW-CSE-Thesis/master/network_captures/mud_gen/v02.29.02/roborock-s6Mud.json)

GitHub: [[repo]/network_captures/mud_gen](https://github.com/featherbear/UNSW-CSE-Thesis/tree/master/network_captures/mud_gen)

---

## MUD Profiles

![](/uploads/20220725-snipaste_2022-07-26_07-37-41.jpg)

[MUD](https://developer.cisco.com/docs/mud/#!what-is-mud/what-is-mud) files whitelist the nature of network traffic that a device should transmit/receive.

> (e.g. Transmit IPv4 tcp/8890 to (DNS) example.com)

Traffic that does not match the MUD are discarded (or allowed but flagged). Mitigates unexpected ports/hosts - but ineffective against (e.g.) C2 payloads

IoT Research Team @ [UNSW EE&T](https://iotanalytics.unsw.edu.au/mudprofiles) has done some research

---

* YANG Data Model
* [https://iotanalytics.unsw.edu.au/mudprofiles](https://iotanalytics.unsw.edu.au/mudprofiles "https://iotanalytics.unsw.edu.au/mudprofiles")
* [https://datatracker.ietf.org/doc/html/draft-ietf-opsawg-mud](https://datatracker.ietf.org/doc/html/draft-ietf-opsawg-mud "https://datatracker.ietf.org/doc/html/draft-ietf-opsawg-mud")
  * [https://datatracker.ietf.org/doc/rfc8520/](https://datatracker.ietf.org/doc/rfc8520/ "https://datatracker.ietf.org/doc/rfc8520/")
* [https://developer.cisco.com/site/mud/](https://developer.cisco.com/site/mud/ "https://developer.cisco.com/site/mud/")
* [https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/MUD-URL-Validator](https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/MUD-URL-Validator "https://developer.cisco.com/codeexchange/github/repo/CiscoDevNet/MUD-URL-Validator")
* [https://iotanalytics.unsw.edu.au/mud/amazonEchoMud.json](https://iotanalytics.unsw.edu.au/mud/amazonEchoMud.json "https://iotanalytics.unsw.edu.au/mud/amazonEchoMud.json")
* [https://resources.infosecinstitute.com/topic/how-to-mitigate-iot-attacks-using-manufacturer-usage-description-mud/](https://resources.infosecinstitute.com/topic/how-to-mitigate-iot-attacks-using-manufacturer-usage-description-mud/ "https://resources.infosecinstitute.com/topic/how-to-mitigate-iot-attacks-using-manufacturer-usage-description-mud/")
* CISCO doesn't seem to really pursue themselves?
  * [https://mudmaker.testing.devnetcloud.com/login](https://mudmaker.testing.devnetcloud.com/login "https://mudmaker.testing.devnetcloud.com/login") is down
  * Though it _was_ labelled a beta program
* [https://mudmaker.org/](https://mudmaker.org/ "https://mudmaker.org/")
* [http://www2.ee.unsw.edu.au/\~hhabibi/pubs/conf/17iotsnp.pdf](http://www2.ee.unsw.edu.au/\~hhabibi/pubs/conf/17iotsnp.pdf "http://www2.ee.unsw.edu.au/~hhabibi/pubs/conf/17iotsnp.pdf")
* [https://www2.ee.unsw.edu.au/\~hhabibi/pubs/jrnl/20TDSCmud.pdf](https://www2.ee.unsw.edu.au/\~hhabibi/pubs/jrnl/20TDSCmud.pdf "https://www2.ee.unsw.edu.au/~hhabibi/pubs/jrnl/20TDSCmud.pdf")
* [http://www2.ee.unsw.edu.au/\~hhabibi/pubs/conf/18iotsnp_mudids.pdf](http://www2.ee.unsw.edu.au/\~hhabibi/pubs/conf/18iotsnp_mudids.pdf "http://www2.ee.unsw.edu.au/~hhabibi/pubs/conf/18iotsnp_mudids.pdf")
* [https://iotanalytics.unsw.edu.au/publications](https://iotanalytics.unsw.edu.au/publications "https://iotanalytics.unsw.edu.au/publications")

  ***

Not really adopted?

[https://www.nccoe.nist.gov/mud-related-resources](https://www.nccoe.nist.gov/mud-related-resources "https://www.nccoe.nist.gov/mud-related-resources")

Only used in Cisco catalyst switches

![](/uploads/20220725-snipaste_2022-07-26_07-26-49.jpg)

