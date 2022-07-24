import os
def run(cmd):
    return os.popen(cmd).read().strip()

vinda = "CRA[FCEQBPPTUV_R"
serial = "8a80ab8936d76c118000"

challenge = run(f"adb shell {vinda}rockrobo dynamickey")
response = run(f"vinda.exe {serial} {challenge}").split("\n")[1].strip()
print(f"{challenge=} {response=}")
os.system(f"adb shell {vinda}{response}touch /tmp/a")

# 1062 no
# 1060 nah?
# 1061 bad vinda