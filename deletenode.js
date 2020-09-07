//delete node

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * 
 * 
 * }
 *
 */
function deleteNode(head, position) {
    let current = head;
    let prev = null;
    let count = 0;
    while(current !== null){
        if(count == position){
            if(prev == null){
                head = current.next;
                break;
            }else{
                prev.next = current.next;
            }
            
        }
        count++;
        prev = current;
        current = current.next;
    }
    return head;




}