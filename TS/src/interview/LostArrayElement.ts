/**
 * Существует упорядоченный массив последовательных натуральных чисел от 1 до N. Например, [1, 2, 3, ... 41, 42].
 * Одно число выкинули и массив перемешали.
 * Написать функцию, которая примет "испорченный" массив и вернет утраченное число.
 * Решать задачу нужно без использования специализированных методов, библиотек и т.д.
 * https://t.me/c/1533281926/29
 * @author PS11011010
 */

export function lostArrayElement(brokenArray: Array<number>): number {
    let brokenArraySum = 0;
    let normalArraySum = 0;

    for (let i = 0; i <= brokenArray.length + 1; i++) {
        if (i < brokenArray.length) {
            brokenArraySum += brokenArray[i]
        }
        normalArraySum += i;
    }

    return normalArraySum - brokenArraySum;
}

export function greedyLostArrayElement(brokenArray: Array<number>): number {
    const brokenArraySum = arraySum(brokenArray);
    const normalArraySum = arraySum(getNormalArray(brokenArray.length + 1));

    return normalArraySum - brokenArraySum;
}

/**
 * Функция создаст упорядоченный массив последовательных натуральных чисел от 1 до N.
 * @param len
 */
export function getNormalArray(len: number): Array<number> {
    return  [...Array(len)].map((_, i) => ++i)
}

/**
 * Функция вернет сумму всех элементов массива.
 * @param arr
 */
const arraySum = (arr: Array<number>): number => arr.reduce((result, current) => result + current, 0);
