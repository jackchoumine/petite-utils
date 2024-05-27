/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:00:17
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-28 03:02:38
 * @Description : 防抖
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
