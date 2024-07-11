import { isBoolean, isNumber } from './type/type'

export function randomStr(
  min: number | string = 7,
  max: number | string = 36,
  shouldStartLetter = true,
): string {
  if (!isNumber(min) || !isNumber(max) || !isBoolean(shouldStartLetter)) {
    return 'min, max should be number, shouldStartLetter should be boolean'
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
  if (shouldStartLetter && /^[0-9]/.test(str)) {
    const index = Math.floor(Math.random() * allLetters.length)
    str = allLetters[index] + str.slice(1)
  }
  if (!shouldStartLetter && /^[a-zA-Z]/.test(str)) {
    const index = Math.floor(Math.random() * number.length)
    str = number[index] + str.slice(1)
  }
  return str
}
