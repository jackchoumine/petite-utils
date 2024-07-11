/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 10:20:30
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-07-11 18:35:28
 * @Description : vitest 配置文件
 */
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'auto-imports.d.ts',
      imports: ['vitest'],
    }),
  ],
  test: {
    // include: ['./src/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      // exclude: ['src/**/*.test.ts']
      include: ['src/**/*.ts'],
      exclude: ['src/index.ts'],
    },
  },
})
