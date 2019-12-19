const twoSum = require('./twoSum');

describe('twoSum()', () => {
    it('testCase_1 should return [0, 1]', () => {
        let nums = [2, 7, 11, 15];
        expect(twoSum(nums, 9)).toEqual([0, 1]);
    });
});
