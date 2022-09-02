/**
 * Имеется объект, в котором в качестве ключа выступает имя CSS класса, а качестве значения может быть: 
 *  - объект из CSS атрибутов 
 * массив, который может содержать:
 *  -- имя другого CSS класса для наследования
 *  -- объект из CSS атрибутов
 * Более поздние элементы массива переопределяют уже вычисленные атрибуты.
 * Задача: реализовать функцию getStyle, которая получает на входе имя CSS класса и возвращает список соответствующих атрибутов.
 * @author PS11011010
 */

const getStyle = (styles, className) => {
    let result = {};
    let dataToCollect = [className]
    let current;

    while (dataToCollect.length) {
        current = dataToCollect.shift();

        if (!styles.hasOwnProperty(current)) {
            continue;
        }

        
    }

    return result;
}
 
 module.exports = {
    getStyle
 }
 