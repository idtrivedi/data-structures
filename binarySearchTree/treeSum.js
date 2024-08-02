class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

const treeSumBFS = (root) => {
  if (root == null) {
    return; // return empty
  }

  let queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    let node = queue.shift();
    sum += node.key;

    if (node.left != null) {
      queue.push(node.left);
    }
    if (node.right != null) {
      queue.push(node.right);
    }
  }
  return sum;
};

const treeSumDFS = (root) => {
  if (root == null) {
    return; // return empty
  }

  return root.key + treeSumDFS(root.left) + treeSumBFS(root.right);
};
