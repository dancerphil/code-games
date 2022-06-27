import '../Array-plus';

describe('polyfill Array-plus', () => {
    test('value', () => {
        expect(Array.plus([1, 2, 3], [1, 2, 3])).toEqual([2, 4, 6]);
        expect(Array.plus([1, 2, 3], [3, 2, 1])).toEqual([4, 4, 4]);
        expect(Array.plus([1, 2, 3], [1])).toEqual([1, 2, 4]);
        expect(Array.plus([1], [2, 1])).toEqual([2, 2]);
        expect(Array.plus([7, 8, 9], [1])).toEqual([7, 9, 0]);
        expect(Array.plus([5], [5])).toEqual([1, 0]);
    });
});
