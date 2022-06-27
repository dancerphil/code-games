import dailyTemperatures from '../index';

describe('739', () => {
    test('dailyTemperatures', () => {
        expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
        expect(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78])).toEqual([3, 1, 1, 2, 1, 1, 0, 1, 1, 0]);
    });
});
