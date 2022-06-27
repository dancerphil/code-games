import {
    preorderTraversal, inorderTraversal, postorderTraversal,
    inorderTraversalLoop,
} from '../traversal';
import cases from '../TreeNode.case';

const preAns = [
    [0],
    [1, 2],
    [3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13],
    [14, 15, 16],
    [17, 18, 19],
    [20, 21, 23, 22],
    [24, 25, 27, 26],
    [28, 29, 30, 31],
    [32, 33, 34, 35],
];
const inAns = [
    [0],
    [2, 1],
    [3, 4],
    [7, 6, 5],
    [9, 10, 8],
    [11, 13, 12],
    [14, 15, 16],
    [18, 17, 19],
    [23, 21, 20, 22],
    [25, 27, 24, 26],
    [29, 28, 31, 30],
    [33, 32, 34, 35],
];
const postAns = [
    [0],
    [2, 1],
    [4, 3],
    [7, 6, 5],
    [10, 9, 8],
    [13, 12, 11],
    [16, 15, 14],
    [18, 19, 17],
    [23, 21, 22, 20],
    [27, 25, 26, 24],
    [29, 31, 30, 28],
    [33, 35, 34, 32],
];

describe('traversal', () => {
    test('recurse', () => {
        expect(preorderTraversal()).toEqual([]);
        expect(inorderTraversal()).toEqual([]);
        expect(postorderTraversal()).toEqual([]);
        const preArr = [];
        const inArr = [];
        const postArr = [];
        cases.forEach(c => {
            preArr.push(preorderTraversal(c));
            inArr.push(inorderTraversal(c));
            postArr.push(postorderTraversal(c));
        });
        expect(preArr).toEqual(preAns);
        expect(inArr).toEqual(inAns);
        expect(postArr).toEqual(postAns);
    });
    test('loop', () => {
    // expect(preorderTraversalLoop()).toEqual([]);
        expect(inorderTraversalLoop()).toEqual([]);
        // expect(postorderTraversal()).toEqual([]);
        // const preArr = [];
        const inArr = [];
        // const postArr = [];
        cases.forEach(c => {
            // preArr.push(preorderTraversalLoop(c));
            inArr.push(inorderTraversalLoop(c));
            // postArr.push(postorderTraversal(c));
        });
        // expect(preArr).toEqual(preAns);
        expect(inArr).toEqual(inAns);
    // expect(postArr).toEqual(postAns);
    });
});
