//You're given the pointer to the head node of a sorted linked list, 
//where the data in the nodes is in ascending order. Delete as few nodes
//as possible so that the list does not contain any value more than once.
//The given head pointer may be null indicating that the list is empty.



/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    let current = head;

    if(head == null){
        return null;
    }
    while(current){
        let temp = current;
        while(temp != null && current.data == temp.data){
            temp = temp.next;
        }
        current.next = temp;
        current = current.next;
    }
    return head;


}