/**
 * @interface INutritionData - интерфейс для параметров
 * продукта/полуфабриката/блюда, на основе которых будет рассчитана калорийность
 */
interface INutritionData {
    protein: number;
    fat: number;
    carbohydrate: number;
    spirit: number;
}

/**
 * Написать метод, который принимает в себя 4 параметра: содержание белков,
 * жиров, углеводов и спирта в граммах. Метод должен вернуть число калорий.
 * https://t.me/c/1533281926/22
 * @param data 
 * @returns
 * @author PS11011010
 * @description Формула простая: Белки х 4 + Жиры х 9 + Углеводы х 4 + Спирт х 7
 * Именно в этой реализации я показал процесс итерации по ключам Интерфейса
 * и дженерик Partial (делает все свойства интерфейса опциональными).
 * Его протифоположность дженерик - Required
 */
const Nutrition: (data: Partial<INutritionData>) => number = (data) => {
    let key: keyof INutritionData;
    let result = 0;
    
    const multiplies: INutritionData = {
        protein: 4,
        fat: 9,
        carbohydrate: 4,
        spirit: 7
    }
    
    for (key in multiplies) {
        result += multiplies[key] * (data[key] || 0)
    }

    return result;
}

export {
    Nutrition
}