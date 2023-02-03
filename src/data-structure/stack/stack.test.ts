import StackArray from './stack-array'

test("stack's count is 1", () => {
  const sa = new StackArray()
  sa.push(1)
  sa.push(2)
  expect(sa.size()).toBe(2)
  const peek = sa.peek()
  expect(peek).toBe(2)
  const _i1 = sa.pop()
  expect(_i1).toBe(2)
  const _i2 = sa.pop()
  expect(_i2).toBe(1)
  const size = sa.size()
  expect(size).toBe(0)
})
