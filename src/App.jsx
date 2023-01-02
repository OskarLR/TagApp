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
    console.log("sessionStorage.user" + sessionStorage.user)
    setUser(JSON.parse(sessionStorage.user));
  }, []);

  useEffect(() => {
    console.log("user: " + user)
    console.log("sessionStorage.user: " + sessionStorage.user)
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]); 

  return (
    <Routes>
      <Route path="/" element={<HomePage user={user}/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
    </Routes>
  )
}

export default App
