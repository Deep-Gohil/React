import { useState } from "react"

const Counter = () => {

    // let count = 0
    let [count,setCount] = useState(0)

    const decrement = () => {
        setCount(count--)
    }

    const increment = () => {
        setCount(count++)
    }
    return (
        <div>
            <button onClick={decrement}>-</button>
            <button>{count}</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter;