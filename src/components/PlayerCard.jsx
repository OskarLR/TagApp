import PlayerProfile from "./PlayerProfile";
import '../styles/PlayerCard.css'

function PlayerCard(props){
    return(
        <div id="playercard">
            <PlayerProfile player={props.player}></PlayerProfile>
            <button id="tagbutton">Tag this player</button>
        </div>
    );
}

export default PlayerCard;