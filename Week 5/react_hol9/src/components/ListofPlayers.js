import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "MS Dhoni", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Jadeja", score: 88 },
        { name: "Gill", score: 90 },
        { name: "Pant", score: 60 },
        { name: "Surya", score: 78 },
        { name: "Bumrah", score: 45 },
        { name: "Shami", score: 69 }
    ];

    return (
        <div>
            <h1>List of Players</h1>

            <table border="1" align="center" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        players.map((player,index)=>(
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td>{player.score}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

            <h2>Players Scored Below 70</h2>

            <ul>

                {
                    players
                    .filter(player => player.score < 70)
                    .map((player,index)=>(
                        <li key={index}>
                            {player.name} - {player.score}
                        </li>
                    ))
                }

            </ul>

        </div>
    );
}

export default ListofPlayers;