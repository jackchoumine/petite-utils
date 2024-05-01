export function randomStr(min: number = 7, max: number = 36, shouldStartLetter = true): string {
  if (
    typeof min !== 'number' ||
    typeof max !== 'number' ||
    typeof shouldStartLetter !== 'boolean'
  ) {
    return 'min, max should be number, shouldStartLetter should be boolean'
  }
  if (min < 0 || max < 0) {
    return 'min, max should be positive number'
  }
  if (min > max) {
    return 'min should be less than max'
  }
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
  return str
}
