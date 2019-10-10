const preorderRecurse = (ans, node) => {
  const { val, left, right } = node;
  ans.push(val);
  if (left) preorderRecurse(ans, left);
  if (right) preorderRecurse(ans, right);
};

export const preorderTraversal = (root) => {
  if (!root) return [];
  const ans = [];
  preorderRecurse(ans, root);
  return ans;
};

const inorderRecurse = (ans, node) => {
  const { val, left, right } = node;
  if (left) inorderRecurse(ans, left);
  ans.push(val);
  if (right) inorderRecurse(ans, right);
};

export const inorderTraversal = (root) => {
  if (!root) return [];
  const ans = [];
  inorderRecurse(ans, root);
  return ans;
};

export const inorderTraversalLoop = (root) => {
  if (!root) return [];
  const ans = [];
  let node = root;
  const stack = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (node.left !== null) {
      const tmp = node.left;
      node.left = null;
      stack.push(node);
      node = tmp;
    } else {
      ans.push(node.val);
      if (node.right !== null) {
        node = node.right;
      } else {
        node = stack.pop();
        if (!node) return ans;
      }
    }
  }
};

const postorderRecurse = (ans, node) => {
  const { val, left, right } = node;
  if (left) postorderRecurse(ans, left);
  if (right) postorderRecurse(ans, right);
  ans.push(val);
};

export const postorderTraversal = (root) => {
  if (!root) return [];
  const ans = [];
  postorderRecurse(ans, root);
  return ans;
};
