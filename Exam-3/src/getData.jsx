import React, { useEffect, useState } from 'react'
import "./getData.css"
import axios from "axios"

const getData = () => {
  const [data,setData] = useState([])

  const getAllData = async()=>{
    let res = await axios.get("http://localhost:3000/foods")
    setData(res.data);   
  }

  useEffect(()=>{
    getAllData();
  },[data])

  return (
    <div className='add-main'>
        {
          data.map((ele)=>{
            return (
              <div key={ele.id}>
                <p>{ele.image}</p>
                <h2>{ele.title}</h2>
                <p>Price: {ele.price}</p>
                <p>Description: {ele.description}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default getData