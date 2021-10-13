import { binarySearch } from './binary-search'

describe('binnary search', () => {
  it("9 's index is 4", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })
  it('2 not exist in array', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
})
