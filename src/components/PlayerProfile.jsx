import '../styles/PlayerProfile.css'
import profileicon from '../assets/profile_pic_icon.png'

function PlayerProfile(props) {

    let player = props.player

    function secondsToTimeFormat(tagTimeInSeconds){
        const secondsInADay = 86400
        const secondsInAnHour = 3600
        const secondsInAMinute = 60
        
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

    return (
        <div id="playerprofile">
            <img id="profilepicture" src={profileicon} alt="Player Icon"/>
            <p id="playername">{player.isPreviousTagger && !props.isCurrentPlayer ?
                                player.name  + "  tagged you!": player.name}</p>
            <p id="tagtime">{secondsToTimeFormat(props.player.tagtime)}</p>
        </div>
    );
}

export default PlayerProfile;