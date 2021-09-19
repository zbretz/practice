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