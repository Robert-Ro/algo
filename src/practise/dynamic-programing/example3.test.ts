import { method1, method2, maxProfit } from './example3'

describe('买卖股票', () => {
  it('穷举法', () => {
    expect(method1([7, 1, 5, 3, 6, 4])).toEqual(5)
    expect(method1([7, 6, 4, 3, 1])).toEqual(0)
  })
  it('dp', () => {
    expect(method2([7, 1, 5, 3, 6, 4])).toEqual(5)
    expect(method2([7, 6, 4, 3, 1])).toEqual(0)
    expect(method2([7, 6, 4, 3, 1, 3])).toEqual(2)
  })
  it('多次交易求累计最大收益', () => {
    expect(maxProfit([1, 3, 2, 8, 4, 9], 2)).toEqual(8)
    expect(maxProfit([1, 4, 2, 8, 4, 9], 2)).toEqual(8)
    expect(maxProfit([1, 5, 2, 8, 4, 9], 2)).toEqual(9)
    expect(maxProfit([1, 3, 7, 5, 10, 3], 3)).toEqual(6)
    expect(maxProfit([1, 4, 6, 2, 8, 3, 10, 14], 3)).toEqual(13)
  })
})
