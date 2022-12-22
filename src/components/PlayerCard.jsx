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
        let tagbuttons = document.getElementsByClassName("tagbutton");
        Array.prototype.forEach.call(tagbuttons, (button) => {
            button.disabled = true;
        })
    }

    const taggedStyle = {
        background: '#DD6F57',
    }

    return(
        <div className="playercard" style={player.tagged ? taggedStyle : {}} ref={playercard}>
            <PlayerProfile player={player}/>
            <button className="tagbutton" 
                    onClick={tagButtonOnClick}
                    disabled = {isCurrentPlayer || isPreviousTagger}>Tag this player</button>
        </div>
    );
}

export default PlayerCard;