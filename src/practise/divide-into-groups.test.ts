import { divideIntoGroups } from './divide-into-groups'

describe('divideIntoGroups test cases', () => {
  it('divideIntoGroups case 1', () => {
    const ret = divideIntoGroups([3, 1, 4, 2, 2, 5, 7, 9, 6, 8], 3)
    expect(ret).toStrictEqual([
      [9, 4, 3],
      [8, 5, 2, 1],
      [7, 6, 2],
    ])
  })
  it('divideIntoGroups case 2', () => {
    const ret = divideIntoGroups([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
    expect(ret).toStrictEqual([
      [9, 4, 3],
      [8, 5, 2],
      [7, 6, 1],
    ])
  })
  it('divideIntoGroups case 3', () => {
    const ret = divideIntoGroups([], 3)
    expect(ret).toStrictEqual([[], [], []])
  })
  it('divideIntoGroups case 4', () => {
    expect(() => {
      divideIntoGroups([], 0)
    }).toThrow(/must be greater than 0$/)
  })
})
