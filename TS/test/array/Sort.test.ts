import { sortBinaryNumbers } from "../../src/array/Sort";
import { decToBin } from '../../src/math/Radix';
import { getNormalArray } from '../../src/interview/LostArrayElement'
import { shuffleArray } from "../../src/array/Shuffle";

describe('Sort binary numbers', () => {
    it('Empty data', () => {
        expect(sortBinaryNumbers([])).toEqual([]);
    })

    it('Array with only one element', () => {
        const data = decArrayToBinary([42]);

        expect(sortBinaryNumbers(data)).toEqual(data);
    })

    it.only('Big array', () => {
        const arr = getNormalArray(1000);
        const binaryArr = decArrayToBinary(arr);
        const shuffledBinaryArray = decArrayToBinary(shuffleArray(arr));
        const result = sortBinaryNumbers(shuffledBinaryArray);

        expect(result).toEqual(binaryArr);
    })
})

const decArrayToBinary: (data: number[]) => string[] = (data) => {
    return data.map(i => decToBin(i))
}