import { isPrimitive } from "./isPrimitive";

interface IUnknownObject {
    [key: string]: unknown;
}

/**
 * Реализуйте метод deepEqual, который принимает в себя два объекта или структуры
 * или экземпляра класса (зависит от языка) и возвращает ИСТИНА, если сущности идентичны.
 * https://t.me/c/1533281926/49
 * @param data1 
 * @param data2 
 * @returns
 * @author PS11011010
 * @description Несмотря на то, что по условиям задачи мы сравниваем 2 объекта,
 * функционал метода deepEqual учитывает еще и примитивы. Почему? Потому что сравнивать
 * ключи внутри объектов мы будем этим же самым методом, а там может быть и примитив в том числе.
 * Теперь о сравнении. В примитивах все просто. Они сравниваются напрямую.
 * В объектах (массивы а JavaScript - это тоже объекты) должно совпадать количество ключей
 * (это сравнить быстрее всего) и каждое отдельное свойство.
 * Обратите внимание, что в тестах есть объект, в котором по ключу fn описана функция,
 * которая возвращает random. Однако, объект, использующий эту функцию эквивалентен сам себе.
 * Почему? потому что сравнивается адрес в памяти, а не результат функции (она же не самовызывающаяся).
 */
const deepEqual: (data1: unknown, data2: unknown) => boolean = (data1, data2) => {
    if (isPrimitive(data1) && isPrimitive(data2)) {
        return data1 === data2;
    }

    const obj1 = data1 as IUnknownObject;
    const obj2 = data2 as IUnknownObject;

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    let key: keyof IUnknownObject;

    for (key in obj1) {
        if(!(key in obj2)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }

    return obj1 === obj2;
}

export {
    deepEqual
}