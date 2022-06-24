import findMaxLength from '../index';

describe('525', () => {
  test('findMaxLength', () => {
    expect(findMaxLength([0, 1, 0, 1, 0, 1])).toBe(6);
    expect(findMaxLength([1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
});
