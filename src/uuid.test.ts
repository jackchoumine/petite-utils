/*
 * @Author      : ZhouQiJun
 * @Date        : 2024-11-28 11:34:51
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2024-11-28 13:29:14
 * @Description :
 */
import { describe, expect, it } from 'vitest'

import { uuid } from './uuid'

describe('uuid', () => {
  it('should return a string of uuid', () => {
    const str = uuid()
    const uuidRegex =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/
    const isUUID = uuidRegex.test(str)
    expect(isUUID).toBeTruthy()
  })
})
