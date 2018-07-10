import { spaceType, dotType, digitType, getType } from "../runtime";

describe('getType', () => {
  test('value', () => {
    expect(getType(' ')).toBe(spaceType);
    expect(getType('.')).toBe(dotType);
    expect(getType('0')).toBe(digitType);
    expect(getType('1')).toBe(digitType);
    expect(getType('2')).toBe(digitType);
    expect(getType('3')).toBe(digitType);
    expect(() => getType('a')).toThrow();
  });
  test('type is binary', () => {
    expect(spaceType & dotType & digitType).toBe(0);
    expect(spaceType | dotType | digitType).toBe(0b111);
  })
});
