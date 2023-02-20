/**
 * 有序数组二分查找
 * 给定一个有序的数组，查找 value 是否在数组中，不存在返回 -1。
   例如：{ 1, 2, 3, 4, 5 } 找 3，返回下标 2（下标从 0 开始计算）。
 * https://ethsonliu.com/2018/04/binary-search.html
 * https://leetcode-cn.com/study-plan/algorithms/?progress=r933vah Q1
 * @param nums
 * @param target
 * @returns
 */
export function binarySearch(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    // 防止溢出，移位也更高效。同时，每次循环都需要更新。
    // 数组元素过多时，high + low容易造成溢出
    const mid = low + ((high - low) >> 1)
    if (nums[mid] > target) high = mid - 1
    else if (nums[mid] < target) low = mid + 1
    else return mid
  }

  return -1
}
/**
 * 使用左闭右开
 * @param nums
 * @param target
 * @returns
 */
export function binarySearchVariant(nums: number[], target: number): number {
  let low = 0
  let high = nums.length

  while (low < high) {
    const mid = low + ((high - low) >> 1) // 防止溢出，移位也更高效。同时，每次循环都需要更新。
    if (nums[mid] > target) high = mid
    else if (nums[mid] < target) low = mid + 1
    else return mid
  }

  return -1
}
/** *******元素查找变体问题***********/
/**
 * 有序数组二分查找第一个匹配
 * 给定一个有序的数组，查找第一个等于 value 的下标，找不到返回 -1。
   例如：{ 1, 2, 2, 2, 4 } 找 2，返回下标 1（下标从 0 开始计算）。
 * @param nums
 * @param target
 */
export function binarySearchFirstMatched(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] > target) {
      high = mid - 1
    } else if (nums[mid] < target) {
      low = mid + 1
    } else {
      // 如果 mid 等于 0，那这个元素已经是数组的第一个元素，那它肯定是我们要找的
      // 如果 mid 不等于 0，但 a[mid]的前一个元素 a[mid-1]不等于 value，那也说明 a[mid]就是我们要找的第一个值等于给定值的元素
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid
      } else {
        // 如果经过检查之后发现 a[mid]前面的一个元素 a[mid-1]也等于 value，那说明此时的 a[mid]肯定不是我们要查找的第一个值等于给定值的元素。那我们就更新 high=mid-1，因为要找的元素肯定出现在[low, mid-1]之间
        high = mid - 1
      }
    }
  }
  return -1
}
/**
 * 有序数组二分查找查找最后一个匹配
 * 给定一个有序的数组，查找最后一个等于 value 的下标，找不到返回 -1。
   例如：{ 1, 2, 2, 2, 4 } 找 2，返回下标 3（下标从 0 开始计算）。
 * @param nums
 * @param target
 * @returns
 */
export function binarySearchLastMatched(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] < target) {
      low = mid + 1
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid
      } else {
        low = mid + 1
      }
    }
  }
  return -1
}
/**
 * 变体三：查找第一个大于等于给定值的元素
 * @param nums
 * @param target
 * @returns
 */
export function binarySearchFirstEqualOrGreater(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const middle = low + ((high - low) >> 1)
    if (nums[middle] >= target) {
      if (middle === 0 || nums[middle - 1] < target) {
        return middle
      }
      high = middle - 1
    } else {
      low = middle + 1
    }
  }
  return -1
}
/**
 * 变体四：查找最后一个小于等于给定值的元素
 * @param nums
 * @param target
 * @returns
 */
export function binarySearchLastEqualOrSmaller(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] <= target) {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid
      }
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}
/** *******二分法应用***********/
/**
 * 求一个数的平方根，精确到小数点后6位
 * 思路：0 - num 之间找一个数m， m * m = num
 * @param num
 * @returns
 */
export const getSqrt = (num: number): number => {
  if (num === 1) return 1
  let low = 0
  let high = num
  while (low <= high) {
    const middle = low + ((high - low) >>> 1) // >>> 无符号右移
    if (+(middle * middle).toPrecision(6) === num) {
      return +middle.toPrecision(6)
    } else if (middle > num / middle) {
      high = middle - 0.000001
    } else {
      low = middle + 0.000001
    }
  }
  return 0
}
export function getSqrt2(x: number): number {
  if (x === 0) return 0
  let left = 0
  let right = x
  const threshold = 0.0001
  while (left <= right) {
    const middle = left + ((right - left) >>> 1)
    if (Math.abs(middle - x / middle) <= threshold) {
      // NOTE 溢出问题
      return Math.round(middle)
    } else if (middle - x / middle > 0) {
      right = middle - threshold
    } else {
      left = middle + threshold
    }
  }
  return -1
}
/**
 * 牛顿弦切法求解平方根
 * 采用数学思想解决问题
 * @param number
 * @returns
 */
export const chord = (number: number): number => {
  let init = number > 4 ? number / 2 : number
  while (init - number / init > 1e-6) {
    init = (number + init * init) / 2 / init
  }
  return init
}
/**
 * 第一个错误的版本[leetcode278]
 * NOTE 查找第一个匹配的变体问题
 * 有一个错的话，后面的全是错的
 * @https://leetcode-cn.com/problems/first-bad-version/
 * @param isBadVersion
 * @returns
 */
export const firstErrorVersion = function (isBadVersion: (num: number) => boolean) {
  return function (n: number): number {
    let low = 1
    let high = n
    while (low <= high) {
      const mid = low + ((high - low) >> 1)
      if (!isBadVersion(mid)) {
        // 区间转移到 [mid+1, high]
        low = mid + 1
      } else {
        // 当前版本为错误的，需要判断1. 当前的索引是不是第一个;2.前一个版本的正确性
        if (mid === 1 || !isBadVersion(mid - 1)) {
          return mid
        } else {
          // 区间转移到 [low, mid-1]
          high = mid - 1
        }
      }
    }
    return -1
  }
}
/**
 * 搜索旋转排序数组
 * @https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * NOTE 关键：从数组中间分开，总有一边是有序的
 * @param nums
 * @param target
 * @returns
 */
export function binarySearchInCycleArray(nums: number[], target: number): number {
  const n = nums.length
  if (n === 0) return -1
  if (n === 1) return nums[0] === target ? 0 : -1

  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] === target) {
      return mid
    }
    // [low, middle] (middle, high]
    if (nums[low] <= nums[mid]) {
      // 前半边有序
      if (nums[low] <= target && nums[mid] > target) {
        // 目标元素落在左半边里，
        high = mid - 1 // 进行常规二分查找
      } else {
        // 目标元素落在右半边无序数组中
        low = mid + 1
      }
    } else {
      // 后半边有序
      if (nums[mid] < target && nums[high] >= target) {
        // 目标元素落在右半边里，
        low = mid + 1 // 进行常规二分查找
      } else {
        // 目标元素落在左半边无序数组中
        high = mid - 1
      }
    }
  }
  return -1
}

/**
 * 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * @https://leetcode-cn.com/problems/search-insert-position/
 * @param nums
 * @param target
 * @returns
 */
export function searchInsert(nums: number[], target: number): number {
  // 处理边界情况
  if (nums[0] >= target) {
    return 0
  }
  if (nums[nums.length - 1] === target) {
    return nums.length - 1
  }
  if (nums[nums.length - 1] < target) {
    return nums.length
  }
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return low
}
/**
 * 两数之和 II - 输入有序数组
 * 二分查找法
 * @https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * 给定一个已按照非递减顺序排列的整数数组numbers，请你从数组中找出两个数满足相加之和等于目标数target
 * @param numbers
 * @param target
 */
export function twoSum(numbers: number[], target: number): number[] {
  // solution先固定一个值，时间复杂度O(nLog(n))
  for (let i = 0; i < numbers.length; i++) {
    const ele = numbers[i]
    let low = i
    let high = numbers.length - 1
    while (low <= high) {
      const mid = low + ((high - low) >> 1)
      if (ele + numbers[mid] > target) {
        high = mid - 1
      } else if (ele + numbers[mid] < target) {
        low = mid + 1
      } else {
        // 不能使用重复的数据
        if (i === mid) {
          low = mid + 1
        } else {
          return [i + 1, mid + 1]
        }
      }
    }
  }

  return []
}
