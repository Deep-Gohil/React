import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './test'

export const App = ()=>{
  return(
    <div>
      <h1>React</h1>
      <Test name="node"/>
      <Test name="html"/>
      <Test name="css"/>
      <Test name="javascript"/>
    </div>
  )
}
