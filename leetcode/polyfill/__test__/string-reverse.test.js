import '../string-reverse';

describe('polyfill string-reverse', () => {
  test('value', () => {
    expect('abc'.reverse()).toBe('cba');
    expect('支持中文以及 unicode'.reverse()).toBe('edocinu 及以文中持支');
  })
});
