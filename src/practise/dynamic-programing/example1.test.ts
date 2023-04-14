import { method1, method2 } from './example1'

describe('最大子序和问题', () => {
  it('暴力算法', () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(method1(input)).toEqual(6)
  })
  it('dynamic programming', () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(method2(input)).toEqual(6)
  })
})
