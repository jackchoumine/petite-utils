/**
 * 获取类型
 * @param {any} value 需要检查类型的值
 * @returns {string} 返回类型的小写字符串
 */
function type(value: any): string {
  const typeStr = Object.prototype.toString.call(value)
  return typeStr.slice(8, -1).toLowerCase()
}

function isObject(arg: any) {
  return typeof arg === 'object' && arg !== null
}

function isPrimitive(arg: any) {
  return (
    arg === null ||
    typeof arg === 'boolean' ||
    typeof arg === 'number' ||
    typeof arg === 'bigint' ||
    typeof arg === 'string' ||
    typeof arg === 'symbol' || // ES6 symbol
    typeof arg === 'undefined'
  )
}

function isError(e: any) {
  return type(e) === 'error' || e instanceof Error
}

function isDate(d: any) {
  return type(d) === 'date'
}

function isArray(arg: any) {
  if (Array.isArray) {
    return Array.isArray(arg)
  }
  return type(arg) === 'array'
}

function isBoolean(arg: any) {
  return typeof arg === 'boolean'
}

function isNull(arg: any) {
  return arg === null
}

function isNullOrUndefined(arg: any) {
  return arg == null
}

function isNumber(arg: any) {
  // NaN, Infinity, -Infinity
  // NaN - NaN  =  NaN
  // Infinity - Infinity = NaN
  // -Infinity - -Infinity = NaN
  // Infinity * 0 = NaN
  // NaN * 0 = NaN
  // -Infinity * 0 = NaN
  if (typeof arg === 'number') return arg * 0 === 0
  if (typeof arg === 'bigint') return true
  return false
}

function isNumerical(arg: any) {
  if (typeof arg === 'number') return arg * 0 === 0
  if (typeof arg === 'bigint') return true
  if (isString(arg) && arg.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+arg) : isFinite(+arg)
  }
  return false
}

function isString(arg: any) {
  return typeof arg === 'string'
}

function isEmptyStr(arg: any) {
  return arg === ''
}

function hasStr(arg: any) {
  return isString(arg) && arg !== ''
}

function isSymbol(arg: any) {
  return typeof arg === 'symbol'
}

function isUndefined(arg: any) {
  return arg === void 0
}

function isRegExp(value: any) {
  return type(value) === 'regexp'
}

function isFalsy(arg: any) {
  return !arg // 0 '' NaN null undefined
}

function isFalsyNon0(arg: any) {
  return !arg && arg !== 0
}

function isTruthy(arg: any) {
  return !!arg
}

function isFunction(value: any) {
  if (isNullOrUndefined(value)) return false
  if (value) {
    return (
      type(value) === 'function' ||
      'function' === typeof value ||
      value instanceof Function
    )
  }
  return false
}

export {
  type,
  isObject,
  isArray,
  isBoolean,
  isDate,
  isError,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isNumber,
  isNumerical,
  isString,
  isSymbol,
  isRegExp,
  isPrimitive,
  isFalsy,
  isFalsyNon0,
  isTruthy,
  isFunction,
  isEmptyStr,
  hasStr as isNonEmptyStr,
}
