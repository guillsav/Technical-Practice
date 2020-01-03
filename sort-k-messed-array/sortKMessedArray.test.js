const sortKMessedArray = require('./sortKMessedArray');

describe('sortKMessedArray()', () => {
    it('testCase_1 should return [1]', () => {
        const arr = [1];
        const k = 0;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([1]);
    });

    it('testCase_2 should return [0, 1]', () => {
        const arr = [1, 0];
        const k = 1;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([0, 1]);
    });

    it('testCase_3 should return [0, 1, 2, 3]', () => {
        const arr = [1, 0, 3, 2];
        const k = 1;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([0, 1, 2, 3]);
    });

    it('testCase_4 should return [0, 1, 2, 3, 4, 5, 6, 7, 8]', () => {
        const arr = [1, 0, 3, 2, 4, 5, 7, 6, 8];
        const k = 1;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    it('testCase_5 should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]', () => {
        const arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9];
        const k = 2;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('testCase_6 should return [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]', () => {
        const arr = [6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9];
        const k = 6;
        const actual = sortKMessedArray(arr, k);
        expect(actual).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
});
