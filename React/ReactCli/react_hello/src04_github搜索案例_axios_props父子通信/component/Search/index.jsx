import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
	input01 = React.createRef()
	getGitHub = () => {
		this.props.updateState({ isFirst: false, isLoading: true })
		console.log(this.input01.current.value);
		const { input01: { current: { value } } } = this
		axios(`/github/search/users?q=${value}`).then(
			res => {
				console.log(res.data);
				this.props.getUsers(res.data.items)
				this.props.updateState({ isFist: false, isLoading: false })
			},
			err => {
				this.props.updateState({ isLoading: false, isError: true })
			}
		)
	}
	render () {
		return (
			<div>
				<input type="text" ref={this.input01} />
				<button onClick={this.getGitHub}>Search</button>
			</div>
		)
	}
}
