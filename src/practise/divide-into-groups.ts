/**
 * 将一组数据处理成多块数据，数据块的总和大小相近。数据块的个数至少有一个。
 * @param input 输入数组
 * @param minGroup
 * @param gap 可接受的数据库之间的大小
 * @returns
 */
// - chatGPT给出的思路：贪心算法/动态规划/回溯法/近似算法

/**
 * 数组求和
 * @param numbers 输入数组
 * @returns
 */
const sumArr = (numbers: number[]) => numbers.reduce((p, c) => p + c, 0)
/**
 * 找到最小的数组的索引
 * @param groups
 * @returns
 */
const findMinSumGroupIndex = (groups: number[][]): number => {
  let minSum = Infinity
  let minSumGroupIndx = -1
  for (let i = 0; i < groups.length; i++) {
    const sum = sumArr(groups[i]) // 分组求和
    if (sum < minSum) {
      minSum = sum
      minSumGroupIndx = i
    }
  }

  return minSumGroupIndx
}

export const divideIntoGroups = (input: number[], numGroup: number): number[][] => {
  if (numGroup <= 0) throw new TypeError(`${numGroup} must be greater than 0`)

  // 1. 先对输入的数据按大小进行排序
  const sortedNumbers = input.sort((a, b) => a - b) // 时间复杂度为O(nlogn), 其中n为输入数组的长度
  const groups: number[][] = new Array(numGroup).fill(0).map(() => [])

  // 分组操作：时间复杂度为O(n), n为输入数组的长度
  for (let i = sortedNumbers.length - 1; i >= 0; i--) {
    const num = sortedNumbers[i]
    const minSumGroupIndx = findMinSumGroupIndex(groups)
    groups[minSumGroupIndx].push(num)
  }

  return groups
}

// /**
//  * 使用动态规划处理
//  */
// export function divideIntoGroups2(numbers: number[], numGroups: number) {
//   const n = numbers.length
//   const dp = Array.from({ length: n }, () => Array(numGroups + 1).fill(Infinity)) // 初始化动态规划数组，每个元素的初始值为 Infinity
//   const sum = Array(n + 1).fill(0) // 存储数组 numbers 的前缀和
//   sum[0] = 0
//   for (let i = 1; i <= n; i++) sum[i] = sum[i - 1] + numbers[i - 1] // 计算前缀和

//   dp[0][0] = 0 // 初始状态：一个数分成 0 组的总和为 0
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= numGroups; j++) {
//       for (let k = 0; k < i; k++) {
//         // 尝试将 numbers[k] 到 numbers[i-1] 分成一组
//         const sumInRange = sum[i] - sum[k] // 计算 numbers[k] 到 numbers[i-1] 的和
//         const maxSum = Math.max(dp[k][j - 1], sumInRange) // 取 dp[k][j-1] 和 sumInRange 的最大值作为总和
//         dp[i][j] = Math.min(dp[i][j], maxSum) // 更新 dp[i][j]，取 dp[i][j] 和 maxSum 的最小值
//       }
//     }
//   }

//   return dp[n][numGroups] // 返回分成 numGroups 组的最小总和
// }
