const twoCommonElements = require('./twoCommonElements');

describe('twoCommonElements()', () => {
    it('testCase_1 should return []', () => {
        const arrA = [];
        const arrB = [];
        expect(twoCommonElements(arrA, arrB)).toEqual([]);
    });

    it('testCase_2 should return [1, 5, 10]', () => {
        const arrA = [1, 2, 5, 6, 10];
        const arrB = [1, 3, 4, 5, 7, 9, 10];
        expect(twoCommonElements(arrA, arrB)).toEqual([1, 5, 10]);
    });

    it('testCase_3 should return [-2, -4]', () => {
        const arrA = [-1, -2, -4, -6];
        const arrB = [-2, -4, -5, -8];
        expect(twoCommonElements(arrA, arrB)).toEqual([-2, -4]);
    });
});
