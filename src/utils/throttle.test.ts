/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-23 19:35:02
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-23 20:59:02
 * @Description : 节流函数
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { throttle } from './throttle'

describe('throttle', () => {
  beforeEach(() => {
    // 使用假定时器
    vi.useFakeTimers()
  })

  afterEach(() => {
    // 恢复真实定时器
    vi.useRealTimers()
  })

  it('持续触发，每次调用时间间隔相同', () => {
    const INTERVAL = 500
    const intervals: number[] = []
    let last = Date.now()
    const mockFn = vi.fn(() => {
      const now = Date.now()
      const diff = now - last
      intervals.push(diff)
      last = now
    })
    const throttledFn = throttle(mockFn, INTERVAL)

    throttledFn() // 第一次触发
    vi.advanceTimersByTime(200) // 快进 200ms

    throttledFn() // 第二次触发
    expect(mockFn).toHaveBeenCalledTimes(0) // 未达到间隔时间，不应调用

    vi.advanceTimersByTime(300) // 快进 300ms（总计 500ms）

    expect(mockFn).toHaveBeenCalledTimes(1) // 达到间隔时间，第一次调用

    // 第一次调用后，重新等待
    vi.advanceTimersByTime(400) // 快进 400ms
    throttledFn() // 多次触发
    throttledFn() //
    throttledFn() //
    throttledFn() //
    vi.advanceTimersByTime(100) // 快进 100ms，总共 500ms

    expect(mockFn).toHaveBeenCalledTimes(2) // 达到间隔时间，第一次调用

    throttledFn()
    throttledFn()
    throttledFn()
    vi.advanceTimersByTime(500) // 快进 500ms

    expect(mockFn).toHaveBeenCalledTimes(3) // 等待时间内，多次触发，只执行一次

    throttledFn()
    throttledFn()
    vi.advanceTimersByTime(500) // 快进 500ms

    expect(mockFn).toHaveBeenCalledTimes(4)

    // 每次调用的间隔都是 INTERVAL
    expect(intervals).toHaveLength(4)
    intervals.forEach((diff, index) => {
      expect(diff).toBe(INTERVAL)
    })
  })

  it('保证间隔内，至少调用一次', () => {
    const INTERVAL = 1000
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, INTERVAL)

    throttledFn() // 第一次触发
    vi.advanceTimersByTime(200) // 快进 200ms
    throttledFn() // 第二次触发
    vi.advanceTimersByTime(200) // 快进 200ms（总计 400ms）
    throttledFn() // 第三次触发

    expect(mockFn).toHaveBeenCalledTimes(0) // 400毫秒后

    vi.advanceTimersByTime(600) // 累计 推进 1000 毫秒

    expect(mockFn).toHaveBeenCalledTimes(1) // 1000毫秒内，调用一次
  })

  it('参数 isImmediate 为 true，第一次触发，立即调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 500, true)

    throttledFn() // 第一次调用
    expect(mockFn).toHaveBeenCalledTimes(1) // 立即调用一次

    throttledFn() // 第二次调用
    vi.advanceTimersByTime(200) // 快进 200ms

    expect(mockFn).toHaveBeenCalledTimes(1) // 未达到间隔时间，不应调用

    vi.advanceTimersByTime(300) // 快进 300ms（总计 500ms）
    expect(mockFn).toHaveBeenCalledTimes(2) // 达到间隔时间，应调用第二次
  })

  it('参数 isImmediate 为 false，第一次触发，不立即调用', () => {
    const mockFn = vi.fn()
    const throttledFn = throttle(mockFn, 500, false)

    throttledFn() // 第一次触发
    expect(mockFn).toHaveBeenCalledTimes(0) // 立即调用一次

    throttledFn() // 第二次触发
    vi.advanceTimersByTime(200) // 快进 200ms

    expect(mockFn).toHaveBeenCalledTimes(0) // 未达到间隔时间，不应调用

    vi.advanceTimersByTime(300) // 快进 300ms（总计 500ms）
    expect(mockFn).toHaveBeenCalledTimes(1) // 达到间隔时间，第一次调用
  })
})
