import { randomStr } from './randomStr';


describe('randomStr', () => {
  describe('use default params', () => {
    it('should return a string of random length between 7 to 36 and start with letter', () => {
      const str = randomStr()
      const isBetween7and36 = str.length >= 7 && str.length <= 36
      const isStartWithLetter = /^[a-zA-Z]/.test(str)
      expect(isBetween7and36).toBeTruthy()
      expect(isStartWithLetter).toBeTruthy()
    })
  })
  describe('use first param', () => {
    it('should return a string of random length between 20 to 36 and start with letter', () => {
      const str = randomStr(20)
      const isBetween20and36 = str.length >= 20 && str.length <= 36
      const isStartWithLetter = /^[a-zA-Z]/.test(str)
      expect(isBetween20and36).toBeTruthy()
      expect(isStartWithLetter).toBeTruthy()
    })
  })
  describe('use first and second param', () => {
    it('should return a string of random length between 20 to 30 and start with letter', () => {
      const str = randomStr(20, 30)
      const isBetween20and30 = str.length >= 20 && str.length <= 30
      const isStartWithLetter = /^[a-zA-Z]/.test(str)
      expect(isBetween20and30).toBeTruthy()
      expect(isStartWithLetter).toBeTruthy()
    })
  })
  describe('use all params', () => {
    it('should return a string of random length between 20 to 30 and start with number or letter', () => {
      const str = randomStr(20, 30, false)
      const isBetween20and30 = str.length >= 20 && str.length <= 30
      const isStartWithLetter = /^[0-9]/.test(str)
      expect(isBetween20and30).toBeTruthy()
      expect(isStartWithLetter).toBeTruthy()
    })
    it('should return a string with number start', () => {
      const str = randomStr(10, 11, false)
      const isStartWithNumber = /^[0-9]/.test(str)
      expect(str).toHaveLength(10)
      expect(isStartWithNumber).toBeTruthy()
    })
  })
  describe('use fault params', () => {
    it('should return "min should be less than max" when min>max', () => {
      const str = randomStr(100, 10, true)
      expect(str).toBe('min should be less than max')
    })
  })
})