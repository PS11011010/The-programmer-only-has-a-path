import { validCurvedBrackets } from "../../src/string/bracket";

describe('Validate Curved Brackets', () => {
    describe('Valid string', () => {
        it('Empty string', () => {
            expect(validCurvedBrackets('')).toBe(true);
        })

        it('Without brackets', () => {
            expect(validCurvedBrackets('foo bar baz')).toBe(true);
        })

        it('One pair', () => {
            expect(validCurvedBrackets('(123)')).toBe(true);
        })

        it('Multiple pairs', () => {
            expect(validCurvedBrackets('(1(23(4))5)A(bc)')).toBe(true);
        })

        it('Only brackets', () => {
            expect(validCurvedBrackets('(((())))')).toBe(true);
        })
    })

    describe('Invalid string', () => {
        it('Only open bracket', () => {
            expect(validCurvedBrackets('123(456')).toBe(false);
        })

        it('Only close bracket', () => {
            expect(validCurvedBrackets('456)789')).toBe(false);
        })

        it('Extra open bracket', () => {
            expect(validCurvedBrackets('(1(23(4)5)A(bc)')).toBe(false);
        })

        it('Extra close bracket', () => {
            expect(validCurvedBrackets('(123(4))5)A(bc)')).toBe(false);
        })
    })
})