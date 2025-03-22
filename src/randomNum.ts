/*
 * @Author      : ZhouQiJun
 * @Date        : 2025-03-06 16:02:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2025-03-22 20:34:42
 * @Description : randomNum 函数 - 生成随机数
 */
export function randomNum(length: number = 6) {
  const arr: number[] = []
  let n = ''
  const str = '1234566789'
  for (var i = 0; i < length; i++) {
    if (i === 0) {
      arr[i] = +str[Math.ceil(Math.random() * 9)]
    } else {
      arr[i] = Number.parseInt(Math.random() * 10 + '')
    }
    n += String(arr[i])
  }
  return Number.parseInt(n)
}
