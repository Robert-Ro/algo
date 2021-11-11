import { SinglyLinkedList } from '../data-structure/linked-list/SinglyLinkedList'
import {
  getIntersectionNode,
  mergeTwoLists,
  mergeTwoLists2,
  removeElements1,
  removeElements,
  oddEvenList,
  isPalindrome,
  continuousSpace,
  timeBitmapToRanges,
  addTwoNumbers2,
  addTwoNumbers,
  rotateRight,
} from './linked-list'

describe('链表刷题', () => {
  describe('合并两个有序链表', () => {
    it('case 1', () => {
      const l1 = SinglyLinkedList.create([1, 3, 5])
      const l2 = SinglyLinkedList.create([2, 4, 6])
      const node = mergeTwoLists(l1.head, l2.head)

      if (node) {
        const ll = new SinglyLinkedList<number>()
        ll.setHead(node)
        expect(ll.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6])
      }
    })
    it('case 2', () => {
      const l1 = SinglyLinkedList.create([1, 3, 5])
      const l2 = SinglyLinkedList.create([2, 4, 6])
      const node = mergeTwoLists2(l1.head, l2.head)
      if (node) {
        const ll = new SinglyLinkedList<number>()
        ll.setHead(node)
        expect(ll.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6])
      }
    })
  })
  describe('相交链表', () => {
    // it('case 1', () => {
    //   const l1 = SinglyLinkedList.create([1, 3, 5, 4, 9])
    //   const l2 = SinglyLinkedList.create([2, 7, 6, 4, 11])
    //   expect(getIntersectionNode(l1.head, l2.head)?.data).toEqual(4)
    // })
    // it('case 2', () => {
    //   const l1 = SinglyLinkedList.create([1, 3, 4])
    //   const l2 = SinglyLinkedList.create([2, 7, 6, 4])
    //   expect(getIntersectionNode(l1.head, l2.head)?.data).toEqual(4)
    // })
    // it('case 3', () => {
    //   const l1 = SinglyLinkedList.create([4, 1, 8, 4, 5])
    //   const l2 = SinglyLinkedList.create([5, 0, 1, 8, 4, 5])
    //   expect(getIntersectionNode(l1.head, l2.head)?.data).toEqual(8)
    // })
  })
  describe('移除链表元素', () => {
    it('case 1', () => {
      const ll = SinglyLinkedList.create([1, 2, 6, 3, 4, 5, 6])
      const head = removeElements(ll.head, 6)
      if (head) ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([1, 2, 3, 4, 5])
    })
    it('case 2', () => {
      const ll = new SinglyLinkedList<number>()
      const head = removeElements(ll.head, 1)
      if (head) ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([])
    })
    it('case 3', () => {
      const ll = SinglyLinkedList.create([7, 7, 7, 7])
      const head = removeElements(ll.head, 7)
      if (head) {
        ll.setHead(head)
        expect(ll.toArray()).toStrictEqual([])
      }
    })
  })
  describe('奇偶链表', () => {
    it('case 1', () => {
      const ll = SinglyLinkedList.create<number>([1, 2, 3, 4, 5])
      const head = oddEvenList(ll.head)
      if (head) {
        ll.setHead(head)
        expect(ll.toArray()).toStrictEqual([1, 3, 5, 2, 4])
      }
    })
    it('case 2', () => {
      const ll = SinglyLinkedList.create<number>([2, 1, 3, 5, 6, 4, 7])
      const head = oddEvenList(ll.head)
      if (head) {
        ll.setHead(head)
        expect(ll.toArray()).toStrictEqual([2, 3, 6, 7, 1, 5, 4])
      }
    })
  })
  describe('回文链表', () => {
    it('case 1', () => {
      const ll = SinglyLinkedList.create<number>([1, 2, 2, 1])
      // expect(isPalindrome(ll.head)).toBe(true)
    })
    it('case 2', () => {
      const ll = SinglyLinkedList.create<number>([1, 2])
      // expect(isPalindrome(ll.head)).toBe(false)
    })
    it('case 3', () => {
      const ll = SinglyLinkedList.create<number>([1, 2, 3, 3, 2, 1])
      // expect(isPalindrome(ll.head)).toBe(true)
    })
  })
  describe('连续空间', () => {
    describe('数字连续', () => {
      it('case 1', () => {
        const ll = SinglyLinkedList.create<number>([1, 2, 3, 5, 7, 8, 10])
        expect(continuousSpace(ll.head!, (a, b) => a - b === 1)).toStrictEqual([
          [1, 2, 3],
          [5],
          [7, 8],
          [10],
        ])
      })
      it('case 2', () => {
        const ll = SinglyLinkedList.create<number>([1, 2])
        expect(continuousSpace(ll.head!, (a, b) => a - b === 1)).toStrictEqual([[1, 2]])
      })
      it('case 3', () => {
        const ll = SinglyLinkedList.create<number>([1])
        expect(continuousSpace(ll.head!, (a, b) => a - b === 1)).toStrictEqual([[1]])
      })
      it('case 4', () => {
        const ll = SinglyLinkedList.create<number>([1, 2, 3, 5, 7, 8, 10, 11, 12, 15, 16])
        expect(continuousSpace(ll.head!, (a, b) => a - b === 1)).toStrictEqual([
          [1, 2, 3],
          [5],
          [7, 8],
          [10, 11, 12],
          [15, 16],
        ])
      })
    })
    describe('时间位图问题', () => {
      it('case 1', () => {
        expect(
          timeBitmapToRanges('110000000000000000000000000000000000000000000000')
        ).toStrictEqual(['00:00~01:00'])
      })
      it('case 2', () => {
        expect(
          timeBitmapToRanges('110010000000000000000000000000000000000000000000')
        ).toStrictEqual(['00:00~01:00', '02:00~02:30'])
      })
      it('case 3', () => {
        expect(
          timeBitmapToRanges('110011000000000000000000000000000000000000000000')
        ).toStrictEqual(['00:00~01:00', '02:00~03:00'])
      })
      it('case 4', () => {
        expect(
          timeBitmapToRanges('110011000010000000000000000000000000000000000000')
        ).toStrictEqual(['00:00~01:00', '02:00~03:00', '05:00~05:30'])
      })
    })
  })
  describe('两数相加', () => {
    it('case 1', () => {
      const l1 = SinglyLinkedList.create([2, 4, 3])
      const l2 = SinglyLinkedList.create([5, 6, 4])
      const head = addTwoNumbers2(l1.head, l2.head)
      const s = new SinglyLinkedList()
      if (head) {
        s.setHead(head)
        expect(s.toArray()).toStrictEqual([7, 0, 8])
      }
    })
    it('case 2', () => {
      const l1 = SinglyLinkedList.create([0])
      const l2 = SinglyLinkedList.create([0])
      const head = addTwoNumbers2(l1.head, l2.head)
      const s = new SinglyLinkedList()
      if (head) {
        s.setHead(head)
        expect(s.toArray()).toStrictEqual([0])
      }
    })
    it('case 3', () => {
      const l1 = SinglyLinkedList.create([9, 9, 9, 9, 9, 9, 9])
      const l2 = SinglyLinkedList.create([9, 9, 9, 9])
      const head = addTwoNumbers2(l1.head, l2.head)
      const s = new SinglyLinkedList()
      if (head) {
        s.setHead(head)
        expect(s.toArray()).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1])
      }
      // solution 2
      const head2 = addTwoNumbers(l1.head, l2.head)
      const s2 = new SinglyLinkedList()
      if (head2) {
        s2.setHead(head2)
        expect(s2.toArray()).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1])
      }
    })
    it('case 4', () => {
      const l1 = SinglyLinkedList.create([0, 8, 8, 8, 8, 2, 9, 3, 1, 1])
      const l2 = SinglyLinkedList.create([0, 9, 1, 5, 5, 5, 1, 1, 6])
      const head = addTwoNumbers2(l1.head, l2.head)
      const s = new SinglyLinkedList()
      if (head) {
        s.setHead(head)
        expect(s.toArray()).toStrictEqual([0, 7, 0, 4, 4, 8, 0, 5, 7, 1])
      }
      // solution 2
      const head2 = addTwoNumbers2(l1.head, l2.head)
      const s2 = new SinglyLinkedList()
      if (head2) {
        s2.setHead(head2)
        expect(s2.toArray()).toStrictEqual([0, 7, 0, 4, 4, 8, 0, 5, 7, 1])
      }
    })
    it('case 5', () => {
      const l1 = SinglyLinkedList.create([
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      ])
      const l2 = SinglyLinkedList.create([5, 6, 4])
      const head = addTwoNumbers(l1.head, l2.head)
      const s = new SinglyLinkedList()
      if (head) {
        s.setHead(head)
        expect(s.toArray()).toStrictEqual([
          6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          1,
        ])
      }
    })
  })
  describe('旋转链表', () => {
    it('case 1', () => {
      const ll = SinglyLinkedList.create<number>([1, 2, 3, 4, 5])
      const head = rotateRight(ll.head, 2)
      head && ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([4, 5, 1, 2, 3])
    })
    it('case 2', () => {
      const ll = SinglyLinkedList.create<number>([0, 1, 2])
      const head = rotateRight(ll.head, 4)
      head && ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([2, 0, 1])
    })
    it('case 3', () => {
      const ll = SinglyLinkedList.create<number>([1, 2])
      const head = rotateRight(ll.head, 1)
      head && ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([2, 1])
    })
    it('case 4', () => {
      const ll = SinglyLinkedList.create<number>([1, 2])
      const head = rotateRight(ll.head, 2)
      head && ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([1, 2])
    })
    it('case 5', () => {
      const ll = SinglyLinkedList.create<number>([1])
      const head = rotateRight(ll.head, 99)
      head && ll.setHead(head)
      expect(ll.toArray()).toStrictEqual([1])
    })
  })
})
