/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Compare, defaultCompare } from '@/util'
import { Node } from './Node'

interface ITree {
  insert(key: number): void
  /**
   * 寻找一棵树或其任意子树中的一个特定的值
   * @param key
   */
  search(key: number): boolean
  /**
   * 中序遍历
   * 一种以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点。
   * 中序遍历的一种应用就是对树进行排序操作。
   * @param callback
   */
  inOrderTraverse(callback: (key: number) => void): void
  /**
   * 先序遍历
   * 以优先于后代节点的顺序访问每个节点的。
   * 应用：打印一个结构化的文档。
   * @param callback
   */
  preOrderTraverse(callback: (key: number) => void): void
  /**
   * 后续遍历
   * 先访问节点的后代节点，再访问节点本身。
   * 应用：计算一个目录及其子目录中所有文件所占空间的大小
   */
  postOrderTraverse(callback: (key: number) => void): void
  min(): Node
  max(): Node
  remove(key: number): Node | null
}
export default class BinarySearchTree implements ITree {
  compareFn: (a: number, b: number) => number
  root: Node | null
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key: number): void {
    if (this.root === null) {
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  private insertNode(node: Node, key: number): void {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left === null) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key)
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  search(key: number): boolean {
    return this.searchNode(this.root, key)
  }

  private searchNode(node: Node | null, key: number): boolean {
    if (node === null) {
      return false
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  inOrderTraverse(callback: (key: number) => void): void {
    this.inOrderTraverseNode(this.root!, callback)
  }

  private inOrderTraverseNode(node: Node | null, callback: (key: number) => void): void {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  preOrderTraverse(callback: (key: number) => void): void {
    this.preOrderTraverseNode(this.root, callback)
  }

  private preOrderTraverseNode(node: Node | null, callback: (key: number) => void): void {
    if (node !== null) {
      callback(node.key)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  postOrderTraverse(callback: (key: number) => void): void {
    this.postOrderTraverseNode(this.root, callback)
  }

  private postOrderTraverseNode(node: Node | null, callback: (key: number) => void): void {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  min(): Node {
    return this.minNode(this.root!)
  }

  private minNode(node: Node): Node {
    let current = node
    while (current !== null && current.left !== null) {
      current = current.left
    }
    return current
  }

  max(): Node {
    return this.maxNode(this.root!)
  }

  private maxNode(node: Node): Node {
    let current = node
    while (current !== null && current.right !== null) {
      current = current.right
    }
    return current
  }

  remove(key: number): Node | null {
    return this.removeNode(this.root, key)
  }

  private removeNode(node: Node | null, key: number): Node | null {
    if (node === null) {
      return null
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // NOTE 键等于node.key
      // NOTE 叶子节点无子节点
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      // NOTE 只有一个子节点
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      // NOTE 左右字节的点都存在
      const aux = this.minNode(node.right) // 当找到了要移除的节点后，需要找到它右边子树中最小的节点
      node.key = aux.key // 用它右侧子树中最小节点的键去更新这个节点的值,移除了这个节点
      node.right = this.removeNode(node.right, aux.key) // 继续把右侧子树中的最小节点移除(删除重复的节点)
      return node // 向它的父节点返回更新后节点的引用
    }
  }
}
