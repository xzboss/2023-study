import React, { Component } from 'react'

import './index.css'
export default class List extends Component {
	render () {
		const { data, isFirst, isLoading, isError } = this.props
		return (
			<ul className='List'>
				{
					isFirst ? <h1>请输入关键词搜索</h1> :
						isLoading ? <h1>Loading...</h1> :
							isError ? <h1>出错了</h1> :
								data.map(userObj => {
									return (
										<li key={userObj.id}>
											<a href={userObj.html_url}>
												<img src={userObj.avatar_url} alt="header_p" />
												<span>{userObj.login}</span>
											</a>
										</li>
									)
								})
				}
			</ul>
		)
	}
}
