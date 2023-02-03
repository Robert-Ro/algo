export class Node {
  key: number
  left: Node | null
  right: Node | null
  constructor(key: number) {
    this.key = key
    this.left = null
    this.right = null
  }
}
