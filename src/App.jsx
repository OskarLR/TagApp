import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'
import profileicon from './assets/profile_pic_icon.png'

function App() {

  let [players, setPlayers] = React.useState([])
  useEffect(() => {
    const url = 'http//localhost:3000/users';

    const fetchUsers = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json();
        console.log(json.users);
        setPlayers(json.users)
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchUsers();
  }, []);

  let currentUser = {id:1,name:"Carl",email:"carl@gmail.com",tagtime:5354109,tagged:true, profilepicture: "profileicon", isPreviousTagger: false} //Add api call to fetch user here

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
