import { ReactDOM } from "react-dom";
import { useRef } from 'react';
import PlayerProfile from "./PlayerProfile";
import '../styles/PlayerCard.css'

function PlayerCard(props){

    let player = props.player
    let isCurrentPlayer = props.currentUser.id === player.id
    let isPreviousTagger = player.isPreviousTagger

    let playercard = useRef(null)
    function tagButtonOnClick() {
        console.log("TAGGED " + player.name)
        //Add api call to tag the new player
        props.setTagged(false)
        window.location.reload()
    }

    const taggedStyle = {
        background: '#DD6F57',
    }

    return(
        <div className="playercard" style={player.tagged ? taggedStyle : {}} ref={playercard}>
            <PlayerProfile player={player} 
                           isPreviousTagger={isPreviousTagger}
                           isCurrentPlayer={isCurrentPlayer}/>
            <button className="tagbutton" 
                    onClick={tagButtonOnClick}
                    hidden = {isPreviousTagger || isCurrentPlayer || (!isCurrentPlayer&&!props.currentUser.tagged)}>Tag this player</button>
        </div>
    );
}

export default PlayerCard;