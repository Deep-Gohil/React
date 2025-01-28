import React, { useEffect, useState } from 'react'
import "./getData.css"
import axios from "axios"

const getData = () => {
  const [data, setData] = useState([])

  const getAllData = async () => {
    let res = await axios.get("http://localhost:3000/foods")
    setData(res.data);
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/foods/${id}`)
    getAllData();
  }

  useEffect(() => {
    getAllData();
  }, [data])

  return (
    <div className='add-main'>
      {
        data.map((ele) => {
          return (
            <div className='main-div'>
              <div key={ele.id} className='elements'>
                <p>{ele.image}</p>
                <h2>{ele.title}</h2>
                <p>Price: {ele.price}</p>
                <p>Description: {ele.description}</p>
                <button onClick={()=>handleDelete(ele.id)}>Delete</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default getData