export function upsetOrder<T>(arr: T[], from: number = 0): T[] {
  if (!Array.isArray(arr)) {
    return []
  }

  if (from < 0 || from >= arr.length) {
    return arr
  }

  const unChangePart = arr.slice(0, from)
  const upsetPart = arr.slice(from)
  const size = upsetPart.length

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * size)
    const temp = upsetPart[i]
    upsetPart[i] = upsetPart[randomIndex]
    upsetPart[randomIndex] = temp
  }

  return unChangePart.concat(upsetPart)
}