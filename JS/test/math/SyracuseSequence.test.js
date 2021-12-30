const assert = require('assert');
const Lib = require('../../src/math/SyracuseSequence');

describe('Syracuse', () => {
    it('sequence for null', () => {
        assert.throws(() => Lib.getSyracuse(null), new Lib.InvalidArgument(Lib.ERRORS.INVALID_ARGUMENT.IS_NOT_NATURAL_NUMBER));
    });
    it('sequence for zero', () => {
        assert.throws(() => Lib.getSyracuse(0), new Lib.InvalidArgument(Lib.ERRORS.INVALID_ARGUMENT.CAN_NOT_BE_NEGATIVE_OR_ZERO));
    });
    it('sequence for number 2', () => {
        const correctSequence = [1];
        assert.deepEqual(Lib.getSyracuse(2).sequence, correctSequence);
    });
    it('sequence for number 5', () => {
        const correctSequence = [16, 8, 4, 2, 1];
        assert.deepEqual(Lib.getSyracuse(5).sequence, correctSequence);
    });
});
