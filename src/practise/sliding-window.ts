/**
 * 219. 存在重复元素 II
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param nums
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  // 给定一个整数数组和一个整数k，判断数组中是否存在两个不同的索引i和j，使得nums [i] = nums [j]，
  // 并且i和j的差的绝对值至多为k。
  for (let i = 0; i < nums.length; i++) {
    const elei = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      const elej = nums[j]
      if (elei === elej && j - i <= k) {
        return true
      }
    }
  }
  return false
}
/**
 *76. 最小覆盖子串 [HARD]
 * https://leetcode-cn.com/problems/minimum-window-substring/
 * @param s
 * @param t
 */
export function minWindow(s: string, t: string): string {
  //给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
  // 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
  const need: Map<string, number> = new Map()
  const window: Map<string, number> = new Map()
  for (const c of t) {
    need.set(c, (need.get(c) || 0) + 1)
  }
  /**
   * 左指针
   */
  let left = 0
  /**
   * 右指针
   */
  let right = 0
  /**
   *
   */
  let valid = 0
  /**
   *
   */
  let start = 0
  /**
   *
   */
  let len = Number.MAX_VALUE
  while (right < s.length) {
    const c = s[right]
    right++
    if (need.get(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) {
        valid++
      }
    }
    console.log({ left, right })
    while (valid === t.length) {
      // 左侧开始收缩
      if (right - left < len) {
        start = left
        len = right - left
      }
      const d = s[left]
      left++
      if (need.get(d)) {
        if (window.get(d) === need.get(d)) {
          valid--
        }
        window.set(d, (window.get(d) || 0) - 1)
      }
    }
  }
  return len === Number.MAX_VALUE ? '' : s.substr(start, len)
}

minWindow('ADOBECODEBANC', 'ABC')
