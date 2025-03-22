import { describe, expect, it } from 'vitest'

import { normalizeMoney } from './normalizeMoney'

// 测试用例
describe('normalizeMoney', () => {
  it('处理正常金额', () => {
    const result = normalizeMoney(1234.56)
    expect(result).toBe('1,234.56')

    const result2 = normalizeMoney(123787)
    expect(result2).toBe('123,787.00')

    const result3 = normalizeMoney(123787.86)
    expect(result3).toBe('123,787.86')
  })

  it('处理非数字金额', () => {
    const result = normalizeMoney('1234.56')
    expect(result).toBe('1,234.56')
  })

  it('处理负金额', () => {
    const result = normalizeMoney(-1234.56)
    expect(result).toBe('0')
  })

  it('处理金额为0的情况', () => {
    const result = normalizeMoney(0)
    expect(result).toBe('0.00')
  })

  it('处理金额为空字符串的情况', () => {
    const result = normalizeMoney('')
    expect(result).toBe('0')
  })

  it('处理金额为非数字字符串的情况', () => {
    const result = normalizeMoney('abc')
    expect(result).toBe('0')
  })
})
