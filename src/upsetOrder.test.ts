import { upsetOrder } from './upsetOrder'

describe('upsetOrder', () => {
  it('should upset order', () => {
    const arr = [1, 2, 3, 4, 5]

    const upsetArr = upsetOrder(arr)

    expect(upsetArr).not.toEqual(arr)
  })
  it('should upset order from index', () => {
    const arr = [1, 2, 3, 4, 5]

    const upsetArr = upsetOrder(arr, 2)

    expect(upsetArr).not.toEqual(arr)
  })

  it('should upset order from index', () => {
    const arr = [1, 2, 3, 4, 5]

    const upsetArr = upsetOrder(arr, -1)

    expect(upsetArr).toEqual(arr)
  })

  it('should upset order from index', () => {
    const arr = [1, 2, 3, 4, 5]

    const upsetArr = upsetOrder(arr, arr.length + 1)

    expect(upsetArr).toEqual(arr)
  })
})
