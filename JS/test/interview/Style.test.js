const Style = require('../../src/interview/Style');
const assert = require('assert');

const styles = {
    main: {
      fontSize: 16,
      align: 'center',
      dropShadow: true
    },
    primary: ['third', 'fourth'],
    third: {
      align: 'right'
    },
    fourth: [{
      margin: 6
    }],
    large: ['main', {
      fontSize: 32,
      padding: '59',
      align: 'left',
      dr: 99
    }, 'primary', {
      dr: 7
    }],
    bar: ['main', 'primary']
  }

describe('Style', function () {
   it('Несуществующий класс', () => {
      const expected = {};

      assert.deepEqual(Style.getStyle(styles, 'wrongClassName'), {}, 'Вернулись непустые данные для несуществующего класса');
   });

   it('Простой класс', () => {
    const expected = {};

    assert.deepEqual(Style.getStyle(styles, main), styles.main, 'Вернулись неверные данные для простого класса');
 });
});
