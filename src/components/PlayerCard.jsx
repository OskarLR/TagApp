import { ReactDOM } from "react-dom";
import { useRef } from 'react';
import PlayerProfile from "./PlayerProfile";
import '../styles/PlayerCard.css'

function PlayerCard(props){

    let player = props.player
    let isCurrentPlayer = props.currentUser.id === player.id
    let isPreviousTagger = player.isprev

    let playercard = useRef(null)
    function tagButtonOnClick() {
        const url = 'http://localhost:3001/tag';
        const tagUser = async (newTaggedID) => {
            try {
                await fetch(url + "?" + new URLSearchParams({
                    newTaggedID: newTaggedID,
                }))
            } catch (error) {
                console.log("error", error);
            }
        };
        tagUser(player.id);
        window.location.reload()
    }

    const taggedStyle = {
        background: '#DD6F57',
    }

    return(
        <div className="playercard" style={player.tagged ? taggedStyle : {}} ref={playercard}>
            <PlayerProfile player={player}
                           currentUser={props.currentUser}/>
            <button className="tagbutton" 
                    onClick={tagButtonOnClick}
                    hidden = {isPreviousTagger || isCurrentPlayer || (!isCurrentPlayer&&!props.currentUser.tagged)}>Tag this player</button>
        </div>
    );
}

export default PlayerCard;