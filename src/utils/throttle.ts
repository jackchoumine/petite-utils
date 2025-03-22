/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:04:01
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:03:58
 * @Description : 节流
 */
/**
 * @group 工具函数
 * @param fn 待节流的函数
 * @param wait 间隔时间，毫秒
 * @param isImmediate 是否立即执行
 * @returns
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
