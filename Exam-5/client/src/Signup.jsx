import axios from 'axios'
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    let navigate = useNavigate()
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
        console.log("data", data);

        try {
            let res = await axios.post("http://localhost:8090/api/user/signup", data);
            console.log("Response:", res.data);
            Cookies.set("token", res.data.token);
            setData({ username: "", email: "", password: "" });
            navigate("/");
        } catch (error) {
            toast.error("Error While Signup", {
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
                <input type="text" placeholder='Enter Username' onChange={handleChange} name="username" value={data.username} />
                <input type="email" placeholder='Enter Email' onChange={handleChange} name="email" value={data.email} />
                <input type="password" placeholder='Enter Password' onChange={handleChange} name="password" value={data.password} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Signup;
