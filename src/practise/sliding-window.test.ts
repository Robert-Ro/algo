import { containsNearbyDuplicate, minWindow } from './sliding-window'

describe('滑动窗口习题集', () => {
  describe('exercise 219', () => {
    it('case 1', () => {
      expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toBe(true)
    })
    it('case 2', () => {
      expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toBe(true)
    })
    it('case 3', () => {
      expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toBe(false)
    })
  })
  describe('exercise 76', () => {
    it('case 1', () => {
      expect(minWindow('ADOBECODEBANC', 'ABC')).toEqual('BANC')
    })
    it('case 2', () => {
      expect(minWindow('a', 'a')).toEqual('a')
    })
    it('case 3', () => {
      expect(minWindow('a', 'aa')).toEqual('')
    })
    it('case 3', () => {
      // FIXME
      // expect(minWindow('aa', 'aa')).toEqual('aa')
    })
  })
})
