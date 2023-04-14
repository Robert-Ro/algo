// @ts-check
const items = new WeakMap()
const count = new WeakMap()
export default class StackWeapMapObj {
  constructor() {
    items.set(this, {})
    count.set(this, 0)
  }

  /**
   * O(1)
   */
  pop() {
    if (this.isEmpty()) return undefined

    const index = count.get(this)
    const _index = index - 1
    const item = items.get(this)[_index]
    count.set(this, _index)
    return item
  }

  /**
   * O(1)
   */
  // FIXME
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  push(element: any) {
    const _count = count.get(this)
    items.get(this)[_count] = element
    const __count = _count + 1
    count.set(this, __count)
  }

  size() {
    return count.get(this)
  }

  /**
   * O(1)
   */
  peek() {
    if (this.isEmpty()) return undefined

    return items.get(this)[count.get(this) - 1]
  }

  isEmpty() {
    return count.get(this) === 0
  }

  clear() {
    items.set(this, [])
  }

  toString() {
    if (this.isEmpty()) return ''

    return JSON.stringify(items.get(this))
  }
}
