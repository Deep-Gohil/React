import React, { useEffect, useState } from 'react'
import axios from "axios"

const GetCourses = () => {

    let [data,setData] = useState([])

    const getAllCourses = async () => {
        let res = await axios.get("http://localhost:3000/courses");
        setData(res.data);
    }

    const handleDelete = async(id)=>{
        let res = await axios.delete(`http://localhost:3000/courses/${id}`);
        getAllCourses(); 
    }

    const handleUpdate = async(ele)=>{

        
        let res = await axios.put(`http://localhost:3000/courses/${ele.id}`, course);
    }

    useEffect(()=>{
        getAllCourses()
    },[])

    return (
        <div>
            {data.map((ele)=>{
                return(
                    <div>
                        <h1>{ele.courseName}</h1>
                        <h4>Fee: {ele.fee}</h4>
                        <p>Duration: {ele.duration} Min</p>
                        <button onClick={()=>handleDelete(ele.id)}>Delete</button>
                        <button onClick={()=>handleUpdate(ele)}>Update</button>
                    </div>
                )
            })}
        </div>
    )
}

export default GetCourses