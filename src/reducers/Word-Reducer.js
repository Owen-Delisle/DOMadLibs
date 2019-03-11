import { UPDATE_WORD } from "../actions/Word-Actions";

export default function wordReducer(state = "", { type, payload }) {
  switch (type) {
    case UPDATE_WORD:
      return [
        ...state,
        { word: payload.word, wordToChange: payload.wordToChange }
      ];
    default:
      return state;
  }
}
