class Stack {
  constructor(){
    this.items = []
  }

  push = (item) => {

    return this.items.push(item)
  }

  pop = () => {
    if (!this.items.length) {
      throw new Error('no items in stack');
    }
    return this.items.pop(item)
  }

  peek = () => {
   return this.items[this.items.length-1]
  }
}

let myStack = new Stack
myStack.pop()
myStack.push(6)
console.log(myStack.peek())