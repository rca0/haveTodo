import { combineReducers } from 'redux'
import havetodoReducer from '../havetodo/havetodoReducer'

const rootReducer = combineReducers({
    todo: havetodoReducer
})

export default rootReducer
