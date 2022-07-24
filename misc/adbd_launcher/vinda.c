#include <stdint.h>
#include <stdbool.h>
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>

typedef char byte;

char serial[1024];
char sys_passwd[29];

int adb_update_passwd(void) {
  int num;
  int *piVar2;
  int iVar3;
  int iVar4;
  int iVar5;
  int uVar6;
  int uVar7;
  byte *pbVar8;
  byte *pbVar9;
  int iVar10;
  int64_t uVar11;
  int local_38;
  int local_30;
  int local_2c;

  pbVar9 = (byte *)(serial + 0x23);
  uVar6 = 0;
  uVar7 = 0;
  local_30 = 0;
  local_38 = 4;
  do {
    num = 0;
    iVar4 = local_38 + 1;
    iVar3 = iVar4 >> 1;
    iVar5 = 0;
    pbVar8 = pbVar9;
    do {
      if (iVar5 < 0x18) {
        do {
          if (((int)uVar6 >> iVar5 & 1U) == 0) {
            uVar6 = uVar6 | 1 << iVar5;
            num = num + (int)*pbVar8 + (int)(byte)serial[iVar5 + 0x24];
            goto LAB_00012892;
          }
          iVar5 = iVar5 + 1;
        } while (iVar5 != 0x18);
LAB_000128f6:
        do {
          iVar10 = iVar5 + -0x18;
          if (((int)uVar7 >> iVar10 & 1U) == 0) {
            uVar7 = uVar7 | 1 << iVar10;
            goto LAB_00012904;
          }
          iVar5 = iVar5 + 1;
        } while (iVar5 != 0x37);
      }
      else {
        if (iVar5 < 0x37) goto LAB_000128f6;
      }
      iVar10 = iVar5 + -0x18;
LAB_00012904:
      num = num + (int)*pbVar8 + (int)(byte)serial[iVar10];
LAB_00012892:
      iVar3 = iVar3 + -1;
      pbVar9 = pbVar8 + -1;
      if (pbVar8 == (byte *)(serial + 0x10)) {
        pbVar9 = (byte *)(serial + 0x23);
      }
      iVar5 = iVar5 + (local_38 >> 1) + 1;
      pbVar8 = pbVar9;
    } while (0 < iVar3);
    uVar11 = num % local_38;
    num = local_30 + local_38;
    sys_passwd[local_38 + 0x10] = serial[(int)uVar11 + local_30];
    local_38 = iVar4;
    local_30 = num;
    if (iVar4 == 0xc) {
      return 0;
    }
  } while( true );
}


int main(int argc, char* argv[]) {
    if (argc < 3) {
        printf("usage: %s \"<usbserialnumber> <dynchallenge>\"\n", argv[0]);
		printf("0) \"set vinda file to \"UUUUUUUUUUUUUUUU\"\n");
		printf("1) request challenge \"adb shell \"UUUUUUUUUUUUUUUUrockrobo dynamickey\"\n");
		printf("2) insert response (here: 3g-111?G) \"adb shell \"UUUUUUUUUUUUUUUU3g-111?G bash\"\n");
        return 1;
    }
    char* serial_number = argv[1];
    char* challenge = argv[2];
    char first_8[9];
    memcpy(first_8, challenge, 8);
    first_8[8] = '\0';
    challenge += 8;
    snprintf(serial, sizeof(serial), "%s%%()+-[]_%s:;<=>?@{}%s", first_8, serial_number, challenge);
    printf("using input: %s\n", serial);
    adb_update_passwd();
    printf("%s\n", &sys_passwd[20]);
    return 0;
}