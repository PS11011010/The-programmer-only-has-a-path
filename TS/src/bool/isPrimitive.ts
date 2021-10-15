/** Объявление данных типа массив внутри частовызываемой функции замедляет ее в 3 раза */
const notPrimitiveTypes = ['object', 'function']

const isPrimitive: (obj: unknown) => boolean = (obj) => {
    return obj === null || !notPrimitiveTypes.includes(typeof obj)
}

export {
    isPrimitive
}