import PlayerCard from "./PlayerCard";

function PlayerBoard(props){

    const players = props.players.map((player) => 
    <li key={player.id}>
        <PlayerCard player={player}></PlayerCard>
    </li>
    )

    return (
        <ul id="playerboard">{players}</ul>
    );
}

export default PlayerBoard;