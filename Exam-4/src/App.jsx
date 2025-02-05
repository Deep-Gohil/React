import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Signup from './Signup/Signup'
import Product from './Products/product'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Product/>}/>
      </Routes>
  )
}

export default App