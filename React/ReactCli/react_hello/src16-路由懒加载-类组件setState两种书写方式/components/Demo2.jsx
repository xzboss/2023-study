import React, { useState } from 'react'

export default function Demo2 () {
	const [state, setState] = useState({ count: 0 })
	const add = () => {
		setState({ count: state.count + 1 }, () => {
			console.log('@')
		})
	}
	console.log(state)
	return (
		<div>
			count: {state.count}
			<button onClick={add}>ADD</button>
		</div>

	)
}
