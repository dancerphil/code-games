import combination from '../combination';

describe('algorithm combination', () => {
  test('value', () => {
    expect(combination(4, 2)).toEqual(['1100', '1010', '1001', '0110', '0101', '0011']);
    expect(combination(2, 2)).toEqual(['11']);
  });
  test('return [] if impossible', () => {
    expect(combination(4, 6)).toEqual([]);
  });
});
