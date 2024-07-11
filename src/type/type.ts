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

/**
 * 检查给定的值是否为数字
 * 是 number 或 bigint，则返回 true，否则返回 false
 * @param arg - 要检查的值，可以是任何类型
 * @return 如果是数字或 BigInt，则返回 true，否则返回 false
 */
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
/**
 * 检查给定的值是否为数值，包括数字、字符串数字 和 BigInt
 * 此外，如果给定值是一个非空字符串，它将尝试将其转换为数字并检查其有效性
 * @param arg - 要检查的值，可以是任何类型
 * @return 如果是数字或可转换为有效数字的字符串，则返回 true，否则返回 false
 */
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
