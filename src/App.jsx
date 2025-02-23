// import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Login from './Components/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
 

  return (
    <div>

      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />

      </Routes>


      </BrowserRouter>


    </div>
  )
}

export default App