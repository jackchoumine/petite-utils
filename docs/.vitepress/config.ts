/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-10-28 16:59:54
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-10-28 17:40:20
 * @Description :
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'petite-utils',
  description: 'util functions often used in browser and node',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: 'petite-utils 是什么？', link: '/what-is-petite-utils' },
          { text: '快速上手', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
