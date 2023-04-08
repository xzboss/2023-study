import React from 'react'

import Header from './component/Header'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import About from './page/About'
import Home from './page/Home'
export default function App () {
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
          <NavLink className={changeClassName} to='/home'>to Home</NavLink>
        </div>
        <div className='col-8'>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path='/' element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
