#!/usr/bin/python3
from socket import TCP_KEEPCNT
import sys
import pyshark

TARGET = dict(
    IP = "10.10.10.8",
    MAC = "64:90:c1:1d:24:c4"
)

# Find connections
if len(sys.argv) != 2:
    print("Gimme files.")
    exit(-1)

input_file = sys.argv[1]

dests = dict()


IPs = dict()
# packet.eth.src == TARGET["MAC"] or 
# with open(input_file, 'rb') as f:
i = 1
for packet in pyshark.FileCapture(input_file=input_file):
    i += 1

    print(f"Parsing packet {i}")
    if "dns" not in packet:
        continue

    # awsde0.fds.api.xiaomi.com {'3.124.106.160', '52.28.1.106', '3.65.97.228', '18.184.67.79'}
    # a2.tuyaeu.com {'35.157.101.18', '3.125.234.101', '3.125.199.146'}
    # m2.tuyaeu.com {'3.67.242.33', '35.156.44.172', '18.184.31.90', '3.124.225.12', '18.185.218.106', '52.58.249.45', '18.185.31.196', '52.57.38.165', '3.121.210.75', '3.66.126.37', '3.120.92.134', '3.65.95.68', '18.192.43.219', '3.64.85.28', '35.156.42.116'}
    if packet.dns.qry_name not in IPs:
        IPs[packet.dns.qry_name] = set()
    s = IPs[packet.dns.qry_name]

    if not packet.dns.has_field('a'):
        continue
    for v in packet.dns.a.all_fields:
        s.add(v.showname_value)

print(IPs)

    # if "ip" in packet and packet.ip.src == TARGET["IP"]:
    #     ip = packet.ip.dst_host
    #     if ip in dests:
    #         dst = dests[ip]
    #     else:
    #         dst = dests[ip] = dict()

    #     proto = packet.ip.proto
    #     if proto in dst:
    #         dst = dst[proto]
    #     else:
    #         dst[proto] = set()
    #         dst = dst[proto]
        

    #     dst.add(packet.layers[2].dstport)

print(dests)