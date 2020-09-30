export class Node<T> {
  data: T
  next: Node<T> | null
  constructor(item: T) {
    this.data = item
    this.next = null
  }
}

export class LinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  count = 0
  constructor() {
    this.head = null
    this.tail = null
  }
  *values() {
    let current = this.head
    while (current) {
      yield current.data
      current = current.next
    }
  }
  isEmpty(): boolean {
    return this.count === 0
  }
  size(): number {
    return this.count
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
  add(item: T) {
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
    this.count++
  }
  reverse() {
    if (this.isEmpty() || this.size() === 1) {
      return
    }
    let current = this.head
    let next = null
    while (current) {
      let _next = current.next

      current.next = next

      next = current
      current = _next
    }
    this.head = next // NOTE 头节点重置
  }
  // addAt(index: number, item: T): void {}
  // getAt(index: number): Node<T> | null {
  //   return null
  // }
  // remove(item:T):void{}
  // indexOf(item:T):number{}
  // removeAt(index:number):Node<T>|null{}
}
