import {
  isArray,
  isBoolean,
  isFunction,
  isNullOrUndefined,
  isNumber,
  isObject,
} from './type/type'

export function setCookie(
  name: string,
  value: string | object | Array<any> | boolean = '',
  expiresInDay: number = 30,
) {
  if (!name) return false
  if (!isNumber(expiresInDay)) expiresInDay = 30
  const milliseconds_one_day = 24 * 60 * 60 * 1000
  const date = new Date()
  date.setTime(date.getTime() + expiresInDay * milliseconds_one_day)
  if (isFunction(value) || isNullOrUndefined(value)) return false
  if (isArray(value) || isObject(value) || isBoolean(value)) {
    value = JSON.stringify(value)
  }
  value = encodeURIComponent(value as string)
  // write the cookie
  document.cookie = `${encodeURIComponent(name)}=${value}; expires=${date.toUTCString()}`
  return true
}

export function getCookie(name: string): string {
  if (!name) return ''
  if (!document.cookie) return ''
  const cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    const [key, value] = cookie.split('=')
    if (key === name) {
      try {
        const val = JSON.parse(decodeURIComponent(value))
        return val
      } catch (error) {
        // maybe set cookie by other way like document.cookie = 'name=cookie'
        return value
      }
    }
  }
  return ''
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
