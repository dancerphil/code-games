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
