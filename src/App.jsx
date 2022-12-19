import React from 'react'
import { useState } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'

function App() {
  let [players, setPlayers] = React.useState([{id:1,name:"Oskar",email:"oremvang@gmail.com",tagtime:"10:20:30",tagged:true, profilepicture:"/assets/profile_pic_icon.png"}])
  let [tagged, setTagged] = React.useState(true)

  return (
    <div className="App">
      <header>
        <h1>EPIC TAG BATTLE</h1>
      </header>
      <TagInfo tagged={tagged}></TagInfo>
      <PlayerBoard players={players}></PlayerBoard>
      <footer>
        <p>Created by oskarlr</p>
        <a href="github.com">Github repo</a>
        <p id="version">1.10</p>
      </footer>
    </div>
  )
}

export default App
