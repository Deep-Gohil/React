import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/products">Products</Link>
        </div>
    </div>
  )
}

export default Home