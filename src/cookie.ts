import { isNumber } from './type'

export function setCookie(
  name: string,
  value: string = '',
  expiresInDay: number = 30,
) {
  if (!name) return false
  if (!isNumber(expiresInDay)) expiresInDay = 30
  const milliseconds_one_day = 24 * 60 * 60 * 1000
  const date = new Date()
  date.setTime(date.getTime() + expiresInDay * milliseconds_one_day)
  // write the cookie
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
  return true
}

export function getCookie(name: string): null | string {
  if (!name) return null
  if (!document.cookie) return null
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    const [key, value] = cookie.split('=')
    if (key === name) {
      return value
    }
  }
  return null
}

export function removeCookie(name: string) {
  setCookie(name, '', -1)
  return true
}

export function clearAllCookie() {
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    const [key] = cookie.split('=')
    removeCookie(key)
  }
  return true
}
