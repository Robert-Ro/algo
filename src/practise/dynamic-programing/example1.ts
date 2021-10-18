export const method1 = (input: number[]): number => {
  let sum: number,
    maxNumber = 0
  for (let i = 0, l = input.length; i < l; i++) {
    for (let j = i; j < l; j++) {
      sum = 0
      for (let k = i; k <= j; k++) {
        sum += input[k]
      }
      if (sum > maxNumber) {
        maxNumber = sum
      }
    }
  }
  return maxNumber
}
export const method2 = (input: number[]): number => {
  let sum = input[0],
    n = input[0]
  for (let i = 1; i < input.length; i++) {
    if (n > 0) {
      n += input[i]
    } else {
      n = input[i]
    }
    if (n > sum) {
      sum = n
    }
  }
  return sum
}
