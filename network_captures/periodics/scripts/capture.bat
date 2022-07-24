@echo off
cd /d %~dp0
"C:\Program Files\Wireshark\tshark" -i "Ethernet 2" -w capture.pcap -b interval:3600 -P