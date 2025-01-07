import React, { useEffect, useState } from 'react'

const Timer = () => {
    let [minute, setMinute] = useState(29)
    let [second, setSecond] = useState(59)

    useEffect(()=>{
        let interval = setInterval(()=>{
            if(second === 0){
                setSecond(59)
                setMinute(minute-1)
            }else{
                setSecond(second-1)
            }
        },1000)
        return ()=>clearInterval(interval)
    },[minute,second])
  return (
    <div>
        <p>{minute}:{second}</p>
    </div>
  )
}

export default Timer