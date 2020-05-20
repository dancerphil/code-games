import nonogram from '../index';

describe('nonogram', () => {
  test('value', () => {
    expect(nonogram([], 1)).toEqual([[0]]);
    expect(nonogram([], 2)).toEqual([[0, 0]]);
    expect(nonogram([1], 1)).toEqual([[1]]);
    expect(nonogram([2], 2)).toEqual([[1, 1]]);
    expect(nonogram([2], 1)).toEqual([]);
    expect(nonogram([1], 2)).toEqual([[1, 0], [0, 1]]);
    expect(nonogram([2], 4)).toEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 1],
    ]);
    expect(nonogram([1, 1], 3)).toEqual([[1, 0, 1]]);
    expect(nonogram([1, 1], 4)).toEqual([
      [1, 0, 1, 0],
      [1, 0, 0, 1],
      [0, 1, 0, 1],
    ]);
    expect(nonogram([1, 8], 10)).toEqual([
      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    ]);
    expect(nonogram([1, 1, 1, 1, 1], 10)).toEqual([
      [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    ]);
  });
});
