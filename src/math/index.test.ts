/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-18 14:57:15
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-18 16:58:43
 * @Description :
 */
import { modulo, remainder } from './index'

describe('Test modulo function', () => {
  test('modulo of 7 and 3 should be 1', () => {
    expect(modulo(7, 3)).toBe(1)
  })

  test('modulo of 7 and -3 should be -1', () => {
    expect(modulo(-7, -3)).toBe(-1)
  })

  test('modulo of 7 and -3 should be -2', () => {
    expect(modulo(7, -3)).toBe(-2)
  })

  test('modulo of -7 and 3 should be 2', () => {
    expect(modulo(-7, 3)).toBe(2)
  })

  test('modulo of 0 and 5 should be 0', () => {
    expect(modulo(0, 5)).toBe(0)
  })

  test('modulo of 10 and 2 should be 0', () => {
    expect(modulo(10, 2)).toBe(0)
  })

  test('modulo of 15 and 4 should be 3', () => {
    expect(modulo(15, 4)).toBe(3)
  })
})

describe('Test remainder function', () => {
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
})
