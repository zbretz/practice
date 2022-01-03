class BinaryTree {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

let one = new BinaryTree(1)
let two = new BinaryTree(2)
let three = new BinaryTree(3)
let four = new BinaryTree(4)
let five = new BinaryTree(5)
let six = new BinaryTree(6)
let seven = new BinaryTree(7)

one.left = two
one.right = three
two.left = four
two.right = five
three.left = six
three.right = seven

let queue = []

function BFS(node){

  console.log(node.value)

  if (node.left) queue.push(node.left)
  if (node.right) queue.push(node.right)

  while (true){
    if (queue.length === 0){
      break
    }
    let curr_node = queue.shift()
    // console.log(curr_node.value)
    BFS(curr_node)
  }
}

BFS(one)