export function upsetOrder<T>(arr: T[], from: number = 0): T[] {
  if (!Array.isArray(arr)) {
    return []
  }

  if (from < 0 || from >= arr.length) {
    // deep copy
    return arr.slice(0, arr.length)
  }

  const unChangePart = arr.slice(0, from)
  const upsetPart = arr.slice(from)
  if(upsetPart.length <=1) {
    return arr.slice(0, arr.length)
  }
  const size = upsetPart.length

  for (let i = 0; i < size; i++) {
    // BUG: 不够随机
    const randomIndex = Math.floor(Math.random() * size)
    const temp = upsetPart[i]
    upsetPart[i] = upsetPart[randomIndex]
    upsetPart[randomIndex] = temp
  }

  return unChangePart.concat(upsetPart)
}
