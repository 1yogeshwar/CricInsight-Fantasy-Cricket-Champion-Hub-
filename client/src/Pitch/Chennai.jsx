import React, { useState } from "react";

const Chennai = () => {
  const [expanded, setExpanded] = useState(false);

  const text =
    "The MA Chidambaram Stadium, also known as Chepauk Stadium, is known for its Spinner-Friendly Pitch. The pitch is dry and dusty, and starts with good bounce and carry, making it suitable for seam bowlers early on. As the game progresses, the pitch slows down and becomes more favorable for spinners, making batting challenging in the later stages. The boundary of the stadium is also a little small, making it easy to score runs.";

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const renderText = expanded ? text : `${text.slice(0, 132)}...`;

  return (
    <div className="container mainclass">
      <h3 className="pitch" style={{ marginTop: "20px" }}>
        <a
          href="https://www.espncricinfo.com/cricket-grounds/ma-chidambaram-stadium-chepauk-chennai-58008"
          target="_blank"
          rel="noopener noreferrer"
        >
          MA Chidambaram Stadium (Chennai)
        </a>
      </h3>
      <p>{renderText}</p>
      {!expanded && (
        <p>
          <a href="#" onClick={handleClick}>
            Read more...
          </a>
        </p>
      )}
      <table id="customers" style={{ marginTop: "20px" }}>
        <tbody>
          <tr>
            <th>Pitch Type</th>
            <td>Dry and Grass present</td>
          </tr>
          <tr>
            <th>Season</th>
            <td>Generally hot and humid</td>
          </tr>
          <tr>
            <th>For Spinners</th>
            <td>
              <strong>Very helpful after the ball gets Old</strong>
            </td>
          </tr>
          <tr>
            <th>For Pacers</th>
            <td>Bounce and help in starting overs</td>
          </tr>
          <tr>
            <th>Toss</th>
            <td>Batting first is beneficial</td>
          </tr>
        </tbody>
      </table>

      <h3 style={{ marginTop: "40px" }}>Top Players at this Venue</h3>
      <div className="players-container">
        <div className="player-column">
          <table>
            <tbody>
              <tr>
                <th>Bowler</th>
                <th>Inns</th>
                <th>Overs</th>
                <th>Wkts</th>
                <th>BBI</th>
                <th>Econ</th>
                <th>Average</th>
              </tr>
              <tr>
                <td>R Jadeja</td>
                <td>14</td>
                <td>45.0</td>
                <td>18</td>
                <td>4/11</td>
                <td>6.22</td>
                <td>15.5</td>
              </tr>
              <tr>
                <td>M Pathirana</td>
                <td>6</td>
                <td>23.0</td>
                <td>10</td>
                <td>3/15</td>
                <td>7.21</td>
                <td>16.60</td> 
              </tr>
              <tr>
                <td>DL Chahar</td>
                <td>5</td>
                <td>17.0</td>
                <td>9</td>
                <td>3/27</td>
                <td>9.23</td>
                <td>17.44</td>
              </tr>
              <tr>
                <td>MM Sharma</td>
                <td>8</td>
                <td>28.0</td>
                <td>11</td>
                <td>3/25</td>
                <td>7.39</td>
                <td>18.81</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="player-column">
          <table id="players">
            <thead>
              <tr>
                <th>Batsman</th>
                <th>Inns</th>
                <th>Runs</th>
                <th>Average</th>
                <th>Strike Rate</th>
                <th>Highest Score</th>
              </tr>
            </thead>
            <tbody>
    <tr>
      <td>DP Conway</td>
      <td>8</td>
      <td>390</td>
      <td>65.00</td>
      <td>133.10</td>
                <td>100*</td>
              </tr>
              <tr>
                <td>MS Dhoni</td>
                <td>14</td>
                <td>290</td>
                <td>41.42</td>
                <td>155.08</td>
                <td>53</td>
              </tr>
              <tr>
                <td>RD Gaikwad</td>
                <td>8</td>
                <td>268</td>
                <td>33.50</td>
                <td>138.86</td>
                <td>60</td>
              </tr>
              <tr>
                <td>S Dube</td>
                <td>7</td>
                <td>163</td>
                <td>32.60</td>
                <td>149.54</td>
                <td>48*</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chennai;
