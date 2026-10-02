---
marp: true
lang: de-DE
title: CAS Blockchain und DeFi - DINOs
description: DeFi DINOs
theme: minimal
transition: fade
paginate: true
_paginate: false
footer: ""
---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> DeFi DINOs

## CAS Blockchain und DeFi - FS2025

### Zurich University of Applied Sciences

### Dr. Nils Bundi


<!-- This is presenter note. You can write down notes through HTML comment. -->

---

<!-- _class: lead -->

<style scoped>{font-size: 37px}</style>

![bg right 60%](./assets/nils-profile.jpeg)

**Dr. Nils Bundi**

DeFi F&E seit 2017 
Dozent [ZHAW SoE](https://zhaw.ch)
Präsident [DeFi Collective](https://deficollective.org)
DeFi Advisor/Gründer

---

![center width:1100](./assets/dino-hacks-leaderboard.png)

<!-- footer: '_Quelle: [Rekt](https://rekt.news)_' -->

---

# DeFi Exploits (Total inkl. Non-DeFi)

<br>

![center width:1100](./assets/dino-hacks-over-time.png)

<!-- footer: '_Quelle: [Defillama](https://defillama.com)_' -->

---

# Beispiel: Infini Exploit

![center width:1100](./assets/dino-infini-exploit.png)

<!-- footer: '_Quelle: [PeckShield](https://x.com/peckshieldalert/status/1893874770803851454)_' -->

---

![center width:800](./assets/decentralization-meme.png)

<!-- footer: '' -->

---

<!-- This is the slide with custom styling -->
<style scoped>
  section {
    text-align: center;
    /*font-size: 4em; Adjust the font size as needed */
  }
</style>

<br>
<br>

# Decentralized In Name Only 
# (DINO)

---

# Miss-verständnisse

- Blockchains sind nicht unveränderbar
- Smart Contracts sind nicht unveränderbar (auch nicht smart)
- DeFi Protokolle sind nicht unveränderbar

![bg right 80%](./assets/bitcoin-can-be-changed-meme.jpg)

<!-- footer: '' -->

---

# DeFi Operators

> The Protocol Operators act as a "management team" and implement decisions over the protocol's operations. Their level of control varies widely depending on how the protocol was implemented [...].

![right bg 90%](./assets/dino-meme-riding-dino.png)

<!-- footer: '_Quelle: [EEA Risk Assessment](https://entethalliance.org/specs/defi-risks/#sec-risks-governance)_' -->

---

# Relevanz: MiCA Recital 22

<br>
<br>

> Werden Kryptowerte-Dienstleistungen ohne eines Intermediärs in ausschließlich dezentralisierter Weise erbracht, so sollten sie nicht in den Anwendungsbereich dieser
Verordnung fallen.

<!-- footer: '_Quelle: [EUR Lex](https://eur-lex.europa.eu/legal-content/DE/TXT/PDF/?uri=CELEX:32023R1114)_' -->

---

# Zentralisierung in DeFi

![center width:1000](./assets/defi-stack-centralization.png)

<!-- footer: '_Quelle: [Digital Finance Journal](https://link.springer.com/article/10.1007/s42521-023-00088-8)_' -->

---

# Beispiel: Compound-v3

![center width:1100](./assets/compound-screenshot.png)

<!-- footer: '_Quelle: [Compound](https://compound.finance)_' -->

---

![center width:1000](./assets/defiscan-compound-diagram.png)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

---

# Wieso Permissions?

- Ship fast, break things
- Anpassen an neue Marktbedingungen
- Pausing im Notfall
- Regulation (?)
- Decentralization is hard! 

![bg right 90%](./assets/dino-meme-queuing.jpg)

<!-- footer: '' -->

---

# Risiken von Permissions

- Hacks (externe Attacker/Blackhats)
- Rug Pulls (interne Attacker/Team)
- Operative Fehler (Governance Risiko)
- Zensur

![bg right 90%](./assets/dino-infini-rekt.png)

---

<!-- This is the slide with custom styling -->
<style scoped>
  section {
    text-align: center;
    /*font-size: 4em; Adjust the font size as needed */
  }
</style>

<br>
<br>
<br>
<br>

# How much "De" is in your "Fi"?

---

# www.DeFiScan.info

![center width:1150](./assets/defiscan-homepage.png)

---

# Decentralization Stages

![center width:1000](./assets/defiscan-stages-overview.png)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

---

# Decentralization Risk Scoring

![center width:1000](./assets/defiscan-risk-scoring.png)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

---

# Decentralization Stages Scoring

![center width:1000](./assets/defiscan-stages-scoring.png)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

---

# Tooling

**permission-scanner:**

- static SC analyzer
- pulls SC source code from block explorer
- identifies and reports permissions
- supports OZ ACL pattern
- built on Slither

![bg right 90%](./assets/defiscan-meme-airport-security.png)

---

# Beispiel Compound ([link](https://www.defiscan.info/protocols/compound-v3))

![center width:1200](./assets/defiscan-compound-review.jpeg)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

--- 

# Beispiel Uniswap ([link](https://www.defiscan.info/protocols/uniswap-v3))

![center width:900](./assets/defiscan-uniswap-review.jpeg)

<!-- footer: '_Quelle: [DeFiScan](https://defiscan.info)_' -->

---

<!-- This is the slide with custom styling -->
<style scoped>
  section {
    text-align: center;
    /*font-size: 4em; Adjust the font size as needed */
  }
</style>

<br>
<br>
<br>

# Thank You!

![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white) [@nilsbundi](https://twitter.com/nilsbundi)  
![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) [Nils Bundi](https://ch.linkedin.com/in/nils-bundi-6246b998)  
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) [@nbundi](https://github.com/nbundi) 

<!-- footer: '' -->
