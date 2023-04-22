import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function News () {
	const [data] = useState([
		{ id: '001', name: '消息一', content: '消息一的内容' },
		{ id: '002', name: '消息二', content: '消息二的内容' },
		{ id: '003', name: '消息三', content: '消息三的内容' }
	])
	return (
		<div>
			<div>
				{data.map(m => {
					return (
						<div key={m.id}>
							<Link to={`detail/${m.id}/${m.name}/${m.content}`}>{m.name}</Link>
						</div>
					)
				})}
			</div>
			<hr />
			<div>
				<Outlet />
			</div>
		</div>
	)
}
