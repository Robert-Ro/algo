import { LinkedList } from './LinkedList'

describe('LinkedList tests', () => {
  it('add', () => {
    const linkedList = new LinkedList()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    expect(Array.from(linkedList.values())).toMatchObject([1, 2, 3])
    expect(linkedList.size()).toEqual(3)
  })
  describe('reverse', () => {
    const linkedList = new LinkedList()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.reverse()
    expect(Array.from(linkedList.values())).toMatchObject([5, 4, 3, 2, 1])
  })
})
