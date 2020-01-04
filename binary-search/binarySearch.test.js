const {
    binarySearchIterative,
    binarySearchRecursive
} = require('./binarySearch');

describe('binarySearchIterative()', () => {
    it('testCase_1 should return 1', () => {
        const arr = [1];
        const target = 1;
        const actual = binarySearchIterative(arr, target);
        expect(actual).toEqual(0);
    });

    it('testCase_2 should return 2 ', () => {
        const arr = [6, 10, 13, 28];
        const target = 13;
        const actual = binarySearchIterative(arr, target);
        expect(actual).toEqual(2);
    });

    it('testCase_3 should return -1 ', () => {
        const arr = [6, 28, 32, 56, 60, 78, 87];
        const target = 100;
        const actual = binarySearchIterative(arr, target);
        expect(actual).toEqual(-1);
    });

    it('testCase_4 should return 5 ', () => {
        const arr = [6, 28, 32, 56, 60, 78, 87];
        const target = 78;
        const actual = binarySearchIterative(arr, target);
        expect(actual).toEqual(5);
    });

    it('testCase_5 should return -1 ', () => {
        const arr = [];
        const target = 78;
        const actual = binarySearchIterative(arr, target);
        expect(actual).toEqual(-1);
    });
});

describe('binarySearchRecursive()', () => {
    it('testCase_1 should return 1', () => {
        const arr = [1];
        const target = 1;
        let start = 0;
        let end = arr.length - 1;
        const actual = binarySearchRecursive(arr, target, start, end);
        expect(actual).toEqual(0);
    });

    it('testCase_2 should return 2 ', () => {
        const arr = [6, 10, 13, 28];
        const target = 13;
        let start = 0;
        let end = arr.length - 1;
        const actual = binarySearchRecursive(arr, target, start, end);
        expect(actual).toEqual(2);
    });

    it('testCase_3 should return -1 ', () => {
        const arr = [6, 28, 32, 56, 60, 78, 87];
        const target = 100;
        let start = 0;
        let end = arr.length - 1;
        const actual = binarySearchRecursive(arr, target, start, end);
        expect(actual).toEqual(-1);
    });

    it('testCase_4 should return 5 ', () => {
        const arr = [6, 28, 32, 56, 60, 78, 87];
        const target = 78;
        let start = 0;
        let end = arr.length - 1;
        const actual = binarySearchRecursive(arr, target, start, end);
        expect(actual).toEqual(5);
    });

    it('testCase_5 should return -1 ', () => {
        const arr = [];
        const target = 78;
        let start = 0;
        let end = arr.length - 1;
        const actual = binarySearchRecursive(arr, target, start, end);
        expect(actual).toEqual(-1);
    });
});
