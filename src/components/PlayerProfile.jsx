function PlayerProfile(props) {

    let player = props.player

    return (
        <div id="playerprofile">
            <img id="profilepicture" src={player.profilepicture} alt="Player Icon"/>
            <p id="playername">{player.name}</p>
            <p id="tagtime">{player.tagtime}</p>
        </div>
    );
}

export default PlayerProfile;