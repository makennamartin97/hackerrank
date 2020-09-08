function hasCycle(head){
    let slow;
    let fast;
    if(!head || !head.next){
        return false;
    }
    slow = head;
    fast = head;
    if(head.next === head){
        return true;
    }
    while(fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}