import React from "react";
import "../players/player.css";

const Nightmare = () => {
  // Example data for matchups including pitch type and matchup effectiveness
  const matchups = [
    { bowlerType: "Slow Left-arm Orthodox", batterType: "Right-handed", dry: "Excellent", green: "Good", hard: "Fair" },
    { bowlerType: "Right-arm Off-break", batterType: "Left-handed", dry: "Excellent", green: "Good", hard: "Fair" },
     { bowlerType: "Right-arm Leg-break", batterType: "Right-handed", dry: "Excellent", green: "Good", hard: "Fair" },
    { bowlerType: "Left-arm Chinaman", batterType: "Right-handed", dry: "Good", green: "Good", hard: "-" },  
    { bowlerType: "Left-arm Chinaman", batterType: "Left-handed", dry: "Excellent", green: "Good", hard: "-" },
    { bowlerType: "Left-arm Pace", batterType: "Right-handed", dry: "-", green: "Excellent", hard: "-" },
    { bowlerType: "Right-arm Pace", batterType: "Left-handed", dry: "-", green: "Excellent", hard: "-" },
    // Add more matchups here...
  ];

  return (
    <>
  <section className="facts" style={{ backgroundColor: "white" }}>
  <div className="container">
  <div className="row">
    <h1 style={{ color: "black", fontSize:"3rem" }}>Nightmare</h1>
    <div className="nightmare-table">
      <table className="nightmare-table">
        <thead>
          <tr>
            <th className="nightmare-th">Bowler Type</th>
            <th className="nightmare-th">Batter Type</th>
            <th className="nightmare-th">Dry</th>
            <th className="nightmare-th">Green</th>
            <th className="nightmare-th">Hard</th>
          </tr>
        </thead>
        <tbody>
          {matchups.map((matchup, index) => (
            <tr key={index}>
              <td className="nightmare-td">{matchup.bowlerType}</td>
              <td className="nightmare-td">{matchup.batterType}</td>
              <td className="nightmare-td">{matchup.dry}</td>
              <td className="nightmare-td">{matchup.green}</td>
              <td className="nightmare-td">{matchup.hard}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  <p style={{ marginTop: "20px", fontSize: "2.2rem", color: "black", textAlign: "left" }}>
              <strong>NOTE:</strong>
              <ul style={{ listStyleType: "none", paddingLeft: "0", marginTop: "10px" }}>
                <li style={{ fontSize: "2rem", color: "black", textAlign: "left", marginLeft: "40px" }}>• Hard pitch favors batsmen with consistent bounce.</li>
                <li style={{ fontSize: "2rem", color: "black", textAlign: "left", marginLeft: "40px" }}>• Green pitch aids movement, favoring fast bowlers.</li>
                <li style={{ fontSize: "2rem", color: "black", textAlign: "left", marginLeft: "40px" }}>• Dry or cracked pitches favor spinners, providing better grip.</li>
              </ul>
            </p>
</div>
</section>


    </>
  );
};

export default Nightmare;
