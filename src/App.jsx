import React from 'react'
import { useState } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'

function App() {
  let staticplayers = [
  {id:1,name:"Oskar",email:"oremvang@gmail.com",tagtime:"10:20:30",tagged:true, profilepicture:"/assets/profile_pic_icon.png"},
  {id:2,name:"Emilie",email:"emiry@gmail.com",tagtime:"2:24:2",tagged:false, profilepicture:"/assets/profile_pic_icon.png"},
  {id:3,name:"Peder",email:"pedropa@gmail.com",tagtime:"1:2:57",tagged:false, profilepicture:"/assets/profile_pic_icon.png"},
  {id:4,name:"Axel",email:"axellag@gmail.com",tagtime:"18:12:21",tagged:false, profilepicture:"/assets/profile_pic_icon.png"},
  {id:5,name:"Brage",email:"gaute@gmail.com",tagtime:"12:1:33",tagged:false, profilepicture:"/assets/profile_pic_icon.png"}]

  let [players, setPlayers] = React.useState(staticplayers)
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
