import React from 'react'
import { useState } from 'react'
import './App.css'
import TagInfo from './components/TagInfo'
import PlayerBoard from './components/PlayerBoard'
import profileicon from './assets/profile_pic_icon.png'

function App() {
  let staticplayers = [
  {id:1,name:"Carl",email:"carl@gmail.com",tagtime:5354109,tagged:true, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:2,name:"Hugo",email:"hugo@gmail.com",tagtime:54603,tagged:false, profilepicture:{profileicon}, isPreviousTagger: true},
  {id:3,name:"Grant",email:"grant@gmail.com",tagtime:179,tagged:false, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:4,name:"Json",email:"jsong@gmail.com",tagtime:15,tagged:false, profilepicture:{profileicon}, isPreviousTagger: false},
  {id:5,name:"Patrick",email:"patrick@gmail.com",tagtime:2422599,tagged:false, profilepicture:{profileicon}, isPreviousTagger: false}]

  let currentUser = staticplayers[0] //Add api call to fetch users here
  let [players, setPlayers] = React.useState(staticplayers)

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
