/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:00:17
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-23 21:13:48
 * @Description : 防抖
 */
/**
 * @group 工具函数
 * @param fn function need to debounce
 * @param wait debounce time default 200ms
 * @param immediate if true, execute immediately when trigger, default false
 * @returns
 */
export function debounce(fn, wait = 200, immediate = false) {
  let timer
  return (...rest) => {
    immediate && !timer && fn(...rest)
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...rest)
    }, wait)
  }
}
