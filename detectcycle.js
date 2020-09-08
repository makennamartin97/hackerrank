// Preparation code:
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

function hasCycle(head) {
    let current = head;
    let map = {};
    while(current){
        if(map[current.value]){
            return {"Found": current}
        }
        else{
            map[current.value] = true;
        }
        current = current.next;
    }
    return false;
}


const nodeA = new Node('A');
const nodeB = nodeA.next = new Node('B');
const nodeC = nodeB.next = new Node('C');
const nodeD = nodeC.next = new Node('D');
const nodeE = nodeD.next = new Node('E');
console.log(hasCycle(nodeA)); // => null
nodeE.next = nodeB;
console.log(hasCycle(nodeA))