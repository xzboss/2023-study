/* 用于合并reducer */
import { combineReducers } from 'redux'
import countReducer from './count_reducer'
import personReducer from './person'
/* 前面的 store.gteState('key') 就能通过 key 来取了*/
export default combineReducers({
	count: countReducer,
	persons: personReducer
})