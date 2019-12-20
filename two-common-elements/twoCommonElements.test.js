const twoCommonElements = require('./twoCommonElements');

describe('twoCommonElements()', () => {
    it('testCase_1 should return []', () => {
        const arrA = [];
        const arrB = [];
        expect(twoCommonElements(arrA, arrB)).toEqual([]);
    });

    it('testCase_3 should return [-2, -4]', () => {
        const arrA = [-1, -2, -4, -6];
        const arrB = [-2, -4, -5, -8];
        expect(twoCommonElements(arrA, arrB)).toEqual([-2, -4]);
    });
});
