class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function dfsInOrder(root) {
  const result = [];
  if (!root) {
    return result;
  }

  const stack = [];

  let currentNode = root;
  while (currentNode || stack.length) {
    // Traverse to the leftmost leaf node, pushing all nodes along the way into the stack
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    }
    console.log("stack : ", stack);
    // Pop the node from the stack and process its value
    currentNode = stack.pop();
    result.push(currentNode.val);

    // Move to the right subtree
    currentNode = currentNode.right;
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

// Perform DFS using In Order Traversal
const result = dfsInOrder(root);

// Print the result
console.log(result); // Output: [4, 2, 5, 1, 6, 3, 7]
