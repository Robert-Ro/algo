/**
 * 递归算法
 * 时间复杂度O(2^n), 空间复杂度O()
 * 存在重复运算
 * @param input
 * @returns
 */
export const recursion1 = (input: number): number => {
  if (input <= 2) return input
  return recursion1(input - 1) + recursion1(input - 2)
}
/**
 * 递归算法优化
 * 时间复杂度O(n), 空间复杂度O(n) map对象
 * 去除重复运算
 * @param input
 * @returns
 */
export const recursion2 = (input: number) => {
  const map: { [key: number]: number } = {}
  const fn = (input: number): number => {
    if (input <= 2) return input
    const result = map[input] // 缓存计算结果
    if (result) {
      return result
    } else {
      const _result = fn(input - 1) + fn(input - 2)
      map[input] = _result
      return _result
    }
  }
  return fn(input)
}
/**
 * 动态规划
 * 时间复杂度O(n), 空间复杂度O(n) result数组
 * @param input
 * @returns
 */
export const dp = (input: number) => {
  const result: number[] = [0, 1, 2] // 经典的斐波那切数列
  for (let i = 3; i <= input; i += 1) result[i] = result[i - 1] + result[i - 2]

  return result[input]
}
