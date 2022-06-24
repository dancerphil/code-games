import converter from '../core';

describe('core', () => {
  test('value', () => {
    expect(converter('172.168.5.1')).toBe(2896692481);
    expect(converter('33.168.5.1')).toBe(564659457);
    expect(converter(' 172 .168.5.1')).toBe(2896692481);
    expect(converter('172  .  168.5.')).toBe(2896692480);
    expect(converter('...2')).toBe(2);
  });
  test('throw when space invalid', () => {
    expect(() => converter('1 72.168.5.1')).toThrow();
  });
  test('throw when char invalid', () => {
    expect(() => converter('x.168.5.1')).toThrow();
  });
  test('throw when number invalid', () => {
    expect(() => converter('333.168.5.1')).toThrow();
  });
  test('throw when byte length invalid', () => {
    expect(() => converter('172.168.5')).toThrow();
    expect(() => converter('172.168.5.1.1')).toThrow();
  });
});
