/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-07 16:38:27
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-08 18:39:29
 * @Description : commitlint 配置文件
 */
const config = require('./.cz-config.cjs')
// console.log(config)
const typeList = config.types.map(item => item.value)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [
      2, // 2 表示必须
      'always',
      typeList,
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
}
