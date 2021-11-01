---
title: "{{ replace .Name "-" " " | title }}"
layout: "bundle"
outputs: ["Reveal"]
date: {{ .Date }}
---

{{< slide class="center" >}}

## {{ replace .Name "-" " " | title }}

---

