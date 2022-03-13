/**
 * Имеется массив чисел. Он упорядочен по-возрастанию.
 * Оставить в исходном массиве только уникальные числа, сохранив сортировку.
 * Новых массивов создавать нельзя. Сложность операций должна быть минимальна.
 * https://t.me/c/1533281926/228
 * @author PS11011010
 */
const filterUniqueElements: (arr: number[]) => number[] = (arr) => {
    let numberOfUniqueElements = 0;
    let lastQniqueElement = null;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== lastQniqueElement) {
            lastQniqueElement = arr[i];
            arr[numberOfUniqueElements++] = arr[i];
        }
    }

    arr.length = numberOfUniqueElements;

    return arr;
}

export {
    filterUniqueElements
}