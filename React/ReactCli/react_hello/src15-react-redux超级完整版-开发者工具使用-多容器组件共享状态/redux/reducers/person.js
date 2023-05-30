import { ADD_PERSON } from "../constant"
const initState = [
	{
		id: '0-1',
		name: 'xz',
		age: 12
	},
	{
		id: '0-2',
		name: '李易峰',
		age: 34
	}
]
export default function personReducer (preState = initState, action) {
	const { type, data } = action
	switch (type) {
		case ADD_PERSON:
			return [data, ...preState]
		default:
			return preState
	}
}