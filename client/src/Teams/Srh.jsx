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

const Srh = () => {
  // Sample data for R Gaikwad and D Convey
  const players = [
    {
      name: "M Agrawal",
      profileLink: "https://www.cricbuzz.com/profiles/11813/ruturaj-gaikwad",
      runs: [12, 50, 46, 20, 122, 35, 17],
      balls: [8, 36, 37, 16, 87, 27, 13],
      out: [0, 0,3, 1, 5, 2, 0]
    },
    {
      name: "A Sharma",
      profileLink: "#",
      runs: [5, 27, 12, 11, 96, 57, 32],
      balls: [4, 25, 12, 7, 66, 29, 20],
      out: [0, 2, 2, 2, 2, 1, 2]
    },
    {
      name: "R Tripathi",
      profileLink: "#",
      runs: [0, 41, 40, 24, 44, 97, 43],
      balls: [ 0, 39, 35, 14, 44, 66,36],
      out: [0, 2, 1, 3, 4, 1, 2]
    },
    {
      name: "A Markram",
      profileLink: "#",
      runs: [0, 21, 14, 16, 75, 98, 36],
      balls: [0, 20, 23, 11, 60, 60, 27],
      out: [0, 0, 4, 1,3, 3, 1]
    },
    {
      name: "H Klaasen",
      profileLink: "#",
      runs: [22, 22, 80, 42, 128, 153, 29],
      balls: [9, 17, 43, 25, 77,71, 23],
      out: [0, 0, 0, 2, 6, 2, 0]
    },
    {
      name: "A Samad",
      profileLink: "#",
      runs: [2, 20, 14, 36, 86, 13, 5],
      balls: [2, 11, 19, 17, 56, 22, 9],
      out: [0, 0, 0, 1, 2, 1, 0]
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

export default Srh;

// export default Srh;

