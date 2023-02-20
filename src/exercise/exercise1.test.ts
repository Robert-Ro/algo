import { getMissingNumber } from './exercise1'

describe('exercise1 test cases', () => {
  it('getMissingNumber test case 1', () => {
    expect(getMissingNumber([2, 6, 8])).toStrictEqual([3, 4, 5, 7])
  })
  it('getMissingNumber test case 2', () => {
    expect(getMissingNumber([2, 3, 4])).toStrictEqual([])
  })
  it('getMissingNumber test case 3', () => {
    expect(getMissingNumber([1, 2, 5, 10])).toStrictEqual([3, 4, 6, 7, 8, 9])
  })
  it('getMissingNumber test case 4', () => {
    expect(getMissingNumber([1, 2, 5, 20])).toStrictEqual([3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])
  })
})
