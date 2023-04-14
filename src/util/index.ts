export const Compare = {
  LESS_THAN: -1,
  EQUAL: 0,
  BIGGER_THAN: 1,
}
export const defaultCompare = (a: number, b: number): number => {
  if (a === b) return Compare.EQUAL

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}
