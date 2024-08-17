/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-18 00:32:26
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-18 01:00:25
 * @Description : 数组分块
 */
import { isNumber } from './type/type'

/**
 * 数组分块
 * @param array 数组
 * @param size 分块大小
 * @returns  返回分块后的数组
 */
export function chunk<T>(array: T[], size: number): T[][] {
  if (!Array.isArray(array)) {
    throw new Error('第一个参数必须是一个一维数组')
  }
  if (!isNumber(size)) {
    throw new Error('第二个参数必须是一个数字')
  }
  const result = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
