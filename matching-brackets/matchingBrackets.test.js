const matchingBrackets = require('./matchingBrackets');

describe('matchingBrackets', () => {
    it('testCase_1 should return false', () => {
        const brackets = '() [] {} (';
        expect(matchingBrackets(brackets)).toEqual(false);
    });

    it('testCase_2 should return false', () => {
        const brackets = '(((((({{{{{[[[[[([)])]]]]]}}}}}))))))';
        expect(matchingBrackets(brackets)).toEqual(false);
    });

    it('testCase_3 should return false', () => {
        const brackets = '()()[{()})]';
        expect(matchingBrackets(brackets)).toEqual(false);
    });

    it('testCase_4 should return false', () => {
        const brackets = '(()())((()()()))';
        expect(matchingBrackets(brackets)).toEqual(true);
    });

    it('testCase_5 should return false', () => {
        const brackets = '{}{}';
        expect(matchingBrackets(brackets)).toEqual(true);
    });

    it('testCase_6 should return false', () => {
        const brackets = '()([])';
        expect(matchingBrackets(brackets)).toEqual(true);
    });

    it('testCase_7 should return false', () => {
        const brackets = '((){{{{[]}}}})';
        expect(matchingBrackets(brackets)).toEqual(true);
    });

    it('testCase_8 should return false', () => {
        const brackets = '([])(){}(())()()';
        expect(matchingBrackets(brackets)).toEqual(true);
    });
});
