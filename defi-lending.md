---
marp: true
lang: en-EN
title: DeFi Lending Primer
description: Introduction to DeFi Lending
theme: minimal
transition: fade
paginate: true
_paginate: false
footer: ""
---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> DeFi Lending - An Introduction

## DeFi Talents Guest Lecture
### 4. November 2024
### Dr. Nils Bundi


<!-- This is presenter note. You can write down notes through HTML comment. -->

---

<style scoped>{font-size: 36px}</style>

![bg right 60%](./assets/nils-profile.jpeg)

### Dr. Nils Bundi

<br>
<br>

![width:50](https://pbs.twimg.com/profile_images/1759540896167575552/uUA9O7Cm_400x400.png) Founder [Vesu Lending](https://vesu.xyz)
![width:50](https://pbs.twimg.com/profile_images/1684551593360777216/Qi3r9wXZ_400x400.jpg) President [DeFi Collective](https://deficollective.org)
![width:50](https://pbs.twimg.com/profile_images/1511627796937912322/U-1sR-eY_400x400.jpg) Lecturer [ZHAW School of Engineering](https://zhaw.ch)

---

# What if?

- I could earn on my crypto
- I could borrow crypto
- Directly from my wallet
- Only requiring an internet connection
- __Anonymously__
- __Globally__

![bg right 60%](./assets/defi-lending-2.png)

---

# TVL in DeFi Lending

![left width:1150](./assets/defi-lending-tvl.png)

<!-- footer: '_Source: [Defillama](https://defillama.com/categories)_' -->

---

# One of the largest DeFi sektors

![center width:750pt](./assets/defi-ecosystem-map.png)

<!-- footer: '_Source: [Ultrasound Labs](https://ultrasound-labs.github.com/defi-ecosystem-map)_' -->

---

# But, how?

![center width:950](./assets/defi-lending-how.png)

<!-- footer: "" -->

---

# Position health

__Loan-to-value__ (LTV) measures value of debt vs collateral

$$
LTV = \frac{\text{Value of Debt}}{\text{Value of Collateral}}
$$

__Health factor__ (HF) measures liquidation risk

$$
HF = \frac{\text{LiquidationLTV}}{\text{LTV}}
$$

__Liquidate__ position if HF<1!

<!-- footer: "" -->

---

# Liquidations

![center width:1100](./assets/defi-liquidation-steps.png)

---

# In practice

![width:550](./assets/arkham-liquidation-tweet.png)
![width:550](./assets/lemiscate_liquidated_tweet.png)
![bg right width:600](./assets/aave-liquidations.png)

<!-- footer: '_Source: [Block Analitica](https://aave.blockanalitica.com) (Mai 2024)_' -->

---

# Liquidation models

![center width:900](./assets/defi-liquidation-models.png)

<!-- footer: '_Source: [Delphi Digital](https://members.delphidigital.io/reports/breaking-down-the-design-space-of-money-market-liquidations)_' -->

---

# Liquidators

- Public (everyone can be a liquidator)
- Liquidators make profit
- Highly competitive market dominated by MEV-bots
- Capital-neutral liquidations use flash-loans

![bg right 100%](./assets/defi-liquidators.png)

<!-- footer: '_Source: [Qin et al](https://dl.acm.org/doi/10.1145/3487552.3487811)_' -->

---

# Flash Loans

- Borrow any amount without collateral
- __BUT:__ repay in same tx
- __IF NOT:__ entire tx reverts
- Zero counterparty risk
- Used for liquidations, arbitrage, leverage, position management (eg collateral swap, UX)

![bg right width:700](./assets/flash-loans.png)

<!-- footer: '_Source: [LearnWeb3](https://learnweb3.io/lessons/borrow-millions-without-collateral-from-aave-using-flash-loans/)_' -->

---

# Interest rates

- What is the cost of borrowing?
- Mostly variable based on market's utilization
- Mostly involves active DAO/Operator decisions
- __State-of-the-art:__ adaptive model with autonomous _Curve Controller_

![bg right width:700](./assets/vesu-adaptive-interest-rates.png)

<!-- footer: '_Source: [www.docs.vesu.xyz](https://docs.vesu.xyz/blog/2024-04-03-vesu-lending-hooks)_' -->

---

# Vesu Lending Markets

![center width:900](./assets/vesu-markets.png)

<!-- footer: '_Source: [www.vesu.xyz](https://vesu.xyz)_' -->

---

# TradFi vs DeFi

![center width:800](./assets/tradfi-vs-defi-lending.png)
<!-- footer: '_Source: [Appinventiv](https://appinventiv.com/blog/how-defi-lending-works/)_' -->

---

<style scoped>section{font-size:32px;}</style>

# Lending recap

|               |  Bank                | DeFi                | DeFi Flash Loan   |
| ------------- | -------------------- | ------------------- | ----------------- |
| Counterparty  | Bank                 | Smart Contract      | Smart Contract    |
| Collateral    | <100%                | >100%               | No                |
| KYC           | Yes                  | No                  | No                |
| Interest      | Fix/variable         | Fix/variable        | Fix fee           |
| Maturity      | Fixed                | Open                | 1 Block           |
| Liquidation   | Through courts       | On-chain            | No need           |
| Access        | Local (Jurisd.)      | Global              | Global            |
| Service hrs   | Business hrs/days    | 24/7/365            | 24/7/365          |

<!-- footer: "" -->

---

<style scoped>section{font-size:44px;}</style>

# Thank you!

<br>


![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white) [@nilsbundi](https://twitter.com/nilsbundi)  
![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) [Nils Bundi](https://ch.linkedin.com/in/nils-bundi-6246b998)  
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) [@nbundi](https://github.com/nbundi)  


![bg 80% right](./assets/defi-is-here-meme.png)
