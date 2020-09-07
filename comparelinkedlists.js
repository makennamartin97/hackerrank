//compare 2 linked lists

/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

//pseudocode 

// CompareLists(Node a, Node b)
//     if a is NULL and b is NULL
//         return true
//     if a is NULL and b is not NULL  //Length Unequal
//         return false
//     if a is not NULL and b is NULL  //Length Unequal
//         return false

//     if(*a.value!=*b.value)  //Nodes don't have the same value
//         return false

//     return CompareLists((*a).next, (*b).next);

function compareLinkedLists(headA, headB) {
    if (headA === null && headB === null) return 1;
    if (headA === null && headB !== null) return 0;
    if (headA !== null && headB === null) return 0;
    
    
    return (headA.data === headB.data ? 1 : 0) && compareLinkedLists(headA.next, headB.next)
}

// function CompareLists(Node a, Node b){
//     if(a == null && b == null){
//         return 1;
//     }
//     if(a == null && b !== null){
//         return 0;
//     }
//     if(a !== null && b == null){
//         return 0;
//     }
//     if(a.data !== b.data){
//         return 0;
//     }
//     return CompareLists(a.next, b.next);
// }