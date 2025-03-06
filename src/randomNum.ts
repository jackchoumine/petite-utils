/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-06 16:02:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-06 16:06:55
 * @Description : randomNum 函数 - 生成随机数
 */
export function randomNum(length: number = 6): number {
  const arr: number[] = []
  let n = ''
  for (var i = 0; i < length; i++) {
    arr[i] = Number.parseInt(Math.random() * 10 + '')
    n += String(arr[i])
  }
  return Number.parseInt(n)
}
