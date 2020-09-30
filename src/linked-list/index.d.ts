interface ILinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  size(): number
  values(): Generator
  traverse(fn: (node: Node<T>) => void): void
  removeAt(index: number): T
  remove(data: T): void
  add(data: T): number
  addAt(index: number): number
  search(comparator: (data: T) => boolean): Node<T> | null
  indexOf(data: T): number
  isEmpty(): boolean
  swap(index1: number, index2: number): void
}
