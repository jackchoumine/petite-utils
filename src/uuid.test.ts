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
