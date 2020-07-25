import '../number-to-array';

describe('polyfill number-to-array', () => {
  test('value', () => {
    expect(Number(0).toArray()).toEqual([]);
    expect(Number(1).toArray()).toEqual([1]);
    expect(Number(64).toArray()).toEqual([6, 4]);
    expect(Number(-1).toArray()).toEqual([]);
    expect(Number(123456789).toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
