import { getLetterMatchCount } from './';

describe('test getLetterMatchCount function', () => {
  const secretWord = 'party';
  const word1 = 'fools';
  const word2 = 'farts';
  const word3 = 'panda';

  test('Returns correct count when no letters in common', () => {
    const letterInCommon = getLetterMatchCount(word1, secretWord);
    expect(letterInCommon).toBe(0);
  });
  test('Returns correct count when there are 3 matching letters', () => {
    const letterInCommon = getLetterMatchCount(word2, secretWord);
    expect(letterInCommon).toBe(3);
  });
  test('Returns correct count when there are duplicate letters in common', () => {
    const letterInCommon = getLetterMatchCount(word3, secretWord);
    expect(letterInCommon).toBe(2);
  });
});
