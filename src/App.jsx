import React, { useEffect } from 'react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'

function App() {

  let [user, setUser] = useState({})
  
  useEffect(() => {
    if(window.sessionStorage.getItem("user")!==null){
      setUser(JSON.parse(sessionStorage.user));
      console.log("sessionStorage.user 1: " + JSON.stringify(sessionStorage.user))
    }
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<HomePage user={user}/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/" element={<Login setUser={setUser}/>}/>
    </Routes>
  )
}

export default App
