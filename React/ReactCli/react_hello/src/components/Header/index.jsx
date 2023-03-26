import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
	addTodo = (e)=>{
		if(e.target.value !== '' && e.keyCode === 13){
			this.props.addTodo({id:nanoid(),name:e.target.value,done:true})
		}
	}
	render() {
		return (
			<div className='add'>
				<input type="text" className="add_inp" onKeyUp={this.addTodo}/>
			</div>
		)
	}
}
