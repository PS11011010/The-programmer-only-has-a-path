import { reverseString } from "../string/Reversed"

/**
 * Дан массив строк, описывающих целые неотрицательные числа в бинарном виде.
 * Отсортировать этот массив по-возрастанию.
 * @param data 
 * @returns 
 * @author PS11011010
 * @description Очень важной частью разработки программного обеспечения является
 * ответ на вопрос: "А как мы будем это тестировать?"
 * Чтобы не запутаться во время написания тестов, я реализовал функцию перевода числа
 * из десятичной формы в бинарную.
 */
const sortBinaryNumbers: (data: string[]) => string[] = (data) => {
    return data
        .sort((a, b) => {
            if (a.length !== b.length) {
                return a.length < b.length ? -1 : 1;
            }

            let result: number = 0;
            let i = 0;

            while (i < a.length) {
                if (a.charAt(i) !== b.charAt(i)) {
                    result = a.charAt(i) < b.charAt(i) ? -1 : 1;
                    break;
                }

                i++;
            }

            return result;
        });
}

export {
    sortBinaryNumbers
}