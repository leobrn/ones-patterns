# Примеры использования паттернов в 1С

[leobrn.github.io/ones-patterns](https://leobrn.github.io/ones-patterns/)

[![telegram](https://img.shields.io/badge/telegram-chat-green.svg)](http://t.me/ovmst)
[![Stars](https://img.shields.io/github/stars/leobrn/ones-patterns.svg?label=Github%20%E2%98%85&a)](https://github.com/leobrn/ones-patterns/stargazers)
[![Release](https://img.shields.io/github/v/release/leobrn/ones-patterns?include_prereleases&label=last%20release&style=badge)](https://github.com/leobrn/ones-patterns/releases/latest)
[![OpenYellow](https://img.shields.io/endpoint?url=https://openyellow.neocities.org/badges/3/723337321.json)](https://openyellow.notion.site/openyellow/24727888daa641af95514b46bee4d6f2?p=ea1fc8d0da7a42538849eed4b8a54383&amp;pm=s)

Этот проект предназначен для демонстрации различных паттернов проектирования на языке 1С:Предприятие. Здесь вы найдете примеры кода и описание применения популярных паттернов, что поможет вам лучше понять, как можно использовать эти паттерны в своих проектах на 1С.

---
This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
