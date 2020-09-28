export class Node<T> {
  data: T
  prev: Node<T> | null
  next: Node<T> | null
  constructor(data: T) {
    this.data = data
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
  add(item: T) {
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
  addAt(index: number, item: T) {
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
  remove(item: T) {
    let current = this.head?.next
    if (this.head?.data === item) {
      // NOTE on head
      if (!current) {
        // NOTE only one element
        this.head = null
        return
      } else {
        current!.prev = null
        this.head.next = null
        this.head = current!
        return
      }
    }
    while (current) {
      if (current.data === item) {
        // NOTE on the tail
        if (current === this.tail) {
          current.prev!.next = null
          current.prev = null
          this.tail = current.prev
        } else {
          current.prev!.next = current.next
          current.next!.prev = current.prev
        }
        break
      }
      current = current.next
    }
  }
  // removeAt(index: number) {}
  // reverse() {}
  // swap() {}
  // isEmpty() {}
  // length() {}
  // traverse() {}
  // find(item: T) {}

  *values() {
    let current = this.head
    while (current) {
      yield current.data
      current = current.next
    }
  }
}
