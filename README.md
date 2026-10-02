# ZHAW CAS Blockchain & Decentralized Finance (BDF)

Teaching materials for the **CAS Blockchain & Decentralized Finance (BDF)** at the
[ZHAW School of Management and Law](https://www.zhaw.ch/en/sml/continuing-education/).

Slides are written as [Marp](https://marp.app/) Markdown and built with
[Marp CLI](https://github.com/marp-team/marp-cli).

Lecturer: **Dr. Nils Bundi** — Founder [Vesu Lending](https://vesu.xyz), President
[DeFi Collective](https://deficollective.org), Lecturer
[ZHAW School of Engineering](https://zhaw.ch).

## Course editions

| Edition | Folder | Period | Status |
| :------ | :----- | :----- | :----- |
| FS 2025 | [`fs25/`](./fs25) | Feb – May 2025 | Completed — slide decks archived |
| HS 2026 | [`hs26/`](./hs26) | Sep – Dec 2026 | Upcoming — schedule only, materials TBD |

Each edition folder is self-contained: it holds its own slide decks plus the
`assets/` and `themes/` they reference.

## Repository layout

```
.
├── fs25/              FS 2025 edition
│   ├── assets/        images, PDFs
│   ├── themes/        custom Marp theme (theme.scss)
│   ├── index.md       deck index / landing deck
│   └── *.md           individual slide decks
├── hs26/              HS 2026 edition
│   ├── assets/        official schedule PDF
│   └── README.md      schedule and planning
├── marp.config.mjs    Marp CLI configuration
├── package.json       build scripts
└── netlify.toml       Netlify deployment
```

## Building the slides

Requires [Node.js](https://nodejs.org/) (version pinned in `.nvmrc`).

```bash
npm ci        # install dependencies
npm start     # live preview in Chrome
npm run build # build static site to public/
```

The published build currently targets `fs25/index.md`; adjust the `deck` and
`og-image` scripts in `package.json` to publish a different edition.

Writing slides is easiest with the
[Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
extension — the custom theme is already wired up in `.vscode/settings.json`.

## Deployment

A [GitHub Actions workflow](.github/workflows/github-pages.yml) builds and deploys
to GitHub Pages on every push to `master`. `netlify.toml` provides the equivalent
Netlify build command.

## License

[WTFPL](./LICENSE)
