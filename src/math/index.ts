/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-11-28 11:34:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-11-28 12:59:40
 * @Description : math 相关函数
 */
/**
 * m mod n,
 * it is different from % operator in javascript
 * % operator is remainder operator,  m % n is same to  m - n * Math.trunc(m / n).
 * Modulo operator is m mod n is same to  m - n * Math.floor(m / n)
 * {@link https://www.designcise.com/web/tutorial/what-is-the-difference-between-the-javascript-remainder-operator-and-the-modulo-operator}
 * @example
 * modulo(7, 3) // 1
 * modulo(-7, -3) // -1
 * modulo(7, -3) // -2
 * modulo(-7, 3) // 2
 * @param m
 * @param n
 * @returns
 */
function modulo(m: number, n: number): number {
  // same to
  // m - n * Math.floor(m / n)
  return ((m % n) + n) % n
}

/**
 * m remainder n 取余数
 * @example
 * remainder(7, 3) // 1
 * remainder(-7, 3) // -1
 * remainder(7, -3) // 1
 * remainder(-7, -3) // -1
 * @param dividend
 * @param divisor
 * @returns remainder
 * {@link https://stackoverflow.com/questions/38702724/math-floor-vs-math-trunc-javascript}
 */
function remainder(dividend: number, divisor: number): number {
  const quotient = Math.trunc(dividend / divisor)
  return dividend - divisor * quotient
}

export { modulo, remainder }
