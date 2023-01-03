import React from 'react'
import { useState } from 'react'
import '../styles/PlayerProfile.css'
import profileicon from '../assets/profile_pic_icon.png'

function PlayerProfile(props) {

    let [seconds, setSeconds] = useState(props.player.tagtime)

    let player = props.player
    let isCurrentPlayer = props.currentUser.id === player.id

    function secondsToTimeFormat(tagTimeInSeconds){
        const secondsInADay = 86400
        const secondsInAnHour = 3600
        const secondsInAMinute = 60
        
        if(player.tagged){
            let timeoftag = player.timeoftag
            let date = timeoftag.substring(0,10) + " " + timeoftag.substring(11,19)
            let jsDate = new Date(date)
            let taggedPeriod = (Date.now() - jsDate.getTime())/1000 - 60*60*2
            tagTimeInSeconds = player.tagtime + Math.floor(taggedPeriod)
        }

        let days = Math.floor(tagTimeInSeconds/secondsInADay)
        let hours = Math.floor((tagTimeInSeconds-days*secondsInADay)/secondsInAnHour)
        let minutes = Math.floor((tagTimeInSeconds-days*secondsInADay-hours*secondsInAnHour)/secondsInAMinute)
        let seconds = tagTimeInSeconds-days*secondsInADay-hours*secondsInAnHour-minutes*secondsInAMinute

        let daysString = ""
        if(days>0) daysString = days + " days, "

        let hoursString = ""
        if(hours>0) hoursString = hours + " hours, "

        let minutesString = ""
        if(minutes>0) minutesString = minutes + " minutes, "

        return daysString + hoursString + minutesString + seconds + " seconds"
    }

    function getPlayernameTitle(player) {
        let playerNameTitle = player.name
        if(player.isPreviousTagger && !isCurrentPlayer && props.currentUser.tagged) playerNameTitle += "  tagged you!";
        if(isCurrentPlayer) playerNameTitle = "Me"
        return playerNameTitle
    }

    setTimeout(() =>{
        if(player.tagged){
            setSeconds(seconds + 1)
        }
    }, 1000);

    return (
        <div id="playerprofile">
            <img id="profilepicture" src={profileicon} alt="Player Icon"/>
            <p id="playername">{getPlayernameTitle(props.player)}</p>
            <p id="tagtime">{secondsToTimeFormat(seconds)}</p>
        </div>
    );
}

export default PlayerProfile;