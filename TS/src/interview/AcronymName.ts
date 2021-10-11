/**
 * Нужно реализовать функцию acronymName, которая принимает в себя строку, содержащую Имя и Фамилию или псевдоним, и возвращает инициалы с точкой или первую букву псевдонима. Входные данные могут иметь смешанный регистр. Например:
 * stewart birch -> S.B.
 * Harret Shadow -> H.S.
 * Moriarty -> M
 * https://t.me/c/1533281926/51
 * @author PS11011010
 */

const acronymName: (name: string) => string = (name) => {
    if (!name) {
        throw new Error('Name must contain data');
    }

    return name
        .split(' ')
        .map((part, i, arr) => `${part.toUpperCase()[0]}${arr.length > 1 ? '.' : ''}`)
        .join('');
}

export default acronymName;
