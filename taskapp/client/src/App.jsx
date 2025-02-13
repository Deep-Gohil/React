import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Task from './Pages/Task/Task'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/task" element={<Task/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App