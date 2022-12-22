import PlayerCard from "./PlayerCard";
import '../styles/PlayerBoard.css'

function PlayerBoard(props){

    const players = props.players.map((player) => 
        <PlayerCard key={player.id} 
                    player={player}
                    currentUser={props.currentUser}/>
    )

    return (
        <div id="playerboard">{players}</div>
    );
}

export default PlayerBoard;