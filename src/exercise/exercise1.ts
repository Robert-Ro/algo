interface Prev {
  numArr: number[]
  num: number
}
const getMissingNumber1 = (inputs: number[]) => {
  const res = inputs.reduce(
    (prev: Prev, curr: number) => {
      if (curr - prev.num === 1) {
        // 连续的
        return {
          numArr: prev.numArr,
          num: curr,
        }
      } else {
        // 非连续的
        const length = curr - prev.num - 1
        return {
          numArr: [...prev.numArr, ...Array.from({ length }, (_, i) => i + 1 + prev.num)],
          num: curr,
        }
      }
    },
    { numArr: [], num: inputs[0] - 1 }
  )

  return res.numArr
}

export const getMissingNumber = (inputs: number[]) => {
  return getMissingNumber1(inputs)
}
