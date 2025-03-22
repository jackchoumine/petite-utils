/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-05-01 20:10:15
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 22:02:43
 * @Description : 数组去重
 */
/**
 * @group 工具函数
 * @param arr 数组
 * @returns
 */
export function removeRepeat(arr: any[]) {
  if (!Array.isArray(arr)) {
    return []
  }
  return Array.from(new Set(arr))
}
