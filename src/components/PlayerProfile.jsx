import '../styles/PlayerProfile.css'

function PlayerProfile(props) {

    let player = props.player
    let isCurrentPlayer = props.currentUser.id === player.id

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

    function getPlayernameTitle(player) {
        let playerNameTitle = player.name
        if(player.isPreviousTagger && !isCurrentPlayer && props.currentUser.tagged) playerNameTitle += "  tagged you!";
        if(isCurrentPlayer) playerNameTitle = "Me"
        return playerNameTitle
    }

    return (
        <div id="playerprofile">
            <img id="profilepicture" src={props.player.profilepicture} alt="Player Icon"/>
            <p id="playername">{getPlayernameTitle(props.player)}</p>
            <p id="tagtime">{secondsToTimeFormat(props.player.tagtime)}</p>
        </div>
    );
}

export default PlayerProfile;