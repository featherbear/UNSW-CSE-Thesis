+++
categories = []
date = 2022-04-30T18:05:20Z
description = ""
series = []
tags = []
title = "Recovery Mode"
toc = true

+++
> I disconnected the power (w/o battery) a bunch of times and it eventually needed to enter recovery (probably corrupted something)

* flag_recovery: 0x0 - Normal

# Launch Recovery

    Loading file "roborock.conf" from mmc device 2:6
    32 bytes read
    language:language=en
    flag_recovery: 0x0
    flag_command:
    flag_restore_default:
    flag_bootB:0x4
    flag_bootA:0x2
    upgrade stage:0x63
    No upgradeover system found, check if has normal system, pmu: 0x73776368
    flag a=2,flag b=4,will be recover system
    play opt/rockrobo/resources/sounds/en/bl_recovery_bootfailed.wav
    Loading file "opt/rockrobo/resources/sounds/en/bl_recovery_bootfailed.wav" from mmc device 2:7
    195238 bytes read
    sunxi codec request dma 0x5ebb47b4
    rr_recovery_pre_check:716:found recovery num 3
    Loading file "/boot/zImage" from mmc device 2:7
    3882616 bytes read
    part recovery valid
    recovery from "recovery" to "system_a"
    cover init begin
    found recovery
    set src start=0,src_size=0
    found system_a
    set dest start=645922816,dest_size=536870912
    real_cover:141:total size=536870912,block=1048576
    
    MMC read: dev # 2, block # 253952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1302528, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 262144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1310720, count 8192 ... 8192 blocks write: OK

# Continue Recovery

    Loading file "roborock.conf" from mmc device 2:6
    32 bytes read
    language:language=en
    flag_recovery: 0x11
    play opt/rockrobo/resources/sounds/en/bl_recovery_retry.wav
    Loading file "opt/rockrobo/resources/sounds/en/bl_recovery_retry.wav" from mmc device 2:7
    143690 bytes read
    sunxi codec request dma 0x5ebb47b4
    rr_recovery_pre_check:716:found recovery num 3
    Loading file "/boot/zImage" from mmc device 2:7
    3882616 bytes read
    part recovery valid
    recovery from "recovery" to "system_a"
    cover init begin
    found recovery
    set src start=0,src_size=0
    found system_a
    set dest start=645922816,dest_size=536870912
    real_cover:141:total size=536870912,block=1048576
    
    MMC read: dev # 2, block # 253952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1302528, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 262144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1310720, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 270336, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1318912, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 278528, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1327104, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 286720, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1335296, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 294912, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1343488, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 303104, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1351680, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 311296, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1359872, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 319488, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1368064, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 327680, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1376256, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 335872, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1384448, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 344064, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1392640, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 352256, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1400832, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 360448, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1409024, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 368640, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1417216, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 376832, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1425408, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 385024, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1433600, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 393216, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1441792, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 401408, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1449984, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 409600, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1458176, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 417792, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1466368, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 425984, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1474560, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 434176, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1482752, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 442368, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1490944, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 450560, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1499136, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 458752, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1507328, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 466944, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1515520, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 475136, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1523712, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 483328, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1531904, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 491520, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1540096, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 499712, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1548288, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 507904, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1556480, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 516096, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1564672, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 524288, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1572864, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 532480, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1581056, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 540672, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1589248, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 548864, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1597440, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 557056, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1605632, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 565248, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1613824, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 573440, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1622016, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 581632, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1630208, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 589824, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1638400, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 598016, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1646592, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 606208, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1654784, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 614400, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1662976, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 622592, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1671168, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 630784, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1679360, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 638976, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1687552, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 647168, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1695744, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 655360, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1703936, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 663552, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1712128, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 671744, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1720320, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 679936, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1728512, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 688128, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1736704, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 696320, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1744896, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 704512, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1753088, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 712704, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1761280, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 720896, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1769472, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 729088, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1777664, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 737280, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1785856, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 745472, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1794048, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 753664, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1802240, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 761856, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1810432, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 770048, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1818624, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 778240, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1826816, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 786432, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1835008, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 794624, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1843200, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 802816, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1851392, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 811008, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1859584, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 819200, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1867776, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 827392, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1875968, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 835584, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1884160, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 843776, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1892352, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 851968, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1900544, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 860160, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1908736, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 868352, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1916928, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 876544, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1925120, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 884736, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1933312, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 892928, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1941504, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 901120, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1949696, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 909312, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1957888, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 917504, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1966080, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 925696, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1974272, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 933888, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1982464, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 942080, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1990656, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 950272, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 1998848, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 958464, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2007040, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 966656, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2015232, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 974848, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2023424, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 983040, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2031616, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 991232, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2039808, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 999424, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2048000, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1007616, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2056192, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1015808, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2064384, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1024000, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2072576, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1032192, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2080768, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1040384, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2088960, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1048576, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2097152, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1056768, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2105344, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1064960, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2113536, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1073152, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2121728, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1081344, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2129920, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1089536, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2138112, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1097728, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2146304, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1105920, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2154496, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1114112, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2162688, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1122304, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2170880, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1130496, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2179072, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1138688, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2187264, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1146880, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2195456, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1155072, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2203648, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1163264, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2211840, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1171456, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2220032, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1179648, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2228224, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1187840, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2236416, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1196032, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2244608, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1204224, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2252800, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1212416, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2260992, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1220608, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2269184, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1228800, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2277376, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1236992, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2285568, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1245184, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2293760, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1253376, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2301952, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1261568, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2310144, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1269760, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2318336, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1277952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2326528, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1286144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2334720, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1294336, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2342912, count 8192 ... 8192 blocks write: OK
    recovery from "recovery" to "system_b"
    cover init begin
    found recovery
    set src start=0,src_size=0
    found system_b
    set dest start=1182793728,dest_size=536870912
    real_cover:141:total size=536870912,block=1048576
    
    MMC read: dev # 2, block # 253952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2351104, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 262144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2359296, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 270336, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2367488, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 278528, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2375680, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 286720, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2383872, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 294912, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2392064, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 303104, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2400256, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 311296, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2408448, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 319488, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2416640, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 327680, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2424832, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 335872, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2433024, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 344064, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2441216, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 352256, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2449408, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 360448, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2457600, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 368640, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2465792, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 376832, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2473984, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 385024, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2482176, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 393216, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2490368, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 401408, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2498560, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 409600, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2506752, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 417792, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2514944, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 425984, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2523136, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 434176, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2531328, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 442368, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2539520, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 450560, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2547712, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 458752, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2555904, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 466944, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2564096, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 475136, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2572288, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 483328, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2580480, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 491520, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2588672, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 499712, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2596864, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 507904, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2605056, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 516096, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2613248, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 524288, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2621440, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 532480, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2629632, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 540672, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2637824, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 548864, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2646016, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 557056, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2654208, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 565248, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2662400, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 573440, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2670592, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 581632, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2678784, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 589824, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2686976, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 598016, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2695168, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 606208, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2703360, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 614400, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2711552, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 622592, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2719744, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 630784, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2727936, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 638976, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2736128, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 647168, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2744320, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 655360, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2752512, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 663552, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2760704, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 671744, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2768896, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 679936, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2777088, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 688128, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2785280, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 696320, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2793472, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 704512, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2801664, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 712704, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2809856, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 720896, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2818048, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 729088, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2826240, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 737280, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2834432, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 745472, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2842624, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 753664, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2850816, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 761856, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2859008, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 770048, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2867200, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 778240, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2875392, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 786432, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2883584, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 794624, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2891776, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 802816, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2899968, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 811008, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2908160, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 819200, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2916352, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 827392, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2924544, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 835584, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2932736, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 843776, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2940928, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 851968, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2949120, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 860160, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2957312, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 868352, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2965504, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 876544, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2973696, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 884736, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2981888, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 892928, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2990080, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 901120, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 2998272, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 909312, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3006464, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 917504, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3014656, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 925696, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3022848, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 933888, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3031040, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 942080, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3039232, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 950272, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3047424, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 958464, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3055616, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 966656, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3063808, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 974848, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3072000, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 983040, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3080192, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 991232, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3088384, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 999424, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3096576, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1007616, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3104768, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1015808, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3112960, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1024000, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3121152, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1032192, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3129344, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1040384, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3137536, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1048576, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3145728, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1056768, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3153920, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1064960, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3162112, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1073152, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3170304, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1081344, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3178496, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1089536, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3186688, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1097728, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3194880, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1105920, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3203072, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1114112, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3211264, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1122304, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3219456, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1130496, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3227648, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1138688, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3235840, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1146880, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3244032, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1155072, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3252224, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1163264, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3260416, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1171456, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3268608, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1179648, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3276800, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1187840, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3284992, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1196032, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3293184, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1204224, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3301376, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1212416, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3309568, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1220608, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3317760, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1228800, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3325952, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1236992, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3334144, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1245184, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3342336, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1253376, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3350528, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1261568, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3358720, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1269760, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3366912, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1277952, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3375104, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1286144, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3383296, count 8192 ... 8192 blocks write: OK
    
    MMC read: dev # 2, block # 1294336, count 8192 ... 8192 blocks read: OK
    
    MMC write: dev # 2, block # 3391488, count 8192 ... 8192 blocks write: OK
    recovery from "0" to "UDISK"
    cover init begin
    found UDISK
    set dest start=2290089984,dest_size=0
    real_cover:141:total size=4194304,block=8192
    
    MMC write: dev # 2, block # 4513792, count 8192 ... 8192 blocks write: OK
    recovery from "0" to "Download"
    cover init begin
    found Download
    set dest start=1719664640,dest_size=553648128
    real_cover:141:total size=4194304,block=8192
    
    MMC write: dev # 2, block # 3399680, count 8192 ... 8192 blocks write: OK
    to be run cmd=run setargs_mmc boot_normal
    [     98.106]boot_reason update to 0x72637279 for AP manual recovery
    boot A system
    WORK_MODE_BOOT

# Recovery Done

    Loading file "roborock.conf" from mmc device 2:6
    32 bytes read
    language:language=en
    flag_recovery: 0x12
    flag_command:
    flag_restore_default:
    flag_bootB:0x1
    flag_bootA:0x2
    upgrade stage:0x0
    No upgradeover system found, check if has normal system, pmu: 0x0
    board_common.c:check_android_misc:will be boot A system
    to be run cmd=run setargs_mmc boot_normal
    boot A system