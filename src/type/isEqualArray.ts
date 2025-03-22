/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-01 19:22:50
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:44:55
 * @Description : 数组元素是否相同
 */
/**
 * @group 类型检查
 * @param arr1 第一个数组
 * @param arr2 第二个数组
 * @returns
 */
export function isEqualArray(arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
