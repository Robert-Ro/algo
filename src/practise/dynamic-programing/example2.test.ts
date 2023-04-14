import { dp, recursion1, recursion2 } from './example2'

describe('爬楼梯', () => {
  it('递归算法', () => {
    expect(recursion1(10)).toEqual(89)
    // expect(recursion1(40)).toEqual(165580141) //524ms
    expect(recursion1(1)).toEqual(1)
    expect(recursion1(2)).toEqual(2)
    expect(recursion1(3)).toEqual(3)
  })
  it('递归算法优化', () => {
    expect(recursion2(30)).toEqual(1346269)
    // expect(recursion2(100)).toEqual(573147844013817200000) //1ms
    expect(recursion2(1)).toEqual(1)
    expect(recursion2(2)).toEqual(2)
    expect(recursion2(3)).toEqual(3)
  })
  it('dynamic programing', () => {
    expect(dp(30)).toEqual(1346269)
    // expect(dp(100)).toEqual(573147844013817200000) // 1ms
    expect(dp(1)).toEqual(1)
    expect(dp(2)).toEqual(2)
    expect(dp(3)).toEqual(3)
  })
})
