/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:04:01
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-28 03:51:05
 * @Description : 节流
 */
export function throttle(fn, wait = 500, isImmediate = false) {
  let last = Date.now()
  let timer
  return (...rest) => {
    isImmediate && fn(...rest)
    const now = Date.now()
    clearTimeout(timer)
    if (now - last >= wait) {
      fn(...rest)
      last = now
      return
    }
    //NOTE 事件结束后，保证再执行一次
    timer = setTimeout(() => {
      fn(...rest)
    }, wait)
  }
}
