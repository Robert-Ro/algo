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
    const last = nums.pop()!
    nums.unshift(last)
  }
  return nums
}
export function rotateSolution2(nums: number[], k: number): number[] {
  const res = Array(nums.length).fill(0)
  for (let i = 0; i < nums.length; i++) {
    const nIndex = i + k
    res[nIndex % nums.length] = nums[i]
  }
  return res
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
