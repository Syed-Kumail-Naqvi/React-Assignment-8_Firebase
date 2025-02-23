// import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <div>

      <BrowserRouter>

      <Routes>

        <Route path='/' element={<Signup/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Home' element={<Home/>} />

      </Routes>


      </BrowserRouter>


    </div>
  )
}

export default App