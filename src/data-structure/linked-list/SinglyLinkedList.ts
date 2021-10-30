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
export class SinglyLinkedList<T> implements ILinkedList<T> {
  head: LinkedNode<T> | null
  tail: LinkedNode<T> | null
  static create<T>(data: T[]): SinglyLinkedList<T> {
    const ll = new SinglyLinkedList<T>()
    ll.addAllAtTail(data)
    return ll
  }
  constructor() {
    this.head = null
    this.tail = null
  }
  setHead(node: INode<T>): void {
    this.head = node
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
  /**
   * 反转链表
   * 两个节点指针，一个指向未访问的，一个指向已访问的
   */
  reverse(): void {
    let curr = this.head
    let reversing: LinkedNode<T> | null = null
    while (curr) {
      const readed = reversing
      reversing = curr
      curr = curr.next
      reversing.next = readed
    }
    this.head = reversing
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
    if (sentry.next) this.head = sentry.next
    return this.head
  }
  indexOf(value: T): number {
    let curr = this.head
    let start = 0
    while (curr) {
      if (curr.data === value) {
        return start
      }
      start++
      curr = curr.next
    }
    return -1
  }
  lastIndexOf(value: T): number {
    this.reverse()
    return this.indexOf(value)
  }
  addAll(index: number, data: T[]): void {
    if (data.length === 0) {
      throw new TypeError('插入数组不能为空')
    }
    let start = 0
    let curr = this.head
    if (!curr) {
      // 链表为空
      data?.forEach((item: T) => this.add(item))
    }
    while (curr?.next && start !== index) {
      curr = curr.next
      start++
    }
    if (curr) {
      data?.forEach((item: T, i) => this.addAtIndex(i + 1 + index, item))
    }
  }
  addAllAtTail(data: T[]): void {
    if (data.length === 0) {
      throw new TypeError('插入数组不能为空')
    }
    data.forEach((item: T) => this.addAtTail(item))
  }
  replace(oldValue: T, newValue: T): INode<T> {
    if (!this.head) {
      throw TypeError("linkedList head can't be null")
    }
    let curr: INode<T> | null = this.head
    if (this.size() === 1) {
      if (this.head.data === oldValue) {
        this.head.data = newValue
      }
    }
    while (curr && curr.next?.data !== oldValue) {
      curr = curr.next
    }
    if (curr && curr.next) {
      const nnext = curr.next.next
      curr.next = new LinkedNode(newValue)
      curr.next.next = nnext
    }
    return this.head
  }
  replaceAtIndex(index: number, value: T): INode<T> {
    if (!this.head) {
      throw TypeError("linkedList head can't be null")
    }
    const node = this.findByIndex(index)
    if (node) {
      node.data = value
    }
    return this.head
  }
  swap(a: number, b: number): void {
    const nodea = this.findByIndex(a)
    const nodeb = this.findByIndex(b)
    if (!nodea || !nodeb) {
      throw TypeError('unvalid index')
    }
    const va = nodea.data
    const vb = nodeb.data
    nodea.data = vb
    nodeb.data = va
  }
  slice(from: number, to?: number): INode<T> {
    if (from < 0) {
      throw TypeError('from point must biger than 0')
    }
    if (to && from >= to) {
      throw TypeError('from point must smaller than to point')
    }
    const fromNode = this.findByIndex(from)
    if (!fromNode) {
      throw TypeError('from node not existed in the linked list')
    }

    if (to) {
      const toNode = this.findByIndex(to)
      if (toNode?.next) {
        toNode.next = null
      }
    }
    this.head = fromNode
    return fromNode
  }
}
