# petite-utils

A collection of small util function in JavaScript.

features:

* small and fast.
* node.js and browser support.
* tree-shakable.

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
    isNumber,
    repeatRun
} from 'petite-utils'
isNumber(1) // true
isNumber('1') // true
isNumber(4.917736942280289e-10) // true
isNumber(
    BigInt('0b11111111111111111111111111111111111111111111111111111'),
) // true
isNumber(NaN) // false
isNumber('a') // false

repeatRun((time,stop)=>{
  if(time===10){
    stop()
  }
  console.log('repeat run me!')

}, { interval:1000 })
```

## more usages see [petite-utils -- document](https://jackchoumine.github.io/petite-utils/)

