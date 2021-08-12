import { method1 } from './example3'

describe('买卖股票', () => {
  it('穷举法', () => {
    expect(method1([])).toEqual(undefined)
  })
})
