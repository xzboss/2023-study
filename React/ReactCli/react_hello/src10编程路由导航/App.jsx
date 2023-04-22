import React from 'react'

import Header from './component/Header'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

import MyNavLink from './component/MyNavLink'
export default function App () {
  const elements = useRoutes(routes)
  const changeClassName = ({ isActive }) => {
    return 'list-group-item ' + (isActive ? 'active' : '')
  }
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <hr />
      <div className="row">
        <div className='list-group col-4'>
          <NavLink className={changeClassName} to='/about'>to About</NavLink>
          <MyNavLink to='/home'>to Home</MyNavLink>
        </div>
        <div className='col-8'>
          {elements}
        </div>
      </div>
    </div>
  )
}
