# BrewWind

<img width="1501" height="500" alt="Image" src="https://github.com/user-attachments/assets/936c9e11-7c7b-4565-b362-b7d3a49e5b7c" />

A lightweight utility-class engine for browser projects.

BrewWind scans classes prefixed with `chai-` and applies inline styles at runtime.

## Why BrewWind

- Zero CSS build step required for utility classes
- Runtime support for dynamic DOM updates (MutationObserver)
- Small bundle with dual module output (ESM + CJS)
- NPM-ready package setup

## Installation

```bash
npm install brewwind
```

## Quick Start

Import once in your app entry file:

```js
import "brewwind";
```

Add classes in HTML:

```html
<div class="chai-bg-red-500 chai-p-4 chai-rounded-xl">Hello</div>
```

Optional explicit initialization:

```js
import { initBrewWind } from "brewwind";

initBrewWind();
```

## Supported Utilities

- Width and height: `chai-w-*`, `chai-h-*`
- Spacing: `chai-p*`, `chai-m*`, `chai-gap*`
- Colors: `chai-bg-*`, `chai-text-*`, `chai-border-*`
- Borders: `chai-b*`, `chai-rounded*`
- Typography: `chai-font-*`
- Layout and alignment: `chai-flex*`, `chai-items-*`, `chai-justify-*`, `chai-text-left|center|right|justify`
- Positioning: `chai-static|fixed|absolute|relative|sticky`, `chai-top-*`, `chai-right-*`, `chai-bottom-*`, `chai-left-*`

## Module Compatibility

This package ships dual outputs:

- ESM import: `dist/index.js`
- CJS require: `dist/index.cjs`

Example:

```js
// ESM
import "brewwind";

// CJS
require("brewwind");
```

## Scripts

```bash
npm run build
npm run build:watch
```

## Publishing

`prepublishOnly` runs the production build automatically, and package publishing is restricted to production-safe files through `package.json` `files`.
