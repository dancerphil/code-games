import '../tree-recurse';
import testcases from '../../tree/TreeNode.case';

describe('polyfill tree-recurse', () => {
  test('value', () => {
    expect(testcases[0].recurse()).toBe(undefined); // return nothing
    const journeys = [];
    testcases.forEach((c) => {
      const journey = [];
      c.recurse(path => journey.push(path));
      journeys.push(journey);
    });
    expect(journeys).toEqual([
      [[0]],
      [[1, 2]],
      [[3, 4]],
      [[5, 6, 7]],
      [[8, 9, 10]],
      [[11, 12, 13]],
      [[14, 15, 16]],
      [[17, 18, 19], [17, 18, 19]],
      [[20, 21, 23, 22], [20, 21, 23, 22]],
      [[24, 25, 27, 26], [24, 25, 27, 26]],
      [[28, 29, 30, 31], [28, 29, 30, 31]],
      [[32, 33, 34, 35], [32, 33, 34, 35]],
    ]);
  });
});
