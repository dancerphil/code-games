import '../object-find-key';

describe('polyfill object-find', () => {
  test('value', () => {
    expect({ 1: 1, 2: 2, 3: 1 }.findKey(item => item === 1)).toBe('1');
  })
});
