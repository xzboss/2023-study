/* 
	对状态进行操作
*/
import { INCREMENT, DECREMENT } from "./constant"
const initState = 0
export default function countReducer (preStore = initState, action) {
	const { type, data } = action
	switch (type) {
		case INCREMENT:
			return preStore + data
		case DECREMENT:
			return preStore - data
		default:
			return preStore
	}
}