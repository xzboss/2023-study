import React, { useState, useRef, useEffect } from 'react'
import store from '../../redux/store'
import { createIncrement, createAsyncIncrement } from '../../redux/countAction'
export default function Count () {
	const [update, setUpdate] = useState(true)
	const slt = useRef()
	const increment = () => {
		store.dispatch(createIncrement(1))
		setUpdate(!update)
	}
	const decrement = () => {

	}
	const add_odd = () => {
		if (5 % 2 !== 0) {

		}
	}
	useEffect(() => {
		/* 
		**只要store里的数据发生了变化，就会执行回调 
		**就和发布订阅一样
		*/
		store.subscribe(() => {
			setUpdate(!update)
		})
	})
	const add_async = () => {
		store.dispatch(createAsyncIncrement(2, 1000))
	}
	return (
		<div>
			<h1>Count: {store.getState()}</h1>
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
