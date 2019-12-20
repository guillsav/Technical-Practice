const fib = require('./nthFibonacci');

describe('fib()', () => {
    it('testCase_1 should return 0', () => {
        const num = 1;
        expect(fib(num)).toEqual(0);
    });

    it('testCase_2 should return 1', () => {
        const num = 2;
        expect(fib(num)).toEqual(1);
    });

    it('testCase_3 should return 1', () => {
        const num = 3;
        expect(fib(num)).toEqual(1);
    });

    it('testCase_4 should return 2', () => {
        const num = 4;
        expect(fib(num)).toEqual(2);
    });

    it('testCase_5 should return 3', () => {
        const num = 5;
        expect(fib(num)).toEqual(3);
    });

    it('testCase_6 should return 5', () => {
        const num = 6;
        expect(fib(num)).toEqual(5);
    });

    it('testCase_7 should return 8', () => {
        const num = 7;
        expect(fib(num)).toEqual(8);
    });

    it('testCase_8 should return 13', () => {
        const num = 8;
        expect(fib(num)).toEqual(13);
    });

    it('testCase_9 should return 21', () => {
        const num = 9;
        expect(fib(num)).toEqual(21);
    });

    it('testCase_10 should return 34', () => {
        const num = 10;
        expect(fib(num)).toEqual(34);
    });

    it('testCase_11 should return 55', () => {
        const num = 11;
        expect(fib(num)).toEqual(55);
    });

    it('testCase_12 should return 89', () => {
        const num = 12;
        expect(fib(num)).toEqual(89);
    });

    it('testCase_13 should return 144', () => {
        const num = 13;
        expect(fib(num)).toEqual(144);
    });

    it('testCase_14 should return 233', () => {
        const num = 14;
        expect(fib(num)).toEqual(233);
    });

    it('testCase_15 should return 377', () => {
        const num = 15;
        expect(fib(num)).toEqual(377);
    });

    it('testCase_16 should return 610', () => {
        const num = 16;
        expect(fib(num)).toEqual(610);
    });

    it('testCase_17 should return 987', () => {
        const num = 17;
        expect(fib(num)).toEqual(987);
    });

    it('testCase_18 should return 1597', () => {
        const num = 18;
        expect(fib(num)).toEqual(1597);
    });
});
