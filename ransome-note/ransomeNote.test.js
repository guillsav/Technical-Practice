const canConstruct = require('./ransomeNote');

describe('CanConstruct()', () => {
    it('TestCase_1 should return false', () => {
        magazine = 'aa';
        note = 'aab';
        expect(canConstruct(magazine, note)).toEqual(false);
    });

    it('TestCase_2 should return false', () => {
        magazine = [
            'Send',
            'a',
            'million',
            'dollars',
            'by',
            'midnight',
            'tonight'
        ];
        note = [
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

    it('TestCase_3 should return false', () => {
        magazine = [
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
        note = ['Send', 'a', 'million', 'dollars', 'by', 'midnight', 'tonight'];
        expect(canConstruct(magazine, note)).toEqual(true);
    });

    it('TestCase_4 should return false', () => {
        magazine = [
            'dollars',
            'Send',
            'midnight',
            'million',
            'tomorrow',
            'night',
            'tonight',
            'a'
        ];
        note = ['Send', 'a', 'million', 'dollars', 'by', 'midnight', 'tonight'];
        expect(canConstruct(magazine, note)).toEqual(false);
    });
});
