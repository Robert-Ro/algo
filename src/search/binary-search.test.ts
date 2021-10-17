import {
  binarySearch,
  binarySearchFirstMatched,
  binarySearchLastMatched,
  binarySearchFirstEqualOrGreater,
  binarySearchLastEqualOrSmaller,
  binarySearchVariant,
  getSqrt,
  binarySearchInCycleArray,
  searchInsert,
  twoSum,
} from './binary-search'

describe('binnary search', () => {
  describe('standard binary search', () => {
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
  })
  describe('non standard binary search', () => {
    it("2's first index should be 1", () => {
      expect(binarySearchFirstMatched([1, 2, 2, 2, 4], 2)).toEqual(1)
    })
    it("2's last index should be 3", () => {
      expect(binarySearchLastMatched([1, 2, 2, 2, 4], 2)).toEqual(3)
    })
    it('first element equal or greater than 2  is 1', () => {
      expect(binarySearchFirstEqualOrGreater([1, 2, 2, 2, 4], 2)).toEqual(1)
    })
    it('first element equal or greater than 3 is 4', () => {
      expect(binarySearchFirstEqualOrGreater([1, 2, 2, 2, 4], 3)).toEqual(4)
    })
    it('last element equal or smaller than 2 is 3', () => {
      expect(binarySearchLastEqualOrSmaller([1, 2, 2, 2, 4], 2)).toEqual(3)
    })
  })
  describe("how to get a number's sqrt", () => {
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
  describe('cycle array binary-search', () => {
    it('number 0 index should be 4', () => {
      expect(binarySearchInCycleArray([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4)
    })
    it('number 3 index should be -1', () => {
      expect(binarySearchInCycleArray([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1)
    })
    it('number 0 index should be -1', () => {
      expect(binarySearchInCycleArray([1], 0)).toEqual(-1)
    })
    it('number 1 index should be 0', () => {
      expect(binarySearchInCycleArray([1, 3], 1)).toEqual(0)
    })
    it('number 1 index should be 1', () => {
      expect(binarySearchInCycleArray([3, 1], 1)).toEqual(1)
    })
  })
  describe('searchInsert tests', () => {
    it("number 5's index should be 2", () => {
      expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2)
    })
    it("number 2's index should be 1", () => {
      expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1)
    })
    it("number 7's index should be 4", () => {
      expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4)
    })
    it("number 0's index should be 0", () => {
      expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0)
    })
    it("number 0's index should be 0", () => {
      expect(searchInsert([1], 0)).toEqual(0)
    })
  })
  describe('twoSum tests', () => {
    it('9 = 2 + 7, result should be [1, 2]', () => {
      // expect(twoSum([2, 7, 11, 15], 9)).toBe([1, 2])
    })
    it('6 = 2 + 4, result should be [1, 3]', () => {
      // expect(twoSum([2, 3, 4], 6)).toBe([1, 3])
    })
    it('-1 = 0 + -1, result should be [1, 2]', () => {
      // expect(twoSum([-1, 0], -1)).toBe([1, 2])
    })
  })
})
