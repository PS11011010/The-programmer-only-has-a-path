import acronymName from "../../src/interview/AcronymName";

describe('acronymName', () => {
    it('Wrong data', () => {
        expect(() => {acronymName('')}).toThrowError();
    });

    it('stewart birch', () => {
        expect(acronymName('stewart birch')).toBe('S.B.');
    });

    it('Harret Shadow', () => {
        expect(acronymName('Harret Shadow')).toBe('H.S.');
    });

    it('Moriarty', () => {
        expect(acronymName('Moriarty')).toBe('M');
    });
})