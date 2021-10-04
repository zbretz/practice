// Inorder Traversal
// Basic Accuracy: 60.29% Submissions: 79165 Points: 1
// Given a Binary Tree, find the In-Order Traversal of it.

// Example 1:

// Input:
//        1
//      /  \
//     3    2
// Output: 3 1 2

// Example 2:

// Input:
//         10
//      /      \
//     20       30
//   /    \    /
//  40    60  50
// Output: 40 20 60 10 50 30



class BinaryTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value){
    this.left = new BinaryTree(value);
    return this.left;
  }
  insertRight(value){
    this.right = new BinaryTree(value);
    return this.right;
  }
}


const myTree = new BinaryTree(4)
firstleft = myTree.insertLeft(5)
firstright = myTree.insertRight(6)
leftleft = firstleft.insertLeft(7)
leftright = firstleft.insertRight(8)
rightleft = firstright.insertLeft(10)
rightright = firstright.insertRight(12)

//         4
//      /    \
//     5       6
//   /   \    / \
//  7     8  10  12
// Output: 7 5 8 4 10 6 12

// const traverse = (node) => {
//   if (!(node.left || node.right))   return//console.log(node.value)

//   if (node.left){
//     traverse(node.left)
//     console.log(node.left.value)

//   }

//   if (node.right){
//     traverse(node.right)
//     console.log(node.right.value)

//   }
// }

// traverse(myTree) //7,8,5,10,12,6

// return [node.left.value, node.value, node.right.value].filter(i => !!i)


const transform = (node) => {
  let arr = []
  const inner = (node) => {
    let innerArr = []
    console.log(node.value)
    console.log(arr)
    if (node.left) innerArr.push(...inner(node.left))
    if (node.value) innerArr.push(node.value)
    if (node.right) innerArr.push(...inner(node.value))
    return innerArr
  }
  inner(node)
  return arr
  // return [...transform(node.left), node.value, ...transform(node.right)].filter(i => !!i)
}

// const traverse = (node) => {
//   if (!(node.left || node.right))   return//console.log(node.value)

//   let arr = [node.left.value, node.value, node.right.value].filter(i => !!i)

//   }

//   if (node.left){
//     traverse(node.left)
//     console.log(node.right.value)

//   }

//   if (node.right){
//     traverse(node.right)
//     console.log(node.right.value)

//   }
// }

// traverse(myTree) //7,8,5,10,12,6


//         4
//      /    \
//     5       6
//   /   \    / \
//  7     8  10  12
// Output: 7 5 8 4 10 6 12

console.log(transform(myTree))

const solution = (node) => {
  if (node == null) return;

  solution(node.left);

  console.log(node.value + " ");

  solution(node.right);
}


console.log(solution(myTree))