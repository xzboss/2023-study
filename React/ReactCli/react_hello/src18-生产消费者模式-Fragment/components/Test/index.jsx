import React, { useState } from 'react'

export default function Test () {
	console.log('rfc@@@')
	let [state, setState] = useState({count:0})
	const handle = () => {
		state.count = 99
		setState(state)
	}
	return (
		<div>
			state:{state.count}&nbsp;
			<button onClick={handle}>触发</button>
		</div>
	)
}
