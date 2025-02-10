import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    let [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:8090/api/user/login", data);
        console.log(res.data);
        setData({ email: "", password: "" })
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Email' onChange={handleChange} value={data.email} />
                <input type="text" placeholder='Enter Password' onChange={handleChange} value={data.password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login