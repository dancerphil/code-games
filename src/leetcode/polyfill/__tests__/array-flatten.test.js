import '../array-flatten';

describe('polyfill array-flatten', () => {
    test('value', () => {
        expect([[1], [2, 2], 3].flatten()).toEqual([1, 2, 2, 3]);
    });
});
