import { ILinkedList, INode } from '.'

export class LinkedNode<T> implements INode<T> {
  data: T
  next: LinkedNode<T> | null
  constructor(item: T) {
    this.data = item
    this.next = null
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
    while (curr?.next) {
      if (curr.next.data === value) return curr.next
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
  add(value: T): boolean
  add(value: T, index: number): boolean
  add(value: T, index?: unknown): boolean {
    if (typeof index === 'number') {
      const size = this.size()
      if (index > size) return false
      // 索引等于链表长度，尾部添加
      if (index === size) return this.addAtTail(value)
      // 索引小于0，在head处添加；索引等于0：链表长度等于0(无所谓头尾添加);链表长度>0(头部添加)
      if (index <= 0) return this.addAtHead(value)
      // 在链表中的第index个节点之前添加值为val的节点
      let curr = this.head
      let start = 0
      const node: LinkedNode<T> = new LinkedNode(value)
      while (curr && start <= index - 1) {
        //找到index-1的节点
        curr = curr.next
        start++
      }
      if (curr) {
        const _next = curr.next
        curr.next = node
        node.next = _next
      }
      return true
    } else {
      return this.addAtTail(value)
    }
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
      this.head = null
      return curr
    }
    while (curr) {
      curr = curr.next
      start++
      if (start === index - 1) {
        const _next = curr?.next
        if (curr) {
          curr.next = _next?.next || null
          return _next || null
        }
      }
    }
    return null
  }
  remove(data: T): boolean
  remove(): INode<T>
  remove(data?: unknown): boolean | INode<T> {
    if (typeof data === 'undefined') {
      // remove end node of linked-list
    } else {
      // find the node and remove it
    }
    return false
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
}
