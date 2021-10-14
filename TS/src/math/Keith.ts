import { emptySeparator } from "../string/common";
import { Sum } from "../array/Sum";

/**
 * Реализовать функцию, которая вернёт ИСТИНА, если входное число является числом Кита
 * https://t.me/c/1533281926/59
 * @param n 
 * @returns 
 * @author PS11011010
 * @description Правила нахождения числа Кита достаточно понятно объясняются в этом ролике
 * https://youtu.be/rCeHprtIXY0
 * Нам нужно постоянно суммировать N чисел. N завист от количества цифр в заданном числе.
 * Находим сумму цифр. Если она совпала с входным числом - хорошо.
 * Если не совпала, добавляем это число в набор, откидываем самое первое и продолжаем проверку.
 * 10 000 шагов выглядит как разумный предохранитель. http://thecodelesscode.com/case/9?lang=ru
 */
const isKeithNumber: (n: number) => boolean = (n) => {
    // Из числа нужно получить массив цифрб но не строк, а именно цифр
    const data: number[] = String(n).split(emptySeparator).map((item) => +item)
    let last;
    let i = 1e4;

    // Совершаем не больше 10 000 вычислений
    while (--i) {
        last = Sum(data)

        if (last === n) {
            return true;
        }

        data.push(last)
        data.shift();
    }

    return false;
}

export {
    isKeithNumber
}