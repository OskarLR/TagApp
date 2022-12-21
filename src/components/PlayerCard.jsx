import PlayerProfile from "./PlayerProfile";
import '../styles/PlayerCard.css'

function PlayerCard(props){

    function tagButtonOnClick() {
        console.log("TAGGED " + props.player.name)
        //Add api call to tag the new player
        //Disable all tag buttons 
        //Update tag state
    }

    return(
        <div id="playercard">
            <PlayerProfile player={props.player}></PlayerProfile>
            <button id="tagbutton" onClick={tagButtonOnClick}>Tag this player</button>
        </div>
    );
}

export default PlayerCard;