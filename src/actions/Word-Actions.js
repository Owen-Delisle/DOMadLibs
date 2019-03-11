export const UPDATE_WORD = "word:updateWord";

export function updateWord(word, wordToChange) {
  return {
    type: UPDATE_WORD,
    payload: {
      word: word,
      wordToChange: wordToChange
    }
  };
}
