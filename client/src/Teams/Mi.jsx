import "./team.css"

import React from 'react';

const PlayerStats = ({ player }) => {
  return (<>
   
    <table>
      <tbody>
        <tr>
     <th></th>
          <th>Left arm Fast</th>
          <th>Left arm Medium</th>
          <th>Left arm Orthodox</th>
          <th>Right arm Fast</th>
          <th>Right arm Medium</th>
          <th>Legbreak</th>
          <th>Offbreak</th>
        </tr>
        <tr>
          <th>Runs</th>
          {player.runs.map((runs, index) => <td key={index}>{runs}</td>)}
        </tr>
        <tr>
          <th>Balls</th>
          {player.balls.map((balls, index) => <td key={index}>{balls}</td>)}
        </tr>
        <tr>
          <th>Out</th>
          {player.out.map((outs, index) => <td key={index}>{outs}</td>)}
        </tr>
      </tbody>
    </table>
    </>
  );
};

const Mi = () => {
  // Sample data for R Gaikwad and D Convey
  const players = [
    {
      name: "R Sharma",
      profileLink: "https://www.cricbuzz.com/profiles/11813/ruturaj-gaikwad",
      runs: [11, , 50, 45, 172, 81, 31],
      balls: [7, 71, 31, 42, 114, 61, 31],
      out: [0, 1, 1, 0, 4, 5, 1]
    },
    {
      name: "I Kishan",
      profileLink: "#",
      runs: [11, 34, 53, 71,122 , 42, 34],
      balls: [9, 28, 49, 41, 103, 29, 16],
      out: [0, 2, 2, 1, 7, 5, 0]
    },
    {
      name: "SK Yadaw",
      profileLink: "#",
      runs: [0, 62, 28, 30, 57, 90, 26],
      balls: [ 0, 27, 25, 10, 27, 59,21],
      out: [0, 0, 0, 0, 1, 5 , 3]
    },
    {
      name: "T Varma",
      runs: [18, 36, 30, 41, 120, 75, 32],
      balls: [5, 22, 27, 17, 69, 57, 23],
      out: [1, 1, 1, 0, 3, 3, 0]
    },
    {
      name: "H Pandya",
      profileLink: "#",
      runs: [7, 41, 22, 40, 119, 94, 27],
      balls: [5, 37, 33,26, 81, 47, 18],
      out: [0, 3, 2, 1, 3, 2, 1]
    },
    {
      name: "T David",
      profileLink: "#",
      runs: [0, 58, 10, 7, 136, 29, 2],
      balls: [0,31, 11, 9, 77, 24, 2],
      out: [0, 0, 0, 0, 5, 3, 0]
    }
    
  ];

  return (
    <div>
     <h2 style={{textAlign:"center"}}><strong> Player Matchups</strong> </h2>
    {players.map((player, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'left', marginLeft: '10%' }}><a href={player.profileLink}>{player.name}</a></h3>
          
          <PlayerStats player={player} />
          <br/>
        </div>
        
      ))}
    </div>
  );
};

export default Mi;

// export default Mi;

