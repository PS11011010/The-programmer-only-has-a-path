import { lostArrayElement, greedyLostArrayElement, getNormalArray } from '../../src/interview/LostArrayElement'
import { shuffleArray } from '../../src/array/Shuffle'

describe('Find Lost Array Element', () => {
   it('Empty array', () => {
      const removedNumber = 1;

      expect(lostArrayElement([])).toBe(removedNumber);
      expect(greedyLostArrayElement([])).toBe(removedNumber);
   });

   it('10 elements array', () => {
      const arrayLen = 10;
      const removedNumber = 5;
      const array = prepareArray(arrayLen, removedNumber);

      expect(lostArrayElement(array)).toBe(removedNumber);
      expect(greedyLostArrayElement(array)).toBe(removedNumber);
   });

   it('100 elements array', () => {
      const arrayLen = 100;
      const removedNumber = 42;
      const array = prepareArray(arrayLen, removedNumber);

      expect(lostArrayElement(array)).toBe(removedNumber);
      expect(greedyLostArrayElement(array)).toBe(removedNumber);
   });
});

/**
 * Функция подготовки тестового массива
 * Создаст упорядоченный массив последовательных натуральных чисел от 1 до N.
 * Уберет один элемент.
 * Перемешает
 * @param len
 * @param remove
 */
const prepareArray: (len: number, remove: number) => Array<number> = (len: number, remove: number) => {
   return shuffleArray(getNormalArray(len).filter((n: number) => n !== remove));
}
