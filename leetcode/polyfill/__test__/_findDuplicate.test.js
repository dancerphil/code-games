import '../array-to-count';
import '../object-find-key';

describe('combined polyfill find duplicate', () => {
  test('value', () => {
    expect([1, 2, 2, 3].toCount().findKey(item => item === 1)).toBe('1');
  });
});
