#!/usr/bin/python3

from io import IOBase


def parse(f: IOBase):
    res = {}
    for x in f.readlines():
        md5, file = x.strip().split("  ")
        res[file] = md5
    return res


hashes = {}

with open("base.txt", "r") as f:
    hashes["base"] = parse(f)

with open("device.txt", "r") as f:
    hashes["device"] = parse(f)

for x in hashes["device"].keys():
    if x in hashes["base"] and hashes["device"][x] != hashes["base"][x]:
            print(x, hashes["device"][x], hashes["base"][x])
    
for x in hashes["device"].keys():
    if x not in hashes["base"]:
        print(x, hashes["device"][x], "(not found in base)")
        
for x in hashes["base"].keys():
    if x not in hashes["device"]:
        print(x, "(not found in device)", hashes["base"][x])