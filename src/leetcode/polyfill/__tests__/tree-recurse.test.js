import testcases from '../../algorithms/tree/TreeNode.case';
import '../tree-recurse';

describe('polyfill tree-recurse', () => {
    test('value', () => {
        expect(testcases[0].recurse()).toBe(undefined); // return nothing
        const journeys = [];
        testcases.forEach(c => {
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
            [[17, 18], [17, 19]],
            [[20, 21, 23], [20, 22]],
            [[24, 25, 27], [24, 26]],
            [[28, 29], [28, 30, 31]],
            [[32, 33], [32, 34, 35]],
        ]);
    });
});
