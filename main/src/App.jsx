import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
  return (
    <div className='bg-red-200 h-[100vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
