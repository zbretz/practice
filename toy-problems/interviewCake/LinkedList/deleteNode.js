// Delete a node from a singly-linked list, ↴ given only a variable pointing to that node.

// The input could, for example, be the variable b below:

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');

a.next = b;
b.next = c;

const deleteNode = (node) => {
  let head_node = a;
  let current_node = head_node;
  while(true){
    if (current_node.next === node) break
    current_node = current_node.next
  }
  current_node.next = node.next
  console.log(`deleting node ${node.value}`)
  delete b.value
  delete b.next
  console.log(`deleted node`)
}

deleteNode(b);
console.log(a.next)