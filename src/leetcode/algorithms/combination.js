import '../polyfill/array-flatten';

const combination = (bottom, upper, prefix = '') => {
    if (bottom < upper) {
        return [];
    }
    if (upper === 0) {
        let str = prefix;
        for (let i = 0; i < bottom; i++) {
            str += '0';
        }
        return [str];
    }
    let middlePrefix = '1';
    const ans = [];
    for (let i = bottom - 1; i >= upper - 1; i--) {
        ans.push(combination(i, upper - 1, prefix + middlePrefix));
        middlePrefix = `0${middlePrefix}`;
    }
    return ans.flatten();
};

export default combination;
