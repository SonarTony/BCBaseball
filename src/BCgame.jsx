import React, { useState } from 'react';
import './BCgame.css';

const BCgame = () => {
  // State variables to hold input values and results
  const [homeTeamRating, setHomeTeamRating] = useState(0);
  const [homePitcherRating, setHomePitcherRating] = useState(0);
  const [awayTeamRating, setAwayTeamRating] = useState(0);
  const [awayPitcherRating, setAwayPitcherRating] = useState(0);
  const [homeTotal, setHomeTotal] = useState(0);
  const [awayTotal, setAwayTotal] = useState(0);
  const [differential, setDifferential] = useState(0);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Calculate totals
    const homeTotalRating = parseFloat(homeTeamRating) + parseFloat(homePitcherRating);
    const awayTotalRating = parseFloat(awayTeamRating) + parseFloat(awayPitcherRating);
    // Calculate differential
    const homeDifferential = homeTotalRating - awayTotalRating;
    // Update state
    setHomeTotal(homeTotalRating);
    setAwayTotal(awayTotalRating);
    setDifferential(homeDifferential);
  };

return (
  <div>
    <h1>Game Page</h1>
    <form onSubmit={handleSubmit} className="ratings-form">
      <div className="ratings-column">
        <h2>Home Team</h2>
        <div>
          <label>Team Rating: </label>
          <input
            type="number"
            value={homeTeamRating}
            onChange={(e) => setHomeTeamRating(e.target.value)}
          />
        </div>
        <div>
          <label>Pitcher Rating: </label>
          <input
            type="number"
            value={homePitcherRating}
            onChange={(e) => setHomePitcherRating(e.target.value)}
          />
        </div>
      </div>
      <div className="ratings-column">
        <h2>Away Team</h2>
        <div>
          <label>Team Rating: </label>
          <input
            type="number"
            value={awayTeamRating}
            onChange={(e) => setAwayTeamRating(e.target.value)}
          />
        </div>
        <div>
          <label>Pitcher Rating: </label>
          <input
            type="number"
            value={awayPitcherRating}
            onChange={(e) => setAwayPitcherRating(e.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="calculate-button">Calculate</button>
    </form>
    <div>
      <h2>Results</h2>
      <p>Home Total Rating: {homeTotal}</p>
      <p>Away Total Rating: {awayTotal}</p>
      <p>Home Differential: {differential}</p>
    </div>
  </div>
);
};

export default BCgame;
