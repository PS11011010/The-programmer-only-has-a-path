const Lib = require('../../src/math/Factorial');
const assert = require('assert');

describe('Factorial', function () {
    it('Ноль', () => {
        assert.equal(Lib.factorial(0), 1);
    })

    it('Результат, который меньше, чем Number.MAX_SAFE_INTEGER', () => {
        assert.equal(Lib.factorial(10), 3628800);
    })

    describe('Async', () => {
        it('Ноль', () => {
            return Lib.factorialAsync(0).then((result) => {
                assert.equal(result, 1);
            })
        })

        it('Результат, который меньше, чем Number.MAX_SAFE_INTEGER', () => {
            return Lib.factorialAsync(10).then((result) => {
                assert.equal(result, 3628800);
            })
        })
    })
})