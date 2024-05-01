# petite-utils

A collection of small util function in JavaScript.

features:
- small and fast.
- node.js and browser support.
- tree-shakable.

> WIP. 🚧 DON'T USE IN PRODUCTION.

## Installation

```bash
# npm
npm i petite-utils
# yarn 
yarn add petite-utils
# pnpm
pnpm add petite-utils
```

## common functions

### isNumber

> check if the value is a number.

```js
import {isNumber} from 'petite-utils'
isNumber(1) // true
isNumber('1') // true
isNumber(4.917736942280289e-10)// true
isNumber(
        BigInt('0b11111111111111111111111111111111111111111111111111111'),
      ) // true
isNumber(NaN) // false
isNumber('a') // false
```

### operate cookie

> operate cookie in browser.

```js
import {setCookie, getCookie, removeCookie,clearAllCookie} from 'petite-utils'
setCookie('name', 'value', 1) // set cookie with name, value and expires in 1 day.
getCookie('name') // get cookie by name. get value
removeCookie('name') // remove cookie by name.
clearAllCookie() // clear all cookies.

setCookie('obj', {age:10}, 1) // set cookie with name, complex value and expires in 1 day.
getCookie('obj') // get cookie by name. {age:10}
```