/**
 * 219. 存在重复元素 II
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param numbers
 * @param k
 * @returns
 */
export function containsNearbyDuplicate(numbers: number[], k: number): boolean {
  // 给定一个整数数组和一个整数k，判断数组中是否存在两个不同的索引i和j，使得numbers [i] = numbers [j]，
  // 并且i和j的差的绝对值至多为k。
  for (let i = 0; i < numbers.length; i++) {
    const outerEl = numbers[i]
    for (let j = i + 1; j < numbers.length; j++) {
      const innerEl = numbers[j]
      if (outerEl === innerEl && j - i <= k) return true
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
  // 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
  // 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
  /**
   * 所需的字符集合
   */
  const need: Map<string, number> = new Map()
  /**
   * 滑动窗口
   */
  const window: Map<string, number> = new Map()
  for (const c of t) need.set(c, (need.get(c) || 0) + 1)

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
   * 最小覆盖子串的起始索引
   */
  let start = 0
  /**
   * 最小覆盖子串的长度
   */
  let len = Number.MAX_VALUE
  // 右指针是否移动到字符串尾部
  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right]
    right++
    if (need.get(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) valid++
    }
    // 判断窗口中的字符串是否符合要求，left不再继续移动
    while (valid === t.length) {
      // 在这里更新最小覆盖子串，如果前面有匹配到的子串，这里可以再次判断
      if (right - left < len) {
        // len更新了，len最小为t的length
        start = left
        len = right - left
      }
      // d是将移出窗口的字符
      const d = s[left]
      // 左移窗口
      left++
      // 进行窗口内数据的一系列更新
      if (need.get(d)) {
        if (window.get(d) === need.get(d)) valid-- // 窗口中的字符串不再符合要求

        window.set(d, (window.get(d) || 0) - 1) // 更新窗口
      }
    }
  }
  // 返回最小覆盖子串
  return len === Number.MAX_VALUE ? '' : s.substr(start, len)
}

minWindow('aa', 'aa')
