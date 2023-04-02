import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'
export default class Search extends Component {
	input01 = React.createRef()
	getGitHub = () => {
		PubSub.publish('getGitHub', { isFirst: false, isLoading: true })
		const { input01: { current: { value } } } = this
		axios(`/github/search/users2?q=${value}`).then(
			res => {
				console.log(res.data);
				PubSub.publish('getGitHub', {
					data: res.data.items,
					isFist: false,
					isLoading: false
				})
			},
			err => {
				console.log('err');
				PubSub.publish('getGitHub', { isLoading: false, isError: true })
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
