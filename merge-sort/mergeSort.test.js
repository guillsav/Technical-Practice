const mergeSort = require('./mergeSort');

describe('mergeSort()', () => {
    it('testCase_1 should return [1]', () => {
        const numbers = [1];
        expect(mergeSort(numbers)).toEqual([1]);
    });

    it('testCase_2 should return [1, 2]', () => {
        const numbers = [1, 2];
        expect(mergeSort(numbers)).toEqual([1, 2]);
    });

    it('testCase_3 should return [1, 2]', () => {
        const numbers = [2, 1];
        expect(mergeSort(numbers)).toEqual([1, 2]);
    });

    it('testCase_4 should return [1, 2]', () => {
        const numbers = [1, 3, 2];
        expect(mergeSort(numbers)).toEqual([1, 2, 3]);
    });

    it('testCase_5 should return [1, 2]', () => {
        const numbers = [3, 1, 2];
        expect(mergeSort(numbers)).toEqual([1, 2, 3]);
    });

    it('testCase_6 should return [1, 2]', () => {
        const numbers = [1, 2, 3];
        expect(mergeSort(numbers)).toEqual([1, 2, 3]);
    });

    it(`testCase_7 should return [
            -10,
            -7,
            -7,
            -6,
            -6,
            -5,
            -5,
            -4,
            -4,
            -4,
            -2,
            -1,
            1,
            3,
            5,
            5,
            6,
            8,
            8,
            10
        ]`, () => {
        const numbers = [
            -4,
            5,
            10,
            8,
            -10,
            -6,
            -4,
            -2,
            -5,
            3,
            5,
            -4,
            -5,
            -1,
            1,
            6,
            -7,
            -6,
            -7,
            8
        ];
        expect(mergeSort(numbers)).toEqual([
            -10,
            -7,
            -7,
            -6,
            -6,
            -5,
            -5,
            -4,
            -4,
            -4,
            -2,
            -1,
            1,
            3,
            5,
            5,
            6,
            8,
            8,
            10
        ]);
    });
});
