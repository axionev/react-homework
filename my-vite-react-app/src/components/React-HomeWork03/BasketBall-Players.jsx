import React from "react";

const BasketBallPlayers = ({ listOfPlayers }) => {
    return (
        <div>
            <h2>Dream Team</h2>
            {listOfPlayers.map((player, idx) => (
                <div key={idx}>
                    <p>
                       {player.name} - {player.position} {player.MVP ? "(Has MVP)" : ""}
                    </p>
                    <p>
                        Points: {player.stats.points}, Assists: {player.stats.assists}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default BasketBallPlayers;