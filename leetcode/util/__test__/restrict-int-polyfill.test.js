import '../restrict-int-polyfill';

describe('leetcode restrict-int-polyfill', () => {
  test('value', () => {
    expect(Number(0).restrict()).toBe(0);
    expect(Number(42).restrict()).toBe(42);
    expect(Number(9999999999).restrict()).toBe(2147483647);
    expect(Number(-9999999999).restrict()).toBe(-2147483648);
  })
});
