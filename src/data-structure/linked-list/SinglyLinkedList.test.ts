import { SinglyLinkedList, LinkedNode } from './SinglyLinkedList'

describe('LinkedList tests', () => {
  it('add', () => {
    const linkedList = new SinglyLinkedList<number>()
    linkedList.add(1)
    linkedList.add(2)
    linkedList.add(3)
    expect(linkedList.size()).toEqual(3)
    expect(Array.from(linkedList.values())).toStrictEqual([1, 2, 3])
  })
  it('findByIndex', () => {
    const linkedList = SinglyLinkedList.create([1, 2, 3])
    expect(linkedList.size()).toEqual(3)
    expect(linkedList.findByIndex(0)?.data).toEqual(1)
    expect(linkedList.findByIndex(1)?.data).toEqual(2)
    expect(linkedList.findByIndex(2)?.data).toEqual(3)
    expect(linkedList.findByIndex(4)).toEqual(null)
    expect(linkedList.findByIndex(-1)).toEqual(null)
  })
  describe('reverse test cases', () => {
    it('case 1', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3, 4, 5])
      linkedList.reverse()
      expect(Array.from(linkedList.values())).toStrictEqual([5, 4, 3, 2, 1])
    })
    it('case 2', () => {
      const linkedList = SinglyLinkedList.create([1, 2])
      linkedList.reverse()
      expect(Array.from(linkedList.values())).toStrictEqual([2, 1])
    })
    it('case 3', () => {
      const linkedList = SinglyLinkedList.create([1])
      linkedList.reverse()
      expect(Array.from(linkedList.values())).toStrictEqual([1])
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.reverse()
      expect(Array.from(linkedList.values())).toStrictEqual([])
    })
  })
  describe('deleteAtIndex test cases', () => {
    it('case 1', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3, 4])
      linkedList.deleteAtIndex(2)
      expect(Array.from(linkedList.values())).toStrictEqual([1, 2, 4])
      linkedList.deleteAtIndex(4)
      expect(Array.from(linkedList.values())).toStrictEqual([1, 2, 4])
      linkedList.deleteAtIndex(0)
      expect(Array.from(linkedList.values())).toStrictEqual([2, 4])
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.deleteAtIndex(2)
      expect(Array.from(linkedList.values())).toStrictEqual([1])
    })
    it('case 3', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.deleteAtIndex(2)
      expect(Array.from(linkedList.values())).toStrictEqual([])
      linkedList.deleteAtIndex(0)
      expect(Array.from(linkedList.values())).toStrictEqual([])
    })
  })
  describe('addAtIndex test cases', () => {
    it('case 1：链表中间添加', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3])
      linkedList.addAtIndex(1, 1)
      expect(Array.from(linkedList.values())).toStrictEqual([1, 1, 2, 3])
    })
    it('case 2: 头部添加', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3])
      linkedList.addAtIndex(-1, 1)
      expect(Array.from(linkedList.values())).toStrictEqual([1, 1, 2, 3])
      linkedList.addAtIndex(0, 3)
      expect(Array.from(linkedList.values())).toStrictEqual([3, 1, 1, 2, 3])
    })
    it('case 3: 尾部添加', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3])
      linkedList.addAtIndex(3, 4) // 添加到尾部
      expect(Array.from(linkedList.values())).toStrictEqual([1, 2, 3, 4])
    })
    it('case 4: 超出链表长度添加', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3])
      linkedList.addAtIndex(7, 6) // 超出链表长度
      expect(Array.from(linkedList.values())).toStrictEqual([1, 2, 3])
    })
    it('case 5', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.addAtIndex(2, 3) // 索引大于链表长度
      linkedList.add(3)
      linkedList.addAtIndex(2, 2)
      expect(linkedList.size()).toEqual(3)
      expect(Array.from(linkedList.values())).toStrictEqual([1, 3, 2])
    })
  })
  describe('leetcode test cases', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAtHead(1)
      linkedList.addAtTail(3)
      linkedList.addAtIndex(1, 2)
      expect(linkedList.toArray()).toStrictEqual([1, 2, 3])
      const node = linkedList.findByIndex(1)
      expect(node?.data).toEqual(2)
      linkedList.deleteAtIndex(0)
      const node1 = linkedList.findByIndex(0)
      expect(node1?.data).toEqual(2)
    })
  })
  describe('findByValue', () => {
    it('case 1', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3])
      expect(linkedList.findByValue(2)).toStrictEqual(new LinkedNode(2, new LinkedNode(3)))
    })
  })
  describe('remove test cases', () => {
    const linkedList = SinglyLinkedList.create([1, 2, 3])
    it('case 1: the value removed rightly', () => {
      linkedList.remove(2)
      expect(linkedList.toArray()).toStrictEqual([1, 3])
    })
    it('case 2: remove value not existed in linked-list should return null', () => {
      expect(linkedList.remove(4)).toBeNull()
    })
    it('case 3: last item should be removed', () => {
      expect(linkedList.remove()?.data).toEqual(3)
      expect(linkedList.toArray()).toStrictEqual([1])
      expect(linkedList.remove()?.data).toEqual(1)
      expect(linkedList.toArray()).toStrictEqual([])
    })
    it('case 4: empty linked-list no item to removed', () => {
      expect(linkedList.remove()).toBeNull()
      expect(linkedList.toArray()).toStrictEqual([])
    })
  })
  describe('map test cases', () => {
    it('case 1', () => {
      const linkedList = SinglyLinkedList.create<number>([1, 2, 3, 4])
      linkedList.map((node) => new LinkedNode(node.data * 2))
      expect(linkedList.toArray()).toStrictEqual([2, 4, 6, 8])
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.map((node) => new LinkedNode(node.data * 2))
      expect(linkedList.toArray()).toStrictEqual([2, 4])
    })
    it('case 3', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.map((node) => new LinkedNode(node.data * 2))
      expect(linkedList.toArray()).toStrictEqual([2])
    })
    it('case 4', () => {
      expect(() => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.map((node) => new LinkedNode(node.data * 2))
      }).toThrowError(new TypeError('linked list is empty'))
    })
  })
  describe('indexOf', () => {
    it('should return the right index', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.indexOf(3)).toEqual(2)
    })
    it('should return -1 when no matched value', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.indexOf(9)).toEqual(-1)
    })
    it('should return -1 when LinkedList is empty', () => {
      const linkedList = new SinglyLinkedList()
      expect(linkedList.indexOf(9)).toEqual(-1)
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      expect(linkedList.indexOf(1)).toEqual(0)
    })
    it('case 5', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      linkedList.add(2)
      expect(linkedList.indexOf(2)).toEqual(1)
    })
    it('if encounter same value should return the min index', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(2)
      linkedList.add(3)
      expect(linkedList.indexOf(2)).toEqual(1)
    })
  })
  describe('lastIndexOf', () => {
    it('should return the right index', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      linkedList.add(6)
      expect(linkedList.lastIndexOf(5)).toEqual(1)
    })
    it('should return -1 when no matched value', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      linkedList.add(5)
      expect(linkedList.lastIndexOf(9)).toEqual(-1)
    })
    it('should return -1 when LinkedList is empty', () => {
      const linkedList = new SinglyLinkedList()
      expect(linkedList.lastIndexOf(1)).toEqual(-1)
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      expect(linkedList.lastIndexOf(1)).toEqual(0)
    })
    it('case 5', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      linkedList.add(2)
      expect(linkedList.lastIndexOf(2)).toEqual(0)
    })
    it('case 6', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      linkedList.add(2)
      expect(linkedList.lastIndexOf(1)).toEqual(1)
    })
    it('if encounter same value should return the max index', () => {
      const linkedList = new SinglyLinkedList()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(3)
      expect(linkedList.lastIndexOf(2)).toEqual(2)
    })
  })
  describe('traverse', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      linkedList.add(3)
      linkedList.add(4)
      let sum = 0
      linkedList.traverse((node) => {
        sum += node.data
      })
      expect(sum).toEqual(10)
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      let sum = 0
      linkedList.traverse((node) => {
        sum += node.data
      })
      expect(sum).toEqual(1)
    })
    it('case 3', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.add(1)
      linkedList.add(2)
      let sum = 0
      linkedList.traverse((node) => {
        sum += node.data
      })
      expect(sum).toEqual(3)
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList<number>()
      let sum = 0
      linkedList.traverse((node) => {
        sum += node.data
      })
      expect(sum).toEqual(0)
    })
  })
  describe('addAll cases', () => {
    describe('addAll at end of linkedlist', () => {
      it('case 1', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        linkedList.addAllAtTail([4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6])
      })
      it('case 2', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        expect(() => {
          linkedList.addAllAtTail([])
        }).toThrowError('插入数组不能为空')
      })
      it('case 3', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.addAllAtTail([4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([4, 5, 6])
      })
      it('case 4', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.addAllAtTail([4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 4, 5, 6])
      })
      it('case 5', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.addAllAtTail([4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 2, 4, 5, 6])
      })
    })
    describe('addAll at index', () => {
      it('case 1', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        linkedList.addAll(1, [4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 2, 4, 5, 6, 3])
      })
      it('case 2', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.add(3)
        expect(() => {
          linkedList.addAll(1, [])
        }).toThrowError('插入数组不能为空')
      })
      it('case 3', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.addAll(0, [4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([4, 5, 6])
      })
      it('case 4', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.addAll(0, [4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 4, 5, 6])
      })
      it('case 5', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.addAll(0, [4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 4, 5, 6, 2])
      })
      it('case 6', () => {
        const linkedList = new SinglyLinkedList<number>()
        linkedList.add(1)
        linkedList.add(2)
        linkedList.addAll(2, [4, 5, 6])
        expect(linkedList.toArray()).toStrictEqual([1, 2])
      })
    })
  })
  describe('replace cases', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3, 4])
      linkedList.replace(2, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 20, 3, 4])
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2])
      linkedList.replace(2, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 20])
    })
    it('case 3', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1])
      linkedList.replace(1, 20)
      expect(linkedList.toArray()).toStrictEqual([20])
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3])
      linkedList.replace(4, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 2, 3])
    })
    it('case 5', () => {
      const linkedList = new SinglyLinkedList<number>()
      expect(() => {
        linkedList.replace(4, 20)
      }).toThrowError("linkedList head can't be null")
    })
  })
  describe('replaceAtIndex cases', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3, 4])
      linkedList.replaceAtIndex(2, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 2, 20, 4])
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2])
      linkedList.replaceAtIndex(1, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 20])
    })
    it('case 3', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1])
      linkedList.replaceAtIndex(0, 20)
      expect(linkedList.toArray()).toStrictEqual([20])
    })
    it('case 4', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3])
      linkedList.replaceAtIndex(3, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 2, 3])
    })
    it('case 5', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3])
      linkedList.replaceAtIndex(2, 20)
      expect(linkedList.toArray()).toStrictEqual([1, 2, 20])
    })
    it('case 6', () => {
      const linkedList = new SinglyLinkedList<number>()
      expect(() => {
        linkedList.replaceAtIndex(4, 20)
      }).toThrowError("linkedList head can't be null")
    })
  })
  describe('swap cases', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3, 4, 5])
      linkedList.swap(1, 2)
      expect(linkedList.toArray()).toStrictEqual([1, 3, 2, 4, 5])
    })
    it('case 2', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2])
      expect(() => {
        linkedList.swap(1, 2)
      }).toThrowError('unvalid index')
    })
  })
  describe('slice cases', () => {
    it('case 1', () => {
      const linkedList = new SinglyLinkedList<number>()
      linkedList.addAllAtTail([1, 2, 3, 4, 5])
      linkedList.slice(1, 2)
      expect(linkedList.toArray()).toStrictEqual([2, 3])
    })
    it('case 2', () => {
      const linkedList = SinglyLinkedList.create([1, 2, 3, 4, 5])
      linkedList.slice(1)
      expect(linkedList.toArray()).toStrictEqual([2, 3, 4, 5])
    })
    // TODO 补充测试用例
  })
})
