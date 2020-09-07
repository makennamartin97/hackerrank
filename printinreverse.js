

// print the linked list in reverse


 SinglyLinkedListNode {
      int data;
      SinglyLinkedListNode next;
 }
 
function reversePrint(head) {
    let current = head;
    let newArr = [];
    while(current != null){
        newArr.unshift(current.data);
        current = current.next;
    }
    for( var i = 0; i <= newArr.length-1; i++){
        console.log(newArr[i]);

    }

}
