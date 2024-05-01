module.exports = {
  semi: false, // 默认 true
  singleQuote: true, // 字符串使用单引号 默认为 false
  arrowParens: 'avoid', // 箭头函数只有一个参数时，是否给括号 js：avoid ts : always
  bracketSameLine: false, // jsx 开头标签的 > 和 < 是否在同一行
  jsxSingleQuote: true, // 在 jsx 中使用单引号
  embeddedLanguageFormatting: 'auto',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
