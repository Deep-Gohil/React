import React, { useState } from 'react'
import "./Form.css"
import axios from 'axios'

const Form = () => {

    const [data,setData] = useState({
        title: "",
        price: "",
        description: ""
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/foods",data)
        setData({
            title: "",
            price: "",
            description: ""
        })
    }

    return (
        <div className='form-main'>
            <form onSubmit={handleSubmit}>
                <input type="text" required name="title" value={data.title} onChange={handleChange} placeholder="Enter title" />
                <input type="text" required name="price" value={data.price} onChange={handleChange} placeholder="Enter price" />
                <input type="text" required name="description" value={data.description} onChange={handleChange} placeholder="Enter description" />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form