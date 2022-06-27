import '../array-uniq';

describe('polyfill array-uniq', () => {
    test('value', () => {
        expect([].uniq()).toEqual([]);
        expect([1, 2, 2, 3].uniq()).toEqual([1, 2, 3]);
    });
});
