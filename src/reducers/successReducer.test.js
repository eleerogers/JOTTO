import {actionTypes} from "../actions";
import successReducer from "../reducers";

test('returns initial state of false when no action provided', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
})

test('return state of true upon CORRECT_GUESS action', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
})