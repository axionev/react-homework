import React from "react";

const FootBallPlayers = ({ listOfPlayers }) => {
    return (
        <div>
            <h2>Dream Team</h2>
            {listOfPlayers.map((player, idx) => (
                <div key={idx}>
                    <p>
                       {player.name} - {player.howOld} {player.team} - {player.price}
                    </p>
                    <p>Goals:{player.stats.goals}, Asists:
                        {player.stats.assists}

                    </p>
                </div>
            ))}
        </div>
    )
}

export default FootBallPlayers
