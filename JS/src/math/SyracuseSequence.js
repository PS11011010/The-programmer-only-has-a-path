const ERRORS = {
    INVALID_ARGUMENT: {
        DEFAULT_MESSAGE: 'Argument is invalid',
        IS_NOT_NATURAL_NUMBER: 'Argument is not natural number',
        CAN_NOT_BE_NEGATIVE_OR_ZERO: 'Argument cannot be negative or zero',
    }
}

function InvalidArgument(message = ERRORS.INVALID_ARGUMENT.DEFAULT_MESSAGE) {
    this.name = 'InvalidArgument';
    this.message = message;
}

InvalidArgument.prototype = Error.prototype;

const getSyracuse = (number) => {
    if (!Number.isInteger(number)) {
        throw new InvalidArgument(ERRORS.INVALID_ARGUMENT.IS_NOT_NATURAL_NUMBER);
    } else if (number <= 0) {
        throw new InvalidArgument(ERRORS.INVALID_ARGUMENT.CAN_NOT_BE_NEGATIVE_OR_ZERO);
    }

    let steps = 0;
    let maxIntermediateNumber = 0;
    let sequence = [];

    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1
        }

        if (number > maxIntermediateNumber) {
            maxIntermediateNumber = number;
        }

        sequence.push(number);
        steps += 1;
    }

    return {
        sequence,
        steps,
        maxIntermediateNumber
    }
}

module.exports = {
    getSyracuse,
    InvalidArgument,
    ERRORS
}
