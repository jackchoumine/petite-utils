/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-22 20:39:23
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 21:12:46
 * @Description : 重复执行函数
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { repeatRun } from './repeatRun'

describe('repeatRun 重复执行函数', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('重复执行函数', () => {
    const fn = vi.fn()

    repeatRun(fn, { interval: 1000 })

    // 向前推进 5 秒
    vi.advanceTimersByTime(1000 * 5)

    expect(fn).toBeCalledTimes(5)
  })
  it('重复执行函数，检查参数是否为重复执行的次数', () => {
    const fn = vi.fn()

    repeatRun(fn, { interval: 1000 })

    // 向前推进 5 秒
    vi.advanceTimersByTime(1000 * 5)

    fn.mock.calls.every((call, i) => expect(call[0]).toBe(i + 1))
  })
  it('重复执行函数, 中断', () => {
    const fn = vi.fn()

    const stop = repeatRun(fn, { interval: 100 })
    // 向前推进 5 秒
    vi.advanceTimersByTime(1000 * 5)

    expect(fn).toBeCalledTimes(50)
    // 提前结束，继续向前推进
    stop()
    vi.advanceTimersByTime(1000 * 5)

    //仍然只执行了 50 次
    expect(fn).toBeCalledTimes(50)
  })
})
