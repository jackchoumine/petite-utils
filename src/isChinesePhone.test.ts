import { isChinesePhone } from './isChinesePhone'

describe('isChinesePhone', () => {
  it('should return true when number is 13XyyyyZZZZ', () => {
    const number = '13788992233'
    expect(isChinesePhone(number)).toBeTruthy()
  })
  it('should return true when number is 14XyyyyZZZZ', () => {
    const number = '14577668899'
    expect(isChinesePhone(number)).toBeTruthy()
  })
  it('should return true when number is 15XyyyyZZZZ', () => {
    const number = '15577668899'
    expect(isChinesePhone(number)).toBeTruthy()
  })
  it('should return true when number is 16XyyyyZZZZ', () => {
    const number = '16577668899'
    expect(isChinesePhone(number)).toBeTruthy()
  })

  it('should return false when the phone number is not chinese phone number', () => {
    const phone = '12345678'
    expect(isChinesePhone(phone)).toBeFalsy()
  })
  it('should return false no number', () => {
    const phone = ''
    expect(isChinesePhone(phone)).toBeFalsy()
    // @ts-ignore
    expect(isChinesePhone(undefined)).toBeFalsy()
  })
})
