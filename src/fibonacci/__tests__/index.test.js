import {fibonacci, tribonacci} from '../index';

describe('fibonacci', () => {
    test('value', () => {
        expect(fibonacci(0)).toBe(1);
        expect(fibonacci(1)).toBe(1);
        expect(fibonacci(2)).toBe(2);
        expect(fibonacci(3)).toBe(3);
        expect(fibonacci(4)).toBe(5);
        expect(fibonacci(5)).toBe(8);
        expect(fibonacci(50)).toBe(20365011074);
    });
});

describe('tribonacci', () => {
    test('value', () => {
        expect(tribonacci(0)).toBe(1);
        expect(tribonacci(1)).toBe(1);
        expect(tribonacci(2)).toBe(2);
        expect(tribonacci(3)).toBe(4);
        expect(tribonacci(4)).toBe(7);
        expect(tribonacci(5)).toBe(13);
        expect(tribonacci(24)).toBe(1389537);
    });
});
