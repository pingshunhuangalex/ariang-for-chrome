# AriaNg for Chrome

[![Aria2](https://img.shields.io/badge/Aria2-v1.35.0-lightgrey)](https://github.com/aria2/aria2) [![AriaNg Version](https://img.shields.io/badge/AriaNg-v1.2.2-blue)](https://github.com/mayswind/AriaNg) [![YAAW for Chrome Version](https://img.shields.io/badge/YAAW%20for%20Chrome-v0.2.3-orange)](https://github.com/acgotaku/YAAW-for-Chrome)

A Chrome extension that bridges [Aria2](https://github.com/aria2/aria2) and browser downloading experience with UI powered by [AriaNg](https://github.com/mayswind/AriaNg)

While this project provides a user-friendly GUI that works seamlessly with the Chrome downloading experience, please note that all credits should go to the contributors from the original repositories.

Apart from the features brought by the original program, this repository includes changes which glue those awesome tools together, [ensure it works in the Chrome extension environment](https://github.com/mayswind/AriaNg/pull/189), improve the overall experience as a whole and ships it in a ready-to-use fashion for consumers who just want things to work without all the hassle.

Inherited from its dependencies, this program comes with no warranty and you should use it at your own risk.

## How to use

- Ensure you have [Aria2](https://github.com/aria2/aria2) installed and configured

- Clone / Download this repository

- Load the folder `.build` as an unpacked Chrome extention via `Chrome menu > More tools > Extensions > Load unpacked`, and you are all set (If you have a secret token for your `Aria2 RPC`, you may still need to config it in `AriaNg Settings` after the installation)

## Build your own

Advanced users only. If you want to hack the code to add your own twist, please continue reading...

### Prerequisites

- Install [Chocolatey](https://chocolatey.org/install)

- Install [Aria2](https://github.com/aria2/aria2) and finish all configurations

- Install [Nodist](https://github.com/nullivex/nodist) or any `Node` version manager of your choice

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

### [AriaNg](https://github.com/mayswind/AriaNg)

- [Optional] Update the original repository

```console
rm -rf node_modules/ && rm -rf dist/
```

```console
git stash && git pull && git stash pop
```

- Install and build

```console
nodist env <11.xx.x>
```

```console
npm ci
```

```console
gulp clean build
```

### [YAAW for Chrome](https://github.com/acgotaku/YAAW-for-Chrome)

- [Optional] Update the original repository

```console
rm -rf node_modules/ && rm -rf dist/
```

```console
git stash && git pull --recurse-submodules && git stash pop
```

- Install and build

```console
nodist env <14.xx.x>
```

```console
yarn
```

```console
yarn build
```

- Merge all built files in `ariang/dist` into `yaaw-for-chrome/dist/yaaw` (`index.html` should be the only file that needs to be replaced)

## Aria2 RPC Examples

- Websocket: `ws://localhost:6800/jsonrpc`

- HTTP with token: `http://token:xxxx@localhost:6800/jsonrpc`
