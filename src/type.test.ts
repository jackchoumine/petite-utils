import { isFalsy, isFalsyNon0, isFunction, isNumber, isTruthy } from './type';


describe('isNumber', () => {
  it('should return true if the argument is a number', () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-1)).toBe(true)
    expect(isNumber(1.1)).toBe(true)
    expect(isNumber(-1.1)).toBe(true)
    expect(isNumber(4.917736942280289e-10)).toBe(true)
    expect(
      isNumber(0b11111111111111111111111111111111111111111111111111111),
    ).toBe(true)
    expect(isNumber(0o3777777777777777777777)).toBe(true)
    expect(
      isNumber(
        BigInt('0b11111111111111111111111111111111111111111111111111111'),
      ),
    ).toBe(true)
    expect(isNumber('1')).toBe(true)
  })

  it('should return false if the argument is not a number', () => {
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber(Infinity)).toBe(false)
    expect(isNumber(-Infinity)).toBe(false)
    expect(isNumber('')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(Symbol())).toBe(false)
    expect(isNumber(new Date())).toBe(false)
    expect(isNumber(/a/)).toBe(false)
  })
})

describe('isFalsy', () => {
  it('should return true if the argument is falsy', () => {
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy('')).toBe(true)
    expect(isFalsy(NaN)).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(undefined)).toBe(true)
  })

  it('should return false if the argument is not falsy', () => {
    expect(isFalsy(1)).toBe(false)
    expect(isFalsy('1')).toBe(false)
    expect(isFalsy(true)).toBe(false)
    expect(isFalsy(false)).toBeTruthy()
    expect(isFalsy([])).toBe(false)
    expect(isFalsy({})).toBe(false)
    expect(isFalsy(Symbol())).toBe(false)
    expect(isFalsy(new Date())).toBe(false)
    expect(isFalsy(/a/)).toBe(false)
  })
})

describe('isTruthy', () => {
  it('should return true if the argument is truthy', () => {
    expect(isTruthy(1)).toBe(true)
    expect(isTruthy('1')).toBe(true)
    expect(isTruthy(true)).toBe(true)
    expect(isTruthy([])).toBe(true)
    expect(isTruthy({})).toBe(true)
    expect(isTruthy(Symbol())).toBe(true)
    expect(isTruthy(new Date())).toBe(true)
    expect(isTruthy(/a/)).toBe(true)
  })

  it('should return false if the argument is not truthy', () => {
    expect(isTruthy(0)).toBe(false)
    expect(isTruthy('')).toBe(false)
    expect(isTruthy(NaN)).toBe(false)
    expect(isTruthy(null)).toBe(false)
    expect(isTruthy(undefined)).toBe(false)
  })
})

describe('isFalsyNon0', () => {
  it('should return true if the argument is falsy but not 0', () => {
    expect(isFalsyNon0(false)).toBe(true)
    expect(isFalsyNon0('')).toBe(true)
    expect(isFalsyNon0(NaN)).toBe(true)
    expect(isFalsyNon0(null)).toBe(true)
    expect(isFalsyNon0(undefined)).toBe(true)
  })

  it('should return false if the argument is not falsy but not 0', () => {
    expect(isFalsyNon0(0)).toBe(false)
    expect(isFalsyNon0(1)).toBe(false)
    expect(isFalsyNon0('1')).toBe(false)
    expect(isFalsyNon0(true)).toBe(false)
    expect(isFalsyNon0([])).toBe(false)
    expect(isFalsyNon0({})).toBe(false)
    expect(isFalsyNon0(Symbol())).toBe(false)
    expect(isFalsyNon0(new Date())).toBe(false)
    expect(isFalsyNon0(/a/)).toBe(false)
  })
})

describe('isFunction', () => {
  it('should return true if the argument is a function', () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
    expect(isFunction(function* () {})).toBe(true)
    expect(isFunction(async () => {})).toBe(true)
    expect(isFunction(async function () {})).toBe(true)
    expect(isFunction(async function* () {})).toBe(true)
    expect(isFunction(new Function())).toBe(true)
    expect(isFunction(class {})).toBe(true)
    expect(isFunction(Function)).toBe(true)
    expect(isFunction(Array)).toBe(true)
    expect(isFunction(Object)).toBe(true)
    expect(isFunction(String)).toBe(true)
    expect(isFunction(Number)).toBe(true)
    expect(isFunction(Boolean)).toBe(true)
    expect(isFunction(Error)).toBe(true)
    expect(isFunction(Symbol)).toBe(true)
    expect(isFunction(Promise)).toBe(true)
    expect(isFunction(Date)).toBe(true)
  })

  it('should return false if the argument is not a function', () => {
    expect(isFunction(1)).toBe(false)
    expect(isFunction('1')).toBe(false)
    expect(isFunction(true)).toBe(false)
    expect(isFunction([])).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction(Symbol())).toBe(false)
    expect(isFunction(new Date())).toBe(false)
    expect(isFunction(/a/)).toBe(false)
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)
  })
})