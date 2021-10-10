import { reversedWordsInText } from "../../src/string/Reversed";

describe('Reversed words in text', () => {
    it('One word text', () => {
        const data = 'oof';
        const result = 'foo';

        expect(reversedWordsInText(data)).toBe(result);
    })

    it('Multiword text', () => {
        const data = 'merol muspi rolod tis tema';
        const result = 'lorem ipsum dolor sit amet';

        expect(reversedWordsInText(data)).toBe(result);
    })
})