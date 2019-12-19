const canConstruct = require('./ransomeNote');

describe('CanConstruct()', () => {
    it('TestCase_1 should return false', () => {
        const magazine = 'a';
        const note = 'b';
        expect(canConstruct(magazine, note)).toEqual(false);
    });

    it('TestCase_2 should return false', () => {
        const magazine = 'aa';
        const note = 'ab';
        expect(canConstruct(magazine, note)).toEqual(false);
    });

    it('TestCase_3 should return false', () => {
        const magazine = [
            'Send',
            'a',
            'million',
            'dollars',
            'by',
            'midnight',
            'tonight'
        ];
        const note = [
            'dollars',
            'Send',
            'midnight',
            'million',
            'tomorrow',
            'night',
            'by',
            'tonight',
            'a'
        ];
        expect(canConstruct(magazine, note)).toEqual(false);
    });

    it('TestCase_4 should return false', () => {
        const magazine = [
            'dollars',
            'Send',
            'midnight',
            'million',
            'tomorrow',
            'night',
            'tonight',
            'a'
        ];
        const note = [
            'Send',
            'a',
            'million',
            'dollars',
            'by',
            'midnight',
            'tonight'
        ];
        expect(canConstruct(magazine, note)).toEqual(false);
    });

    it('TestCase_5 should return true', () => {
        const magazine = 'aab';
        const note = 'aa';
        expect(canConstruct(magazine, note)).toEqual(true);
    });

    it('TestCase_6 should return true', () => {
        const magazine = [
            'dollars',
            'Send',
            'midnight',
            'million',
            'tomorrow',
            'night',
            'by',
            'tonight',
            'a'
        ];
        const note = [
            'Send',
            'a',
            'million',
            'dollars',
            'by',
            'midnight',
            'tonight'
        ];
        expect(canConstruct(magazine, note)).toEqual(true);
    });
});
