const digits = [...Array(10)].map((_, i) => i);

/**
 * Реализовать функцию isOdd, которая вернёт ИСТИНА, если входное число нечётное.
 * Если число четное, нужно вернуть ЛОЖЬ.
 * https://t.me/c/1533281926/16
 * @param n 
 * @returns 
 */
const isOdd: (n: number) => boolean = (n) => {
    return !!(n % 2)
}

/**
 * Реализовать функцию parseInt, которая пытается найти число в строке,
 * разбирая все символы по-порядку. Процесс разбора не прекратится, пока
 * не встретится невалидный символ или конец строки. Основание десятичное.
 * 
 * P.S. Переполнения могут быть. Один из тестов должен учитывать результат,
 * который перевалил за максимальное значение целочисленной переменной.
 * https://t.me/c/1533281926/60
 * @param n 
 * @author PS11011010
 * @description Для каждого символа в строке, начиная слева выполняем проверку
 * Если символ входит в набор допустимых символов (0-9),
 * то смещаем 1 разряд результата (уvножаем на 10) и добавляем в конец текущее число,
 * а вот, если попался невалидный символ, выходим из цикла.
 * Перед выводом результата смотрим: если не было ни одного валидного символа - результат null
 */
const parseInt: (str: string) => number | null = (str) => {
    const allowedSymbols: string[] = digits.map(digit => String(digit))

    let result: number = 0;
    let hasValidSymbols = false;
    let symbol: string;

    for (let i = 0; i < str.length; i++) {
        symbol = str.charAt(i);

        if (!allowedSymbols.includes(symbol)) {
            break;
        }
        
        hasValidSymbols = true;
        result = result * 10 + (+symbol);
    }

    return hasValidSymbols ? result : null;
}

export {
    digits,
    isOdd,
    parseInt
}