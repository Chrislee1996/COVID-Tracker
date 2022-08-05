import React from 'react'
import Home from './Home'
import Country from './Country'
import {Route, Routes} from 'react-router-dom'


const Pages = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/country/:type' element={<Country/>} />
    </Routes>
  )
}

export default Pages