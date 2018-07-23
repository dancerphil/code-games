import '../sortedFindIndex';

describe('polyfill array-sorted-find-index', () => {
  test('value', () => {
    expect([1].sortedFindIndex(2)).toBe(0);
    expect([3].sortedFindIndex(2)).toBe(-1);
    expect([3, 4].sortedFindIndex(2)).toBe(-1);
    expect([1, 3].sortedFindIndex(2)).toBe(0);
    expect([1, 2, 3].sortedFindIndex(2)).toBe(1);
    expect([1, 2, 3, 4, 5].sortedFindIndex(3)).toBe(2);
    expect([1, 2, 3, 4, 5].sortedFindIndex(3.5)).toBe(2);
    expect([].sortedFindIndex(2)).toBe(undefined);
  });
});
