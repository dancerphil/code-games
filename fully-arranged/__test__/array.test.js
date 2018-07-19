import arranged, { getRest } from '../array';

describe('fully arranged', () => {
  test('value', () => {
    expect(arranged('abc')).toEqual([
      ['a', 'b', 'c'],
      ['a', 'c', 'b'],
      ['b', 'a', 'c'],
      ['b', 'c', 'a'],
      ['c', 'a', 'b'],
      ['c', 'b', 'a'],
    ]);
    expect(arranged('ab')).toEqual([['a', 'b'], ['b', 'a']]);
  });
  test('get rest', () => {
    expect(getRest(['a', 'b', 'c'], 0)).toEqual({ word: ['a'], rest: ['b', 'c'] });
    expect(getRest(['a', 'b', 'c'], 1)).toEqual({ word: ['b'], rest: ['a', 'c'] });
  });
});
