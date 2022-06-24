import fibonacci from '../index';

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
