import React from 'react'
import { useParams } from 'react-router-dom'
export default function Detail () {
	const {id,name,content} = useParams()
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

