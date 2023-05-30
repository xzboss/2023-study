import React, { Component, createContext } from 'react'
import './index.css'
//创建 context 对象
const MyContext = createContext()
// Provider 组件用来传递 ，Consumer用来接收 （类组件还有另一种方式接收）
const { Provider, Consumer } = MyContext
export default class A extends Component {
	render () {
		return (
			<div className='A'>
				<h1>A组件 传递的值是 100</h1>
				{/* 只能用 value 属性传值 */}
				<Provider value={100}>
					<B />
				</Provider>
			</div>
		)
	}
}
//B 组件
class B extends Component {
	render () {
		return (
			<div className='B'>
				<h2>B组件</h2>
				<C />
			</div>
		)
	}
}
/* 这个接收方式只适用于类组件 */
/* class C extends Component {
	// 必须用 static
	// 声名 C 属于这个上下文
	// 声名了之后才可以通过 this.context 接收
	static contextType = MyContext
	render () {
		return (
			<div className='C'>
				<h4>C组件 接收的值是：{this.context}</h4>
			</div>
		)
	}
} */
/* 这个接收方式适用于类组件与函数组件 */
function C () {
	return (
		<div className='C'>
			<h4>
				C组件 接收的值是：<Consumer>{value => value}</Consumer>
			</h4>
		</div>
	)
}
