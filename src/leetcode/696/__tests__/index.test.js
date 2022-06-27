import countBinarySubstrings from '../index';

describe('696', () => {
    test('countBinarySubstrings', () => {
        expect(countBinarySubstrings('01')).toBe(1);
        expect(countBinarySubstrings('00110')).toBe(3);
    });

    test('complex', () => {
        expect(countBinarySubstrings('00101110')).toBe(4);
    });
});
