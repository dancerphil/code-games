import arranged, { getRest } from '../index';

describe('fully arranged', () => {
  test('value', () => {
    expect(arranged('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
    expect(arranged('ab')).toEqual(['ab', 'ba']);
  });
  test('get rest', () => {
    expect(getRest('abc', 0)).toEqual({ word: 'a', rest: 'bc' });
    expect(getRest('abc', 1)).toEqual({ word: 'b', rest: 'ac' });
  });
});
