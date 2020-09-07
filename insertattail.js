//insert node at tail of linked list


/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    
    let current = head;
    const newNode = new SinglyLinkedListNode(data);
    if(head == null){
        head = newNode;
    }
    else {
        while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
    }
    return head;
}