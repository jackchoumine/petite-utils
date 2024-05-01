export function randomStr(
  min: number = 7,
  max: number = 36,
  shouldLetterStart = true
): string {
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
  if (shouldLetterStart && /^[0-9]/.test(str)) {
    const index = Math.floor(Math.random() * allLetters.length)
    str = allLetters[index] + str.slice(1)
  }
  return str
}
