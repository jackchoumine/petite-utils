/*
 * @Author      : ZhouQiJun
 * @Date        : 2023-04-29 20:19:57
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-05-28 02:56:46
 * @Description : 深复制
 */
import { type } from './type/type'

// import from from 'core-js/features/array/from'
/**
 * 深度复制
 * @param {any} source
 * @returns
 */
const clone = <T>(source: T) => {
  const t = type(source)
  if (!['object', 'array'].includes(t)) return source
  let target
  if (t === 'array') {
    target = []
    let i = 0
    const len = (source as Array<any>).length
    while (i < len) {
      target[i] = clone(source[i])
      i++
    }
  } else if (t === 'object') {
    target = {}
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        // @ts-ignore
        target[key] = clone(source[key])
      }
    }
  }
  return target
}

export { clone }
