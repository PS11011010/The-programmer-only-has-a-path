import { Nutrition } from "../../src/math/Nutrition";

describe('Nutrition', () => {
    it('Only protein', () => {
        expect(Nutrition({protein: 10})).toBe(40);
    })

    it('Only fat', () => {
        expect(Nutrition({fat: 10})).toBe(90);
    })

    it('Only carbohydrate', () => {
        expect(Nutrition({carbohydrate: 10})).toBe(40);
    })

    it('Only spirit', () => {
        expect(Nutrition({spirit: 10})).toBe(70);
    })

    it('Borsch', () => {
        expect(Nutrition({
            protein: 2.6,
            fat: 1.8,
            carbohydrate: 3.4
        })).toBe(40.2);
    })
})