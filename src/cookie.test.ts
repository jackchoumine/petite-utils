import { clearAllCookie, getCookie, removeCookie, setCookie } from './cookie'

describe('getCookie', () => {
  afterEach(() => {
    clearAllCookie()
  })
  it('should get cookie', () => {
    document.cookie = 'name=cookie'
    expect(getCookie('name')).toBe('cookie')
  })
  it('should return empty string when cookie is not exist', () => {
    document.cookie = 'name=cookie'
    expect(getCookie('name')).toBe('cookie')
    expect(getCookie('name1')).toBe(null)
  })
})
describe('setCookie', () => {
  beforeEach(() => {
    clearAllCookie()
  })
  it('should set cookie', () => {
    setCookie('name', 'cookie')
    expect(getCookie('name')).toBe('cookie')
  })
  it('should set cookie with expires', () => {
    setCookie('name', 'cookie', 1)
    expect(getCookie('name')).toBe('cookie')
  })
})
describe('removeCookie', () => {
  beforeEach(() => {
    clearAllCookie()
  })
  it('should remove cookie', () => {
    setCookie('name', 'cookie')
    removeCookie('name')
    expect(getCookie('name')).toBe(null)
  })
})

describe('clearAllCookie', () => {
  beforeEach(() => {
    clearAllCookie()
  })
  it('should clear all cookie', () => {
    setCookie('name', 'cookie')
    setCookie('name1', 'cookie1', 30)

    expect(getCookie('name')).toBe('cookie')
    expect(getCookie('name1')).toBe('cookie1')

    clearAllCookie()

    expect(getCookie('name')).toBe(null)
    expect(getCookie('name1')).toBe(null)
  })
})
