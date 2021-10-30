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
 * 相交链表
 *
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {}
