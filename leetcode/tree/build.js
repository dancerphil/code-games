import TreeNode from './TreeNode';

export const preorderBuildTree = (preorder, inorder) => {
  if (preorder.length === 0) return [];
  const val = preorder[0];
  const indexInorder = inorder.findIndex(i => i === val);
  const leftPreorder = preorder.slice(1, indexInorder + 1);
  const rightPreorder = preorder.slice(indexInorder + 1);
  const leftInorder = inorder.slice(0, indexInorder);
  const rightInorder = inorder.slice(indexInorder + 1);
  const node = new TreeNode(val);
  if (leftPreorder.length > 0)node.left = preorderBuildTree(leftPreorder, leftInorder);
  if (rightPreorder.length > 0)node.right = preorderBuildTree(rightPreorder, rightInorder);
  return node;
};

export const postorderBuildTree = (inorder, postorder) => {
  if (postorder.length === 0) return [];
  const val = postorder[postorder.length - 1];
  const indexInorder = inorder.findIndex(i => i === val);
  const leftInorder = inorder.slice(0, indexInorder);
  const rightInorder = inorder.slice(indexInorder + 1);
  const leftPostorder = postorder.slice(0, indexInorder);
  const rightPostorder = postorder.slice(indexInorder, -1);
  const node = new TreeNode(val);
  if (leftPostorder.length > 0)node.left = postorderBuildTree(leftInorder, leftPostorder);
  if (rightPostorder.length > 0)node.right = postorderBuildTree(rightInorder, rightPostorder);
  return node;
};
