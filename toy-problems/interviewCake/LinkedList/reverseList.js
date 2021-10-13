// Write a function for reversing a linked list. ↴ Do it in place. ↴

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

// abcd

// b.next = a
// c.next = b
// d.next = c

  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('A')
const b = new LinkedListNode('B')
const c = new LinkedListNode('C')
const d = new LinkedListNode('D')
const e = new LinkedListNode('E')

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const reverse = (node) => {
  let current_node = node
  let previous_node = null;
  let next_node = null;

  while(current_node){

    next_node = current_node.next
    current_node.next = previous_node;
    previous_node = current_node;
    current_node = next_node

  }

  return previous_node

}
