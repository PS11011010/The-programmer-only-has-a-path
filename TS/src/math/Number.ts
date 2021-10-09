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

export {
    isOdd
}