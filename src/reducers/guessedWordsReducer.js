import { actionTypes } from '../actions';
export default function guessedWordsReducer(state=[], action) {
  switch(action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload]
    default:
      return state
  }
  return null;
}