import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { createAddPerson } from '../../redux/actions/person'
//UI 组件
function Person (props) {
	const nameNode = useRef()
	const ageNode = useRef()
	const add = () => {
		const name = nameNode.current.value
		const age = ageNode.current.value
		props.add_person({ id: nanoid(), name, age })
	}
	return (
		<div>
			<h1>person组件</h1>
			<input type="text" placeholder='name' ref={nameNode} />
			<input type="text" placeholder='age' ref={ageNode} />
			<button onClick={add}>添加</button>
			<h4>Count组件的值：{props.count}</h4>
		</div>
	)
}
// 暴露容器组件
export default connect(
	state => ({ count: state.count }),
	{
		add_person: createAddPerson
	}
)(Person)
