/// <reference types="vitest" />
import { defineConfig } from 'vite'

// import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./src/**/*.test.ts'],
  },
  build: {
    // TODO 多个入口 https://github.com/vitejs/vite/discussions/1736
    // TODO 目录原样输出
    lib: {
      entry: 'index.ts',
      // 全局变量名
      name: 'sum',
      formats: ['es', 'cjs'], // TODO 'umd', 'iife' 如何注入全局变量 window
      fileName: format => {
        // console.log('format', format)
        if (format === 'es') return `index.js`
        if (format === 'cjs') return `index.cjs`
        return `index.${format}.js`
      },
    },
    rollupOptions: {
      //   external: ['lodash'],
      //   output: {
      //     globals: {
      //       lodash: '_',
      //     },
      //   },
    },
  },
})
