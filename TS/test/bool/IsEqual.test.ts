import { deepEqual } from "../../src/bool/IsEqual";

describe('Is equal', () => {
    describe('Primitives', () => {
        it('Equal data', () => {
            expect(deepEqual(true, true)).toBe(true);
            expect(deepEqual(42, 42)).toBe(true);
            expect(deepEqual('foo', 'foo')).toBe(true);
            expect(deepEqual(undefined, undefined)).toBe(true);
            expect(deepEqual(null, null)).toBe(true);
        })

        it('Unequal data', () => {
            expect(deepEqual(true, false)).toBe(false);
            expect(deepEqual(42, 1)).toBe(false);
            expect(deepEqual('foo', 'bar')).toBe(false);
            expect(deepEqual(undefined, null)).toBe(false);
        })
    })

    describe('Arrays', () => {
        it('Equal data', () => {
            const obj = [1, 2, 3];
            const obj2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

            expect(deepEqual(obj, obj)).toBe(true);
            expect(deepEqual(obj2, obj2)).toBe(true);
        })

        it('Unequal data', () => {
            const obj = [1, 2, 3];
            const obj2 = [4, 5, 6];
            const obj3 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
            const obj4 = [1, 2, 3, [4, 5, 6]];

            expect(deepEqual(obj, obj2)).toBe(false);
            expect(deepEqual(obj, obj3)).toBe(false);
            expect(deepEqual(obj, obj4)).toBe(false);
            expect(deepEqual(obj2, obj3)).toBe(false);
            expect(deepEqual(obj2, obj4)).toBe(false);
            expect(deepEqual(obj3, obj4)).toBe(false);
        })
    })

    describe('Objects', () => {
        it('Equal data', () => {
            const obj = {foo: 'bar', bar: 'baz', baz: 'foo', fn: function(){
                return Math.random();
            }};
            const obj2 = {...obj, ...{data: obj}};

            expect(deepEqual(obj, obj)).toBe(true);
            expect(deepEqual(obj2, obj2)).toBe(true);
        })

        it('Unequal data', () => {
            const obj = {foo: 'bar', bar: 'baz', baz: 'foo'};
            const obj2 = {...obj, ...{data: obj}};

            expect(deepEqual(obj, obj2)).toBe(false);
        })
    })
})