# petite-utils

A collection of small util function in JavaScript.

features:

- small and fast.
- node.js and browser support.
- tree-shakable.
- high unit test coverage.

| function    | coverage |
| ----------- | -------- |
| debounce    | 100%     |
| throttle    | 100%     |
| randomNum   | 100%     |
| randomStr   | 100%     |
| repeatRun   | 100%     |
| chunk       | 100%     |
| uuid        | 100%     |
| isNull      | 100%     |
| isUndefined | 100%     |
| isNullish   | 100%     |
| isObject    | 100%     |
| isArray     | 100%     |
| isBoolean   | 100%     |
| isDate      | 100%     |
| isError     | 100%     |
| isNumber    | 100%     |
| isNumerical | 100%     |
| isString    | 100%     |
| isSymbol    | 100%     |
| isRegExp    | 100%     |
| isPrimitive | 100%     |
| isFalsy     | 100%     |
| isTruthy    | 100%     |
| isFunction  | 100%     |
| isEmptyStr  | 100%     |
| isEmpty     | 100%     |

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
import { isNumber, repeatRun } from 'petite-utils'

isNumber(1) // true
isNumber('1') // true
isNumber(4.917736942280289e-10) // true
isNumber(BigInt('0b11111111111111111111111111111111111111111111111111111')) // true
isNumber(NaN) // false
isNumber('a') // false

repeatRun(
  (time, stop) => {
    if (time === 10) {
      stop()
    }
    console.log('repeat run me!')
  },
  { interval: 1000 },
)
```

## more usages see [petite-utils -- document](https://jackchoumine.github.io/petite-utils/)
