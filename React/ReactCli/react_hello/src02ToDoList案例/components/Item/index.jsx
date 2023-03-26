import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {

	onchangeHandle = (id) => {
		return (e) => {
			this.props.updateTodo(id, e.target.checked)
		}
	}
	handleDelete = (id) => {
		if (window.confirm('确定删除')) {
			this.props.deleteTodo(id)
		}

	}
	render () {
		const { id, name, done } = this.props
		return (

			<li className='li_item'>
				<div className='select'>
					<label htmlFor={id}>
						<input type="checkbox" checked={done} onChange={this.onchangeHandle(id)} id={id} />
						<span className='s_span'>{name}</span>
					</label>
				</div>
				<button className='Item_btn' onClick={() => this.handleDelete(id)}>删除</button>
			</li>

		)
	}
}
