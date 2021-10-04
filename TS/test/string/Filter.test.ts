import { sentencesWithOnlyTheRightWord, wordSeparator, lineSeparator } from "../../src/string/Filter";

/** Набор предложений для текста. Предложения имеют разные знаки окончания */
const longTextData = [
	/* 1 */'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	/* 2 */'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat!',
	/* 3 */'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
	/* 4 */'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?!',
	/* 5 */'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo...',
	/* 6 */'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
	/* 7 */'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
	/* 8 */'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
	/* 9 */'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
];
/** Многострочный текст из предложений */
const longText = longTextData.join(lineSeparator);

/** Слова, который встречаются в нескольких предложенийх с указанием номера этих предложений. */
const commonWords: { [key: string]: number[] } = {
	'ipsum': [1, 7],
	'dolor': [1, 3, 7],
	'sit': [1, 5, 6, 7],
	'amet': [1, 7],
	'consectetur': [1, 7],
	'sed': [1, 5, 6, 7],
	'labore': [1, 7],
	'et': [1, 5, 7],
	'dolore': [1, 3, 7],
	'enim': [2, 6, 8],
	'ad': [2, 8],
	'veniam': [2, 8],
	'quis': [2, 8, 9],
	'nisi': [2, 8],
	'ex': [2, 8],
	'ea': [2, 8, 9],
	'in': [3, 4, 9],
	'voluptate': [3, 9],
	'velit': [3, 7, 9],
	'esse': [3, 9],
	'fugiat': [3, 9],
	'nulla': [3, 9],
	'pariatur': [3, 9],
	'non': [4, 7],
	'qui': [4, 6, 7, 9],
	'est': [4, 7]
};

describe('Filter text', () => {
    describe('Leave sentences with only the right word', () => {
        it('Empty filter', () => {
            const filterWord = '';

            expect(sentencesWithOnlyTheRightWord(longText, filterWord)).toEqual(longText);
        })

		it('Wrong filter', () => {
            const filterWord = 'Depeche mode';

            expect(sentencesWithOnlyTheRightWord(longText, filterWord)).toBe('');
        })

		it('Filter with single result', () => {
			const filterWord = 'adipiscing';
			const expectedResult = longTextData[0];
			const result = sentencesWithOnlyTheRightWord(longText, filterWord);	

            expect(result).toBe(expectedResult);
		})

		it('Filter with multiple result', () => {
			const filterWord = 'ipsum';
			const expectedResult = commonWords[filterWord]
				.map((num) => longTextData[num - 1]).join(lineSeparator);
			const result = sentencesWithOnlyTheRightWord(longText, filterWord);	

            expect(result).toBe(expectedResult);
		})

		it('Filter all multiple results', () => {
			Object.keys(commonWords).forEach((filterWord) => {
				const expectedResult = commonWords[filterWord]
					.map((num) => longTextData[num - 1]).join(lineSeparator);
					const result = sentencesWithOnlyTheRightWord(longText, filterWord);	

					expect(result).toBe(expectedResult);
			})
		})

		/** Тест для случая, когда у нас в 1 строке совпало несколько предложений. */
		it('3 sentences in 1 line', () => {
			const filterWord = 'ipsum';
			const expectedResult = commonWords[filterWord]
				.map((num) => longTextData[num - 1]).join(wordSeparator);
			const result = sentencesWithOnlyTheRightWord(longTextData.join(wordSeparator), filterWord);	

            expect(result).toBe(expectedResult);
		})
    })
})