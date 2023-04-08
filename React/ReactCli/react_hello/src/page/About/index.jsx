import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
export default function About () {
	const [sum, setSum] = useState(1)
	const add = () => {
		setSum(sum + 1)
	}
	return (
		<div>
			<h1>About</h1>
			{sum > 5 ? <Navigate to='/home' /> : <h3>{sum}</h3>}
			<button onClick={add}>+1</button>
		</div>
	)
}
