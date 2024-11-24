# petite-utils 是什么？

petite-utils 是一个轻量级的 JavaScript 工具库，它提供了一些常用的工具函数，可以帮助你更方便地进行开发。

## 特性

- 轻量：petite-utils 的体积非常小，gzip 压缩后仅有几 KB。
- 简单：petite-utils 的 API 经过精心设计，符合使用直觉。
- 通用：petite-utils 可以在浏览器和 Node.js 环境中使用。
- tree-shake：petite-utils 的每个工具函数都是独立的，你可以按需引入，无需担心打包体积。
- TypeScript：petite-utils 使用 TypeScript 编写，并提供了完整的类型定义。

## 快速开始

你可以直接在浏览器中使用 petite-utils，也可以在 Node.js 环境中使用。

### 在 Node.js 环境中使用

```bash
npm install petite-utils
```

或者通过 yarn 安装：

```bash
yarn add petite-utils
```

引入 ES 模块：

```js
import { repeatRun } from 'petite-utils'

// 每隔 1 秒输出一次 'Hello, petite-utils!'
repeatRun(fn, {
  interval: 1000,
  immediate: true,
})
function fn(stop, repeatTimes) {
  console.log('Hello, petite-utils! ES module')
  if (repeatTimes >= 5) {
    stop()
  }
}
```

引入 CommonJS 模块：

```js
const { repeatRun } = require('petite-utils')

// 每隔 1 秒输出一次 'Hello, petite-utils!'
repeatRun(fn, {
  interval: 1000,
  immediate: true,
})

function fn(repeatTimes, stop) {
  console.log('Hello, petite-utils! CommonJS')
  if (repeatTimes >= 5) {
    stop()
  }
}
```

### 在浏览器中使用

> 使用 UMD 模块，函数都挂载在全局变量 `PU` 上

```html
<script src="https://cdn.jsdelivr.net/npm/petite-utils/dist/index.umd.js"></script>
<script>
  // 每隔 1 秒输出一次 'Hello, petite-utils!'
  PU.repeatRun(fn, {
    interval: 1000,
    immediate: true,
  })

  function fn(repeatTimes, stop) {
    console.log('Hello, petite-utils! UMD')
    if (repeatTimes >= 5) {
      stop()
    }
  }
</script>
```

> 使用 ES 模块

```html
<script type="module">
  import { repeatRun } from 'https://cdn.jsdelivr.net/npm/petite-utils/dist/index.js'

  // 每隔 1 秒输出一次 'Hello, petite-utils!'
  repeatRun(fn, {
    interval: 1000,
    immediate: true,
  })

  function fn(repeatTimes, stop) {
    console.log('Hello, petite-utils! ES module')
    if (repeatTimes >= 5) {
      stop()
    }
  }
</script>
```
