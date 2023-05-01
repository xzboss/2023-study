import React, { useState, useRef } from 'react'
import store from '../../redux/store'
export default function Count () {
	const [update, setUpdate] = useState(true)
	const slt = useRef()
	const increment = () => {
		store.dispatch({ type: 'increment', data: 1 })
		setUpdate(!update)
	}
	const decrement = () => {

	}
	const add_odd = () => {
		if (5 % 2 !== 0) {

		}

	}
	const add_async = () => {
		setTimeout(() => {
			increment()
		}, 1000);
	}
	return (
		<div>
			<h1>Count: {store.getState('count')}</h1>
			<select ref={slt}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<button onClick={add_odd}>add_odd</button>
			<button onClick={add_async}>add_async</button>
		</div>
	)
}
