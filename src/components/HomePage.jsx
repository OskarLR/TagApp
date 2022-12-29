import React from 'react'
import { useState, useEffect } from 'react'
import TagInfo from '../components/TagInfo'
import PlayerBoard from '../components/PlayerBoard'

function HomePage() {

    useEffect(() => {
        let url = "http://localhost:3001/updatetagger"
        const updateTagger = async () => {
            try {
              await fetch(url)
            } catch (error) {
              console.log("error", error);
            }
        }
        updateTagger()
    }, []);
    
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
    
    let email = 'grant@gmail.com'
    let [user, setUser] = React.useState({})
    useEffect(() => {
    const url = `http://localhost:3001/user?email=${email}`;
    const fetchUser = async () => {
        try {
        let response = await fetch(url)
        let json = await response.json()
        setUser(json)
        console.log(json)
        } catch (error) {
        console.log(error);
        }
    };
    fetchUser();
    }, []);

    return (
        <div className="homepage">
            <header>
                <h1>TAG</h1>
            </header>
            <div id="content">
                <TagInfo tagged={user.tagged}/>
                <PlayerBoard players={players} currentUser={user}/>
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