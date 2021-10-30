import { SinglyLinkedList } from '../data-structure/linked-list/SinglyLinkedList'
import { mergeTwoLists, mergeTwoLists2 } from './linked-list'

describe('链表刷题', () => {
  describe('合并两个有序链表', () => {
    it('case 1', () => {
      const l1 = SinglyLinkedList.create([1, 3, 5])
      const l2 = SinglyLinkedList.create([2, 4, 6])
      const node = mergeTwoLists(l1.head, l2.head)

      if (node) {
        const ll = new SinglyLinkedList<number>()
        ll.setHead(node)
        expect(ll.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6])
      }
    })
    it('case 2', () => {
      const l1 = SinglyLinkedList.create([1, 3, 5])
      const l2 = SinglyLinkedList.create([2, 4, 6])
      const node = mergeTwoLists2(l1.head, l2.head)
      if (node) {
        const ll = new SinglyLinkedList<number>()
        ll.setHead(node)
        expect(ll.toArray()).toStrictEqual([1, 2, 3, 4, 5, 6])
      }
    })
  })
})
