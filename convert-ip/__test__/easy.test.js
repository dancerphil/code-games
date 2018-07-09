import converter from '../easy';

describe('easy', () => {
  test('value', () => {
    expect(converter('172.168.5.1')).toBe(2896692481);
    expect(converter('172 . 168.5.1')).toBe(2896692481);
    expect(() => converter('1 72.168.5.1')).toThrow();
  })
});
