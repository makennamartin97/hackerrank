//You’re given the pointer to the head node of a doubly linked list. 
//Reverse the order of the nodes in the list. The head node might be NULL 
//to indicate that the list is empty. Change the next and prev pointers of 
//all the nodes so that the direction of the list is reversed. Return a
//reference to the head node of the reversed list.


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
function reverse(head) {
    let current = head;
    let temp = null;

    while(current !== null){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;

    }
    if (temp != null) { 
        head = temp.prev; 
    }
    return head;



}
