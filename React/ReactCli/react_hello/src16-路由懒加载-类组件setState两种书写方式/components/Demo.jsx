import React, { Component } from 'react'

export default class Demo extends Component {
	state = { count: 0 }
	/* 第一种对象式，本质是函数式的语法糖 */
	add = () => {
		/* 
				setState() 确实是同步方法，但是 react 的更新是异步的 
				第二个参数是个回调，是当 react 更新状态后调用的
		*/
		this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count)) // 1
		console.log(this.state.count) // 0
	}
	/* 第一种函数式 */
	add2 = () => {
		/* 第一个回调能接收到 state 和 props ，第二个回调是当 react 更新状态后调用的*/
		this.setState((state, props) => { }, () => { })
	}
	render () {
		return (
			<div>
				<h1>count: {this.state.count}</h1>
				<button onClick={this.add}>ADD</button>
			</div>

		)
	}
}
