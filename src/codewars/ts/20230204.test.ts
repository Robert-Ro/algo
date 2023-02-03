import { narcissistic } from './20230204'

describe('20230204', () => {
  it('narcissistic', () => {
    expect(narcissistic(7)).toBe(true)
    expect(narcissistic(1634)).toBe(true)
  })
})
