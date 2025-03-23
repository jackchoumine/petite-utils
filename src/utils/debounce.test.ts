/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-23 13:27:22
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-23 21:22:15
 * @Description : 防抖函数
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { debounce } from './debounce'

describe('debounce', () => {
  beforeEach(() => {
    // 使用假定时器
    vi.useFakeTimers()
  })

  afterEach(() => {
    // 恢复真实定时器
    vi.useRealTimers()
  })

  it('触发后等待 200 毫秒才调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn)

    debouncedFn() // 多次触发，只调用最后一次
    debouncedFn()
    debouncedFn()

    expect(mockFn).not.toHaveBeenCalled() // 没到延迟时间，不调用

    vi.advanceTimersByTime(200) // 快进 500ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 等到延迟时间，调用
  })

  it('等待时间内，再次触发，重新等待', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()

    vi.advanceTimersByTime(100) // 快进 100ms

    debouncedFn() // 再次触发
    debouncedFn() // 重新等待 500ms

    vi.advanceTimersByTime(300) // 快进 300ms
    expect(mockFn).toHaveBeenCalledTimes(0) // 此时还没调用

    vi.advanceTimersByTime(200) // 累计快进 500ms
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('参数 immediate 为 true ，立即调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100, true)

    debouncedFn() //  立即调用，不需等待
    expect(mockFn).toHaveBeenCalledTimes(1) // 立即调用一次

    debouncedFn() // 第二次触发，重新等待 100ms

    vi.advanceTimersByTime(90) // 快进 90ms
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(5) // 再快进 5ms
    expect(mockFn).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(5) // 快进 100ms
    expect(mockFn).toHaveBeenCalledTimes(2) // 第二次才调用
  })

  it('参数 immediate 为 false ，不会立即调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100)

    debouncedFn() // 第一次触发
    expect(mockFn).toHaveBeenCalledTimes(0)

    debouncedFn() // 第二次触发，重新等待 100ms

    vi.advanceTimersByTime(90) // 快进 90ms
    expect(mockFn).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(5) // 再快进 5ms
    expect(mockFn).toHaveBeenCalledTimes(0)

    vi.advanceTimersByTime(5) // 快进 100ms
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
