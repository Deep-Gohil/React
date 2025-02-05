import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div> 
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/products">Products</Link>
        </div>
        <h1>Product Page</h1>
    </div>
  )
}

export default Product