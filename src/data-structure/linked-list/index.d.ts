declare interface INode<T> {
  data: T
  next: INode<T> | null
  toString(): string
}
declare interface IDoubleLinkedListNode<T> extends INode<T> {
  prev: INode<T> | null
}

declare interface ILinkedList<T> {
  /**
   * head节点
   */
  head: INode<T> | null
  /**
   * tail节点，仅存在于循环链表(FIXME?)
   */
  tail: INode<T> | null
  // /**
  //  * 根据一个数组生成对应的链表
  //  * @param value
  //  */
  // create(value: T[]): ILinkedList<T>
  /**
   * 生成一个新的链表
   * @param fn
   * @returns 头节点
   */
  map(fn: (node: INode<T>, index: number) => INode<T>): INode<T>
  // /**
  //  * 截取生成一个新的链表
  //  * @param from
  //  * @param to
  //  * @throws {IndexOutOfBoundsError}
  //  * @returns 头节点
  //  */
  // slice(from: number, to?: number): INode<T>
  /**
   * 添加特定元素到链表尾部
   * @param value
   */
  add(value: T): boolean
  /**
   * 在链表中的第index个节点之前添加值为val的节点。
   * 如果index等于链表的长度，则该节点将附加到链表的末尾。
   * 如果index大于链表长度，则不会插入节点。
   * 如果index小于0，则在头部插入节点
   * @param value
   */
  addAtIndex(index: number, value: T): boolean
  /**
   * 在头部添加元素
   * @param value
   */
  addAtHead(value: T): boolean
  // /**
  //  * 添加多个元素集合到链表尾部。如果集合不存在则抛出错误
  //  * @param data
  //  * @throws {InvalidArgumentError} 元素集合不能为空
  //  */
  // addAll(data: T[]): boolean
  // /**
  //  * 在索引index处添加多个元素到链表尾部
  //  * @param index
  //  * @param data
  //  * @throws {InvalidArgumentError} 元素集合不能为空
  //  * @throws {IndexOutOfBoundsError} 索引超出链表大小范围
  //  */
  // addAll(index: number, data: T[]): boolean
  /**
   * 清空整个链表
   */
  clear(): void
  /**
   * 获取链表特定位置的节点，节点无效的话，返回-1
   * @param index
   */
  findByIndex(index: number): INode<T> | null
  /**
   * 根据节点的值进行查找
   * @param value
   */
  findByValue(value: T): INode<T> | null

  // /**
  //  * 使用value替换链表中特定位置的值
  //  * @param index
  //  * @param value
  //  * @throws {IndexOutOfBoundsError}
  //  */
  // set(index: number, value: T): INode<T>
  // /**
  //  * 替换链表中特定位置的值
  //  * @param index
  //  * @param value
  //  * @throws {NoSuchElementError}
  //  */
  // set(value: T): INode<T>
  /**
   * 删除链表中特定位置的元素
   * @param index
   */
  deleteAtIndex(index: number): INode<T> | null
  /**
   * 从链表中移除该元素。如果该链表中不包含元素，则保持不变。如果存在多个相同元素，则移除索引最小的元素。如果链表包含该元素，返回true
   * @param data
   * @returns
   */
  remove(data: T): INode<T> | null
  /**
   * 移除链表的head节点
   * @throws {NoSuchElementError}
   */
  remove(): INode<T> | null
  pop(): INode<T> | null
  // /**
  //  * 查询链表中最先出的值为T的索引，若查询不到则返回-1。如果存在多个相同元素，则返回最小索引值
  //  * @param value
  //  */
  // indexOf(value: T): number
  // /**
  //  * 查询链表中最后出的值为T的索引，若查询不到则返回-1。如果存在多个相同元素，则返回最大索引值
  //  * @param value
  //  */
  // lastIndexOf(value: T): number
  /**
   * 获取链表head节点
   * @returns head节点
   */
  peek(): INode<T> | null
  /**
   * 链表的节点数量(FIXME 循环链表?)
   */
  size(): number
  /**
   * 遍历链表返回一个迭代器
   */
  values(): Generator<T, void, undefined>
  /**
   * 遍历链表
   * @param fn
   */
  traverse(fn: (INode: INode<T>) => void): void
  // /**
  //  * 自定义搜索目标元素的节点索引
  //  * @param comparator
  //  */
  // search(comparator: (data: T) => boolean): number
  /**
   * 链表转数组
   */
  toArray(): T[]
  /**
   * 链表是否为空
   */
  isEmpty(): boolean
  // /**
  //  * 交换两个索引对应的节点
  //  * @param a
  //  * @param b
  //  * @throws {IndexOutOfBoundsError}
  //  */
  // swap(a: number, b: number): void
  /**
   * 反转链表
   */
  reverse(): void
}

export type InvalidArgumentError = Error

interface InvalidArgumentErrorConstructor extends ErrorConstructor {
  new (message?: string): InvalidArgumentError
  (message?: string): InvalidArgumentError
  readonly prototype: InvalidArgumentError
}

declare const InvalidArgumentError: InvalidArgumentErrorConstructor

export type IndexOutOfBoundsError = Error

interface IndexOutOfBoundsErrorConstructor extends ErrorConstructor {
  new (message?: string): IndexOutOfBoundsError
  (message?: string): IndexOutOfBoundsError
  readonly prototype: IndexOutOfBoundsError
}

declare const IndexOutOfBoundsError: IndexOutOfBoundsErrorConstructor

export type NoSuchElementError = Error

interface NoSuchElementErrorConstructor extends ErrorConstructor {
  new (message?: string): NoSuchElementError
  (message?: string): NoSuchElementError
  readonly prototype: NoSuchElementError
}

declare const NoSuchElementError: NoSuchElementErrorConstructor
