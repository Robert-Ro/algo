import { LinkedNode } from '../data-structure/linked-list/LinkedList'

/**
 * 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * https://leetcode-cn.com/problems/rotate-array/
 * 时间复杂度：O()，空间复杂度：O()
 * @param nums
 * @param k
 */
export function rotateSolution1(nums: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    const last = nums.pop()
    if (last) nums.unshift(last)
  }
  return nums
}
/**
 * 使用额外的数组
 * 空间复杂度O(n), 时间复杂度O(n)
 * @param nums
 * @param k
 * @returns
 */
export function rotateSolution2(nums: number[], k: number): number[] {
  const res = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    const nIndex = i + k
    res[nIndex % nums.length] = nums[i]
  }
  return res
}
const reverse = (nums: number[], start: number, end: number) => {
  while (start < end) {
    ;[nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
}
/**
 * 数组翻转
 * 空间复杂度O(1), 时间复杂度O(n)
 * @param nums
 * @param k
 * @returns
 */
export function rotateSolution3(nums: number[], k: number): number[] {
  k %= nums.length // k可能比nums.length还要大
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
  return nums
}

/**
 * 两数之和 II - 输入有序数组
 * 双指针法
 * @https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 时间复杂度：O(n)，空间复杂度：O(1)
 * @param numbers
 * @param target
 */
export function twoSumWithSortArray(numbers: number[], target: number): number[] {
  let low = 0
  let high = numbers.length - 1
  while (low <= high) {
    if (numbers[low] + numbers[high] === target) {
      return [low + 1, high + 1]
    } else if (numbers[low] + numbers[high] > target) {
      high = high - 1
    } else {
      low = low + 1
    }
  }
  return []
}
/**
 * Two Sum
 * 时间复杂度：O(n^2)， 空间复杂度：O(1)
 * https://leetcode.com/problems/two-sum/
 * @param nums
 * @param target
 */
export function twoSumISolution1(nums: number[], target: number): number[] {
  /***************************/
  for (let i = 0; i < nums.length; i++) {
    const elei = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const elej = nums[j]
      if (elei + elej === target) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
}
/**
 * Two Sum
 * 时间复杂度：O(n)， 空间复杂度：O(n)
 * https://leetcode.com/problems/two-sum/
 * @param nums
 * @param target
 * @returns
 */
export function twoSumISolution2(nums: number[], target: number): number[] {
  // 构造一个哈希表：元素映射到相应的索引
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i]
    // 如果 other 存在且不是 nums[i] 本身
    if (map.has(other) && map.get(other) !== i) {
      return [i, map.get(other)]
    }
  }
  return [-1, -1]
}

/**
 * 344. 反转字符串
 * https://leetcode-cn.com/problems/reverse-string/
 * Do not return anything, modify s in-place instead.
 * 要求：空间复杂度O(1)，原地修改输入数组
 * @param s
 */
export function reverseString(s: string[]): string[] {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    const temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
  return s
}
export function reverseString2(s: string[]): string[] {
  let left = 0
  let right = s.length - 1
  for (; left < right; left++, right--) {
    // 交换了n/2次
    ;[s[left], s[right]] = [s[right], s[left]]
  }
  return s
}
/**
 * 557. 反转字符串中的单词 III
 * @https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @param s
 */
export function reverseWords(s: string): string {
  return s
    .split(' ')
    .map((item) => reverseString2(item.split('')).join(''))
    .join(' ')
}

/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @https://leetcode-cn.com/problems/move-zeroes/
 * @param nums
 * @returns
 */
export function moveZeroes(nums: number[]): number[] {
  // 1. 必须在原数组上操作，不能拷贝额外的数组。
  // 2. 尽量减少操作次数。
  // Hint: The idea would be to have one pointer for iterating the array and another pointer
  // that just works on the non-zero elements of the array.
  // NOTE 快慢指针思想?
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j++] = temp
    }
  }
  return nums
}
export class ListNode extends LinkedNode<number> {
  data: number
  next: ListNode | null
  constructor(data: number, next?: ListNode) {
    super(data, next)
    this.data = data === undefined ? 0 : data
    this.next = next === undefined ? null : next
  }
}
/**
 * 876. 链表的中间结点
 * @https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * 快慢指针，优化遍历一次
 * 时间复杂度：O(N)，空间复杂度：O(1)
 * @param head
 */
export function middleNode(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow?.next || null // slow 一次走一步
    fast = fast.next.next // fast一次走两步
  }
  // fast到达链表末尾时，slow必然位于中间
  return slow
}
/**
 * 两次遍历
 * 时间复杂度：O(N)，空间复杂度：O(1)
 * @param head
 * @returns
 */
export function middleNode2(head: ListNode | null): ListNode | null {
  // 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
  // 如果有两个中间结点，则返回第二个中间结点。
  // 快慢节点?

  let n = 0
  let curr = head

  while (curr) {
    ++n
    curr = curr.next
  }

  let k = 0
  curr = head
  //Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc
  while (k < Math.trunc(n / 2)) {
    ++k
    curr = curr?.next || null
  }
  return curr
}

/**
 * 19. 删除链表的[倒数]第 N 个结点
 * @https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @param head
 * @param n
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 给你一个链表，删除链表的倒数第n个结点，并且返回链表的头结点。
  const preNode = new ListNode(0)
  preNode.next = head
  let end: ListNode | null = preNode
  let start = head
  // 倒数第k个，正数第n-k个
  //fast先走，slow慢n步走，
  while (n > 0) {
    start = start?.next || null
    n--
  }
  while (start) {
    start = start?.next || null
    end = end?.next || null
  }
  // fast到达末尾，-> slow就是目标节点上一个节点
  if (end && end.next) {
    end.next = end?.next?.next || null
  }
  return preNode.next
}
/**
 * 141. 环形链表
 * 给定一个链表，判断链表中是否有环。
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * @param head
 * @returns
 */
export function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    slow = slow?.next || null
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }

  return false
}
/**
 * 142. 环形链表 II
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * @https://leetcode-cn.com/problems/linked-list-cycle-ii/
 * @param head
 * @returns
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null
  }
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    if (!slow?.next) return null
    slow = slow.next
    if (!fast.next.next) return null
    fast = fast.next.next
    if (fast === slow) {
      break
    }
  }
  slow = head
  while (fast !== slow) {
    if (!slow?.next) return null
    slow = slow.next
    if (!fast?.next) return null
    fast = fast.next
  }
  return slow ?? null
}
