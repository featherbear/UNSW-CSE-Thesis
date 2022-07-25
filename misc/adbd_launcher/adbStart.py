import os
import sys
def run(cmd):
    return os.popen(cmd).read().strip()

vinda = "CRA[FCEQBPPTUV_R"
serial = "8a80ab8936d76c118000"

challenge = run(f"adb shell {vinda}rockrobo dynamickey")
response = run(f"vinda.exe {serial} {challenge}").split("\n")[1].strip()
print(f"{challenge=} {response=}")

if len(sys.argv) > 1:
    command = " ".join(sys.argv[1:])
else:
    command = "dynamickey"

has_invalid_char = False
for invalid_char in ";&|`":
    if invalid_char in command:
        has_invalid_char = True
        print("Error | Invalid character found: " + invalid_char)
if not has_invalid_char:
    cmd = f"adb shell \"{vinda}{response} {command}\""
    print(f"{cmd=}")
    os.system(cmd)

# 1062 no
# 1060 nah?
# 1061 bad vinda