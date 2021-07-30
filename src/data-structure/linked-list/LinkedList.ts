export class Node<T> {
  data: T
  next: Node<T> | null
  constructor(item: T) {
    this.data = item
    this.next = null
  }
}
export class LinkedList<T> implements ILinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  private _length = 0
  constructor() {
    this.head = null
    this.tail = null
  }
  swap(): void {
    throw new Error('Method not implemented.')
  }
  search(comparator: (data: T) => boolean): number {
    let current = this.head
    let index = 0
    while (current) {
      index++
      if (comparator(current.data)) {
        return index
      }
      current = current.next
    }
    return -1
  }
  traverse(fn: (node: Node<T>) => void): void {
    let current = this.head
    while (current !== null) {
      fn(current)
      current = current.next
    }
  }
  // @ts-ignore
  removeAt(index: number): T {
    throw new Error('Method not implemented.')
  }
  // @ts-ignore
  remove(item: T): void {
    if (this.isEmpty()) {
      return
    }
    let current = this.head
    if (item === current!.data) {
      if (!current!.next) {
        this.head!.next = null
        this.head = current!.next
      }
      return
    }
    while (current?.next) {
      if (current.next.data === item) {
        current.next = current.next.next
        return
      }
      current = current.next
    }
  }
  // @ts-ignore
  addAt(index: number): number {
    throw new Error('Method not implemented.')
  }
  *values() {
    let current = this.head
    while (current) {
      yield current.data
      current = current.next
    }
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  size(): number {
    return this._length
  }
  toString(): string {
    if (this.isEmpty()) {
      return ''
    }
    let str = ''
    let current = this.head
    while (current !== null) {
      str += `--->${current.data}`
      current = current.next
    }
    return str
  }
  /**
   * insert at tail of the linkedlist
   * NOTE 1.the linkedlist is empty; 2.the linkedlist is not empty
   * @param item
   * @returns the length of the linkedlist
   */
  add(item: T): number {
    const node = new Node(item)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = node
    }
    this._length++
    return this.size()
  }

  reverse() {
    if (this.isEmpty() || this.size() === 1) {
      return
    }
    let current = this.head
    let prev = null
    let next = null
    while (current !== null) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev // NOTE 头节点重置
  }
  indexOf(data: T): number {
    if (this.isEmpty()) {
      return -1
    }
    let current = this.head
    let index = 0
    while (current) {
      index++
      if (current.data === data) {
        return index
      }
      current = current.next
    }
    return -1
  }
  // addAt(index: number, item: T): void {}
  // getAt(index: number): Node<T> | null {
  //   return null
  // }
  // remove(item:T):void{}
  // removeAt(index:number):Node<T>|null{}
}
