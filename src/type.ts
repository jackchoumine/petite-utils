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
  return typeof arg === 'number'
}

function isString(arg: any) {
  return typeof arg === 'string'
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

export {
  type,
  isObject,
  isArray,
  isBoolean,
  isDate,
  isError,
  isNull,
  isNullOrUndefined,
  isNumber,
  isString,
  isSymbol,
  isUndefined,
  isRegExp,
  isPrimitive,
}
