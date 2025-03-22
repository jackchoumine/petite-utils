/**
 * @group 类型检查
 * @param {any} value 需要检查类型的值
 * @returns {string} 返回类型的小写字符串
 */
function type(value: any): string {
  const typeStr = Object.prototype.toString.call(value)
  return typeStr.slice(8, -1).toLowerCase()
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isObject(value: any) {
  return typeof value === 'object' && value !== null
}
/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isPrimitive(value: any) {
  return (
    value === null ||
    typeof value === 'boolean' ||
    typeof value === 'number' ||
    typeof value === 'bigint' ||
    typeof value === 'string' ||
    typeof value === 'symbol' || // ES6 symbol
    typeof value === 'undefined'
  )
}
/**
 * @group 类型检查
 * @param e
 * @returns
 */
function isError(e: any) {
  return type(e) === 'error' || e instanceof Error
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isDate(d: any) {
  return type(d) === 'date'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isArray(value: any) {
  if (Array.isArray) {
    return Array.isArray(value)
  }
  return type(value) === 'array'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isBoolean(value: any) {
  return typeof value === 'boolean'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isNull(value: any) {
  return value === null
}

/**
 * @group 类型检查
 * @description 检查是否为 null 或者 undefined
 * @param value
 * @returns
 */
function isNullish(value: any) {
  // https://stackoverflow.com/a/46716365/6524962
  return value == null
}


/**
 * @group 类型检查
 * @description 检查给定的值是否为数字 是 number 或 bigint，则返回 true，否则返回 false
 * @param value - 要检查的值，可以是任何类型
 * @return 如果是数字或 BigInt，则返回 true，否则返回 false
 */
function isNumber(value: any) {
  // NaN, Infinity, -Infinity
  // NaN - NaN  =  NaN
  // Infinity - Infinity = NaN
  // -Infinity - -Infinity = NaN
  // Infinity * 0 = NaN
  // NaN * 0 = NaN
  // -Infinity * 0 = NaN
  if (typeof value === 'number') return value * 0 === 0
  if (typeof value === 'bigint') return true
  return false
}
/**
 * @group 类型检查
 * @description  检查给定的值是否为数值，包括数字、字符串数字 和 BigInt
 * 此外，如果给定值是一个非空字符串，它将尝试将其转换为数字并检查其有效性
 * @param value - 要检查的值，可以是任何类型
 * @return 如果是数字或可转换为有效数字的字符串，则返回 true，否则返回 false
 */
function isNumerical(value: any) {
  if (typeof value === 'number') return value * 0 === 0
  if (typeof value === 'bigint') return true
  if (isString(value) && value.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+value) : isFinite(+value)
  }
  return false
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isString(value: any) {
  return typeof value === 'string'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isEmptyStr(value: any) {
  return value === ''
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function hasStr(value: any) {
  return isString(value) && value !== ''
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isSymbol(value: any) {
  return typeof value === 'symbol'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isUndefined(value: any) {
  return value === void 0
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isRegExp(value: any) {
  return type(value) === 'regexp'
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isFalsy(value: any) {
  return !value // 0 '' NaN null undefined
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isFalsyNon0(value: any) {
  return !value && value !== 0
}
/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isTruthy(value: any) {
  return !!value
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isFunction(value: any) {
  if (isNullish(value)) return false
  if (value) {
    return (
      type(value) === 'function' ||
      'function' === typeof value ||
      value instanceof Function
    )
  }
  return false
}

/**
 * @group 类型检查
 * @param value
 * @returns
 */
function isEmpty(value: any) {
  // ''
  if (isEmptyStr(value)) return true
  // []
  if (Array.isArray(value)) return value.length === 0
  // null undefined
  if (isNullish(value)) return true
  if (isObject(value)) {
    for (var prop in value) {
      if (value.hasOwnProperty(prop)) return false
    }
    return true
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
  isNullish,
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
  isEmpty,
}
