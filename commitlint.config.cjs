/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-07 16:38:27
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-08 18:39:29
 * @Description : commitlint 配置文件
 */
const config = require('./.cz-config.cjs')
console.log(config)
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义
    'type-enum': [
      2, // 2 表示必须
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'format', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化的改动
        'test', // 增加测试
        'merge', // 合并分支
        'docs', // 更新文档
        'revert', // git 版本回退
        'build', // 构建相关
        'chore', // 其他改动
        'release', // 发布版本
      ],
    ],
    // subject 大小写不做校验
    'subject-case': [0],
  },
}
