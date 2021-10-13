/**
 * 有序数组二分查找
 * https://ethsonliu.com/2018/04/binary-search.html
 * https://leetcode-cn.com/study-plan/algorithms/?progress=r933vah Q1
 * @param nums
 * @param target
 * @returns
 */
export function binarySearch(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = left + ((right - left) >> 1) // 防止溢出，移位也更高效。同时，每次循环都需要更新。
    if (nums[middle] > target) right = middle - 1
    else if (nums[middle] < target) left = middle + 1
    else return middle
  }

  return -1
}
