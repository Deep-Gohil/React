import React, { useState } from 'react'
import axios from 'axios'


const Task = () => {
    let [course,setCourse] = useState({
        courseName: '',
        fee: '',
        duration: ''
    });

    const handleInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setCourse({...course,[name]:value})
        console.log(course);
        
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/courses', course);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Course Name' onChange={handleInput} name='courseName'/>
            <input type="text" placeholder='Enter Fees' onChange={handleInput} name='fee'/>
            <input type="text" placeholder='Enter Duration' onChange={handleInput}  name='duration'/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Task