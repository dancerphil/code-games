import * as math from 'mathjs';

const base = math.matrix([[0, 1], [1, 1]]);

export const fibonacci = n => {
    const matrix = math.pow(base, n);
    return math.subset(matrix, math.index(1, 1));
};

const triBase = math.matrix([[0, 0, 1], [1, 0, 1], [0, 1, 1]]);

export const tribonacci = n => {
    const matrix = math.pow(triBase, n);
    return math.subset(matrix, math.index(2, 2));
};
