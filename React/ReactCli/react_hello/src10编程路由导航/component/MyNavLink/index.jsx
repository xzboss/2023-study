import React from 'react'
import { NavLink } from 'react-router-dom'
export default function MyNavLink (props) {
	const changeClassName = ({ isActive }) => {
		return 'list-group-item ' + (isActive ? 'active' : '')
	}
	return (
		<NavLink className={changeClassName} {...props} />
	)
}
