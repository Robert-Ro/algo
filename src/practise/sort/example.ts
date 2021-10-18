export const bubbleSort = (input: number[]): number[] => {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] <= input[j]) {
        continue
      } else {
        const temp = input[i]
        input[i] = input[j]
        input[j] = temp
      }
    }
  }
  return input
}
export const quickSort = (input: number[]): number[] => {
  return input
}
