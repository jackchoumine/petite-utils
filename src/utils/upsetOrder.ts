/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-01 23:41:09
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:07:07
 * @Description : 打乱数组
 */

/**
 * @group 工具函数
 * @param arr 待打乱的数组
 * @param from 打乱开始的下标
 * @returns
 */
export function upsetOrder<T>(arr: T[], from: number = 0): T[] {
  if (!Array.isArray(arr)) {
    return []
  }

  if (from < 0 || from >= arr.length) {
    // deep copy
    return arr.slice(0, arr.length)
  }

  const unChangePart = arr.slice(0, from)
  const upsetPart = arr.slice(from)
  if(upsetPart.length <=1) {
    return arr.slice(0, arr.length)
  }
  const size = upsetPart.length

  for (let i = 0; i < size; i++) {
    // BUG: 不够随机
    const randomIndex = Math.floor(Math.random() * size)
    const temp = upsetPart[i]
    upsetPart[i] = upsetPart[randomIndex]
    upsetPart[randomIndex] = temp
  }

  return unChangePart.concat(upsetPart)
}
