import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    let [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:8090/api/user/signup", data);
        setData({ username: "", email: "", password: "" })
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' onChange={handleChange} name={data.username} />
                <input type="email" placeholder='Enter Email' onChange={handleChange} name={data.email} />
                <input type="text" placeholder='Enter Password' onChange={handleChange} name={data.password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup