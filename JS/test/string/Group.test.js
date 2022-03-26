const assert = require('assert');
const Lib = require('../../src/string/Group');

describe('Group string by dyplicates', () => {
    it('Empty string', () => {
        assert.deepEqual(Lib.groupSymbols(''), []);
    });
    it('Not empty string', () => {
        /**
         * Собираем данные для теста. Начинаем с ответа, поскольку из него легче получить входные данные.
         * Ответ - это массив массивов. Максимальная длина будет maxArrayLength.
         * В в качестве каждого элемента мы обязаны сгенерировать НЕПУСТОЙ массив,
         * длиной maxSequnceLength (поэтому там стоит + 1)  с одинаковыми символами в качестве содержимого.
         * Доступные символы будут взяты из массива abc.
         */
        const result = Array.from(Array(random(maxArrayLength))).map(() => {
            const symbol = abc[random(abc.length)];
            return Array.from(Array(random(maxSequnceLength) + 1)).map(_ => symbol);
        });
        /**
         * А теперь из ответа склеим входную строку. Просто собрав все группы в строки, а потом склеив и их.
         */
        let data = result.map(arr => arr.join('')).join('');

        assert.deepEqual(Lib.groupSymbols(data), result);
    });
});

const maxArrayLength = 30;
const maxSequnceLength = 5;
const abc = Array.from(Array(26)).map((_, i) => String.fromCharCode(i + 65));
const random = (N) => {
    return Math.floor(Math.random() * N);
}
