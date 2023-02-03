export default class StackArray<T> {
  items: T[] = []
  constructor() {
    this.items = []
  }

  /**
   * 获取栈顶元素
   */
  peek() {
    const length = this.items.length
    return this.items[length - 1]
  }
  size() {
    return this.items.length
  }
  /**
   * 该栈是否为空
   */
  isEmpty() {
    return this.items.length === 0
  }
  /**
   * 清空栈
   */
  clear() {
    this.items = []
  }
  /**
   * 入栈
   */
  push(item: T) {
    this.items.push(item)
  }

  /**
   * 出栈
   */
  pop() {
    if (this.isEmpty()) {
      return null
    }
    const length = this.items.length
    const item = this.items[length - 1]
    this.items.pop()
    return item
  }
}
