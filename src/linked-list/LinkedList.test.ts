import { LinkedList } from './LinkedList'

describe('LinkedList tests', () => {
  it('add', () => {
    const linkedList = new LinkedList<number>()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    expect(Array.from(linkedList.values())).toMatchObject([1, 2, 3])
    expect(linkedList.size()).toEqual(3)
  })
  it('reverse', () => {
    const linkedList = new LinkedList<number>()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.add(5)
    linkedList.reverse()
    expect(Array.from(linkedList.values())).toMatchObject([5, 4, 3, 2, 1])
  })
  describe('indexOf', () => {
    it('should return the right index', () => {
      const linkedList = new LinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.indexOf(3)).toEqual(3)
    })
    it('should return -1 when no matched value', () => {
      const linkedList = new LinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.indexOf(9)).toEqual(-1)
    })
    it('should return -1 when LinkedList is empty', () => {
      const linkedList = new LinkedList()
      expect(linkedList.indexOf(9)).toEqual(-1)
    })
  })
  describe('search', () => {
    it('should return the index when the first item matched the search condition', () => {
      const linkedList = new LinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.search((data) => data === 5)).toEqual(5)
    })
    it('should return -1 when no item match the search condition', () => {
      const linkedList = new LinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.search((data) => data === 9)).toEqual(-1)
    })
  })
  describe('traverse', () => {
    const linkedList = new LinkedList<number>()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    let sum = 0
    linkedList.traverse((node) => {
      // console.log(node)
      sum += node.data
    })
    expect(sum).toEqual(10)
  })
  describe('remove', () => {
    const linkedList = new LinkedList<number>()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    linkedList.add(4)
    linkedList.remove(2)
    linkedList.remove(4)
    expect(Array.from(linkedList.values())).toMatchObject([1, 3])
  })
})
