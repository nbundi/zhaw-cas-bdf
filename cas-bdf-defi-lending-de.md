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
2. [DeFi Kredite](#besicherte-kredite)
4. [Liquidationen](#liquidationen)
3. [Preis Oracles](#preis-oracles)
4. [Governance](#governance)
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

# Transparenz: Ausstehende Coinbase-Morpho Kredite

![center width:1000](./assets/morpho-coinbase-loans-outstanding.png)

<!-- footer: '_Quelle: [Dune](https://dune.com/rudexxx/cbbtc-usdc-morpho-blue-base)_' -->

---

# Transparenz: Coinbase-Morpho Marktrisiko

![center width:700](./assets/coinbase-morpho-risiko-dashboard.png)

<!-- footer: '_Quelle: [Dune](https://dune.com/morpho/coinbase-on-chain-loan-positions-liquidations-dashboard)_' -->

---

# Trend: Wallet oder Banking-App?

![center width:800](./assets/argent-defi-integrated.png)

<!-- footer: '_Quelle: [Argent](https://argent.xyz)_' -->

---

# Use Cases

- "Cover expenses without selling your Bitcoin" (siehe Coinbase-Morpho)
- Grundsätzlich Liquidität auf Kryptoassets
- Verschiedene Finanzstrategien (FX, Basis Trade, Long/Short, etc)
- Finanzierung von Arbitrage und MEV Strategien
- DeFi Strategien (bspw. "Airdrop Farming")
- etc.

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

# <!--fit--> DeFi Kredite

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

# Zinsen

- Was ist der Zins?
- Normalerweise variabel, basierend auf der _Utilization_ für ein Asset
- Utilization = $\frac{\text{"total debt"}}{\text{"total supplied"}}$
- __State-of-the-art:__ Autonome Anpassung an Marktumfeld mittels  _Curve Controller_

![bg right width:700](./assets/vesu-adaptive-interest-rates.png)

<!-- footer: '_Source: [Vesu](https://docs.vesu.xyz/blog/2024-04-03-vesu-lending-hooks)_' -->

---

# Peer-to-pool vs Peer-to-peer

![center width:900](./assets/ethlend-vs-aave.webp)

<!-- footer: '_Quelle: [Wintermute](https://www.wintermute.com/insights/research/understanding-aave-governance-v2-the-decision-system-behind-defis-largest-lending-platform)_' -->

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

# Chainlink Nodes

![center width:1000](./assets/chainlink-oracle-providers.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Chainlink Feeds

![center width:1200](./assets/chainlink-price-feed-list.png)

<!-- footer: '_Quelle: [Chainlink](https://chain.link/use-cases/defi)_' -->

---

# Andere Anbieter (Top 8)

![center width:1000](./assets/defillama-top-10-oracles.png)

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

# Weitere Use Cases

![center width:1000](./assets/chainlink-oracle-use-cases.webp)

<!-- footer: '_Quelle: [Chainlink](https://chain.link)_' -->

---


<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Governance

---

# Flashback DINO

> The Protocol Operators act as a "management team" and implement decisions over the protocol's operations. Their level of control varies widely depending on how the protocol was implemented [...].

![right bg 90%](./assets/dino-meme-riding-dino.png)

<!-- footer: '_Quelle: [EEA Risk Assessment](https://entethalliance.org/specs/defi-risks/#sec-risks-governance)_' -->

---

# Kontroverse

![center width:1000](./assets/frambot-aave-is-a-bank.png)

<!-- footer: '' -->

---

# Aave Governance

- Aave protocol allows for updates/upgrades
- Community proposes, votes on and implements updates
- Makes Aave more flexible
- Wer ist Gegenpartei?
- Risiken?

![bg right 100%](./assets/aave-governance-forum.png)

<!-- footer: '_Quelle: [Aave](https://app.aave.com/governance)_' -->

---

# Morpho Governance

- Keine Kontrolle im System (Smart Contracts sind Immutable)
- Keine Gegenpartei (?)
- Keine (Governance) Risiken (?)

![bg right 100%](./assets/eyes-emoji.png)

<!-- footer: '_Quelle: [Aave](https://app.aave.com/governance)_' -->

---


# Governance vs. No-Governance

__Konzept:__ Smart Contracts bleiben _Immutable_, Risikomanagement wird an User oder Service Providers externalisiert. 

![center width:1200](./assets/morpho-blue-concept.png)

<!-- footer: '_Quelle: [Morpho](https://morpho.mirror.xyz/hfVXz323zp9CmJ1PLDL4UhdLITGQ865VIJUyvZYyMA4)_' -->

---

# Morpho Curators

- Wer managed die Risiken für End-User?
- Morpho: Spezialisierte Service Provider
- Neues Geschäftsfeld
- Regulation?
- Wichtig: Offener Zugang!

![bg right 100%](./assets/morpho-curators.png)


<!-- footer: '' -->

---

# Morpho Curators Business Case

![center width:800](./assets/morpho-curator-fees.png)

<!-- footer: '_Quelle: [Dune](https://dune.com/morpho/vault-performance)_' -->

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Flash Loans

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

## Imagine you could borrow an "infinite" amount without putting up collateral

![bg right](./assets/magic-meme.jpg)

<!-- footer: '' -->

---

# Flash Loans

- Leihe einen beliebigen Betrag
- Keine Sicherheit hinterlegen
- Mach damit was du willst
- __Aber:__ bezahle den Kredit in derselben Tx zurück
- __Oder:__ die gesamte TX wird rückgängig gemacht

![bg right 100%](./assets/flashloan-diagram-simplified.png)

<!-- footer: '_Quelle: [SmartBuilds](https://smartbuilds.io/defi-flashloans-explained-uniswap-foundry/)_' -->

---

# Anwendungen von Flash Loans

- (Risk-free) Arbitrage
- Kapital-neutrale Liquidationen
- Bessere UX (bspw. Multiply, Leverage, Collateral Swap, etc.)
- MEV (werden wir noch anschauen)
- Attacks/Exploits (!)
- Beispiele: [Flashbots](https://docs.flashbots.net/flashbots-mev-share/searchers/tutorials/flash-loan-arbitrage/introduction)


<!-- footer: "" -->

---

# Arbitrage Bot

![center width:1100](./assets/flashloan-arb-bot.jpg)

<!-- footer: '_Quelle: [SoluLab](https://www.solulab.com/how-to-build-crypto-arbitrage-flash-loan-bot/)_' -->

---

# Collateral Swap

![center width:800](./assets/flashloan-collateral-swap.webp)

<!-- footer: '_Quelle: [Etherscan](https://info.etherscan.com/understanding-flash-loan/)_' -->

---

# Beispiel Transaktion

![center width:900](./assets/flashloan-tx-etherscan.png)

<!-- footer: '_Quelle: [Etherscan](https://etherscan.io/tx/0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838)_' -->

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Alternative Modelle

<!-- footer: '' -->

---

# Institutionen wollen Zugang

- Onchain Private Debt
- DeFi Liquidity Pools
- Traditionelles "Underwriting"
- "Real-world Assets" als Sicherhiet
- Globales "Capital Sourcing"

![bg right 100%](./assets/bitwise-maple-defi.png)

<!-- footer: '_Quelle: [TheBlock](https://www.theblock.co/post/344836/bitwise-partners-maple-finance-institutional-clients-defi-credit)_' -->

---

# RWA Lending

![center width:600](./assets/maple-finance.png)

<!-- footer: '_Quelle: [Maple](https://maple)_' -->

---

# Centrifuge

![center width:1200](./assets/centrifuge-pool.png)

<!-- footer: '_Quelle: [Centrifuge](https://app.centrifuge.io/#/pools)_' -->

---

# Top RWA Protokolle

![center width:900](./assets/top-rwa-lending-protocols.png)

<!-- footer: '_Quelle: [Cryptorank](https://cryptorank.io/insights/research/rwa-future-defi-primitive)_' -->

---

# RWA Borrowing Country Breakdown

![center width:900](./assets/rwa-lending-country-breakdown.png)

<!-- footer: '_Quelle: [Cryptorank](https://cryptorank.io/insights/research/rwa-future-defi-primitive)_' -->

---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Praktischer Teil


<!-- footer: '' -->

---

![center width:1000](./assets/lets-get-our-hands-dirty-meme.jpg)