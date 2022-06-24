import { preorderTraversal, inorderTraversal, postorderTraversal } from '../traversal';
import { preorderBuildTree, postorderBuildTree } from '../build';
import cases from '../TreeNode.case';

describe('build', () => {
  test('value', () => {
    expect(preorderBuildTree([], [])).toEqual([]);
    expect(postorderBuildTree([], [])).toEqual([]);
    cases.forEach((c) => {
      const preoreder = preorderTraversal(c);
      const inorder = inorderTraversal(c);
      const postorder = postorderTraversal(c);
      expect(preorderBuildTree(preoreder, inorder)).toEqual(c);
      expect(postorderBuildTree(inorder, postorder)).toEqual(c);
    });
  });
});
