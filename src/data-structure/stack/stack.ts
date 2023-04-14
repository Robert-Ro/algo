export default class Stack<T> {
  private count: number
  // FIXME

  private items: AnyToFix

  constructor() {
    this.items = {}
    this.count = 0
  }

  /**
   * O(1)
   */
  pop() {
    if (this.isEmpty()) return undefined

    this.count--
    const item = this.items[this.count]
    delete this.items[this.count]
    return item
  }

  /**
   * O(1)
   */
  push(element: T) {
    this.items[this.count] = element
    this.count++
  }

  size() {
    return this.count
  }

  /**
   * O(1)
   */
  peek() {
    if (this.isEmpty()) return undefined

    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (this.isEmpty()) return ''

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    let objString = `${this.items[0]}`
    for (let index = 1; index < this.count; index++) {
      const element = this.items[index]
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      objString = `${objString}, ${element}`
    }
    return objString
  }
}
