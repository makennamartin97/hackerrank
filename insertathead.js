//insert node at head of linked list
function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data);

    if(head == null){
        head = newNode;
    }
    else{
        let current = head;
        newNode.next = current;
        head = newNode;
        
    }
    return head;


}