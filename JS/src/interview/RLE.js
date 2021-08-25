/**
 * Дана строка из букв A-Z. Нужно вернуть строку формата [БукваКоличествоПовторений]. Если буква встречается 1 раз, количество повторений писать не нужно.
 * Например, строка "AAABBCDDDGGGGGGGKKKLMMNNOOOP" вернет "A3B2CD3G7K3LM2N2O3P"
 * Решать задачу нужно без использования специализированных методов, библиотек и т.д.
 * @author PS11011010
 */

/**
 * Наиболее оптимальная по скорости/памяти реализация
 * @param str
 * @returns {string}
 */
const RLE = (str) => {
   /** Разберу строку на отдельные символы и добавлю в конце пустой маркер, чтобы сработал финальный сброс в result */
   const data = str.split('').concat(['']);
   /** Минимальная длина последовательности одинаковых символов, при которой мы будем помещать число в result */
   const minCharSequenceLength = 1;
   /** Последний зарегистрированный символ */
   let lastSymbol = '';
   /** Количество повторений последнего зарегистрированного символа */
   let lastLetterCount = 0;
   /** Результирующий массив символов. Его потом нужно будет склеить в строку */
   const result = [];

   /**
    * Пора пройти циклом по нашему массиву.
    * Надо помнить, что мы в конец добавили символ-маркер для сброса последней пачки накопленной информации в result
    */
   data.forEach((symbol) => {
      /** Если наткнулись на границу символов */
      if (lastSymbol !== symbol) {
         /** Помещаем в результат символ и его счетчик, если он больше 1. А там может быть и 0, в начальном состоянии */
         result.push(`${lastSymbol}${lastLetterCount > minCharSequenceLength ? lastLetterCount : ''}`);
         /** Сбрасываем информацию ос последнем зарегистрированном символе и счетчик */
         lastSymbol = symbol;
         lastLetterCount = 1;

         return;
      }

      /** А вот в случае, когда последовательность одинаковых символов продолжается - накручиваем счетчик */
      lastLetterCount++;
   });

   /** Склеиваем и возвращаем результат */
   return result.join('');
}

/**
 * Реализация с большим количеством циклов и порождением новых сущностей
 * @param str
 * @returns {string}
 */
const greedyRLE = (str) => {

   return str
      .split('')
      .concat([''])
      .reduce((result, symbol) => {
         let lastSequence = result[result.length - 1];

         if (lastSequence[0] !== symbol) {
            result.push(lastSequence = []);
         }

         lastSequence.push(symbol);
         return result;
      }, [[]])
      .map((sequence) => {
         return `${sequence[0] || ''}${sequence.length > 1 ? sequence.length : ''}`
      })
      .join('');
}

module.exports = {
   RLE,
   greedyRLE
}
