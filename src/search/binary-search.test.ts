import {
  binarySearch,
  binarySearchFirstMatched,
  binarySearchFirstEqualOrGreater,
  binarySearchLastMatched,
  binarySearchLastEqualOrSmall as binarySearchLastEqualOrSmaller,
  binarySearchVariant,
  getSqrt,
} from './binary-search'

describe('binnary search', () => {
  it("9's index is 4", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })
  it('2 not exist in array', () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
  it("9's index is 4", () => {
    expect(binarySearchVariant([-1, 0, 3, 5, 9, 12], 9)).toEqual(4)
  })
  it('2 not exist in array', () => {
    expect(binarySearchVariant([-1, 0, 3, 5, 9, 12], 2)).toEqual(-1)
  })
  it("2's first index should be 1", () => {
    expect(binarySearchFirstMatched([1, 2, 2, 2, 4], 2)).toEqual(1)
  })
  it("2's last index should be 3", () => {
    expect(binarySearchLastMatched([1, 2, 2, 2, 4], 2)).toEqual(3)
  })
  it("2's first element equal or greater than 2  is 1", () => {
    expect(binarySearchFirstEqualOrGreater([1, 2, 2, 2, 4], 2)).toEqual(1)
  })
  it("3's first element equal or greater than 3 is 4", () => {
    expect(binarySearchFirstEqualOrGreater([1, 2, 2, 2, 4], 3)).toEqual(4)
  })
  it("2's last element equal or smaller than 2 is 3", () => {
    expect(binarySearchLastEqualOrSmaller([1, 2, 2, 2, 4], 2)).toEqual(3)
  })
  it("number 9's sqrt should be 3", () => {
    expect(getSqrt(9)).toEqual(3)
  })
  it("number 3's sqrt should be 1.732050", () => {
    expect(getSqrt(3)).toEqual(1.73205)
  })
  it("number 10's sqrt should be 3.16228", () => {
    expect(getSqrt(10)).toEqual(3.16228)
  })
})
