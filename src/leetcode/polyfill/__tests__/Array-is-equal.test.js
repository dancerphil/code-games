import '../Array-is-equal';

describe('polyfill Array-is-equal', () => {
  test('value', () => {
    expect(Array.isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(Array.isEqual([1, 2, 3], [3, 2, 1])).toBe(false);
    expect(Array.isEqual([1, 2, 3], [1])).toBe(false);
    expect(Array.isEqual('a', 'a')).toBe(true);
    expect(Array.isEqual('a', 'b')).toBe(false);
  });
});
