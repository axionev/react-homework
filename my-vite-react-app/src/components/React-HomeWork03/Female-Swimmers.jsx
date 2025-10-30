import React from "react";

const FemaleSwimmers = ({ listOfSwimmers }) => {
    return (
        <div>
            <h2>Top Female Swimmers</h2>
            {listOfSwimmers.map((swimmer, idx) => (
                <div key={idx}>
                    <p>
                       {swimmer.name} - Height: {swimmer.height} - Weight: {swimmer.weight} - {swimmer.hasBeenToOlympics ? "Has been to Olympics" : "Has not been to Olympics"}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FemaleSwimmers;
