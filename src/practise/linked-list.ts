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
  if (l1 === null) return l2

  if (l2 === null) return l1

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
export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // 只有当链表 headA 和 headB 都不为空时，两个链表才可能相交。因此首先判断链表 headA 和 headB 是否为空，
  // 如果其中至少有一个链表为空，则两个链表一定不相交，返回 null。

  // FIXME 理解题型
  if (headA === null || headB === null) return null

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
    if (curr.data !== val) ll.add(curr.data)

    curr = curr.next
  }
  return ll.head
}
export function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dumyNode = new ListNode(-1)
  dumyNode.next = head
  let temp: ListNode | null = dumyNode
  while (temp.next !== null) {
    if (temp.next.data === val) temp.next = temp.next.next
    else temp = temp?.next
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
  if (head === null) return null

  const evenHead = head.next
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
  if (!head || !head.next) return false

  let slow: ListNode | null = head
  let fast: ListNode | null = head.next

  while (fast && fast.next) {
    if (fast.data === slow?.data) slow = slow.next

    fast = fast.next
  }
  return false
}

/**
 * 连续空间问题
 * @param head
 * @returns
 */
export function continuousSpace(head: ListNode, compare: (a: number, b: number) => boolean): number[][] {
  let slow: ListNode | null = head
  let fast: ListNode | null = head?.next
  const result: number[][] = []
  let paritial: number[] = [slow.data]
  while (fast) {
    if (compare(fast.data, slow!.data)) {
      paritial.push(fast.data)
      slow = slow?.next || null
      fast = fast.next
    } else {
      result.push(paritial)
      slow = fast
      paritial = [slow.data]
      fast = fast.next
    }
  }
  result.push(paritial)
  return result
}
/**
 * 将48位的时间位图格式化成字符串
 * @param input
 * @returns
 */
export function timeBitmapToRanges(input: string): string[] {
  const nums: number[] = input.split('').map((v) => parseInt(v, 10))
  const ll = SinglyLinkedList.create<number>(nums)
  const result = continuousSpace(ll.head!, (a, b) => a - b === 0)
  return result
    .reduce(
      (prev: [string[], number], curr: number[]) => {
        const res = number2time(curr, prev[1])
        prev[0].push(res)
        prev[1] = prev[1] + curr.length
        return prev
      },
      [[], 0]
    )[0]
    .filter(Boolean)
}
function number2time(nums: number[], index: number): string {
  if (nums.every((num) => num === 1)) {
    const start = index2string(index)
    const end = nums.length >= 2 ? index2string(index + nums.length) : index2string(index + 1)
    return `${start}~${end}`
  }
  return ''
}

function index2string(index: number): string {
  return index % 2 === 0 ? `${`${index / 2}`.padStart(2, '0')}:00` : `${`${Math.floor(index / 2)}`.padStart(2, '0')}:30`
}
/**
 * 两数相加
 * @
 * 给你两个 非空 的链表，表示两个非负的整数。
 * 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * @param l1
 * @param l2
 */
export function addTwoNumbers2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 请你将两个数相加，并以相同形式返回一个表示和的链表。
  // 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
  if (!l1) return l2
  if (!l2) return l1
  if (l1.data === 0 && !l1.next && l2.data === 0 && !l2.next) return l1

  const getTotal = (l1: ListNode): number => {
    let int = 0
    let head: ListNode | null = l1
    let d = 1
    while (head) {
      int += head.data * d
      head = head.next
      d = d * 10
    }
    return int
  }
  const total = getTotal(l1) + getTotal(l2)
  const totalStr = `${total}`.toLocaleString().replace(/,/g, '').split('')
  const dumpNode = new ListNode(-1)
  let head = dumpNode
  while (totalStr.length) {
    const prev = head
    const t = totalStr.pop()
    if (t) {
      head = new ListNode(+t)
      prev.next = head
    }
  }
  return dumpNode.next
}
/**
 * 两数相加
 * @
 * 给你两个 非空 的链表，表示两个非负的整数。
 * 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * @param l1
 * @param l2
 */
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.data === 0 && !l1.next && l2.data === 0 && !l2.next) return l1

  const dumpNode = new ListNode(-1)
  let head = dumpNode
  let extra = 0
  while (l1 && l2) {
    const prev = head
    let t = l1.data + l2.data + extra
    extra = 0
    if (t >= 10) {
      t = t % 10
      extra = 1
    }
    head = new ListNode(t)
    l1 = l1.next
    l2 = l2.next
    prev.next = head
  }
  // TODO 简化
  if (!l2) {
    while (l1) {
      const prev = head
      let t = l1.data + extra
      extra = 0
      if (t >= 10) {
        t = t % 10
        extra = 1
      }
      head = new ListNode(t)
      l1 = l1.next
      prev.next = head
    }
  }
  if (!l1) {
    while (l2) {
      const prev = head
      let t = l2.data + extra
      extra = 0
      if (t >= 10) {
        t = t % 10
        extra = 1
      }
      head = new ListNode(t)
      l2 = l2.next
      prev.next = head
    }
  }
  // 最后一位
  if (extra === 1) {
    const prev = head
    head = new ListNode(1)
    prev.next = head
  }

  return dumpNode.next
}
/**
 * 61. 旋转链表
 * @https://leetcode-cn.com/problems/rotate-list/
 * @param head
 * @param k
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  // 求旋转了 linked-list length % k 次的结果
  if (!head) return head
  if (k <= 0 || !head.next) return head

  let length = 0
  let _head: ListNode | null = head

  while (_head) {
    _head = _head.next
    length++
  }
  const actual = k % length
  if (actual === 0) return head
  // 倒数actual个元素移动到前面
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let times = 0
  while (fast && fast?.next) {
    fast = fast?.next
    ++times
    if (times >= actual + 1) slow = slow?.next || null
  }
  if (slow?.next) {
    const next = slow.next
    slow.next = null
    let _head = next
    while (_head.next) _head = _head.next

    _head.next = head
    return next
  }
  return null
}
/**
 *
 * @param head
 * @param k
 * @returns
 */
export function rotateRight2(head: ListNode | null, k: number): ListNode | null {
  if (!head) return head
  if (k <= 0 || !head.next) return head

  let n = 1
  let curr: ListNode | null = head

  while (curr?.next) {
    curr = curr.next
    n++
  }
  curr.next = head // 连接成环, 成环旋转
  // n - k % n是新链表头节点的索引
  // n - k % n - 1是新链表尾节点的索引
  for (let index = 0; index < n - (k % n) - 1; index++) head = head?.next || null

  if (head && head.next) {
    const newHead = head.next
    head.next = null // 断开环
    return newHead
  }
  return null
}
