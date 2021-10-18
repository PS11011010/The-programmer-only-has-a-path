import { isOdd, parseInt } from "../../src/math/Number";

describe('isOdd', () => {
    it('Even number', () => {
        expect(isOdd(42)).toBe(false);
    })

    it('Odd number', () => {
        expect(isOdd(1991)).toBe(true);
    })
})

describe('parseInt', () => {
    it('Empty data', () => {
        expect(parseInt('')).toBe(null);
    })

    it('Incorrect data', () => {
        expect(parseInt('foo')).toBe(null);
        expect(parseInt('bar42')).toBe(null);
    })

    it('Correct data', () => {
        expect(parseInt('1')).toBe(1)
        expect(parseInt('42')).toBe(42)
        expect(parseInt('999')).toBe(999)
    })

    /**
     * У JavaScript максимальное число - это 1.7976931348623157e+308
     * или
     * 179 769 313 486 231 570 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
     * 000 000 000 000 000 000 000
     * Тут 292 нуля
     * Операции со значениями, которые превышают это число лучше не производить
     * https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
     */
    it('Over big int', () => {
        const data = '17976931348623157'.split('')
            .concat([...Array(291)].map(() => '0'))
            .concat(['1'])
            .join('')

        expect((parseInt(data) as number) <= Number.MAX_VALUE).toBe(true);
    })
})
