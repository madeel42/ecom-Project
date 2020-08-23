import {combineReducers} from 'redux'
import dataReducer from './dataReducer'
let allReducers = combineReducers({dataReducer})
export default allReducers;