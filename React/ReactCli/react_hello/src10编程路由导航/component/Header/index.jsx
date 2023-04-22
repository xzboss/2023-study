import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header () {
	const navigate = useNavigate()
	const toAbout = () => {
		navigate('/about', {
			replace: false,
			state: {
				msg: 'xxx'
			}
		})
	}
	return (
		<div className='col'>
			<h1 className='text-center'>Header</h1>
			<button type='button' className="btn btn-dark" onClick={toAbout}>to About</button>
			<button className="btn btn-dark" onClick={() => navigate(-1)}>back</button>
			<button className="btn btn-dark" onClick={() => navigate(1)}>forward</button>
		</div>
	)
}
