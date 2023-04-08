import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
export default function Home () {
	return (
		<div>
			<h2>home内容</h2>
			<div className='container text-center'>
				<div className="row">
					<div className="col-2 list-group ">
						<NavLink to='news' className='list-group-item'>News</NavLink>
					</div>
					<div className="col-2 list-group">
						<NavLink to='message' className='list-group-item'>Message</NavLink>
					</div>
				</div>
				<div className="row">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
