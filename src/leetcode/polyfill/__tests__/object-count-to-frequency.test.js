import '../array-to-count';
import '../object-count-to-frequency';

describe('polyfill object-count-to-frequency', () => {
  test('value', () => {
    expect([1, 2, 2, 3].toCount().countToFrequency()).toEqual([{ count: 1, key: '1' }, { count: 2, key: '2' }, { count: 1, key: '3' }]);
  });
});
