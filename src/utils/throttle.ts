/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-28 03:04:01
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-23 21:09:29
 * @Description : 节流
 */
/**
 * @group 工具函数
 * @param fn 待节流的函数
 * @param interval 间隔时间，毫秒，默认 200
 * @param immediate 是否立即执行，默认 false
 * @returns
 */
export function throttle(fn, interval = 200, immediate = false) {
  let last = Date.now() // 上次执行的时间戳
  let timer = null // 定时器
  let hasCalled = false // 是否是第一次调用

  return (...rest) => {
    const now = Date.now()

    if (immediate && !hasCalled) {
      // 如果是第一次调用且需要立即执行
      fn(...rest)
      last = now
      hasCalled = true
    }

    clearTimeout(timer) // 清除之前的定时器

    if (now - last >= interval) {
      // 如果距离上次执行的时间超过 interval，则立即执行
      fn(...rest)
      last = now
    } else {
      // 否则，设置定时器，在剩余时间后执行
      timer = setTimeout(
        () => {
          fn(...rest)
          last = Date.now()
        },
        // 保证时间间隔为 interval 内
        interval - (now - last),
      )
    }
  }
}
