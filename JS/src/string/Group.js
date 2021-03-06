/**
 * Реализовать функцию, которая сгруппируем символы дубликаты в строке и вернет их в массиве.
 *
 * Пример:
 * hhheelllowwoooorrrlldd
 *
 * [
 *     ['h', 'h', 'h'],
 *     ['e', 'e'],
 *     ['l', 'l', 'l'],
 *     ['o'],
 *     ['w', 'w'],
 *     ['o', 'o', 'o', 'o'],
 *     ['r', 'r', 'r'],
 *     ['l', 'l'],
 *     ['d', 'd']
 *  ]
 * https://t.me/c/1533281926/237
 * @param {String} str 
 * @returns array
 * @author PS11011010
 * @description Иногда, именно написание тестов для задачи может натолкнуть на путь решения.
 * Там есть следующее описание:
 * *
 * Собираем данные для теста. Начинаем с ответа, поскольку из него легче получить входные данные.
 * Ответ - это массив массивов. Максимальная длина будет maxArrayLength.
 * В в качестве каждого элемента мы обязаны сгенерировать НЕПУСТОЙ массив,
 * длиной maxSequnceLength (поэтому там стоит + 1)  с одинаковыми символами в качестве содержимого.
 * Доступные символы будут взяты из массива abc.
 * *
 * А теперь из ответа склеим входную строку. Просто собрав все группы в строки, а потом склеив и их.
 * *
 * Если для получения входных даных происходит последовательное склеивание подстрок,
 * значит и мы можем последовательно пройти по строке для получения ответа.
 * Подстроки - это последовательности одинаковых символов.
 * Нужно запомнить предыдущий символ для мониторинга факта смены последовательности и складывать каждый символ текущей последовательности в отдельный массив.
 * 
 * Одна из частых проблем задач, связанных с прохождением по какому-то итерируемому объекту - не забыть вставить в ответ последнюю пачку накопленных данных.
 * Именно поэтому длина цикла больше длины строки на единицу. Также, в самом последнем шаге цикла наш текущий символ будет равен пустой строке.
 * Его не нужно считать частью отдельной последовательности и добавлять в ответ.
 */
const groupSymbols = (str) => {
    const result = [];
    let prevSymbol = null;
    let curSymbol = null;
    let i = 0;

    for (i = 0; i <= str.length; i++) { // нам нужно финализировать последнюю цепочку, поэтому длина цикла больше длины строки
        curSymbol = str.charAt(i);
        if (prevSymbol !== curSymbol) {
            curSymbol && result.push([curSymbol]);
            prevSymbol = curSymbol;
            continue;
        }
        curSymbol && result[result.length - 1].push(curSymbol);
    }

    return result;
}

module.exports = {
    groupSymbols
}