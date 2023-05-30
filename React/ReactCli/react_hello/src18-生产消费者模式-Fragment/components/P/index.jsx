import React, { Component, useState } from 'react'
import './index.css'

export default class A extends Component {
	render () {
		return (
			<div className='A'>
				<h1>A组件</h1>
				<B render={(v) => <C count={v} />} />
			</div>
		)
	}
}
//B 组件
function B (props) {
	const [count, setCount] = useState(0)
	return (
		<div className='B'>
			<h2>B组件</h2>
			{props.render(count)}
		</div>
	)
}

function C (props) {
	return (
		<div className='C'>
			<h4>
				C组件: {props.count}
			</h4>
		</div>
	)
}
