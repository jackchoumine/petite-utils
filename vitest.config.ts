import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: 'src/auto-imports.d.ts',
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
