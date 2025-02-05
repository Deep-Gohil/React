import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/products">Products</Link>
        </div>
        <h1>Sign up Page</h1>
    </div>
  )
}

export default Signup