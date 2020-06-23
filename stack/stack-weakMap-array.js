// @ts-check
const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }
  /**
   * O(1)
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = items.get(this).pop();
    return item;
  }
  /**
   * O(1)
   */
  push(element) {
    items.get(this).push(element);
  }
  size() {
    return items.get(this).length;
  }
  /**
   * O(1)
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return items.get(this)[this.size() - 1];
  }
  isEmpty() {
    return items.get(this).length === 0;
  }
  clear() {
    items.set(this, []);
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    return JSON.stringify(items.get(this));
  }
}

module.exports = Stack;
