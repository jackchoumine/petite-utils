import {
  isDate,
  isEmptyStr,
  isError,
  isFalsy,
  isFalsyNon0,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isSymbol,
  isTruthy,
  isUndefined,
} from './type'

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

describe('isNull', () => {
  it('should return true if the argument is null', () => {
    expect(isNull(null)).toBe(true)
  })

  it('should return false if the argument is not null', () => {
    expect(isNull(1)).toBe(false)
    expect(isNull('1')).toBe(false)
    expect(isNull(true)).toBe(false)
    expect(isNull([])).toBe(false)
    expect(isNull({})).toBe(false)
    expect(isNull(Symbol())).toBe(false)
    expect(isNull(new Date())).toBe(false)
    expect(isNull(/a/)).toBe(false)
    expect(isNull(undefined)).toBe(false)
  })
})

describe('isError', () => {
  it('should return true if the argument is an error', () => {
    expect(isError(new Error())).toBe(true)
    expect(isError(new EvalError())).toBe(true)
    expect(isError(new RangeError())).toBe(true)
    expect(isError(new ReferenceError())).toBe(true)
    expect(isError(new SyntaxError())).toBe(true)
    expect(isError(new TypeError())).toBe(true)
    expect(isError(new URIError())).toBe(true)
  })

  it('should return false if the argument is not an error', () => {
    expect(isError(1)).toBe(false)
    expect(isError('1')).toBe(false)
    expect(isError(true)).toBe(false)
    expect(isError([])).toBe(false)
    expect(isError({})).toBe(false)
    expect(isError(Symbol())).toBe(false)
    expect(isError(new Date())).toBe(false)
    expect(isError(/a/)).toBe(false)
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)
  })
})

describe('isDate', () => {
  it('should return true if the argument is a date', () => {
    expect(isDate(new Date())).toBe(true)
  })

  it('should return false if the argument is not a date', () => {
    expect(isDate(1)).toBe(false)
    expect(isDate('1')).toBe(false)
    expect(isDate(true)).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate(Symbol())).toBe(false)
    expect(isDate(/a/)).toBe(false)
    expect(isDate(null)).toBe(false)
    expect(isDate(undefined)).toBe(false)
  })
})

describe('isPrimitive', () => {
  it('should return true if the argument is a primitive type', () => {
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(false)).toBe(true)
    expect(isPrimitive(1)).toBe(true)
    expect(isPrimitive('1')).toBe(true)
    expect(isPrimitive(Symbol())).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
  })

  it('should return false if the argument is not a primitive type', () => {
    expect(isPrimitive([])).toBe(false)
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive(new Date())).toBe(false)
    expect(isPrimitive(/a/)).toBe(false)
  })
})

describe('isObject', () => {
  it('should return true if the argument is an object', () => {
    expect(isObject({})).toBe(true)
    expect(isObject([])).toBe(true)
    expect(isObject(new Date())).toBe(true)
    expect(isObject(/a/)).toBe(true)
  })

  it('should return false if the argument is not an object', () => {
    expect(isObject(null)).toBe(false)
    expect(isObject(true)).toBe(false)
    expect(isObject(false)).toBe(false)
    expect(isObject(1)).toBe(false)
    expect(isObject('1')).toBe(false)
    expect(isObject(Symbol())).toBe(false)
    expect(isObject(undefined)).toBe(false)
  })
})

describe('isUndefined', () => {
  it('should return true if the argument is undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('should return false if the argument is not undefined', () => {
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined(true)).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined(1)).toBe(false)
    expect(isUndefined('1')).toBe(false)
    expect(isUndefined(Symbol())).toBe(false)
    expect(isUndefined([])).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined(new Date())).toBe(false)
    expect(isUndefined(/a/)).toBe(false)
  })
})

describe('isSymbol', () => {
  it('should return true if the argument is a symbol', () => {
    expect(isSymbol(Symbol())).toBe(true)
  })

  it('should return false if the argument is not a symbol', () => {
    expect(isSymbol(null)).toBe(false)
    expect(isSymbol(true)).toBe(false)
    expect(isSymbol(false)).toBe(false)
    expect(isSymbol(1)).toBe(false)
    expect(isSymbol('1')).toBe(false)
    expect(isSymbol([])).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol(new Date())).toBe(false)
    expect(isSymbol(/a/)).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
  })
})

describe('isRegExp', () => {
  it('should return true if the argument is a regexp', () => {
    expect(isRegExp(/a/)).toBe(true)
  })

  it('should return false if the argument is not a regexp', () => {
    expect(isRegExp(null)).toBe(false)
    expect(isRegExp(true)).toBe(false)
    expect(isRegExp(false)).toBe(false)
    expect(isRegExp(1)).toBe(false)
    expect(isRegExp('1')).toBe(false)
    expect(isRegExp([])).toBe(false)
    expect(isRegExp({})).toBe(false)
    expect(isRegExp(new Date())).toBe(false)
    expect(isRegExp(Symbol())).toBe(false)
    expect(isRegExp(undefined)).toBe(false)
  })
})

describe('isEmptyStr', () => {
  it('should return true if the argument is an empty string', () => {
    expect(isEmptyStr('')).toBe(true)
  })
})
