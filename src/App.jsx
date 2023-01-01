import React from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'

function App() {

  let [user, setUser] = useState({})

  return (
    <Routes>
      <Route path="/" element={<HomePage user={user}/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
    </Routes>
  )
}

export default App
