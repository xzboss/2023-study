import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail () {
	const { state: { id, name, content } } = useLocation()
	return (
		<div>
			<ul>
				<li>{id}</li>
				<li>{name}</li>
				<li>{content}</li>
			</ul>
		</div>
	)
}

