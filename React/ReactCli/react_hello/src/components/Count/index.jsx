import React, { useState, useRef } from 'react'
export default function Count () {
	const [count, setCount] = useState(0)
	const slt = useRef()
	const add = () => {
		setCount(count + slt.current.value * 1)
	}
	const decrement = () => {
		setCount(count - slt.current.value * 1)
	}
	const add_odd = () => {
		if (count % 2 !== 0) {
			setCount(count + slt.current.value * 1)
		}

	}
	const add_async = () => {
		setTimeout(() => {
			add()
		}, 1000);
	}
	return (
		<div>
			<h1>Count: {count}</h1>
			<select ref={slt}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<button onClick={add}>add</button>
			<button onClick={decrement}>decrement</button>
			<button onClick={add_odd}>add_odd</button>
			<button onClick={add_async}>add_async</button>
		</div>
	)
}
