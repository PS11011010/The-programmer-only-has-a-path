import exp from "constants";
import { isOdd } from "./Number";

/**
 * Сгенерировать и вернуть последовательность Сиракузы для входного числа.
 * https://t.me/c/1533281926/57
 * @param initialN 
 * @returns 
 * @author PS11011010
 * @description Гипотеза Коллатца. Одна из нерешенных проблем математики.
 * Формируется по простым правилам: если число N нечетное, то следующее число
 * в последовательности равно N х 3 + 1. Если четное, то N / 2.
 * Особенность последовательности, что для все просчитанных вариантов (сейчас их 10467912930256211342751)
 * Последовательность заканчивается на 4, 2, 1. А потом 1 умножается на 3 и прибавляется 1, и вновь выходит 4.
 * Интересное видео: https://www.youtube.com/watch?v=QgzBDZwanWA&ab_channel=VertDider
 */
const sequence: (initialN: number) => number[] = (initialN) => {
    const result: number[] = [initialN];
    /** Последовательность заканчивается, когда мы доходим до 1 */
    const lastNumberOfSequence: number = 1;
    let n: number = initialN;

    /** Генерируем не до бесконечности, а не больше 1000 элементов */
    while (result.length < 1e3) {
        n = isOdd(n) ? (n * 3 + 1) : (n / 2);
        result.push(n);

        if (n === 1) {
            break;
        }
    }

    return result;
}

export {
    sequence
}