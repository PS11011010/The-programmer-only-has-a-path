import dinner, { IDinnerInfo } from "../../src/math/HomerSimpson";

describe('Homer Simpson`s dinner', () => {
    it('Zero time', ()  => {
        expect(() => { dinner(0, 1, 1) }).toThrowError();
        expect(() => { dinner(1, 0, 1) }).toThrowError();
        expect(() => { dinner(1, 1, 0) }).toThrowError();
    });

    it('Dinner time is equal to time for hamburger', ()  => {
        const dinnerTime = 42;
        const timeForHamburger = 42;
        const timeForCheeseburger = 1;
        const expected: IDinnerInfo = {
            hamburgersCount: 1,
            chesseburgersCount: 0
        };

        expect(dinner(dinnerTime, timeForHamburger, timeForCheeseburger)).toStrictEqual(expected);
    });

    it('Dinner time is equal to time for cheeseburger', ()  => {
        const dinnerTime = 42;
        const timeForHamburger = 9000;
        const timeForCheeseburger = 42;
        const expected: IDinnerInfo = {
            hamburgersCount: 0,
            chesseburgersCount: 1
        };

        expect(dinner(dinnerTime, timeForHamburger, timeForCheeseburger)).toStrictEqual(expected);
    });

    it('Two hamburgers and one cheeseburger', ()  => {
        const dinnerTime = 50;
        const timeForHamburger = 20;
        const timeForCheeseburger = 10;
        const expected: IDinnerInfo = {
            hamburgersCount: 2,
            chesseburgersCount: 1
        };

        expect(dinner(dinnerTime, timeForHamburger, timeForCheeseburger)).toStrictEqual(expected);
    });

    it('One hamburger and two cheeseburgers', ()  => {
        const dinnerTime = 30;
        const timeForHamburger = 20;
        const timeForCheeseburger = 5;
        const expected: IDinnerInfo = {
            hamburgersCount: 1,
            chesseburgersCount: 2
        };

        expect(dinner(dinnerTime, timeForHamburger, timeForCheeseburger)).toStrictEqual(expected);
    });

    /** Пример из комментариев https://t.me/c/1533281926/47 */
    it('Example from comments', ()  => {
        const dinnerTime = 940;
        const timeForHamburger = 54;
        const timeForCheeseburger = 23;
        const expected: IDinnerInfo = {
            hamburgersCount: 14,
            chesseburgersCount: 8
        };

        expect(dinner(dinnerTime, timeForHamburger, timeForCheeseburger)).toStrictEqual(expected);
    });
})