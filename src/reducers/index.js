import { combineReducers } from "redux";
import success from './successReducer';
import guessedWordsReducer from './guessedWordsReducer';

const rootReducer = combineReducers({ 
  success,
  guessedWordsReducer
})

export default rootReducer
