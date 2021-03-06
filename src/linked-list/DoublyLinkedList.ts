import { Node as BaseNode } from './LinkedList'
export class Node<T> extends BaseNode<T> {
  prev: Node<T> | null
  next: Node<T> | null
  constructor(data: T) {
    super(data)
    this.prev = null
    this.next = null
  }
}
export class DoublyLinkedList<T> {
  head: Node<T> | null
  tail: Node<T> | null
  constructor() {
    this.head = null
    this.tail = null
  }
  add(item: T): void {
    const node = new Node(item)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail!.next = node
      this.tail = node
    }
  }
  addAt(index: number, item: T): void {
    const node = new Node(item)
    let current: Node<T> | null = this.head
    let counter = 1

    // NOTE insert on head
    if (index === 0) {
      this.head!.prev = node
      node.next = this.head
      this.head = node
    } else {
      while (current) {
        current = current.next
        if (counter === index) {
          // NOTE insert on tail's next
          if (!current) {
            node.prev = this.tail
            this.tail!.next = node
            this.tail = node
          } else {
            node.prev = current.prev
            node.next = current
            current.prev!.next = node
            current.prev = node
          }
        }
        counter++
      }
    }
  }
  remove(item: T): void {
    let current = this.head
    while (current) {
      if (current.data === item) {
        if (current === this.head && current === this.tail) {
          this.head = null
          this.tail = null
        } else if (current === this.head) {
          this.head = this.head.next
          this.head!.prev = null
        } else if (current === this.tail) {
          this.tail = this.tail.prev
          this.tail!.next = null
        } else {
          current.prev!.next = current.next
          current.next!.prev = current.prev
        }
      }
      current = current.next
    }
  }
  removeAt(index: number): null | T {
    let current = this.head
    if (!current) {
      return null
    }
    let counter = 1
    while (current) {
      if (counter === index) {
        if (current === this.head && current === this.tail) {
          this.head = null
          this.tail = null
        } else if (current === this.head) {
          this.head = this.head.next
          this.head!.prev = null
        } else if (current === this.tail) {
          this.tail = this.tail.prev
          this.tail!.next = null
        } else {
          current.prev!.next = current.next
          current.next!.prev = current.prev
        }
        return current.data as T
      }
      current = current.next
      counter++
    }
    return null
  }
  reverse() {
    let current = this.head
    let prev = null
    while (current) {
      let next = current.next
      current.prev = next
      current.next = prev

      prev = current
      current = next
    }
    this.tail = this.head
    this.head = prev
  }
  // swap() {}
  // isEmpty() {}
  // length() {}
  // traverse() {}
  // find(item: T) {}

  *values(): Generator {
    let current = this.head
    while (current) {
      yield current.data
      current = current.next
    }
  }
}
