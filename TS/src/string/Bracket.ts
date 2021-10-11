const brackets = {
    curved: {
        open: '(',
        close: ')'
    }
}

/**
 * Написать метод, который вернёт ИСТИНА, если во входной строке круглые скобки содержат корректные пары.
 * Например, "(123)", "(1(23(4))5)A(bc)", "(((())))"
 * https://t.me/c/1533281926/19
 * @param str 
 * @returns
 * @author PS11011010
 * @description У нас только 1 вид скобок. Поэтому достаточно посчитать количество
 * открывающих и закрывающих скобок. Их количество должно совпадать.
 */
const validCurvedBrackets: (str: string) => boolean = (str) => {
    let openedBracketsCount = 0;
    for(let i = 0; i < str.length; i++) {
        if (str[i] === brackets.curved.open) {
            openedBracketsCount++;
        }
        if (str[i] === brackets.curved.close) {
            openedBracketsCount--;
        }
    }

    return !openedBracketsCount;
}

export {
    validCurvedBrackets
}
