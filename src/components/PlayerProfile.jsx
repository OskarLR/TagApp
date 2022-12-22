import '../styles/PlayerProfile.css'
import profileicon from '../assets/profile_pic_icon.png'

function PlayerProfile(props) {

    let player = props.player

    return (
        <div id="playerprofile">
            <img id="profilepicture" src={profileicon} alt="Player Icon"/>
            <p id="playername">{props.isPreviousTagger && !props.isCurrentPlayer ?
                                player.name  + "  tagged you!": player.name}</p>
            <p id="tagtime">{player.tagtime}</p>
        </div>
    );
}

export default PlayerProfile;