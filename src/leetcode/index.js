/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './polyfill/array-to-count';

// 111
const minDepth = root => {
    if (!root) {return 0;}
    if (!root.left) {return minDepth(root.right) + 1;}
    if (!root.right) {return minDepth(root.left) + 1;}
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 700
const searchBST = (root, val) => {
    if (!root || root.val === val) {return root;}
    if (root.val > val) {return searchBST(root.left, val);}
    return searchBST(root.right, val);
};

// 1379
const getTargetCopy = (original, cloned, target) => {
    if (!original || original === target) {return cloned;}
    const maybeAnswer = getTargetCopy(original.left, cloned.left, target);
    if (maybeAnswer) {
        return maybeAnswer;
    }
    return getTargetCopy(original.right, cloned.right, target);
};

// 1395
const numTeams = rating => {
    const superiorAfter = [];
    const inferiorAfter = [];
    rating.forEach((item, index) => {
        const superiorN = rating.slice(index).filter(i => i > item).length;
        const inferiorN = rating.length - index - 1 - superiorN;
        superiorAfter.push(superiorN);
        inferiorAfter.push(inferiorN);
    });

    let sum = 0;
    for (let i = 0; i < rating.length; i++) {
        for (let j = i + 1; j < rating.length; j++) {
            sum += rating[i] < rating[j] ? superiorAfter[j] : inferiorAfter[j];
        }
    }
    return sum;
};

// 1431
const kidsWithCandies = (candies, extraCandies) => {
    const max = Math.max(...candies);
    return candies.map(i => i + extraCandies >= max);
};

// 1476
class SubrectangleQueries {
    constructor(rectangle) {
        this.rectangle = rectangle;
        this.stack = [];
    }

    updateSubrectangle(row1, col1, row2, col2, newValue) {
        this.stack.push([row1, col1, row2, col2, newValue]);
    }

    getValue(row, col) {
        const {stack, rectangle} = this;
        for (let i = stack.length - 1; i >= 0; i--) {
            const [row1, col1, row2, col2, newValue] = stack[i];
            if (row1 <= row && row <= row2 && col1 <= col && col <= col2) {return newValue;}
        }
        return rectangle[row][col];
    }
}

// 1480
const runningSum = nums => {
    let sum = 0;
    return nums.map(n => {
        sum += n;
        return sum;
    });
};

// 1512
const numIdenticalPairs = nums => {
    const counts = Object.values(nums.toCount());
    const couples = counts.map(i => (i - 1) * i / 2);
    return _.sum(couples);
};

// 1551
const minOperations = n => {
    const a = n % 2 + 1;
    const b = n - 1;
    const num = Math.floor(n / 2);
    return (a + b) * num / 2;
};

/* 剑指 */

// 64
const sumNums = n => n && sumNums(n - 1) + n;

/* 面试 */

// 16.01
const swapNumbers = numbers => {
    numbers[0] += numbers[1];
    numbers[1] = numbers[0] - numbers[1];
    numbers[0] -= numbers[1];
    return numbers;
    // 注1
    // 这题出的不对，如果要求引用相等，不应该 return，如果不要求，则可以
    // return [numbers[1], numbers[0]];
    // 注2
    // numbers.reverse() 也不错
};
