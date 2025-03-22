/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-07-16 23:03:23
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:00:48
 * @Description : 随机字符串
 */
import { isBoolean, isNumber } from '../type/type'

/**
 * @group 工具函数
 * @param [min=7] 最小长度
 * @param [max=36] 最大长度
 * @param [startLetter=true] 是否需要字母开头
 * @returns
 */
export function randomStr(
  min: number | string = 7,
  max: number | string = 36,
  startLetter = true,
) {
  if (!isNumber(+min) || !isNumber(+max) || !isBoolean(startLetter)) {
    return 'min, max should be number, startLetter should be boolean'
  }
  if (+min < 0 || +max < 0) {
    return 'min, max should be positive number'
  }
  if (min > max) {
    return 'min should be less than max'
  }
  min = +min
  max = +max
  const number = '0123456789'
  const letter = 'abcdefghijklmnopqrstuvwxyz'
  const LETTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const all = number + letter + LETTER
  const allLetters = letter + LETTER
  let str = ''
  const length = Math.floor(Math.random() * (max - min)) + min
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * all.length)
    str += all[index]
  }
  if (startLetter && /^[0-9]/.test(str)) {
    const index = Math.floor(Math.random() * allLetters.length)
    str = allLetters[index] + str.slice(1)
  }
  if (!startLetter && /^[a-zA-Z]/.test(str)) {
    const index = Math.floor(Math.random() * number.length)
    str = number[index] + str.slice(1)
  }
  return str
}
