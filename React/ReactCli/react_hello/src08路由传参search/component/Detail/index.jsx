import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
export default function Detail () {
	const [search, setSearch] = useSearchParams()
	const id = search.get('id')
	const name = search.get('name')
	const content = search.get('content')
	console.log(useLocation());
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

