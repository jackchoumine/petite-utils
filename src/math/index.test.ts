/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-18 14:57:15
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-06 16:00:58
 * @Description :
 */
import { describe, expect, it } from 'vitest'

import { modulo, remainder } from './index'

describe('it modulo function', () => {
  it('modulo of 7 and 3 should be 1', () => {
    expect(modulo(7, 3)).toBe(1)
  })

  it('modulo of 7 and -3 should be -1', () => {
    expect(modulo(-7, -3)).toBe(-1)
  })

  it('modulo of 7 and -3 should be -2', () => {
    expect(modulo(7, -3)).toBe(-2)
  })

  it('modulo of -7 and 3 should be 2', () => {
    expect(modulo(-7, 3)).toBe(2)
  })

  it('modulo of 0 and 5 should be 0', () => {
    expect(modulo(0, 5)).toBe(0)
  })

  it('modulo of 10 and 2 should be 0', () => {
    expect(modulo(10, 2)).toBe(0)
  })

  it('modulo of 15 and 4 should be 3', () => {
    expect(modulo(15, 4)).toBe(3)
  })

  it('modulo of 11 and 13 should be 11', () => {
    expect(modulo(11, 13)).toBe(11)
  })

  it('modulo of 12 and 13 should be 12', () => {
    expect(modulo(12, 13)).toBe(12)
  })

  it('modulo of 12 and 13 should be 12', () => {
    expect(modulo(12, 13)).toBe(12)
  })
  it('modulo of 13 and 13 should be 0', () => {
    expect(modulo(13, 13)).toBe(0)
  })
  it('modulo of 14 and 13 should be 1', () => {
    expect(modulo(14, 13)).toBe(1)
  })
})

describe('it remainder function', () => {
  it('remainder of 7 and 3 should be 1', () => {
    expect(remainder(7, 3)).toBe(1)
  })
  it('remainder of 7 and 3 should be 1', () => {
    expect(remainder(-7, 3)).toBe(-1)
  })
  it('remainder of 7 and 3 should be 1', () => {
    expect(remainder(7, -3)).toBe(1)
  })
  it('remainder of 7 and 3 should be 1', () => {
    expect(remainder(-7, -3)).toBe(-1)
  })
  it('remainder of 0 and 13 should be 0', () => {
    expect(remainder(0, 13)).toBe(0)
  })
})
