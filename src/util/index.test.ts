import { Compare, defaultCompare } from '.'

describe('utils tests', () => {
  it('1 is bigger than 0', () => {
    expect(defaultCompare(1, 0)).toEqual(Compare.BIGGER_THAN)
  })
  it('1 is bigger than -1', () => {
    expect(defaultCompare(1, -1)).toEqual(Compare.BIGGER_THAN)
  })
  it('3 is less than 4', () => {
    expect(defaultCompare(3, 4)).toEqual(Compare.LESS_THAN)
  })
  it('5 is equal to 5', () => {
    expect(defaultCompare(5, 5)).toEqual(Compare.EQUAL)
  })
})
