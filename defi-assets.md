---
marp: true
lang: en-EN
title: DeFi Assets Intro
description: Introduction to Cryptoassets, Stablecoins, Tokenization
theme: minimal
transition: fade
paginate: true
_paginate: false
footer: ""
---

<!-- _class: lead -->

![bg opacity](./assets/gradient.jpg)

# <!--fit--> Cryptoassets, Stablecoins, Tokenization

## Continuing Education Course
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

# Cryptoassets make headlines

![left width:500](./assets/FT-blackrock-buidl.png)
![center width:500](./assets/FAZ-tokenisierung-immobilien.png)
![bg right width:600](./assets/cl-ubs-swift_tokenized-assets-settlement_news.png)

---

# FINMA on cryptoassets

> Cryptoassets are digital assets that are usually
recorded on a blockchain. They differ from other
assets because they can only be accessed using
cryptography. As a rule, a pair of keys is used,
consisting of a secret private key and a public key

<!-- footer: '_Quelle: [FINMA](https://www.finma.ch/en/~/media/finma/dokumente/dokumentencenter/myfinma/faktenblaetter/faktenblatt-kryptobasierte-vermoegenswerte.pdf?sc_lang=en&hash=C301BDEC9A7DED4EF2E23634B86F8FEF)' -->

---

<style scoped>
/* Reset table styling provided by theme */
table, tr, td, th {
  all: unset;
  /* Override contextual styling */
  border: 0 !important;
  background: transparent !important;
}
table { display: table; }
tr { display: table-row; }
td, th { display: table-cell; }
/* ...and layout freely :) */
table {
  width: 90%;
  border-spacing: 40pt;
  font-size: 40pt;
}
th {
  color: black;
  text-align: center;
  vertical-align: middle;
}
td {
  text-align: center;
  vertical-align: middle;
}
</style>

# Cryptoassets market

<br>

| __10k__ Tokens     | __$2.3t__ MCAP       |
| --------------------- | ------------------- |
| __$91b__ Volume (24h) | __813m__ Token Holders |


_Covers "active" tokens according to CoinMarketCap/Token Terminal._ 

<!-- footer: '_Source: [CoinMarketCap](https://coinmarketcap.com), [Token Terminal](https://tokenterminal.com/terminal/metrics/tokenholders)_' -->


---

# Market capitalization

![center width:900](./assets/crypto-mcap.png)

<!-- footer: '_Source: [CoinMarketCap](https://coinmarketcap.com)_' -->

---

# Capitalization by asset

![center width:800](./assets/crypto-asset-heatmap.png)

<!-- footer: '_Source: [CoinMarketCap](https://coinmarketcap.com/crypto-heatmap/) (November 2024)_' -->

---

# Token classification

![center width:800](./assets/cryptoassets-taxonomy-bis.png)

<!-- footer: '_Source: [BIS Working Paper](https://www.bis.org/publ/work1066.pdf)_' -->

---

<style scoped>{font-size: 30px}</style>

# Token implementation

|     | __Native Token__      | __Fungible Token__     | __Non-Fungible Token__ |
| --- | --------------------- | ------------------- | -------------------|
| Implement-ation | Embedded in blockchain | Smart Contract | Smart Contract | 
| Standards      | -  | ERC-20 | ERC-721 |
| Functionality  | Transfer, pay tx fees, staking | Programmable with all sorts of functionality | Programmable with all sorts of functionality |
| Examples       | BTC, ETH     | USDC, vUSDC, UNI, vault shares, LPs | CryptoPunks, BAYC, Beeple's "Everydays", Uniswap-v3 LPs |

<!-- footer: "" -->

---

# Example: ERC-20 Token (incomplete)

```typescript
contract ERC20 {
    mapping(address account => uint256) private _balances;
    uint256 private _totalSupply;
    string private _name;
    string private _symbol;

    function balanceOf(address account) public view virtual returns (uint256) {
        return _balances[account];
    }
    function transfer(address to, uint256 value) public virtual returns (bool) {
        address owner = _msgSender();
        _balances[owner] -= value;
        _balances[to] += value;
        return true;
    }
```

---

# Stablecoins

- Tokens that are pegged to the price of another asset
    - Circle's EURC $\approx$ 1 EUR
    - Liquity's LUSD $\approx$ 1 USD
    - Synthetix' sETH $\approx$ 1 ETH
- Different Peg-Mechanisms
    - 100% backed by Fiat/Treasuries (CeFi)
    - \>100% backed by cryptoassets (DeFi)
    - Algorithmic or only partially backed (DeFi)

---

# Stablecoin landscape

![center width:1100](./assets/stablecoin-models.png)

<!-- footer: '_Source: [CoinGecko State-of-Stablecoins 2024](https://assets.coingecko.com/reports/2024/CoinGecko-State-of-Stablecoins-2024.pdf)_' -->

---

# Stablecoin Trilemma

![center width:1000](https://cepr.org/sites/default/files/styles/flexible_wysiwyg/public/image/FromMay2014/ganesh13mayfig1.png?itok=i6kVoVMH "Stablecoin Trilemma according to Viswanath-Natraj and Chaudhary")

<!-- footer: '_Source: [Viswanath-Natraj and Amit Chaudhary](https://cepr.org/voxeu/columns/algorithmic-stablecoins-and-devaluation-risk)_' -->

---

# Example: USDC

- USD Stablecoin issued by Circle 
- 100% backing through "Cash and Cash Equivalents"
- \$36b MCAP
- Widely used across DeFi, often used as a proxy for USD

![bg 80% right](./assets/usdc-chart.png)

<!-- footer: '_Source: [CoinMarketCap](https://coinmarketcap.com/currencies/usd-coin/)_' -->

---

# Example: Depeg

- USDC is NOT USD
- Depeg in March 2023 
- Triggered by collapse of Silicon Valley Bank
- SVB custodies some $3.3b USD for Circle
- "Bank run" as a reaction
- __Understand risks!__

![bg 90% left](./assets/usdc-chart-depeg.png)

<!-- footer: '_Source: [CoinMarketCap](https://coinmarketcap.com/currencies/usd-coin/)_' -->

---

# Top 8 stablecoins

![center width:1100](./assets/stablecoins-top-8.png)

<!-- footer: '_Source: [CoinGecko State-of-Stablecoins 2024](https://assets.coingecko.com/reports/2024/CoinGecko-State-of-Stablecoins-2024.pdf)_' -->

---

# Asset tokenization

- Tokenization of "any" assets (similar to FIAT-backed stablecoins)
- Generally involves
    - Legal structure: SPV or similar owning the ("real-world") assets
    - Primary market: Emission of token with claim on SPV assets
    - Secondary market: Trading of token (e.g. through DEX)
- Underlying assets are custodied by centralized custodian (CeFi)
- Can often be freely traded and used across DeFi (DEX, lending, etc.)
- Examples: Paxos Gold, Tokenized treasuries, real-estate, etc.

<!-- footer: "" -->

---

# Tokenizing public securities

![center width:800](./assets/backed-tokenization.png)

<!-- footer: '_Source: [Backed](https://assets.backed.fi/structure)_' -->

---

# Tokenized treasuries products

![center width:1200](./assets/steakhouse-tokenized-securities.png)

<!-- footer: '_Source: [Steakhouse Financial](https://dune.com/steakhouse/tokenized-securities)_' -->

---

# Tokenized treasuries market

![center width:1200](./assets/steakhouse-tokenized-treasuries-market.png)

<!-- footer: '_Source: [Steakhouse Financial](https://dune.com/steakhouse/tokenized-securities)_' -->

---

# Tokens - DeFi's foundation

- Cryptoassets build the foundation of any DeFi service (DEX, lending,etc)
- Open and programmable interfaces enable DeFi protocols
- Settlement on public blockchain

![bg right 100%](./assets/defi-stack-bis.png)

<!-- footer: '_Source: [BIS Working Paper](https://www.bis.org/publ/work1066.pdf)_' -->

---

<style scoped>section{font-size:44px;}</style>

# Thank you!

<br>


![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white) [@nilsbundi](https://twitter.com/nilsbundi)  
![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) [Nils Bundi](https://ch.linkedin.com/in/nils-bundi-6246b998)  
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) [@nbundi](https://github.com/nbundi)  


![bg 80% right](./assets/defi-is-here-meme.png)

<!-- footer: "" -->