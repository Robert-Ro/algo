import { SinglyLinkedList } from '@/data-structure/linked-list/SinglyLinkedList'
import {
  detectCycle,
  hasCycle,
  ListNode,
  middleNode,
  middleNode2,
  moveZeroes,
  removeNthFromEnd,
  reverseString,
  reverseString2,
  reverseWords,
  rotateSolution1,
  rotateSolution2,
  rotateSolution3,
  twoSumISolution1,
  twoSumISolution2,
  twoSumWithSortArray,
} from './two-pointer'

describe('two pointer test cases', () => {
  describe('leetcode 189 rotated array', () => {
    it('case 1', () => {
      expect(rotateSolution1([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
      expect(rotateSolution2([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
      expect(rotateSolution3([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
    })
    it('case 2', () => {
      expect(rotateSolution1([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
      expect(rotateSolution2([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
      expect(rotateSolution3([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
    })
  })
  describe('twoSum tests', () => {
    describe('sort array', () => {
      it('9 = 2 + 7, result should be [1, 2]', () => {
        expect(twoSumWithSortArray([2, 7, 11, 15], 9)).toStrictEqual([1, 2])
      })
      it('6 = 2 + 4, result should be [1, 3]', () => {
        expect(twoSumWithSortArray([2, 3, 4], 6)).toStrictEqual([1, 3])
      })
      it('-1 = 0 + -1, result should be [1, 2]', () => {
        expect(twoSumWithSortArray([-1, 0], -1)).toStrictEqual([1, 2])
      })
      it('100 = 25 + 75, result should be [2, 3]', () => {
        expect(twoSumWithSortArray([5, 25, 75], 100)).toStrictEqual([2, 3])
      })
      it('8 = 4 + 4, result should be [4, 5]', () => {
        expect(twoSumWithSortArray([1, 2, 3, 4, 4, 9, 56, 90], 8)).toStrictEqual([4, 5])
      })
    })

    describe('unknown sort array or not cases', () => {
      it('case 1', () => {
        expect(twoSumISolution1([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
        expect(twoSumISolution2([2, 7, 11, 15], 9)).toStrictEqual([0, 1])
      })
      it('case 2', () => {
        expect(twoSumISolution1([3, 2, 4], 6)).toStrictEqual([1, 2])
        expect(twoSumISolution2([3, 2, 4], 6)).toStrictEqual([1, 2])
      })
      it('case 3', () => {
        expect(twoSumISolution1([3, 3], 6)).toStrictEqual([0, 1])
        expect(twoSumISolution2([3, 3], 6)).toStrictEqual([0, 1])
      })
    })
  })
  describe('leetcode 344 reverse string', () => {
    it('case 1', () => {
      expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h'])
      expect(reverseString2(['h', 'e', 'l', 'l', 'o'])).toStrictEqual(['o', 'l', 'l', 'e', 'h'])
    })
    it('case 2', () => {
      expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H'])
      expect(reverseString2(['H', 'a', 'n', 'n', 'a', 'h'])).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H'])
    })
  })
  describe('leetcode 557 反转字符串中的单词 III', () => {
    it('case 1', () => {
      expect(reverseWords("Let's take LeetCode contest")).toStrictEqual("s'teL ekat edoCteeL tsetnoc")
    })
  })
  describe('leetcode 283. 移动零', () => {
    it('case 1', () => {
      expect(moveZeroes([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0])
    })
    it('case 2', () => {
      expect(moveZeroes([1, 2, 3, 4, 12])).toStrictEqual([1, 2, 3, 4, 12])
    })
  })
  describe('leetcode 876. 链表的中间结点', () => {
    it('case 1', () => {
      const listnode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
      expect(middleNode(listnode)).toStrictEqual(new ListNode(3, new ListNode(4, new ListNode(5))))
      expect(middleNode2(listnode)).toStrictEqual(new ListNode(3, new ListNode(4, new ListNode(5))))
    })
    it('case 2', () => {
      const listnode = new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))
      )
      expect(middleNode(listnode)).toStrictEqual(new ListNode(4, new ListNode(5, new ListNode(6))))
      expect(middleNode2(listnode)).toStrictEqual(new ListNode(4, new ListNode(5, new ListNode(6))))
    })
    it('case 3', () => {
      const listnode = new ListNode(1)
      expect(middleNode(listnode)).toStrictEqual(new ListNode(1))
      expect(middleNode2(listnode)).toStrictEqual(new ListNode(1))
    })
    it('case 4', () => {
      const listnode = new ListNode(1, new ListNode(2))
      expect(middleNode(listnode)).toStrictEqual(new ListNode(2))
      expect(middleNode2(listnode)).toStrictEqual(new ListNode(2))
    })
  })
  describe('leetcode 19. 删除链表的倒数第N个结点', () => {
    it('case 1', () => {
      const listnode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
      expect(removeNthFromEnd(listnode, 2)).toStrictEqual(
        new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
      )
    })
    it('case 2', () => {
      const listnode = new ListNode(1)
      expect(removeNthFromEnd(listnode, 1)).toStrictEqual(null)
    })
    it('case 3', () => {
      const listnode = new ListNode(1, new ListNode(2))
      expect(removeNthFromEnd(listnode, 1)).toStrictEqual(new ListNode(1))
    })
    it('case 4', () => {
      const listnode = new ListNode(1, new ListNode(2))
      expect(removeNthFromEnd(listnode, 2)).toStrictEqual(new ListNode(2))
    })
  })
  describe('leetcode 141. 环形链表', () => {
    const node1 = new ListNode(1)
    const node2 = new ListNode(2)
    const node3 = new ListNode(3)
    const node4 = new ListNode(4)
    const node5 = new ListNode(5)
    const node6 = new ListNode(6)
    node1.next = node2
    node2.next = node3
    node3.next = node4
    node4.next = node5
    node5.next = node6
    node6.next = node3
    expect(hasCycle(node1)).toBeTruthy()
  })
  describe('leetcode 142. 环形链表 II', () => {
    it('case 1', () => {
      const node1 = new ListNode(1)
      const node2 = new ListNode(2)
      const node3 = new ListNode(3)
      const node4 = new ListNode(4)
      const node5 = new ListNode(5)
      const node6 = new ListNode(6)
      node1.next = node2
      node2.next = node3
      node3.next = node4
      node4.next = node5
      node5.next = node6
      node6.next = node3
      expect(detectCycle(node1)?.data).toEqual(3)
    })
    it('case 2', () => {
      const ll = SinglyLinkedList.create<number>([1, 2])
      expect(detectCycle(ll.head)?.data).toBeUndefined()
    })
    it('case 3', () => {
      const ll = SinglyLinkedList.create<number>([1])
      expect(detectCycle(ll.head)?.data).toBeUndefined()
    })
  })
})
