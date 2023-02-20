/**
 * 股票买卖
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-han-sh-rzlz/
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/submissions/
 * https://leetcode-cn.com/problemset/all/?search=%E8%82%A1%E7%A5%A8&page=1
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/
 * https://101.zoo.team/dong-tai-gui-hua/dong-tai-gui-hua-part-1-zui-da-zi-xu-he-pa-lou-ti-he-mai-mai-gu-piao-de-zui-jia-shi-ji
 *
 */

/**
 * 穷举法
 * 时间复杂度O(n^2)
 * @param input
 * @returns
 */
export const method1 = (input: number[]): number => {
  let maxProfit = 0
  for (let i = 0; i < input.length; i++) {
    const minPrice = input[i]
    for (let k = i + 1; k < input.length; k++) {
      if (input[k] > minPrice) {
        const delta = input[k] - minPrice
        if (delta > maxProfit) maxProfit = delta
      }
    }
  }
  return maxProfit
}
/**
 * dp
 * 时间复杂度O(n),空间复杂度O(1)
 * @param input
 * @returns
 */
export const method2 = (input: number[]): number => {
  let maxProfit = 0
  let minPrice = input[0]
  for (let i = 1; i < input.length; i++) {
    const ele = input[i]
    if (ele > minPrice) {
      const delta = ele - minPrice
      if (maxProfit < delta) maxProfit = delta
    } else {
      minPrice = ele
    }
  }
  return maxProfit
}
/**
 * 多次交易求累计最大收益
 * @param prices
 * @param fee
 * @returns
 */
export const maxProfit = (prices: number[], fee: number): number => {
  let hold = -prices[0]
  let cash = 0
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee)
    hold = Math.max(hold, cash - prices[i])
  }

  return cash
}
