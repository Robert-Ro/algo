// @ts-check
const items = new WeakMap();
const count = new WeakMap();
class Stack {
  constructor() {
    items.set(this, {});
    count.set(this, 0);
  }
  /**
   * O(1)
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let index = count.get(this);
    let _index = index - 1
    const item = items.get(this)[_index];
    count.set(this, _index);
    return item;
  }
  /**
   * O(1)
   */
  push(element) {
    let _count = count.get(this); 
    items.get(this)[_count] = element;
    let __count = _count+1
    count.set(this, __count);
  }
  size() {
    return count.get(this);
  }
  /**
   * O(1)
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return items.get(this)[count.get(this) - 1];
  }
  isEmpty() {
    return count.get(this) === 0;
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
