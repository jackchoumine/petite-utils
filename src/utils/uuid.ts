/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-01 18:25:22
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:05:37
 * @Description : 生成 uuid
 */
/**
 * @group 工具函数
 * @returns
 */
export function uuid() {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      const str = c === 'x' ? r : (r & 0x7) | 0x8
      return str.toString(16)
    },
  )
  return uuid
}
