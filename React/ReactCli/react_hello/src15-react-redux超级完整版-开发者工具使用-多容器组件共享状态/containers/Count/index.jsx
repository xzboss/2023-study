import { connect } from "react-redux"
import { createIncrement, createAsyncIncrement } from "../../redux/actions/count"
import React, { } from 'react'
//
function Count (props) {
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
			<h1>Count组件</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<button onClick={add_odd}>add_odd</button>
			<button onClick={add_async}>add_async</button>
			<ul>
				person组件的内容
				<hr />
				{
					props.persons.map(({ id, name, age }) => {
						return <li key={id}>name: {name} ----- age: {age}</li>
					})
				}
			</ul>
		</div>
	)
}

// 取值方式改变
function mapStateToProps (state) {
	return { count: state.count, persons: state.persons }
}
const mapDispatchToProps = {
	increment: createIncrement,
	asyncIncrement: createAsyncIncrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)