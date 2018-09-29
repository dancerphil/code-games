/* eslint-disable prefer-destructuring */
import TreeNode, { toArray } from '../TreeNode';

describe('TreeNode', () => {
  test('value', () => {
    const pool = [];
    for (let i = 0; i < 10; i++) {
      pool.push(new TreeNode(i));
    }
    expect(toArray(new TreeNode())).toEqual([undefined]);
    expect(toArray(new TreeNode(null))).toEqual([[]]); // leetcode
    expect(toArray(pool[0])).toEqual([0]);
    pool[0].left = pool[1];
    expect(toArray(pool[0])).toEqual([0, 1]);
    pool[0].right = pool[2];
    expect(toArray(pool[0])).toEqual([0, 1, 2]);
    pool[0].left = null;
    expect(toArray(pool[0])).toEqual([0, null, 2]);
    pool[2].right = pool[3];
    expect(toArray(pool[0])).toEqual([0, null, 2, null, 3]);
    pool[0].left = pool[1];
    expect(toArray(pool[0])).toEqual([0, 1, 2, null, null, null, 3]);
    pool[3].left = pool[4];
    expect(toArray(pool[0])).toEqual([0, 1, 2, null, null, null, 3, 4]);
  });
});
