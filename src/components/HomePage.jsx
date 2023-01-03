import React from 'react'
import { useState, useEffect } from 'react'
import TagInfo from '../components/TagInfo'
import PlayerBoard from '../components/PlayerBoard'

function HomePage(props) {

    let [players, setPlayers] = useState([])
    
    const fetchUsers = async () => {
        const url2 = 'http://localhost:3001/users';
        try {
            let response = await fetch(url2)
            let json = await response.json()
            setPlayers(json)
            console.log(json)
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, []);

    return (
        <div className="homepage">
            <header>
                <h1>TAG</h1>
            </header>
            <div id="content">
                <TagInfo tagged={props.user.tagged}/>
                <PlayerBoard players={players} currentUser={props.user}/>
            </div>
            <footer>
                <p>Created by oskarlr</p>
                <a href="https://github.com/OskarLR/TagApp">Github repo</a>
                <p id="version">version: 1.10</p>
            </footer>
        </div>
    )

}

export default HomePage