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

