const RLE = require('../../src/interview/RLE');
const assert = require('assert');

describe('RLE', function () {
   it('Пустая строка', () => {
      const data = '';

      assert.equal(RLE.RLE(data), data);
      assert.equal(RLE.greedyRLE(data), data, 'Жадный алгоритм вернул неверный результат');
   });

   it('Строка с 1 символом', () => {
      const data = 'A'

      assert.equal(RLE.RLE(data), data);
      assert.equal(RLE.greedyRLE(data), data, 'Жадный алгоритм вернул неверный результат');
   });

   it('Строка только с одиночными символами', () => {
      const data = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';

      assert.equal(RLE.RLE(data), data);
      assert.equal(RLE.greedyRLE(data), data, 'Жадный алгоритм вернул неверный результат');
   });

   it('Сложная длинная строка', () => {
      const data = 'AAABBCDDDGGGGGGGKKKLMMNNOOOPZ';
      const result = 'A3B2CD3G7K3LM2N2O3PZ';

      assert.equal(RLE.RLE(data), result);
      assert.equal(RLE.greedyRLE(data), result, 'Жадный алгоритм вернул неверный результат');
   });
});
