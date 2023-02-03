import { bubbleSort } from './example'

describe('排序', () => {
  const input = [7, 1, 5, 3, 6, 4, 20, 9]
  it('冒泡排序', () => {
    expect(bubbleSort(input)).toEqual([1, 3, 4, 5, 6, 7, 9, 20])
  })
})
