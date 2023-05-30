import React, { Component, PureComponent } from 'react'

/* 解决办法 二，继承 PureComponent */
/* PureComponent原理其实也是重写 shouldComponentUpdate ,但是他只在里面进行了浅比较
	也就是说用这个方法，就算状态改变了，但是传入的引用一样，那么不会调用 render
	比如 this.state(this.state)
	*/
export default class Demo extends PureComponent {
	state = { count: 0 }
	handle = () => {
		this.setState({ count: 0 })//状态并没有改变，但是却要调用 render
	}
	/* 解决办法 一，重写shouldComponentUpdate */
	/* shouldComponentUpdate (nextProps, nextState) {
		console.log(this.state, nextState)
		return nextState.count !== this.state.count
	} */
	render () {
		console.log('@@@')
		return (
			<div>
				count: {this.state.count}&nbsp;
				<button onClick={this.handle}>触发</button>
			</div>
		)
	}
}
/* 这里插播一个小知识，this.setState() 执行顺序是 先触发 shouldComponentUpdate，并将新状态传给它，通过后再改变状态，再render*/
