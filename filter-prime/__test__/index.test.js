import filterPrime from '../index';

describe('filter-prime', () => {
  test('value', () => {
    expect(filterPrime(100).length).toBe(25);
    expect(filterPrime(10000).length).toBe(1229);
    expect(filterPrime(10000000).length).toBe(664579);
  });
});
