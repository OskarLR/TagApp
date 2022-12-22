import React from 'react'
import { useState } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'
import profileicon from './assets/profile_pic_icon.png'

function App() {
  let staticplayers = [
  {id:1,name:"Oskar",email:"oremvang@gmail.com",tagtime:"10:20:30",tagged:true, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:2,name:"Emilie",email:"emiry@gmail.com",tagtime:"02:24:2",tagged:false, profilepicture:{profileicon}, isPreviousTagger: true},
  {id:3,name:"Peder",email:"pedropa@gmail.com",tagtime:"01:02:57",tagged:false, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:4,name:"Axel",email:"axellag@gmail.com",tagtime:"18:12:21",tagged:false, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:5,name:"Brage",email:"gaute@gmail.com",tagtime:"12:01:33",tagged:false, profilepicture:{profileicon}, isPreviousTagger: false}]

  let currentUser = staticplayers[0]
  let [players, setPlayers] = React.useState(staticplayers)
  let [tagged, setTagged] = React.useState(currentUser.tagged)

  return (
    <div className="App">
      <header>
        <h1>TAG</h1>
      </header>
      <div id="content">
        <TagInfo tagged={tagged}/>
        <PlayerBoard players={players} setTagged={setTagged} currentUser={currentUser}/>
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
