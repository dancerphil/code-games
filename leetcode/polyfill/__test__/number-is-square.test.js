import '../number-is-square';

describe('polyfill number-is-square', () => {
  test('value', () => {
    expect(Number(0).isSquare()).toBe(true);
    expect(Number(1).isSquare()).toBe(true);
    expect(Number(64).isSquare()).toBe(true);
    expect(Number(27).isSquare()).toBe(false);
    expect(Number(-1).isSquare()).toBe(false);
    expect(Number(12345678987654321).isSquare()).toBe(true);
  })
});
