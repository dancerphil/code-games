import math from 'mathjs';

const base = math.matrix([[0, 1], [1, 1]]);

const fibonacci = n => {
    const matrix = math.pow(base, n);
    return math.subset(matrix, math.index(1, 1));
};

export default fibonacci;
