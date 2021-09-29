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


//func(tree)
//if tree.left !== null
//func(tree.left)

// //function to print all nodes:
// const printNodes = (tree) => {
//   console.log(tree.value)
//   if (tree.left) printNodes(tree.left)
//   if (tree.right) printNodes(tree.right)
// }
// printNodes(myTree)

//function to find greatest depth and return array of its values

//function to generate all arrays
// let container =[];

// const printNodesArrays = (tree) => {

//   if (!(tree.left || tree.right)) return [tree.value]

//   let arr = [];

//   if (tree.left) arr = arr.concat([tree.value].concat(printNodesArrays(tree.left)))

//   if (tree.right) arr = arr.concat([tree.value].concat(printNodesArrays(tree.right)))

//   container.push(arr)

//   return container
// }

// console.log(printNodesArrays(myTree))



let container =[];

const printNodesArrays = (tree, arr=[]) => {
  arr.push(tree.value)



  if (!(tree.left || tree.right)) console.log(arr)

  if (tree.left){
    printNodesArrays(tree.left, arr.slice())
  }
  if (tree.right){
    printNodesArrays(tree.right, arr.slice())
  }

  // returnsole.log container
}

console.log(printNodesArrays(myTree))


// const newAttempt = (tree) => {
//   let arr = []
//   let path = ''

//     const traverse = (node,path) => {
//       if (!node.left && !node.right){
//         arr.push(path)
//         return
//       }

//       if (node.left){
//         path += node.left.value
//         traverse(node.left,path)
//       }
//       if (node.right){
//         path += node.right.value
//         traverse(node.right,path)
//       }
//     }
//     traverse(tree,path=String(tree.value))
//     return arr
// }

// console.log(newAttempt(myTree))