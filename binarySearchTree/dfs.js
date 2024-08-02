class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const depthFirstSearch = (root) => {
  if (root == null) {
    return; // return empty message
  }
  const values = [];
  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
  return values;
};

const recursiveDFS = (root) => {
  if (root == null) {
    return;
  }

  const leftValues = recursiveDFS(root.left);
  const rightValues = recursiveDFS(root.right);

  return [root.key, ...leftValues, ...rightValues];
};
