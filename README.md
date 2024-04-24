<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# Remilia Drops

Remilia Drops™ is an open-source initiative to collect data of airdrops which target Milady and Remilia assets. Remilia Drops™ hopes to provide the reader with an overview of the value created and the ability to propose changes to static data.

## Airdrops

Airdrops are labeled `n-ticker` where `n` is the incrementing identifier which orders the `.json` files into creation order, `ticker` is the ticker or expected ticker of the airdrop.

`./src/airdrops/*.json`

When proposing a new change please increment the identifier and fill out as much of the `template.txt` file as possible.

I expect there will be a discussion on the pull request before it gets merged.

## Commands

```bash
## install dependencies
npm install

## start dev server
npm run dev

## build for production
npm run preview

## run production build
npm run build

## run html/css/js/ts check
pnpm run check

## run prettier lint check
pnpm run lint

## run prettier lint format
pnpm run format
```

## Contributions

### New airdrop

Fork this repo
Create a branch
Do some work
Push to your fork
Raise a PR into this repo

### Amending airdrop

Please provide a link to the sourced corrected data!

## Envs

Rename `.env.example` to `.env`

### VITE_ENUMSTRING_GC_API_KEYS

A comma seperated string of coin gecko api keys that are round-robin'ed between to increase request throughput. If you see your key here I'm not sorry.

## Licence

Distributed under the MIT License. See LICENSE.txt for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/Elliott-Green/remilia-drops.svg?style=for-the-badge
[contributors-url]: https://github.com/Elliott-Green/remilia-drops/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Elliott-Green/remilia-drops.svg?style=for-the-badge
[forks-url]: https://github.com/Elliott-Green/remilia-drops/network/members
[stars-shield]: https://img.shields.io/github/stars/Elliott-Green/remilia-drops.svg?style=for-the-badge
[stars-url]: https://github.com/Elliott-Green/remilia-drops/stargazers
[issues-shield]: https://img.shields.io/github/issues/Elliott-Green/remilia-drops.svg?style=for-the-badge
[issues-url]: https://github.com/Elliott-Green/remilia-drops/issues
[license-shield]: https://img.shields.io/github/license/Elliott-Green/remilia-drops.svg?style=for-the-badge
[license-url]: https://github.com/Elliott-Green/remilia-drops/blob/main/LICENCE
