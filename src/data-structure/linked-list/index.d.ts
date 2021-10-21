declare interface INode<T> {
  data: T
  next: INode<T> | null
}
declare interface IDoubleLinkedListNode<T> extends INode<T> {
  prev: INode<T> | null
}
declare interface ILinkedList<T> {
  head: INode<T> | null
  tail: INode<T> | null
  /**
   * 添加特定元素到链表尾部
   * @param data
   */
  add(data: T): boolean
  /**
   * 添加多个元素集合到链表尾部。如果集合不存在则抛出错误
   * @param data
   * @throws {InvalidArgumentError} 元素集合不能为空
   */
  addAll(data: T[]): boolean
  /**
   * 在索引index处添加多个元素到链表尾部
   * @param index
   * @param data
   * @throws {InvalidArgumentError} 元素集合不能为空
   * @throws {IndexOutOfBoundsError} 索引超出链表大小范围
   */
  addAll(index: number, data: T[]): boolean
  /**
   * 清空整个链表
   */
  clear(): void
  /**
   * 获取链表中第`index`个节点的值。如果索引无效，则返回null
   * @param index
   */
  get(index: number): T | null

  size(): number
  values(): Generator
  traverse(fn: (INode: INode<T>) => void): void
  search(comparator: (data: T) => boolean): number
  indexOf(data: T): number
  isEmpty(): boolean
  swap(a: number, b: number): void

  /**
   * 在链表的第一个元素之前添加一个值为`val`的节点。插入后，新节点将成为链表的第一个节点。
   * @param val
   */
  addAtHead(val: T): void
  /**
   * 将值为 val 的节点追加到链表的最后一个元素
   * @param val
   */
  addAtTail(val: T): void
  /**
   * 在链表中的第`index`个节点之前添加值为`val`的节点。如果`index`等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果`index`小于 0，则在头部插入节点
   * @param index
   * @param val
   */
  addAtIndex(index: number, val: T): void
  /**
   * 从链表中移除该元素。如果该链表中不包含元素，则保持不变。如果存在多个相同元素，则移除索引最小的元素。如果链表包含该元素，返回true
   * @param data
   * @returns
   */
  remove(data: T): boolean
  /**
   * 如果索引`index`有效，则删除链表中的第`index`个节点
   * @param index
   */
  deleteAtIndex(index: number): T | null
}

type InvalidArgumentError = Error

interface InvalidArgumentErrorConstructor extends ErrorConstructor {
  new (message?: string): InvalidArgumentError
  (message?: string): InvalidArgumentError
  readonly prototype: InvalidArgumentError
}

declare const InvalidArgumentError: InvalidArgumentErrorConstructor

type IndexOutOfBoundsError = Error

interface IndexOutOfBoundsErrorConstructor extends ErrorConstructor {
  new (message?: string): IndexOutOfBoundsError
  (message?: string): IndexOutOfBoundsError
  readonly prototype: IndexOutOfBoundsError
}

declare const IndexOutOfBoundsError: IndexOutOfBoundsErrorConstructor
