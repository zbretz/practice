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
e.next = a;


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

//two runners
const cycleRunners = (node) => {
  let fast_runner = node;
  let slow_runner = node;
  let count = 0;
  while(true){
    console.log(count, fast_runner.value, slow_runner.value)
    count++
    fast_runner = fast_runner.next
    if (count % 2 === 0) slow_runner = slow_runner.next
    if (fast_runner === slow_runner){
      console.log(count, fast_runner.value, slow_runner.value)
      return true
    }
    if (fast_runner.next === null) return false
  }
}

console.log(cycleRunners(a))