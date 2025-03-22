/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:00:17
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-28 04:13:07
 * @Description : 防抖
 */
/**
 * @group 工具函数
 * @param fn function need to debounce
 * @param wait debounce time default 500ms
 * @param isImmediate if true, execute immediately when trigger, default false
 * @returns new function
 */
export function debounce(fn, wait = 500, isImmediate = false) {
  let timer
  return (...rest) => {
    isImmediate && !timer && fn(...rest)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...rest)
    }, wait)
  }
}
