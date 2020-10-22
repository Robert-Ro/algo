export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
export const defaultCompare = (a: number, b: number): number => {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
