import { filterUniqueElements } from "../../src/interview/FilterArray";

describe('filterUniqueElements', () => {
    it('No duplicate', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(filterUniqueElements(input)).toStrictEqual(expected);
    });

    it('Only duplicate', () => {
        const input = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const expected = [1];

        expect(filterUniqueElements(input)).toStrictEqual(expected);
    });

    it('Duplicate in the tail', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(filterUniqueElements(input)).toStrictEqual(expected);
    });

    it('Duplicate in the head', () => {
        const input = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(filterUniqueElements(input)).toStrictEqual(expected);
    });

    it('Duplicate in the middle', () => {
        const input = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        expect(filterUniqueElements(input)).toStrictEqual(expected);
    });
})