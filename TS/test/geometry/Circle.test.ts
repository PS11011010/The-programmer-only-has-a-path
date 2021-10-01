import { CircleInsideCircle } from "../../src/geometry/Circle";

describe('CircleInsideCircle', () => {
    it('Equal circles', () => {
        expect(CircleInsideCircle({
            x: 0,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 1
        })).toBe(true);
    });

    it('Equal center, different radius', () => {
        expect(CircleInsideCircle({
            x: 0,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 2
        })).toBe(true);
    });

    it('Equal radius, different center', () => {
        expect(CircleInsideCircle({
            x: 1,
            y: 0,
            r: 2
        }, {
            x: 0,
            y: 0,
            r: 2
        })).toBe(false);
    });

    it('Circle a somewhere inside of circle b', () => {
        expect(CircleInsideCircle({
            x: 5,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 10
        })).toBe(true);
    });

    it('Circle a touches circle b inside', () => {
        expect(CircleInsideCircle({
            x: 9,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 10
        })).toBe(true);
    });

    it('Circle a center on circle b edge', () => {
        expect(CircleInsideCircle({
            x: 10,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 10
        })).toBe(false);
    });

    it('Circle a touches circle b outside', () => {
        expect(CircleInsideCircle({
            x: 11,
            y: 0,
            r: 1
        }, {
            x: 0,
            y: 0,
            r: 10
        })).toBe(false);
    });

    it('Circle a is far from circle b', () => {
        expect(CircleInsideCircle({
            x: 100,
            y: 100,
            r: 42
        }, {
            x: 0,
            y: 0,
            r: 10
        })).toBe(false);
    });
})