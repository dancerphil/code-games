import '../array-max';

describe('polyfill array-max', () => {
  test('value', () => {
    expect([1, 2, 3].max()).toBe(3);
    expect([3, 2, 1].max()).toBe(3);
    expect([-1, 3].max()).toBe(3);
    expect([-1].max()).toBe(-1);
    expect([1, undefined].max()).toBe(1);
    expect([-1, undefined].max()).toBe(-1);
    expect([].max()).toBe(undefined);
  });
});
