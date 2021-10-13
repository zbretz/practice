class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A')
const b = new LinkedListNode('B')
const c = new LinkedListNode('C')

a.next = b;
b.next = c;
c.next = a;

const containsCycle = (node) => {
  const history = []
  let isCycle;
  while(true){
    history.push(node)
    node = node.next
    if (history.indexOf(node) !== -1) {
      isCycle = true
      break
    }
    if(node.next === null){
      isCycle = false
      break
    }
  }
  return isCycle
}

console.log(containsCycle(a))