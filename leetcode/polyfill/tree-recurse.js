import TreeNode from '../tree/TreeNode';

const recurseWithPath = (node, path, func) => {
  path = path.slice();
  const { val, left, right } = node;
  path.push(val);
  if (left === null && right === null) {
    if (func)func(path);
    return;
  }
  if (right === null) {
    recurseWithPath(left, path, func);
    return;
  }
  if (left === null) {
    recurseWithPath(right, path, func);
    return;
  }
  recurseWithPath(left, path, func);
  recurseWithPath(right, path, func);
};

Object.defineProperty(TreeNode.prototype, 'recurse', {
  value: function recurse(func) {
    const root = this;
    recurseWithPath(root, [], func);
  },
  writable: false,
});
