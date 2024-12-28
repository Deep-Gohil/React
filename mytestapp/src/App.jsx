import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Test } from './test'

export const App = () =>{
  return (
    <div>
      <h1>React:</h1>
      <Test name="node:" value="90%"/>
      <Test name="javascript:" value="70%"/>
      <Test name="css:" value="40%"/>
      <Test name="html:" value="60%"/>
    </div>
  )
}
