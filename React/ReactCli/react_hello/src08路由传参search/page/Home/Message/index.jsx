import React,{useState} from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Message () {
	const [data] = useState([
		{ id: '001', name: 'message一', content: 'message一的内容' },
		{ id: '002', name: 'message二', content: 'message二的内容' },
		{ id: '003', name: 'message三', content: 'message三的内容' }
	])
	return (
		<div>
			<div>
				{data.map(m => {
					return (
						<div key={m.id}>
							<Link to={`detail?id=${m.id}&name=${m.name}&content=${m.content}`}>{m.name}</Link>
						</div>
					)
				})}
			</div>
			<hr />
			<div>
				<Outlet />
			</div>
		</div>)
}
