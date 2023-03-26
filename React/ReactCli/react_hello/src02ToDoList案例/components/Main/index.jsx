import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'
export default class Main extends Component {
	PropTypes = {
		updateTodo: PropTypes.func.isRequired,
		todos: PropTypes.array.isRequired
	}
	render () {
		const { todos, updateTodo, deleteTodo } = this.props
		return (
			<ul className='main'>
				{
					todos.map((todo, index) => {
						return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}></Item>
					})
				}
			</ul>
		)
	}
}
