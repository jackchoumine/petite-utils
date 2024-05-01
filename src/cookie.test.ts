import { clearAllCookie, getCookie, removeCookie, setCookie } from './cookie';


describe('removeCookie', () => {
  beforeEach(() => {
    document.cookie = 'name=cookie'
  })
  it('should remove cookie', () => {
    removeCookie('name')
    expect(getCookie('name')).toBe('')
  })
})

describe('clearAllCookie', () => {
  beforeEach(() => {
    document.cookie = 'name=cookie'
    document.cookie = 'name1=cookie1'
  })
  it('should clear all cookie', () => {
    expect(getCookie('name')).toBe('cookie')
    expect(getCookie('name1')).toBe('cookie1')

    clearAllCookie()

    expect(getCookie('name')).toBe('')
    expect(getCookie('name1')).toBe('')
  })
})

describe('getCookie', () => {
  afterEach(() => {
    clearAllCookie()
  })
  it('should get cookie', () => {
    const val = JSON.stringify('cookie')
    document.cookie = `name=${val}`
    expect(getCookie('name')).toBe('cookie')
  })
  it('should return empty string when cookie is not exist', () => {
    document.cookie = 'name=cookie'
    expect(getCookie('name')).toBe('cookie')
  })

  it('should get cookie with document.cookie', () => {
    document.cookie = `name=cookie`
    expect(getCookie('name')).toBe('cookie')
  })
})

describe('setCookie', () => {
  beforeEach(() => {
    clearAllCookie()
  })
  it('should set cookie with string value', () => {
    setCookie('name', 'cookie')
    expect(getCookie('name')).toBe('cookie')
  })

  it('should set cookie with object value', () => {
    setCookie('obj', { name: 'cookie' })
    expect(getCookie('obj')).toEqual({ name: 'cookie' })
  })

  it('should set cookie with array value', () => {
    setCookie('array', [{ name: 'cookie' }])
    expect(getCookie('array')).toEqual([{ name: 'cookie' }])
  })

  it('should set cookie with array value', () => {
    setCookie('function', () => {})
    expect(getCookie('function')).toEqual('')
  })

  it('should set cookie with expires', () => {
    setCookie('name', 'cookie', 1)
    expect(getCookie('name')).toBe('cookie')
  })

  it('should set cookie with ""', () => {
    setCookie('name', '', 1)
    expect(getCookie('name')).toBe('')
  })
})