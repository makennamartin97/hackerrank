//insert node at a specific position




/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    let current = head;
    let count = 0;
    let prev = null;
    while(current !== null){
        if(count == position){

            prev.next = newNode;
            newNode.next = current;
        }

        count++;
        prev = current;
        current = current.next;

        
    }
    return head;
}
