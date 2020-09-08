//Given a reference to the head of a doubly-linked list and an integer,
// create a new DoublyLinkedListNode object having data value  and insert 
//it into a sorted linked list while maintaining the sort.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function sortedInsert(head, data) {
    let newnode = new DoublyLinkedListNode();
    newnode.data = data;
    if(head == null){
        return newnode;
    }
    if(data < head.data){
        newnode.next = head;
        head = newnode;
        return newnode;
    }
    let current = head;
    while (current.next != null && current.next.data < data) {
        current = current.next;
    }
    if (current.next != null) {
        newnode.next = current.next;
        newnode.next.prev = newnode;
    }
    current.next = newnode;
    newnode.prev = current;

    return head;
    



}
