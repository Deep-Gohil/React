import React, { useState } from 'react'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'
import Cookies from 'js-cookie'

const Signup =() => {
    let [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8090/api/v1/signup", data, {
                headers: { "Content-Type": "application/json" }
            });

            Cookies.set("token", res.data.token);

            toast.success('Signup Successfull', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

        } catch (err) {
            toast.error(`${err.response?.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Username' onChange={handleInputChange} value={data.username} name='username' />
                <input type="email" placeholder='Enter Email Address' onChange={handleInputChange} value={data.email} name='email' />
                <input type="text" placeholder='Enter Password' onChange={handleInputChange} name='password' value={data.password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup