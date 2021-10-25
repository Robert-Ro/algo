import { ILinkedList, INode } from '.'

export class LinkedNode<T> implements INode<T> {
  data: T
  next: LinkedNode<T> | null
  constructor(item: T, next?: LinkedNode<T>) {
    this.data = item
    this.next = next || null
  }
  toString(): string {
    return `${this.data}`
  }
}
/**
 * 链表
 * 索引起始位置0
 */
export class LinkedList<T> implements ILinkedList<T> {
  head: LinkedNode<T> | null
  tail: LinkedNode<T> | null
  constructor() {
    this.head = null
    this.tail = null
  }

  clear(): void {
    this.head = null
  }
  findByIndex(index: number): INode<T> | null {
    let start = 0
    let curr = this.head
    while (curr && start !== index) {
      curr = curr.next
      start++
    }
    return curr || null
  }
  findByValue(value: T): INode<T> | null {
    let curr = this.head
    while (curr?.next && curr.next.data != value) {
      curr = curr.next
    }
    return curr?.next || null
  }
  addAtHead(value: T): boolean {
    const curr = this.head
    const node = new LinkedNode(value)
    if (curr) {
      this.head = node
      node.next = curr
    } else {
      this.head = node
    }
    return true
  }
  add(value: T): boolean {
    return this.addAtTail(value)
  }
  addAtIndex(index: number, value: T): boolean {
    const size = this.size()
    // 超出链表长度
    if (index > size) return false
    // 索引等于链表长度，尾部添加
    if (index === size) return this.addAtTail(value)
    // 索引小于0，在head处添加；索引等于0：链表长度等于0(无所谓头尾添加);链表长度>0(头部添加)
    if (index <= 0) return this.addAtHead(value)
    // 在链表中的第index个节点**之前**添加值为val的节点
    let curr = this.head
    let start = 0
    const node: LinkedNode<T> = new LinkedNode(value)
    while (curr?.next && start !== index - 1) {
      //找到index-1的节点
      curr = curr.next
      start++
    }
    if (curr) {
      const next = curr.next
      curr.next = node
      node.next = next
    }
    return true
  }
  addAtTail(value: T): boolean {
    const node: LinkedNode<T> = new LinkedNode(value)
    if (!this.head) {
      this.head = node
    } else {
      let curr = this.head
      while (curr.next) {
        curr = curr.next
      }
      curr.next = node
    }
    return true
  }
  peek(): INode<T> | null {
    return this.head
  }
  size(): number {
    let size = 0
    let curr = this.peek()
    while (curr) {
      curr = curr.next
      ++size
    }
    return size
  }
  *values(): Generator<T, void, undefined> {
    let curr = this.head
    while (curr) {
      yield curr.data
      curr = curr.next
    }
  }
  toArray(): T[] {
    return Array.from(this.values())
  }
  isEmpty(): boolean {
    return this.size() === 0
  }
  deleteAtIndex(index: number): INode<T> | null {
    let curr = this.head
    let start = 0
    if (index === 0) {
      const _next = this.head?.next || null
      this.head = _next
      return this.head
    }
    const _head = this.head
    // 非头节点
    while (curr?.next && start !== index - 1) {
      curr = curr.next
      start++
    }
    const _next = curr?.next?.next || null
    if (curr) curr.next = _next
    return _head
  }
  pop(): null | INode<T> {
    if (!this.head) {
      return null
    }
    if (!this.head?.next) {
      const head = this.head
      this.head = null
      return head
    }
    let curr = this.head
    while (curr?.next?.next) {
      curr = curr.next
    }
    const last = curr?.next || null
    if (curr && curr.next) {
      curr.next = null
    }
    return last
  }
  remove(value: T): null | INode<T>
  remove(): null | INode<T>
  remove(value?: unknown): null | INode<T> {
    if (typeof value === 'undefined') {
      return this.pop()
    } else {
      let curr = this.head
      while (curr?.next && curr.next.data !== value) {
        curr = curr.next
      }
      if (curr) {
        const nnext = curr?.next?.next || null
        const next = curr.next
        curr.next = nnext
        return next
      }
      return null
    }
  }
  reverse(): void {
    let curr = this.head
    let tail: LinkedNode<T> | null = null
    while (curr) {
      const prev = tail
      tail = curr
      curr = curr.next
      tail.next = prev
    }
    this.head = tail
  }
  traverse(fn: (INode: INode<T>) => void): void {
    let curr = this.head
    while (curr) {
      fn(curr)
      curr = curr.next
    }
  }
  map(fn: (node: INode<T>, index: number) => INode<T>): INode<T> {
    if (!this.head) {
      throw TypeError('linked list is empty')
    }
    let curr: LinkedNode<T> | null = this.head
    let rev = new LinkedNode<T>(curr.data)
    const sentry = rev // 哨兵节点
    let start = 0
    while (curr) {
      const mapedValue = fn(curr, start)
      rev.next = mapedValue
      rev = mapedValue
      start++
      curr = curr.next
    }
    this.head = sentry.next!
    return this.head
  }
}
