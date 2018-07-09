import converter from '../core';

describe('', () => {
  test('', () => {
    expect(converter('172.168.5.1')).toBe(2896692481);
    expect(converter(' 172 .168.5.1')).toBe(2896692481);
    expect(converter('172  .  168.5.')).toBe(2896692480);
    expect(converter('...2')).toBe(2);
    expect(() => converter('1 72.168.5.1')).toThrow();
    expect(() => converter('x.168.5.1')).toThrow();
  });
});
