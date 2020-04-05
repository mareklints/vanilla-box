# Vanilla Box

Simple popup-manager for frontend projects written in pure Vanilla JavaScript.

## TL;DR

- simple
- HTML5-based
- configurable
- customizable

## Installation

With [npm](https://www.npmjs.com/package/@marek.lints/vanilla-box):

```
npm install @marek.lints/vanilla-box
```

## Usage

The following imports are needed in order to use the package:

Main entry point: *(like app.js)*:
```js
// Package-related imports
import '@marek.lints/vanilla-box/popup.css';
import '@marek.lints/vanilla-box/config.css';
import { configmanager } from '@marek.lints/vanilla-box';

// Your own styles related to vanilla-box
import '../css/app.css';
```

### Example 1

Opening popup window with a predefined configuration:

app.js:
```js
document.querySelector('#popupContainer1').innerHTML = /*html*/`
    <popup-window config-name="blank_400_400">
    <template>
        <div>
            <h1>This is a headline</h1>
            <p>
                This is popup content
            </p>
        </div>
    </template>
    </popup-window>
    <button>Open (from center)</button>
`;

document
    .querySelector('#popupContainer1 button')
    .addEventListener(
        'click', 
        () => document
            .querySelector('#popupContainer1 popup-window').open()
    );
```

index.html:
```html
<div id="popupContainer1"></div>
```

### Example 2

Opening popup window with a custom configuration:

app.js:
```js
// Registaring a custom configuration
configmanager.addConfig('blank_90pct_50pct', {
    top: 0,
    appearFrom: 'right',
    isFixed: false,
    width: '300px',
    height: '80%',
    background: 'lightskyblue',
    displayCloseButton: true,
    coverBackground: 'white',
    coverOpacity: '90%',
    coverCloseOnClick: true
});
document.querySelector('#popupContainer2').innerHTML = /*html*/`
    <popup-window config-name="blank_90pct_50pct">
    <template>
        <div>
            <h1>This is a headline</h1>
            <p>
                This is a box content
            </p>
        </div>
    </template>
    </popup-window>
    <button>Open (from right)</button>
`;
document
    .querySelector('#popupContainer2 button')
    .addEventListener(
        'click', 
        () => document.
            querySelector('#popupContainer2 popup-window').open());
```

index.html:
```html
<div id="popupContainer2"></div>
```

### Example 3

Opening popup window with a custom configuration:

index.html:
```html
<popup-window config-name="default">
    <template>
        <div>
            <h1>This is a headline</h1>
            <p>
                This is a box content
            </p>
        </div>
    </template>
</popup-window>
<button 
    onclick="document.querySelector('popup-window[config-name=default]').open()">
    Open (default)
</button>
```

### Example 4

Opening popup window with a custom configuration and custom style:

app.js:
```js
// Registering a custom configuration
configmanager.addConfig('blank_300px_100pct', {
    top: 0,
    appearFrom: 'left',
    isFixed: true,
    cssClass: 'popup-blank-300px-100pct',
    displayCloseButton: true,
    coverBackground: 'white',
    coverOpacity: '90%',
    coverCloseOnClick: true
});
document.querySelector('#popupContainer4').innerHTML = /*html*/`
    <popup-window config-name="blank_300px_100pct">
    <template>
        <div>
            <h1>This is a headline</h1>
            <p>
                This is a box content
            </p>
        </div>
    </template>
    </popup-window>
    <button>Open (from left)</button>
`;
document
    .querySelector('#popupContainer4 button')
    .addEventListener(
        'click', 
        () => document.querySelector('#popupContainer4 popup-window').open());
```

index.html:
```html
<div id="popupContainer4"></div>
```

app.css:
```css
.popup-blank-300px-100pct {
    width: 300px;
    height: 100%;
    background: darkorchid;
}
```

## Configuration options

Predefined configurations:
- default
- blank_300_300
- blank_400_400

### Options

The following properties has to be specified when creating a custom configuration.

---
***Required properties:***

**top:** `0` [in pixels]

**appearFrom:** `'top'` | `'right'` | `'left'` | `'center'`

**isFixed:** `true` | `false`

**displayCloseButton:** `true` | `false`

**coverBackground:** `'white'` [any color or color code]

**coverOpacity:** `'90%'` [any percentage]

**coverCloseOnClick:** `true` | `false`

---
***Optional properties (either these):***

**width:** `'300px'` [any value, any unit] *[optional]*

**height:** `'80%'` [any value, any unit] *[optional]*

**background:** `'white'` [any color or color code] *[optional]*

***... or the one below:***

**cssClass:** `'your-custom-style'` *[optional]*

---