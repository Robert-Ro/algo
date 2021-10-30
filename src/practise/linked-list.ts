import { SinglyLinkedList } from '../data-structure/linked-list/SinglyLinkedList'
import { ListNode } from './two-pointer'

/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * @https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 时间复杂度：O(n + m)，空间复杂度：O(1)
 * @param l1
 * @param l2
 * @returns
 */
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const preHead = new ListNode(-1)
  let prev = preHead
  while (l1 !== null && l2 !== null) {
    if (l1.data <= l2.data) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 === null ? l2 : l1
  return preHead.next
}
/**
 * 递归解法
 * @param l1
 * @param l2
 * @returns
 */
export function mergeTwoLists2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.data > l2.data) {
    l2.next = mergeTwoLists2(l1, l2.next)
    return l2
  } else {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  }
}
/**
 * 160. 相交链表
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。
 * @https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 时间复杂度: O(n)，空间复杂度: O(1)
 * NOTE: 函数返回结果后，链表必须保持其原始结构。
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // 只有当链表 headA 和 headB 都不为空时，两个链表才可能相交。因此首先判断链表 headA 和 headB 是否为空，
  // 如果其中至少有一个链表为空，则两个链表一定不相交，返回 null。

  // FIXME 理解题型
  if (headA === null || headB === null) {
    return null
  }
  let pA: ListNode | null = headA
  let pB: ListNode | null = headB

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }
  return pA
}
/**
 * 203. 移除链表元素
 *
 * @https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @param head
 * @param val
 * @returns
 */
export function removeElements1(head: ListNode | null, val: number): ListNode | null {
  const ll = new SinglyLinkedList<number>()
  let curr = head

  while (curr) {
    if (curr.data !== val) {
      ll.add(curr.data)
    }
    curr = curr.next
  }
  return ll.head
}
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dumyNode = new ListNode(-1)
  dumyNode.next = head
  let temp: ListNode | null = dumyNode
  while (temp.next !== null) {
    if (temp.next.data === val) {
      temp.next = temp.next.next
    } else {
      temp = temp?.next
    }
  }
  return dumyNode.next
}

/**
 * 328. 奇偶链表 [Medium]
 * @https://leetcode-cn.com/problems/odd-even-linked-list/
 * 给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。
 * 请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。
 * 空间复杂度应为: O(1)，时间复杂度应为: O(n)
 * @param head
 */
export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }
  let evenHead = head.next
  let odd = head
  let even = evenHead
  while (even && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead

  return head
}

/**
 * 234. 回文链表
 * @https://leetcode-cn.com/problems/palindrome-linked-list/
 * 时间复杂度:O(n)，空间复杂度:O(1)
 * @param head
 */
export function isPalindrome(head: ListNode | null): boolean {
  // 给你一个单链表的头节点 head ，
  // 请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false。
  // 双指针法
  if (!head || !head.next) {
    return false
  }
  let slow: ListNode | null = head
  let fast: ListNode | null = head.next

  while (fast && fast.next) {
    if (fast.data === slow?.data) {
      slow = slow.next
    }
    fast = fast.next
  }
  return false
}
