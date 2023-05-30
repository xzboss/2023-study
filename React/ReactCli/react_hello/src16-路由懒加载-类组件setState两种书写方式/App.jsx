import React, { lazy, Suspense } from 'react'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'
import { Link, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
export default function App () {
  return (
    <div>
      <Demo x='1' />
      <Demo2 />
      <Link to='/about'>about</Link>&nbsp;
      <Link to='/home'>home</Link>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}
