import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class Search extends Component {
	input01 = React.createRef()
	getGitHub = async () => {
		PubSub.publish('getGitHub', { isFirst: false, isLoading: true })
		const { input01: { current: { value } } } = this
		try {
			const res = await fetch(`/github/search/users?q=${value}`)
			const data = await res.json()
			PubSub.publish('getGitHub', {
				data: data.items,
				isFist: false,
				isLoading: false
			})
			console.log(data);
		} catch (error) {
			PubSub.publish('getGitHub', { isLoading: false, isError: true })
		}
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
