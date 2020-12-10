import { combineReducers } from "redux";
import successReducer from './successReducer'

const rootReducer = combineReducers({ successReducer })
export default rootReducer
