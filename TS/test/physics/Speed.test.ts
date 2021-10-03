import { BikeSpeedByWheel } from "../../src/physics/Speed";

describe('Speed', () => {
    describe('Find boke speed', () => {
        it('Incorrect radius and/or interval', () => {
            expect(BikeSpeedByWheel(-1, 5)).toBe(0);
            expect(BikeSpeedByWheel(5, -1)).toBe(0);
            expect(BikeSpeedByWheel(-1, -1)).toBe(0);
        })

        it('Correct data', () => {
            expect(BikeSpeedByWheel(1, 574.5344644885014)).toBe(1);
            expect(BikeSpeedByWheel(29, 42)).toBeTruthy();
        })
    })
})