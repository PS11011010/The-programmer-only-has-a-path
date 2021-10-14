import { isKeithNumber } from "../../src/math/Keith";

describe('Keith number', () => {
    it('Valid Keith numbers', () => {
        [14, 19, 28, 197, 1537, 2208, 31331].forEach((n) => {
            expect(isKeithNumber(n)).toBe(true)
        })
    })

    it('Invalid Keith numbers', () => {
        [15, 20, 29, 199, 1538, 2209, 31332].forEach((n) => {
            expect(isKeithNumber(n)).toBe(false)
        })
    })
})