/**
 * m mod n,
 * it is different from % operator in javascript
 * % operator is remainder operator,  m % n is same to  m - n * Math.trunc(m / n).
 * Modulo operator is m mod n is same to  m - n * Math.floor(m / n)
 * @link https://www.designcise.com/web/tutorial/what-is-the-difference-between-the-javascript-remainder-operator-and-the-modulo-operator
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

export { modulo }
