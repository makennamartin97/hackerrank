//day 18: queues and stacks
//Write the following declarations and implementations:

//Two instance variables: one for your stack and one for your queue
//A void pushCharacter(char ch) method that pushes a character onto a stack.
//A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
//A char popCharacter() method that pops and returns the character at the top of the  instance variable.
//A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.

function Solution(){
    let stack = []
    let queue = []
    this.pushCharacter = (ch) =>{
        return stack.push(ch)
    }
    this.enqueueCharacter = (ch) =>{
        return queue.push(ch)
    }
    this.popCharacter = () => {
        return stack.pop();
    }
    this.dequeueCharacter = () => {
        return queue.shift();
    }

}
