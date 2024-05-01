export function removeRepeat(arr: any[]) {
  if (!Array.isArray(arr)) {
    return []
  }
  return Array.from(new Set(arr))
}
