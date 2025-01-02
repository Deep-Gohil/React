import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    
    const decrement = () => {
        setCount(count-1)
    }

    const increment = () => {
        setCount(count+1)
    }


  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
    }}>
        <button style={{
            height:"50px",
            width: "50px",
            fontSize: "24px",
            backgroundColor: "red",
            color: "white",
        }} onClick={decrement}>-</button>
        <h1 style={{
            height:"50px",
            marginRight: "20px",
            marginLeft: "20px",
            fontSize: "45px",
            fontWeight: "bold",
            textAlign: "center",
        }}>{count}</h1>
        <button style={{
            height:"50px",
            width: "50px",
            fontSize: "24px",
            backgroundColor: "green",
            color: "white",
        }} onClick={increment}>+</button>
    </div>
  )
}

export default Counter