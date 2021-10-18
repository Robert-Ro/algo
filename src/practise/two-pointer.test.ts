import {
  rotateSolution1,
  rotateSolution2,
  twoSumISolution1,
  twoSumISolution2,
  twoSumWithSortArray,
} from './two-pointer'

describe('two pointer test cases', () => {
  describe('leetcode 189 rotated array', () => {
    it('case 1', () => {
      expect(rotateSolution1([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
      expect(rotateSolution2([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    })
    it('case 2', () => {
      expect(rotateSolution1([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
      expect(rotateSolution2([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
    })
  })
  describe('twoSum tests', () => {
    describe('sort array', () => {
      it('9 = 2 + 7, result should be [1, 2]', () => {
        expect(twoSumWithSortArray([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
      })
      it('6 = 2 + 4, result should be [1, 3]', () => {
        expect(twoSumWithSortArray([2, 3, 4], 6)).toStrictEqual([1, 3])
      })
      it('-1 = 0 + -1, result should be [1, 2]', () => {
        expect(twoSumWithSortArray([-1, 0], -1)).toStrictEqual([1, 2])
      })
      it('100 = 25 + 75, result should be [2, 3]', () => {
        expect(twoSumWithSortArray([5, 25, 75], 100)).toStrictEqual([2, 3])
      })
      it('8 = 4 + 4, result should be [4, 5]', () => {
        expect(twoSumWithSortArray([1, 2, 3, 4, 4, 9, 56, 90], 8)).toStrictEqual([4, 5])
      })
    })

    describe('unknown sort array or not cases', () => {
      it('case 1', () => {
        expect(twoSumISolution1([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
        expect(twoSumISolution2([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
      })
      it('case 2', () => {
        expect(twoSumISolution1([3, 2, 4], 6)).toStrictEqual([1, 2])
        expect(twoSumISolution2([3, 2, 4], 6)).toStrictEqual([1, 2])
      })
      it('case 3', () => {
        expect(twoSumISolution1([3, 3], 6)).toStrictEqual([0, 1])
        expect(twoSumISolution2([3, 3], 6)).toStrictEqual([0, 1])
      })
    })
  })
})
