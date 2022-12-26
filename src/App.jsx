import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'

function App() {

  let [players, setPlayers] = React.useState([])
  useEffect(() => {
    const url = 'http://localhost:3001/users';
    const fetchUsers = async () => {
      try {
        let response = await fetch(url)
        let json = await response.json()
        setPlayers(json)
        console.log(json)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUsers();
  }, []);

  let currentUser = {id:1,name:"Carl",email:"carl@gmail.com",tagtime:5354109,tagged:true, isprev: false} //Add api call to fetch user here

  return (
    <div className="App">
      <header>
        <h1>TAG</h1>
      </header>
      <div id="content">
        <TagInfo tagged={currentUser.tagged}/>
        <PlayerBoard players={players} currentUser={currentUser}/>
      </div>
      <footer>
        <p>Created by oskarlr</p>
        <a href="https://github.com/OskarLR/TagApp">Github repo</a>
        <p id="version">version: 1.10</p>
      </footer>
    </div>
  )
}

export default App
