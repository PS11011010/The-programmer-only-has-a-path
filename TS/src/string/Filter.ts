const wordSeparator = ' ';
const lineSeparator = '\n';

/**
 * Интерфейс 1 предложения
 * Вмещает в себя несколько слов и само себя
 */
interface ITextSentence {
    source: string;
    allWords: string[];
    toString: Function;
}

/**
 * Интерфейс 1 строки
 * Вмещает в себя несколько предложений и саму себя.
 */
interface ITextLine {
    source: string;
    allSentences: ITextSentence[];
}

/**
 * Дан многострочный текст. Реализовать функцию, которая оставит в тексте только те предложения,
 * в которых встречается заданное слово.
 * @param text 
 * @param filterWord 
 * @returns 
 * @author PS11011010
 * @description Задача кажется простой, но...
 * Сложность заключается в том, что у нас не просто набор предложений, а набор строк с предложениями.
 * Для каждого предложения у нас может совпасть слово, часть слова, или не совпасть ничего. Все крутится
 * вокруг понятия "слово". Их нужно корректно выделять из текста, оставляя позади знаки препинания.
 * В этом поможет герулярное выражение. Не стоит забывать и про регистр.
 * Когда у нас есть слова, их можно объеденить в набор и привязать к какому-то предложению. Нужно это затем,'
 * чтобы потом не пытаться коррекно склеить все предложение назад. Предложения объединяются в строки...
 * Осталось отфильтровать предложения по словам, а строки по предложениям, прошедшим фильтрацию
 * и склеить все назад.
 */
const sentencesWithOnlyTheRightWord: (text: string, filterWord: string) => string = (text, filterWord) => {
    if (!filterWord) {
        return text;
    }
    if (text.includes(filterWord)) {
        return text
            /** Поделим текст на строки */
            .split(lineSeparator)
            /** Каждую "сырую" строку преобразуем в объект ITextLine */
            .map((rawTextPart) => {
                /** Получим все предложения из строки */
                const allSentencesRaw = splitStringToSentencies(rawTextPart);
                const result: ITextLine = {
                    source: rawTextPart,
                    allSentences: allSentencesRaw.map((sentence) => {
                        return {
                            source: sentence,
                            /** Предложение нужно привести к одному регистру и убрать все, кроме букв и пробелов */
                            allWords: sentence.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(wordSeparator),
                            /** Метод toString нужен для того, чтобы не получить [Object object] */
                            toString() {
                                return this.source;
                            }
                        }
                    })
                }

                return result;
            })
            /** Оставляем только те строки, в которых есть предложения с совпадениями. */
            .filter((textPart) => {
                textPart.allSentences = textPart
                    .allSentences
                    /** Поскольку allWords у нас массив - очень удобно по нему искать */
                    .filter((sentence) => sentence.allWords.includes(filterWord.toLowerCase()))

                return textPart.allSentences.length;
            })
            /** Из каждой оставшейся строки возвращаем только то предложение, в котором есть совпадения */
            /** Тут нам и пригодился toString, поскольку join неявно вызывает этот метод у объекта ITextSentence */
            .map((textPart) => textPart.allSentences.join(wordSeparator))
            .join(lineSeparator);
    }

    return '';
}

/**
 * Метод вернет массив предложений для заданной строки.
 * @param text 
 * @returns 
 */
const splitStringToSentencies: (text: string) => string[] = (text) => {
    const separators = ['...', '?!', '.', '!', '?'];
    let result: string[] = [];
    let lastSentence: string = '';

    text.split(wordSeparator).forEach((textPart) => {
        lastSentence += `${lastSentence ? wordSeparator : ''}${textPart}`;

        separators.forEach((separator) => {
            if (lastSentence.endsWith(separator)) {
                result.push(lastSentence);
                lastSentence = '';
            }
        })
    })

    return result;
}

export {
    sentencesWithOnlyTheRightWord,
    wordSeparator,
    lineSeparator
}