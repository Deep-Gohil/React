import React from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0};
    }
    decrement = () => {
        this.setState({count: this.state.count - 1});
    }
    increment = () => {
        this.setState({count: this.state.count + 1});
    }
    render(){
        return(
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
            }}>
                <button style={{
                    backgroundColor: "red",
                    color: "white",
                    height: "30px",
                    width: "30px",
                }} onClick={this.decrement}>-</button>
                <button style={{
                    backgroundColor: "blue",
                    color: "white",
                    height: "30px",
                    width: "30px",
                    marginLeft: "10px",
                }}>{this.state.count}</button>
                <button style={{
                    backgroundColor: "green",
                    color: "white",
                    height: "30px",
                    width: "30px",
                    marginLeft: "10px",
                }} onClick={this.increment}>+</button>
            </div>
        )
    }

}

export default Counter;

// import { useState } from "react"

// const Counter = () => {

//     // let count = 0
//     let [count, setCount] = useState(0)

//     const decrement = () => {
//         setCount(count - 1)
//     }

//     const increment = () => {
//         setCount(count + 1)
//     }
//     return (
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: "20px",
//         }}>
//             <button style={{
//                 backgroundColor: "red",
//                 color: "white",
//                 height: "30px",
//                 width: "30px",
//             }} onClick={decrement}>-</button>
//             <button style={{
//                 backgroundColor: "blue",
//                 color: "white",
//                 height: "30px",
//                 width: "30px",
//                 marginLeft: "10px",
//             }}>{count}</button>
//             <button style={{
//                 backgroundColor: "green",
//                 color: "white",
//                 height: "30px",
//                 width: "30px",
//                 marginLeft: "10px",
//             }} onClick={increment}>+</button>
//         </div>
//     )
// }

// export default Counter;

