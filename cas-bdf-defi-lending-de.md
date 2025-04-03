---
marp: true
lang: de-DE
title: CAS Blockchain und DeFi - Lending & Borrowing
description: Einführung in Decentralized Finance (DeFi)
theme: minimal
transition: fade
paginate: true
_paginate: false
footer: ""
---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> DeFi Lending & Borrowing

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

# Programm

1. [Einführung](#einführung)
2. [Besicherte Kredite](#besicherte-kredite)
4. [Liquidationen](#liquidationen)
3. [Preis Oracles](#preis-oracles)
5. [Zinsmodelle](#zinsmodelle)
6. [Flash Loans](#flash-loans)
7. [Alternative Modelle](#alternative-modelle)
8. [Praktischer Teil](#praktischer-teil)

---


<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Einführung

---

![center width:1100](./assets/coinbase-borrow-against-bitcoin.png)

<!-- footer: '_Quelle: [Coinbase](https://www.coinbase.com/loans)_' -->

---

![center width:1100](./assets/morpho-homepage.png)

<!-- footer: '_Quelle: [Morpho](https://www.morpho.org)_' -->

---

![center width:900](./assets/coinbase-morpho-setup.png)

<!-- footer: '' -->

---

# TVL in DeFi Lending

![left width:1150](./assets/tvl-defi-lending-march-2025.png)

<!-- footer: '_Quelle: [Defillama](https://defillama.com/categories) (März 2025)_' -->

---

# Grösster DeFi Sektor (nach TVL)

![center width:750pt](./assets/defi-ecosystem-map-category.png)

<!-- footer: '_Source: [Ultrasound Labs](https://ultrasound-labs.github.com/defi-ecosystem-map)_' -->

---

# Leader: Aave

- 2017 gegründet
- Lending von Kryptoassets
- Total deposits $29B, borrowed $10B
- Fees 30d $30M 
- Avg. stablecoin yield 6.5%
- Global, offen, transparent
- 365/7/24 in Betrieb

![bg 100% right](./assets/aave-screenshot.png)

<!-- footer: '' -->

--- 

# Aave Märkte

![center width:900](./assets/aave-markets-march-2025.png)

<!-- footer: '_Quelle: [Aave App](https://app-aave-com.ipns.dweb.link) (März 2025)_' -->

---

# Transparenz

![center width:1000](./assets/aave-transparency.png)

<!-- footer: '_Quelle: [Aave Docs](https://aave.com/docs/resources/parameters)_' -->

---

# Use Cases

- "Cover expenses without selling your Bitcoin" (siehe Coinbase-Morpho)
- Grundsätzlich Liquidität auf Kryptoassets
- Verschiedene Finanzstrategien (FX, Basis Trade, Long/Short, etc)
- Finanzierung von Arbitrage und MEV Strategien
- DeFi Strategien (bspw. "Airdrop Farming")
- etc.

---

# Trend: Wallet Integration

![center width:800](./assets/argent-defi-integrated.png)

<!-- footer: '_Quelle: [Argent](https://argent.xyz)_' -->

---

# Abgrenzung DeFi vs. TradFi/CeFi

<style scoped>{font-size: 30px}</style>

|                 | TradFi/CeFi         | DeFi      |
| --------------- | ------------------- | ----------------- |
| Custody         | Intermediär         | Smart Contract    |
| Ledger/Settlement | Intermediär       | Öffentliche Blockchain |    
| KYC             | Ja                  | Nein (Anonym)     |
| Besicherung     | Teilweise           | Ja (>100%)        |
| Laufzeit        | Fix                 | Offen             |
| Zins            | Fix/variabel        | Variabel          |
| Zugang          | 9-5/Mo-Fri/252      | 24/7/365          |
| Vertrieb        | Lokal               | Global            |
| Risiko          | Gegenpartei, etc.   | Technisch, etc.   |

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

# How tf funktioniert "Anonymes Lending & Borrowing"?

![bg right 90%](./assets/defi-lending-trade-offer-meme.png)

<!-- footer: '' -->

---


<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Besicherte Kredite

---

# Ausgangslage

- Offene Infrastruktur (kein KYC)
- Anonyme Teilnehmer
- Keine Intermediäre
- Umsetzung mittels Smart Contracts auf Public BC
- Technische Limitationen (Speicher, Compute, Operationen)

![bg right 50%](./assets/light-bulb-emoji.png)


---

# Grundprinzip

- Borrower deposited ein Kryptoasset als Sicherheit
- Solvente Position:
 Assets > Liabilities
- Insolvente Position: 
Assets < Liabilities
- __Es lohnt sich,__ den Kredit zurückzuzahlen, sofern die Position solvent ist

![bg right 55%](./assets/overcollateralized-positions-grundprinzip.png)

---

# Lenders

- Depositen Liquidität in einen gemeinsamen _Lending Pool_ 
- Verdienen Zins auf Deposit
- Können Liquidität jederzeit abziehen (sofern verfügbar)
- Geschützt durch >100% Besicherung von Krediten

![bg right 100%](./assets/defi-lending-peer-to-pool.png)

---

# Borrowers

- Depositen _Collateral_ Assets als Sicherheit
- Bezahlen variablen Zins
- Können Kredit jederzeit zurückzahlen
- Müssen Kredit zu >100% besichern
- Werden automatisch _liquidiert_, falls Sicherheit nicht ausreichend

![bg right 100%](./assets/defi-lending-peer-to-pool.png)

---

# Liquidators

- Externe Teilnehmer
- Monitoren den Lending Markt, um möglichst rasch liquidierbare Positionen zu identifizieren
- Liquidieren insolvente Positionen
- Verdienen Liquidationsgebühr

![bg right 100%](./assets/defi-lending-peer-to-pool.png)

---

# Oracle Price Feeds

- Externe Infrastruktur
- Informiert Lending Protokoll über den Wert der Collateral und Debt Assets
- Kritische Infrastruktur

![bg right 100%](./assets/defi-lending-peer-to-pool.png)

---

# Governance

- Kontrolliert kritische Risikoparameter im Markt (bspw. _Liquidation Bonus_, _Liquidation LTV_, etc)
- Verschieden umgesetzt:
-- Team Multisig
-- Security Council
-- Onchain Gov. (DAO)
-- _Immutable_ (No-Gov.)
- __Frage:__ Regulation?

![bg right 100%](./assets/defi-lending-peer-to-pool.png)

---

# Analogie: Securities Lending

![center width:900](./assets/swissquote-sec-lending.svg)

<!-- footer: '_Quelle: [Swissquote](https://www.swissquote.com/en-ch/private/trade/products/securities/lending)_' -->

---


<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Liquidationen

<!-- footer: "" -->

---

<br>

![width:550](./assets/arkham-liquidation-tweet.png)
![width:550](./assets/michwill-liquidated-tweet.png)
![bg right width:650](./assets/aave-liquidations-april-2025.png)

---

# Recap: Wieso Liquidationen?

__Antwort:__ Ohne Liquidationen kein Anreiz für Kreditnehmer, den Kredit zurückzuzahlen.

![width:1200](./assets/solvent-vs-insolvent-position.png)


---

# Liquidations-Kriterium

__Loan-to-value__ (LTV) misst die Solvenz einer Position:

$$
LTV = \frac{\text{Value of Debt}}{\text{Value of Collateral}}
$$

__Health factor__ (HF) misst das Liquidations-Risiko:

$$
HF = \frac{\text{LiquidationLTV}}{\text{LTV}}
$$

__Liquidate__ position if HF<=1!


<!-- footer: "" -->

---

# Beispiel

![center width:1100](./assets/defi-liquidation-steps.png)

---

# Liquidatoren

- Öffentlich (jeder kann liquidieren)
- Liquidator schützt Lender
- Liquidator macht Profit
- Sehr kompetitiver Markt dominiert durch MEV-bots
- Kapitalneutral mit Flash Loans (Liquidation von 1M, 10M, 100M position ohne Kapitalaufwand🤯)

![bg right 100%](./assets/defi-liquidators.png)

<!-- footer: '_Quelle: [Qin et al](https://dl.acm.org/doi/10.1145/3487552.3487811)_' -->

---

# Liquidations-Modelle

![center width:900](./assets/defi-liquidation-models.png)

<!-- footer: '_Quelle: [Delphi Digital](https://members.delphidigital.io/reports/breaking-down-the-design-space-of-money-market-liquidations)_' -->

---



<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Oracle Price Feeds

---

# ELI5 Oracles

<!-- This is the slide with custom styling -->
<style scoped>
  section {
    text-align: center;
    /*font-size: 4em; Adjust the font size as needed */
  }
</style>

<br>

### Eine verlässliche Quelle für externe (Preis-) Daten zur Nutzung in Blockchain Applikationen


![bg right 100%](./assets/is-this-the-price-meme.jpg)

---

# Verlässlich?


![center width:400](./assets/mango-markets-stolen-assets.png)
![center width:700](./assets/mango-markets-aavi-tweet.jpg)

![bg right 120%](./assets/oracle-attack.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Chainlink Approach

![center width:1200](./assets/chainlink-oracles.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Chainlink Data Providers

![center width:1000](./assets/chainlink-oracle-providers.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Chainlink Feeds

![center width:1200](./assets/chainlink-price-feed-list.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Push vs. Pull Oracles

<!-- This is the slide with custom styling -->
<style scoped>
  section {
    /*text-align: center;*/
    font-size: 2.55em;
  }
</style>

|                  | Push              | Pull              |
|----------------- |------------------ |------------------ |
| Modell           | Kontinuierliche Updates | On-demand Updates |
| Funktionsweise   | Oracle schreibt Daten in regulären Abständen in einen Smart Contract auf der Chain | Blockchain App holt sich Daten vom offchain Oracle, diese werden dann onchain verifiziert |
| Herausforderung  | Teuer, da jedes Update mit Transaktionskosten verbunden | Günstiger, jedoch komplexer für die Integration  | 

---

# Andere Anbieter (Top 8)

![center width:1000](./assets/defillama-top-10-oracles.png)

---

# Weitere Use Cases

![center width:1000](./assets/chainlink-oracle-use-cases.webp)

<!-- footer: '_Quelle: [Chainlink](https://chain.link)_' -->

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Zinsmodelle

---

- What is the cost of borrowing?
- Mostly variable based on market's utilization
- Utilization = $\frac{\text{"total debt"}}{\text{"total supplied"}}$
- __State-of-the-art:__ fully autonomous with _Curve Controller_

![bg right width:700](./assets/vesu-adaptive-interest-rates.png)

<!-- footer: '_Source: [www.docs.vesu.xyz](https://docs.vesu.xyz/blog/2024-04-03-vesu-lending-hooks)_' -->

---


<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Flash Loans

---


# Flash Loans

![center width:1200](./assets/flash-loans.png)

<!-- footer: '_Quelle: [LearnWeb3](https://learnweb3.io/lessons/borrow-millions-without-collateral-from-aave-using-flash-loans/)_' -->

---

# Anwendungen von Flash Loans

- Arbitrage
- Liquidation
- Leverage
- Position Management (e.g. Collateral Swap)
- UX

<!-- footer: "" -->

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Alternative Modelle

---

- Oracle-less design
- Uncollateralized
- RWA backed
- Permissioned (Aave Arc)

---


# Lending Platform Modelle

|    |  Over-Collateralized  | Un-Collateralized  |
| -- | --------------------- | ------------------ |
| Anonym        | Ja   | Nein (Borrower) |
| Kreditprüfung | Nein | Ja, durch _Pool Manager_ |
| Besicherung   | >100% mittels Kryptoassets | Nein | 
| Liquidation   | On-chain | Auf Gerichtsweg |

<!-- footer: "" -->

---

# Lending Platform Modelle (cont.)

|    |  Peer-to-peer  | Peer-to-pool  |
| -- | --------------------- | ------------------ |
| Gegenpartei | Borrower | Pool |
| Liquidität   | Fragmentiert (nach individuellen Terms) | Pooled ( die gleichen terms für Teilnehmer) |
| Besicherung | Ja / Nein | Ja / Nein |
| Maturität | Fixed (pro Loan) | Variabel |
| Zins | Fixed (pro Loan) | Variabel |

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Praktischer Teil

---