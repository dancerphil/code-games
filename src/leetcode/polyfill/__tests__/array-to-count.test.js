import '../array-to-count';

describe('polyfill array-to-count', () => {
    test('value', () => {
        expect([1, 2, 2, 3].toCount()).toEqual({1: 1, 2: 2, 3: 1});
    });
});
