import { decToBin } from "../../src/math/Radix";

describe('Decimal to Binary', () => {
    it('One digit result', () => {
        expect(decToBin(0)).toBe('0');
        expect(decToBin(1)).toBe('1');
    })

    it('Two digit result', () => {
        expect(decToBin(2)).toBe('10');
        expect(decToBin(3)).toBe('11');
    })

    it('Three digit result', () => {
        expect(decToBin(4)).toBe('100');
        expect(decToBin(5)).toBe('101');
        expect(decToBin(6)).toBe('110');
        expect(decToBin(7)).toBe('111');
    })

    it('Squares on digit two', () => {
        expect(decToBin(15)).toBe('1111');
        expect(decToBin(31)).toBe('11111');
        expect(decToBin(63)).toBe('111111');
        expect(decToBin(127)).toBe('1111111');
        expect(decToBin(255)).toBe('11111111');
        expect(decToBin(511)).toBe('111111111');
        expect(decToBin(1023)).toBe('1111111111');
    })
})