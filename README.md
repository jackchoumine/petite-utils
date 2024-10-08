# petite-utils

A collection of small util function in JavaScript.

features:
* small and fast.
* node.js and browser support.
* tree-shakable.

> WIP. 🚧 Don't use in production.

## Installation

```bash
# npm
npm i petite-utils
# yarn 
yarn add petite-utils
# pnpm
pnpm add petite-utils
```

## Usage

```js
// cjs module
const { randomStr } = require('petite-utils')
// ES module
import { randomStr } from 'petite-utils'
```

> use `esm` in html by cdn

```html
<!-- load ES module -->
<script type="module">
  import { randomStr } from 'https://unpkg.com/petite-utils/dist/index.js'
  const result = randomStr(20, 50)
  console.log(result)
  console.log('test in browser using esm')
</script>
```

> use `umd` in html by cdn

```html
<!-- load umd -->
<script src="https://unpkg.com/petite-utils"></script>
<!-- then use function from PU object -->
<script>
  const str = PU.randomStr()
</script>
```

### isNumber

> check if the value is a number.

```js
import {
    isNumber
} from 'petite-utils'
isNumber(1) // true
isNumber('1') // true
isNumber(4.917736942280289e-10) // true
isNumber(
    BigInt('0b11111111111111111111111111111111111111111111111111111'),
) // true
isNumber(NaN) // false
isNumber('a') // false
```

### operate cookie

> operate cookie in browser.

```js
import {
    setCookie,
    getCookie,
    removeCookie,
    clearAllCookie
} from 'petite-utils'

setCookie('name', 'value', 10) // set cookie with name, value and expires in 10 day.
getCookie('name') // get cookie by name. get value
removeCookie('name') // remove cookie by name.
clearAllCookie() // clear all cookies.

setCookie('obj', { age: 10 }, 100) // set cookie with name, complex value and expires in 100 day.
getCookie('obj') // get cookie by name. {age:10}

setCookie('array', [{ name: 'petite-utils' }], 0.5) // set cookie with array 
```

### chunk

> split array into chunks.

```js
import {
    chunk
} from 'petite-utils'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const result = chunk(arr, 3)
console.log(result) // [[1,2,3],[4,5,6],[7,8,9]]
```

### copy

> copy some text to clipboard.

```js
import {
    copy
} from 'petite-utils'
const text = 'copy this text to clipboard'
copy(text) // copy text to clipboard
```