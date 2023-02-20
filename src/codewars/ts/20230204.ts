/**
 *
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
 * @param value
 * @returns
 */
export function narcissistic(value: number): boolean {
  const values = `${value}`.split('').map((i) => +i)
  const length = values.length

  return values.reduce((p, c) => p - Math.pow(c, length), value) === 0
}
