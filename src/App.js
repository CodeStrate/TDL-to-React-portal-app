import React from 'react'
import Carousel from './components/Carousel'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import './App.css'
import 'boxicons'

const App = () => {
  return (
    <>
    <box-icon name="rocket"></box-icon>
    <div className='container'>
      <div className='inner-box'>
        <div className='forms-wrap'>
          <LogIn />
          <SignUp />
          </div>
          <Carousel />
      </div>
    </div>

    </>
  )
}

export default App