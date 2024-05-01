import { isEqualArray } from './isEqualArray'

describe('isEqualArray', () => {
  it('测试空数组和空数组相等', () => {
    expect(isEqualArray([], [])).toBe(true)
  })
  it('测试非空数组和空数组不相等', () => {
    expect(isEqualArray([1, 2, 3], [])).toBe(false)
  })
  it('测试数组内容相等', () => {
    expect(isEqualArray([1, 2, 3], [1, 2, 3])).toBe(true)
  })
  it('测试数组内容不相等', () => {
    expect(isEqualArray([1, 2, 3], [1, 4, 3])).toBe(false)
  })
  it('测试数组内容部分相等', () => {
    expect(isEqualArray([1, 2, 3], [1, 2])).toBe(false)
  })
  it('测试数组内容部分相等2', () => {
    expect(isEqualArray([1, 2, 3], [2, 3, 1])).toBe(false)
  })
  it('测试数组内容相等，但是类型不同', () => {
    expect(isEqualArray([1, 2, 3], [1, 2, '3'])).toBe(false)
  })
  it('测试数组内容相等，但是类型不同2', () => {
    expect(isEqualArray([1, 2, 3], [1, 2, '3'])).toBe(false)
  })
  it('测试数组内容相等，但是类型不同3', () => {
    expect(isEqualArray([1, 2, 3], [1, 2, { a: 3 }])).toBe(false)
  })
  it('测试数组内容相等，但是类型不同4', () => {
    expect(isEqualArray([1, 2, 3], [1, 2, { a: 3 }])).toBe(false)
  })
})
