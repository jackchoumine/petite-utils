import { isHttpUrl } from './isHttpUrl'

describe('isHttpUrl', () => {
  it('should return true if the argument is http url', () => {
    expect(isHttpUrl('http://example.com')).toBe(true)
    expect(isHttpUrl('https://example.com/path?name=value')).toBe(true)
  })

  it('should return false if the argument is not http url', () => {
    expect(isHttpUrl('ftp://example.com')).toBe(false)
    expect(isHttpUrl('file://example.com')).toBe(false)
    expect(isHttpUrl('example.com')).toBe(false)
    expect(isHttpUrl('#')).toBe(false)
    expect(isHttpUrl('#1314')).toBe(false)
    expect(isHttpUrl('javascript:void(0)')).toBe(false)
  })
})
