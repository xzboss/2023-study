import React, { } from 'react'
export default function Count (props) {
	const increment = () => {
		props.increment(1)
	}
	const decrement = () => { }
	const add_odd = () => { }
	const add_async = () => {
		props.asyncIncrement(1, 1000)
	}
	return (
		<div>
			<h1>Count: {props.count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<button onClick={add_odd}>add_odd</button>
			<button onClick={add_async}>add_async</button>
		</div>
	)
}
