/**
 * @interface IDinnerInfo - Результат работы методы расчета оптимального обеда Гомера Симпсона
 * @property hamburgersCount {Number} - оптимальное количество съеденных гамбургеров
 * @property chesseburgersCount {Number} - оптимальное количество съеденных чизбургеров
 * @author PS11011010
 */
export interface IDinnerInfo {
    hamburgersCount: number;
    chesseburgersCount: number;
}

/**
 * Обеденный перерыв Гомера Симпсона составляет T мс. Один гамбургер Гомер съедает за N мс,
 * один чизбургер — за М. Требуется найти максимальное суммарное  число гамбургеров и
 * чизбургеров, которые Гомер может съесть в течение обеденного перерыва.
 * Гамбургеры в приоритете. Обеденный перерыв должен быть максимально направлен на прием пищи.
 * https://t.me/c/1533281926/47
 * @param duration 
 * @param timeForHamburger 
 * @param timeForCheeseburger 
 * @returns 
 */
const dinner: (
    duration: number,
    timeForHamburger: number,
    timeForCheeseburger: number) => IDinnerInfo | void = (
    duration: number,
    timeForHamburger: number,
    timeForCheeseburger: number
    ) => {
        /** Проверки на корректность данных */
        if (!duration || !timeForHamburger || !timeForCheeseburger) {
            const message = (!duration && 'Time for dinner')
            || (!timeForHamburger && 'Time for hamburger')
            || (!timeForCheeseburger && 'Time for cheeseburger');
            

            throw new Error(`Incorrect data! ${message} can\`t be zero.`)
        }

        /** Приоритет у Гамбургеров - начинаем счет с них */
        let hamburgersCount = Math.floor(duration / timeForHamburger);
        let freeTimeForCheeseburger = duration % timeForHamburger;

        /** Если для чизбургеров осталось 0 времени, значит мы попали куда надо */
        if (!freeTimeForCheeseburger) {
            return {
                hamburgersCount,
                chesseburgersCount: 0
            };
        }

        /** А вот, если осталосб время, то нужно рассчитать число чизбургеров и свободное время */
        let chesseburgersCount = Math.floor(freeTimeForCheeseburger / timeForCheeseburger);
        let spendedTimeForHamburgers = hamburgersCount * timeForHamburger;
        let spendedTimeForCheeseburgers = chesseburgersCount * timeForCheeseburger;
        let freeTime = duration - spendedTimeForHamburgers - spendedTimeForCheeseburgers;

        /** Соберем объект и информацие о самой удачной комбинации */
        let minModData: IDinnerInfo & {freeTime: number} = {
            hamburgersCount,
            chesseburgersCount,
            freeTime
        }

        /** Пока не кончатся гамбургеры или не кончится нераспределенное время */
        while (freeTime && hamburgersCount > 0) {
            /** Высчитываем новые данные, путем уменьшения числа гамбургеров на 1 */
            spendedTimeForHamburgers = --hamburgersCount * timeForHamburger;
            freeTimeForCheeseburger = duration - spendedTimeForHamburgers;
            chesseburgersCount = Math.floor(freeTimeForCheeseburger / timeForCheeseburger);
            spendedTimeForCheeseburgers = chesseburgersCount * timeForCheeseburger;
            freeTime = duration - spendedTimeForHamburgers - spendedTimeForCheeseburgers;

            /** Если нашли более удачную комбинацию, запоминаем */
            if (freeTime < minModData.freeTime) {
                minModData = {
                    hamburgersCount,
                    chesseburgersCount,
                    freeTime
                }
            }
        }

        return {
            hamburgersCount: minModData.hamburgersCount,
            chesseburgersCount: minModData.chesseburgersCount
        };
    }

export default dinner
