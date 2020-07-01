// @ts-check
/**
 * 数组实现栈
 * 栈：先进后出，限制访问的数组
 */
class StackArray {
  constructor() {
    this.items = [];
  }

  /**
   * 获取栈顶元素
   */
  peek() {
    const length = this.items.length;
    return this.items[length - 1];
  }
  size() {
    return this.items.length;
  }
  /**
   * 该栈是否为空
   */
  isEmpty() {
    return this.items.length === 0;
  }
  /**
   * 清空栈
   */
  clear() {
    this.items = [];
  }
  /**
   * 入栈
   */
  push(item) {
    this.items.push(item);
  }

  /**
   * 出栈
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const length = this.items.length;
    const item = this.items[length - 1];
    this.items.pop();
    return item;
  }
}

module.exports = StackArray;
