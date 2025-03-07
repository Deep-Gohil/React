import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App