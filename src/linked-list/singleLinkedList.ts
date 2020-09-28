class Node {
  value: string
  index: number
  next: number
  constructor(value: string) {
    this.value = value
  }
}
class SingleLinkedList {
  head: Node | null
  constructor() {
    this.head = new Node('head')
  }
}
