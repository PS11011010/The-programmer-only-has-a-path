import { isOdd } from "../../src/math/Number";

describe('isOdd', () => {
    it('Even number', () => {
        expect(isOdd(42)).toBe(false);
    })

    it('Odd number', () => {
        expect(isOdd(1991)).toBe(true);
    })
})