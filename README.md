# AriaNg for Chrome

<a href="https://github.com/pingshunhuangalex/ariang-for-chrome/releases/latest"><img align="right" alt="AriaNg for Chrome Version" src="https://img.shields.io/badge/AriaNg%20for%20Chrome-v1.0.0-brightgreen" /></a>

[![Aria2 Version](https://img.shields.io/badge/Aria2-v1.36.0-lightgrey)](https://github.com/aria2/aria2) [![AriaNg Version](https://img.shields.io/badge/AriaNg-v1.2.3-blue)](https://github.com/mayswind/AriaNg) [![YAAW for Chrome Version](https://img.shields.io/badge/YAAW%20for%20Chrome-v0.2.3-orange)](https://github.com/acgotaku/YAAW-for-Chrome)

A Chrome extension that bridges [Aria2] and browser downloading experience with UI powered by [AriaNg]

While this project provides a user-friendly GUI that works seamlessly with the Chrome downloading experience, please note that all credits should go to the contributors from the original repositories (see badges above).

Apart from the features brought by the original programs, this repository introduces only enough changes that glue those awesome tools together so it works as a Chrome extension properly. The extension is shipped in a ready-to-use fashion for consumers who just want things to work without all the hassle.

**Inherited from its dependencies, this program comes with no warranty and you should use it at your own risk.**

## How to use

- Ensure you have [Aria2] installed and configured

- Download `AriaNg-for-Chrome.rar` in [the latest release] and unzip it in the directory of your choice

- Load the unzipped folder `AriaNg-for-Chrome` as an unpacked Chrome extention via `Chrome menu > More tools > Extensions > Load unpacked`, and you are all set

- [Optional] If you have a secret token for your `Aria2 RPC`, you may still need to config it after the installation
  - For `AriaNg for Chrome Settings`, right-click the extension and click `Options`
    - HTTP with token: `http://token:xxxx@localhost:6800/jsonrpc`
  - For `AriaNg Settings`, click into the extension and select `AriaNg Settings` in the left panel
    - Websocket: `ws://localhost:6800/jsonrpc`

- [Optional] If you want to make the most out of the extention for resources from `百度网盘`, `阿里云盘`, `天翼云盘` and `迅雷云盘`, [网盘直链下载助手] is a good addition

---

## Build your own

<details>
  <summary>Advanced users only. If you want to hack the code to add your own twist, please clone / download this repository and continue reading...</summary>

### Prerequisites

- Install [Chocolatey]

- Install [Aria2] and finish all configurations

- Install [Nodist] or any `Node` version manager of your choice

```console
choco install nodist
```

- Ensure `Nodist` is in your system path (`C:\Program Files (x86)\Nodist\bin` for Windows)

- Install `Node 11` and `Node 14`

```console
nodist add 11
```

```console
nodist add 14
```

- Set the `Node` global requirement to the "latest" version installed

```console
nodist latest
```

- Install `npm` that matches with your `Node`

```console
nodist npm match
```

- Install `Yarn`

```console
npm i -g yarn
```

- Install `Gulp`

```console
choco install gulp-cli
```

### [YAAW for Chrome]

- [Optional] Update the original repository

```console
rm -rf node_modules/ && rm -rf dist/
```

```console
git stash && git pull --recurse-submodules && git stash pop
```

- Install and build

```console
nodist env 14.17.0
```

```console
yarn
```

```console
yarn build
```

### [AriaNg]

- [Optional] Update the original repository

```console
rm -rf node_modules/ && rm -rf dist/
```

```console
git stash && git pull && git stash pop
```

- Install and build

```console
nodist env 11.13.0
```

```console
npm ci
```

```console
gulp clean build
```

- [Optional] If you run into an error complaining about missing `npx` while running `npm ci`, just install it globally

```console
npm i -g npx
```

### Assembly

- Merge all built files in `ariang/dist` into `yaaw-for-chrome/dist/yaaw` (`index.html` should be the only file that needs to be replaced)

</details>

[Aria2]: https://github.com/aria2/aria2
[AriaNg]: https://github.com/mayswind/AriaNg
[the latest release]: https://github.com/pingshunhuangalex/ariang-for-chrome/releases/latest
[网盘直链下载助手]: https://github.com/syhyz1990/baiduyun
[Chocolatey]: https://chocolatey.org/install
[Nodist]: https://github.com/nullivex/nodist
[YAAW for Chrome]: https://github.com/acgotaku/YAAW-for-Chrome
