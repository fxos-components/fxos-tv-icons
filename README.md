# fxos-tv-icons

## Installation

```bash
$ npm install fxos-tv-icons
```

Then include folowing file in HTML

```html
<link rel="stylesheet" href="node_modules/fxos-tv-icons/fxos-tv-icons.css">
```

## Usage

Use `i` tag to represent an icon.

```html
<i data-icon="camera" data-l10n-id="camera"></i>
```

## Examples

- [Example](http://fxos-components.github.io/fxos-tv-icons/)

## Contributions

If you wish to make changes to the icon font you'll need to follow these steps:

1. Add, remove or change respective `.svg` files inside `images/`.
2. Run `$ npm install` to get pull in all the required build tools.
3. Make sure you have `fontforge` and `ttfautohint` installed on your machine. The [grunt-webfont](https://github.com/sapegin/grunt-webfont#installation) installation guide outlines the prerequisites.
4. Run `$ grunt`.
5. Load `index.html` locally in your browser and check your icon looks good.
6. Submit a pull request.
7. Module owner will review, land, and stamp a new version.

## Lint check

Run lint check with command:

`$ npm run lint`
