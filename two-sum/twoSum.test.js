const twoSum = require('./twoSum');

describe('twoSum()', () => {
    it('testCase_1 should return [0, 1]', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([0, 1]);
    });

    it('testCase_2 should return [0, 1]', () => {
        const nums = [4, 6];
        const target = 10;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([0, 1]);
    });

    it('testCase_3 should return [2, 0]', () => {
        const nums = [4, 6, 1];
        const target = 5;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([0, 2]);
    });

    it('testCase_4 should return [3, 1]', () => {
        const nums = [4, 6, 1, -3];
        const target = 3;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([1, 3]);
    });

    it('testCase_5 should return [4, 6]', () => {
        const nums = [3, 5, -4, 8, 11, 1, -1, 6];
        const target = 10;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([4, 6]);
    });

    it('testCase_6 should return [7, 8]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const target = 17;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([7, 8]);
    });

    it('testCase_7 should return [2, 9]', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15];
        const target = 18;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([2, 9]);
    });

    it('testCase_8 should return [1, 4]', () => {
        const nums = [-7, -5, -3, -1, 0, 1, 3, 5, 7];
        const target = -5;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([1, 4]);
    });

    it('testCase_9 should return []', () => {
        const nums = [-21, 301, 12, 4, 65, 56, 210, 356, 9, -47];
        const target = 164;
        const actual = twoSum(nums, target).sort((a, b) => a - b);
        expect(actual).toEqual([]);
    });
});
