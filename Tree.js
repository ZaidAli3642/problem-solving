class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (value <= currentNode.value) {
        if (currentNode.leftChild === null) {
          currentNode.leftChild = newNode;
          return;
        }

        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = newNode;
          return;
        }
        currentNode = currentNode.rightChild;
      }
    }
  }

  find(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else if (value > currentNode.value) {
        currentNode = currentNode.rightChild;
      } else {
        return currentNode.value;
      }
    }

    return null;
  }
  // Breadth First Traversal

  traverse() {
    this.traverInOrder(this.root);
  }

  // Pre Order Traversal -> Root, Left, Right
  traverPreOrder(root) {
    if (root === null) return;

    console.log(root.value);
    this.traverPreOrder(root.leftChild);
    this.traverPreOrder(root.rightChild);
  }

  // In Order Traversal ->  Left, Root, Right
  traverInOrder(root) {
    if (root === null) return;

    this.traverInOrder(root.leftChild);
    console.log(root.value);
    this.traverInOrder(root.rightChild);
  }

  // Post Order Traversal ->  Left, Right, Root
  traverPostOrder(root) {
    if (root === null) return;

    this.traverPostOrder(root.leftChild);
    this.traverPostOrder(root.rightChild);
    console.log(root.value);
  }
}

const tree = new Tree();
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(1);
tree.insert(6);
tree.insert(8);
tree.insert(10);

tree.traverse();
// console.log(tree.find(10));

// console.log(tree.root);
