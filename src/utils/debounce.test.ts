/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-23 13:27:22
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-23 19:28:37
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

  it('函数调用后等待 500 毫秒才调用', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn)

    debouncedFn()
    expect(mockFn).not.toHaveBeenCalled() // 函数不应立即调用

    vi.advanceTimersByTime(500) // 快进 500ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 函数应被调用一次
  })

  it('等待时间内多次调用，只调用最后一次', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()

    vi.advanceTimersByTime(100) // 快进 100ms

    debouncedFn() // 重新等待 500ms

    vi.advanceTimersByTime(300) // 快进 300ms
    expect(mockFn).toHaveBeenCalledTimes(0) // 此时还没调用

    vi.advanceTimersByTime(200) // 快进 500ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 第二次的调用
  })

  it('should call the function immediately if isImmediate is true', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 100, true)

    debouncedFn() //  立即调用，不需等待
    expect(mockFn).toHaveBeenCalledTimes(1) // 立即调用一次

    debouncedFn() // 等待 100ms

    vi.advanceTimersByTime(90) // 快进 90ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 第二次还没调用

    vi.advanceTimersByTime(5) // 再快进 5ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 第二次还是没调用

    vi.advanceTimersByTime(5) // 快进 100ms
    expect(mockFn).toHaveBeenCalledTimes(2) // 第二次才调用
  })

  it('在等待时间内有调用，重新等待', () => {
    const mockFn = vi.fn()
    const debouncedFn = debounce(mockFn, 500)

    debouncedFn()
    vi.advanceTimersByTime(300) // 快进 300ms

    debouncedFn() // 再次调用，取消之前的定时器，重新等待

    vi.advanceTimersByTime(400) // 快进 400ms 此时没还没调用
    expect(mockFn).toHaveBeenCalledTimes(0) //

    vi.advanceTimersByTime(100) // 快进 500ms
    expect(mockFn).toHaveBeenCalledTimes(1) // 第二次调用
  })
})
