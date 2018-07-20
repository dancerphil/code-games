import maxProfit from '../index';

describe('8', () => {
  test('value', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([2, 7, 1, 6])).toBe(5);
    expect(maxProfit([2, 8, 1, 6])).toBe(6);
    expect(maxProfit([2, 7, 0, 6])).toBe(6);
  });
});
