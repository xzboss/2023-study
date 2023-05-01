/*  */
const initState = 0
export default function countReducer (preStore = initState, action) {
	const { type, data } = action
	switch (type) {
		case 'increment':
			return preStore + data
		default:
			return preStore
	}
}