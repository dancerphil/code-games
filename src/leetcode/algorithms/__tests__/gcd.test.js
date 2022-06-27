import {gcd, lcm} from '../gcd';

describe('algorithm gcd', () => {
    test('value', () => {
        expect(gcd(1, 1)).toBe(1);
        expect(lcm(1, 1)).toBe(1);
        expect(gcd(2, 1)).toBe(1);
        expect(lcm(2, 1)).toBe(2);
        expect(gcd(3, 1)).toBe(1);
        expect(lcm(3, 1)).toBe(3);
        expect(gcd(1, 4)).toBe(1);
        expect(lcm(1, 4)).toBe(4);
        expect(gcd(6, 2)).toBe(2);
        expect(lcm(6, 2)).toBe(6);
    });
});
