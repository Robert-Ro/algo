export const getMissingNumber = (inputs: number[]) => {
  return getMissingNumber1(inputs)
}
interface Prev {
  nums: number[]
  num: number
}
const getMissingNumber1 = (inputs: number[]) => {
  const res = inputs.reduce(
    (prev: Prev, curr: number) => {
      if (curr - prev.num === 1) {
        // 连续的
        return {
          nums: prev.nums,
          num: curr,
        }
      } else {
        // 非连续的
        const length = curr - prev.num - 1
        return {
          nums: [...prev.nums, ...Array.from({ length }, (_, i) => i + 1 + prev.num)],
          num: curr,
        }
      }
    },
    { nums: [], num: inputs[0] - 1 }
  )

  return res.nums
}
