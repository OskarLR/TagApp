import PlayerProfile from "./PlayerProfile";

function PlayerCard(props){
    return(
        <div id="playercard">
            <PlayerProfile player={props.player}></PlayerProfile>
            <button id="tagbutton">Tag this player</button>
        </div>
    );
}

export default PlayerCard;