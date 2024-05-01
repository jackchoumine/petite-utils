export function uuid() {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      const str = c === 'x' ? r : (r & 0x7) | 0x8
      return str.toString(16)
    },
  )
  return uuid
}
