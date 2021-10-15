import { isPrimitive } from "../../src/bool/isPrimitive";

describe('Is primitive', () => {
    it('Primitives', () => {
        expect(isPrimitive(true)).toBe(true);
        expect(isPrimitive(42)).toBe(true);
        expect(isPrimitive('foo')).toBe(true);
        expect(isPrimitive(undefined)).toBe(true);
        expect(isPrimitive(null)).toBe(true);
    })

    it('Not primitives', () => {
        expect(isPrimitive({foo: 'bar'})).toBe(false);
        expect(isPrimitive([1, 2, 3])).toBe(false);
    })
})