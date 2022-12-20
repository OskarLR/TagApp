import PlayerCard from "./PlayerCard";

function PlayerBoard(props){

    const players = props.players.map((player) => 
        <PlayerCard key={player.id} player={player}></PlayerCard>
    )

    return (
        <div id="playerboard">{players}</div>
    );
}

export default PlayerBoard;