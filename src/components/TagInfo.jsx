function TagInfo(props) {
    return (
        <div id="taginfo">
            <p id="tagged">{props.tagged ? "You are tagged!" : "You are NOT tagged!"}</p>
            {props.tagged &&
            <p id="description">Make physical contact with another player to transfer the tag. You cannot tag the player that tagged you!</p>   
            }
        </div>
    );
}

export default TagInfo;