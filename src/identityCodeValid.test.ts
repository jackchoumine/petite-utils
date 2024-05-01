import { identityCodeValid } from './identityCodeValid'

describe('identityCodeValid', () => {
  it('should return true when the identity code is valid', () => {
    const code = '110101199003076114'
    expect(identityCodeValid(code)[0]).toBeTruthy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '110101199003076113'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '1101011990030761133'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611x'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611X'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611 '
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611-'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611_'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611*'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611!'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '11010119900307611@'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is invalid', () => {
    const code = '110101199'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
  it('should return false when the identity code is empty', () => {
    const code = ''
    expect(identityCodeValid(code)[0]).toBeFalsy()
    expect(identityCodeValid(code)[1]).toBe('身份证号不能为空')
    expect(identityCodeValid(0)[1]).toBe('身份证号长度错误, 必须是15位或者18位')
  })
  it('should return false when the identity code is []', () => {
    // @ts-ignore
    expect(identityCodeValid([])[0]).toBeFalsy()
    // @ts-ignore
    expect(identityCodeValid({})[0]).toBeFalsy()
    const code = '93010119900307611x'
    expect(identityCodeValid(code)[0]).toBeFalsy()
  })
})
