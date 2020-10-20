# insert node at tail of linked list


#*
#  * For your reference:
#  *
#  * SinglyLinkedListNode {
#  *     int data;
#  *     SinglyLinkedListNode next;
#  * }
#  *
#  *

def insertNodeAtTail(head, data):
    newnode = SinglyLinkedListNode(data)
    if head == None:
        head = newnode
        return head
    curr = head
    while curr.next:
        curr = curr.next

    curr.next = newnode
    return head
