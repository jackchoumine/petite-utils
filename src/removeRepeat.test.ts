import { removeRepeat } from './removeRepeat'

describe('removeRepeat', () => {
  it('should remove repeat elements', () => {
    expect(removeRepeat([1, 2, 3, 4, 5, 1, 2, 3])).toEqual([1, 2, 3, 4, 5])
  })

  it('should return empty array when input is not an array', () => {
    // @ts-ignore
    expect(removeRepeat('')).toEqual([])
  })
})
