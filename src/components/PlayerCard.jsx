import PlayerProfile from "./PlayerProfile";
import '../styles/PlayerCard.css'

function PlayerCard(props){

    function tagButtonOnClick() {
        console.log("TAGGED " + props.player.name)
        //Add api call to tag the new player
        props.setTagged(false)
        console.log(document.getElementsByClassName("tagbutton"))
        let tagbuttons = document.getElementsByClassName("tagbutton");
        Array.prototype.forEach.call(tagbuttons, (button) => {
            button.disabled = true;
        })
    }

    return(
        <div id="playercard">
            <PlayerProfile player={props.player}></PlayerProfile>
            <button id="tagbutton" className="tagbutton" onClick={tagButtonOnClick}>Tag this player</button>
        </div>
    );
}

export default PlayerCard;