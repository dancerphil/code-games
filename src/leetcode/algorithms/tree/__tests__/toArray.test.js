import TreeNode from '../../../dataStructure/TreeNode';
import toArray from '../toArray';
import cases from '../TreeNode.case';

describe('TreeNode', () => {
    test('value', () => {
        expect(toArray(new TreeNode())).toEqual([undefined]);
        expect(toArray(new TreeNode(null))).toEqual([[]]); // leetcode
        const ans = [];
        cases.forEach(c => {
            ans.push(toArray(c));
        });
        expect(ans).toEqual([
            [0],
            [1, 2],
            [3, null, 4],
            [5, 6, null, 7],
            [8, 9, null, null, 10],
            [11, null, 12, 13],
            [14, null, 15, null, 16],
            [17, 18, 19],
            [20, 21, 22, 23],
            [24, 25, 26, null, 27],
            [28, 29, 30, null, null, 31],
            [32, 33, 34, null, null, null, 35],
        ]);
    });
});
