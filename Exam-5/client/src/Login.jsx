import axios from 'axios'
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import {  useNavigate } from 'react-router-dom'
const Login = () => {
    let navigate = useNavigate()
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
        try {
            let res = await axios.post("http://localhost:8090/api/user/login", data);
            Cookies.set('token', res.data.token)
            setData({ email: "", password: "" });
            navigate("/")
        } catch (error) {
            toast.error("Error While Login", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }
    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter Email' onChange={handleChange} name="email" value={data.email} />
                <input type="password" placeholder='Enter Password' onChange={handleChange} name="password" value={data.password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Login