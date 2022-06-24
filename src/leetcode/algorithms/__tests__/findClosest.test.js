import findClosest from '../findClosest';

describe('algorithm findClosest', () => {
  test('value', () => {
    expect(findClosest([1], 1)).toEqual([0]);
    expect(findClosest([1], 2)).toEqual([0]);
    expect(findClosest([1, 2, 3], 2)).toEqual([1]);
    expect(findClosest([1, 3, 5], 2)).toEqual([0, 1]);
    expect(findClosest([1, 4, 7], 2)).toEqual([0]);
    expect(findClosest([1, 4, 7], 3)).toEqual([1]);
    expect(findClosest([1, 4, 7], 5)).toEqual([1]);
    expect(findClosest([1, 4, 7], 6)).toEqual([2]);
    expect(findClosest([], 2)).toEqual(undefined);
  });
});
