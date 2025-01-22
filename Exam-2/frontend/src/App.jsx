import React from 'react'
import GetQustions from './GetQustions'
import CreateExam from './CreateExam'
import './App.css'
import AddQuestion from './addQuestion'

const App = () => {
  return (
    <div className='app'>
      <AddQuestion />
      <GetQustions />
      <CreateExam />
    </div>
  )
}

export default App