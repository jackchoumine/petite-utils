/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-08-18 00:34:19
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-08-18 01:00:33
 * @Description : 数组分块
 */
import { chunk } from './chunk'

describe('chunk', () => {
  it('chunk should split the array into chunks of the specified size', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const size = 3
    const result = chunk(array, size)
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
  })

  it('chunk should throw an error if the first parameter is not an array', () => {
    expect(() => chunk('hello', 2)).toThrow(
      '第一个参数必须是一个一维数组',
      //   'The first parameter must be a one-dimensional array',
    )
  })

  it('chunk should throw an error if the second parameter is not a number', () => {
    expect(() => chunk([1, 2, 3], '2')).toThrow(
      '第二个参数必须是一个数字',
      //   'The second parameter must be a number',
    )
  })
})
