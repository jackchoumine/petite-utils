import { uuid } from './uuid'

describe('uuid', () => {
  it('should return a string of uuid', () => {
    const str = uuid()
    const isUUID =
      /^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/.test(
        str,
      )
    expect(isUUID).toBeTruthy()
  })
})
