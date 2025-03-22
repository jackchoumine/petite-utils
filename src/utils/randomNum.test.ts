/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-22 19:49:08
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 20:35:28
 * @Description : 随机数字测试
 */
import { describe, expect, it } from 'vitest'

import { randomNum } from './randomNum'
import { isNumber } from '../type/type'

describe('randomNum', () => {
  describe('use default params', () => {
    it('应该返回一个6位整数', () => {
      const n = randomNum()

      expect(isNumber(n)).toBe(true)
      expect(('' + n).length).toBe(6)
    })
  })
  describe('传递参数', () => {
    it('应该返回一个 10 位整数', () => {
      const n = randomNum(10)

      expect(isNumber(n)).toBe(true)
      expect(('' + n).length).toBe(10)
    })
  })
})
