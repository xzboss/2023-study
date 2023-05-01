import { connect } from "react-redux"
import { createIncrement, createAsyncIncrement } from "../../redux/countAction"
import React, { } from 'react'
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
			<h1>Count: {props.count}</h1>
			<button onClick={increment}>increment</button>
			<button onClick={decrement}>decrement</button>
			<button onClick={add_odd}>add_odd</button>
			<button onClick={add_async}>add_async</button>
		</div>
	)
}

//返回一个对象，对象的 key 映射为 UI组件的 props 的 key
//自动传入一个参数，即状态 store.getState()
function mapStateToProps (state) {
	return { count: state }
}
//返回一个对象，对象的 key 映射为 UI组件的 props 的 key
//自动传入一个参数，即派发函数 store.dispatch
/* function mapDispatchToProps (dispatch) {
	return {
		increment: (num) => {
			dispatch(createIncrement(num))
		},
		asyncIncrement: (num, time) => {
			dispatch(createAsyncIncrement(num, time))
		}
	}
} */
// react-redux 会自动派发
const mapDispatchToProps = {
	increment: createIncrement,
	asyncIncrement: createAsyncIncrement
}
//connect 接收两个参数
//第一个用来映射状态，第二个用来映射操作状态的方法
//connect 返回一个函数，用于连接 UI 组件（传递的参数即连接的UI组件）
//最后返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Count)