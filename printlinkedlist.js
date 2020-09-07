//print a linked list


SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode next;
}
function printLinkedList(head) {
    let current = head;
    while(current != null){
        console.log(current.data);
        current = current.next;
    }
}