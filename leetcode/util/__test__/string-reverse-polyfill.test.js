import '../string-reverse-polyfill';

describe('leetcode string-reverse-polyfill', () => {
  test('value', () => {
    expect('abc'.reverse()).toBe('cba');
    expect('支持中文以及 unicode'.reverse()).toBe('edocinu 及以文中持支');
  })
});
