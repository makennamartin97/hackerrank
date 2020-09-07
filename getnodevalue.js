//You’re given the pointer to the head node of a linked list and a 
//specific position. Counting backwards from the tail node of the 
//linked list, get the value of the node at the given position. A
// position of 0 corresponds to the tail, 1 corresponds to the node 
//before the tail and so on.



function getNode(head, positionFromTail){
    let count = 0;
    let temp = head;
    //using one pointer to get the length of the list
    while(head.next){
        head = head.next;
        count++;
    }
    //then subtract position from it and get to the required node 
    //by another pointer which was on head of the list.
    for(var i = 0; i < (count-positionFromTail); i++){
        temp = temp.next;
    }
    return temp.data;
}