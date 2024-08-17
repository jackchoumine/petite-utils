/**
 * m mod n
 * @example
 * modulo(7, 3) // 1
 * modulo(7, -3) // 1
 * modulo(-7, 3) // 2
 * @param m
 * @param n
 * @returns
 */
function modulo(m: number, n: number): number {
  return ((m % n) + n) % n
}

export { modulo }
