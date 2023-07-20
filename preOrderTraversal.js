class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function dfsPreOrder(root) {
  const result = [];
  if (!root) {
    return result;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return result;
}

// Helper function to create a sample tree for testing
function createSampleTree() {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  return root;
}

// Create the sample tree
const root = createSampleTree();

// Perform DFS using Pre Order Traversal
const result = dfsPreOrder(root);

// Print the result
console.log(result); // Output: [1, 2, 4, 5, 3, 6, 7]
