import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
	handleCheckAll = (e) => {
		this.props.checkAll(e.target.checked)
	}
	handleClearAllDone=()=>{
		this.props.clearAllDone()
	}
	render () {
		const { todos } = this.props
		const doneCount = todos.reduce((pre, curr) => pre + (curr.done ? 1 : 0), 0)
		return (
			<div className='footer'>
				<div className='l'>
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === todos.length && todos.length !== 0 ? true : false} />
					已完成{doneCount}/总共{todos.length}
				</div>
				<button className='footer_btn' onClick={this.handleClearAllDone}>移除已完成任务</button>
			</div>
		)
	}
}
