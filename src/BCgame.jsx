import React, { useState } from 'react';
import './BCgame.css'; // Import the CSS file for styling

const BCgame = () => {
  // State variables to hold input values and results
  const [homeTeamRating, setHomeTeamRating] = useState(0);
  const [homePitcherRating, setHomePitcherRating] = useState(0);
  const [awayTeamRating, setAwayTeamRating] = useState(0);
  const [awayPitcherRating, setAwayPitcherRating] = useState(0);
  const [homeTotal, setHomeTotal] = useState(0);
  const [awayTotal, setAwayTotal] = useState(0);
  const [differential, setDifferential] = useState(0);
  const [d100Roll, setD100Roll] = useState(null);
  const [result, setResult] = useState('');

  // Define differential tables with ranges and outputs
  const differentialTables = [
    {
      min: -995,
      max: -874,
      rolls: [
        { range: [1, 4], output: 'Loss Chart A' },
        { range: [5, 8], output: 'Loss Chart B' },
        { range: [9, 12], output: 'Loss Chart C' },
        { range: [13, 29], output: 'Loss Chart D' },
        { range: [30, 45], output: 'Loss Chart E' },
        { range: [46, 61], output: ' Loss Chart F' },
        { range: [62, 65], output: 'Loss Chart G' },
        { range: [70, 72], output: 'Loss Chart H' },
        { range: [73, 88], output: 'Win Chart I' },
        { range: [89, 100], output: 'Win Chart G' },
       ],
    },
    {
      min: -873,
      max: -752,
      rolls: [
        { range: [1, 3], output: 'Loss Chart A' },
        { range: [4, 14], output: 'Loss Chart B' },
        { range: [15, 24], output: 'Loss Chart C' },
        { range: [25, 39], output: 'Loss Chart D' },
        { range: [40, 52], output: 'Loss Chart E' },
        { range: [53, 57], output: 'Loss Chart F' },
        { range: [58, 66], output: 'Loss Chart G' },
        { range: [67, 68], output: 'Loss Chart H' },
        { range: [69, 71], output: 'Loss Chart I' },
        { range: [72, 72], output: 'Win Chart I' },
        { range: [73, 86], output: 'Win Chart H' },
        { range: [87, 90], output: 'Win Chart G' },
        { range: [91, 100], output: 'Win Chart F' },
      ],
    },
    {
      min: -751,
      max: -630,
      rolls: [
        { range: [1, 5], output: 'Output C1' },
        { range: [6, 10], output: 'Output C2' },
        { range: [11, 15], output: 'Output C3' },
        { range: [16, 20], output: 'Output C4' },
        { range: [21, 30], output: 'Output C5' },
        { range: [31, 40], output: 'Output C6' },
        { range: [41, 50], output: 'Output C7' },
        { range: [51, 60], output: 'Output C8' },
        { range: [61, 70], output: 'Output C9' },
        { range: [71, 80], output: 'Output C10' },
        { range: [81, 90], output: 'Output C11' },
        { range: [91, 100], output: 'Output C12' },
      ],
    },
    {
      min: -629,
      max: -509,
      rolls: [
        { range: [1, 5], output: 'Output D1' },
        { range: [6, 10], output: 'Output D2' },
        { range: [11, 15], output: 'Output D3' },
        { range: [16, 20], output: 'Output D4' },
        { range: [21, 30], output: 'Output D5' },
        { range: [31, 40], output: 'Output D6' },
        { range: [41, 50], output: 'Output D7' },
        { range: [51, 60], output: 'Output D8' },
        { range: [61, 70], output: 'Output D9' },
        { range: [71, 80], output: 'Output D10' },
        { range: [81, 90], output: 'Output D11' },
        { range: [91, 100], output: 'Output D12' },
      ],
    },
    {
      min: -508,
      max: -497,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 
      {
        min: -486,
        max: -365,
        rolls: [
          { range: [1, 5], output: 'Output E1' },
          { range: [6, 10], output: 'Output E2' },
          { range: [11, 15], output: 'Output E3' },
          { range: [16, 20], output: 'Output E4' },
          { range: [21, 30], output: 'Output E5' },
          { range: [31, 40], output: 'Output E6' },
          { range: [41, 50], output: 'Output E7' },
          { range: [51, 60], output: 'Output E8' },
          { range: [61, 70], output: 'Output E9' },
          { range: [71, 80], output: 'Output E10' },
          { range: [81, 90], output: 'Output E11' },
          { range: [91, 100], output: 'Output E12' },
        ],
    },
    {
      min: -364,
      max: -243,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 
    {
      min: -242,
      max: -121,
      rolls: [
        { range: [1, 1], output: 'Loss Chart A' },
        { range: [2, 9], output: 'Loss Chart B' },
        { range: [10, 14], output: 'Loss Chart C' },
        { range: [15, 22], output: 'Loss Chart D' },
        { range: [23, 34], output: 'Loss Chart E' },
        { range: [35, 42], output: 'Loss Chart F' },
        { range: [43, 48], output: 'Loss Chart G' },
        { range: [49, 52], output: 'Loss Chart H' },
        { range: [53, 53], output: 'Loss Chart I' },
        { range: [54, 54], output: 'Win Chart I' },
        { range: [55, 60], output: 'Win Chart H' },
        { range: [61, 70], output: 'Win Chart G' },
        { range: [71, 89], output: 'Win Chart F' },
        { range: [90, 94], output: 'Win Chart E' },
        { range: [95, 98], output: 'Win Chart D' },
        { range: [99, 99], output: 'Win Chart C' },
        { range: [100, 100], output: 'Win Chart B' },
      ],
    }, 
    {
      min: -120,
      max: 120,
      rolls: [
        { range: [1, 1], output: 'Loss Chart B' },
        { range: [2, 2], output: 'Loss Chart C' },
        { range: [3, 3], output: 'Loss Chart D' },
        { range: [4, 21], output: 'Loss Chart E' },
        { range: [22, 35], output: 'Loss Chart F' },
        { range: [36, 40], output: 'Loss Chart G' },
        { range: [41, 48], output: 'Loss Chart H' },
        { range: [49, 49], output: 'Loss Chart I' },
        { range: [50, 50], output: 'Win Chart I' },
        { range: [51, 61], output: 'Win Chart H' },
        { range: [62, 70], output: 'Win Chart G' },
        { range: [71, 82], output: 'Win Chart F' },
        { range: [83, 97], output: 'Win Chart E' },
        { range: [98, 98], output: 'Win Chart D' },
        { range: [99, 99], output: 'Win Chart C' },
        { range: [100, 100], output: 'Win Chart B' },
      ],
    }, 
    {
      min: 121,
      max: 242,
      rolls: [
        { range: [1, 4], output: 'Loss Chart B' },
        { range: [5, 7], output: 'Loss Chart C' },
        { range: [8, 11], output: 'Loss Chart D' },
        { range: [12, 24], output: 'Loss Chart E' },
        { range: [25, 33], output: 'Loss Chart F' },
        { range: [34, 40], output: 'Loss Chart G' },
        { range: [41, 44], output: 'Loss Chart H' },
        { range: [45, 45], output: 'Loss Chart I' },
        { range: [46, 46], output: 'Win Chart I' },
        { range: [47, 54], output: 'Win Chart H' },
        { range: [55, 61], output: 'Win Chart G' },
        { range: [62, 77], output: 'Win Chart F' },
        { range: [78, 93], output: 'Win Chart E' },
        { range: [94, 97], output: 'Win Chart D' },
        { range: [98, 98], output: 'Win Chart C' },
        { range: [99, 99], output: 'Win Chart B' },
         { range: [100, 100], output: 'Win Chart A' },
      ],
    }, 
    {
      min: 243,
      max: 364,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 

    {
      min: 365,
      max: 486,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 

    {
      min: 487,
      max: 508,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 

    {
      min: 509,
      max: 629,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 
    {
      min: 630,
      max: 751,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 
    {
      min: 752,
      max: 873,
      rolls: [
        { range: [1, 5], output: 'Output E1' },
        { range: [6, 10], output: 'Output E2' },
        { range: [11, 15], output: 'Output E3' },
        { range: [16, 20], output: 'Output E4' },
        { range: [21, 30], output: 'Output E5' },
        { range: [31, 40], output: 'Output E6' },
        { range: [41, 50], output: 'Output E7' },
        { range: [51, 60], output: 'Output E8' },
        { range: [61, 70], output: 'Output E9' },
        { range: [71, 80], output: 'Output E10' },
        { range: [81, 90], output: 'Output E11' },
        { range: [91, 100], output: 'Output E12' },
      ],
    }, 
  ];

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
    setResult(''); // Clear the result when new ratings are submitted
  };

  // Function to roll a d100 and determine the result based on the differential
  const rollD100 = () => {
    const roll = Math.floor(Math.random() * 100) + 1;
    setD100Roll(roll);

    // Find the appropriate differential table based on the differential
    const differentialTable = differentialTables.find(
      (table) => differential >= table.min && differential <= table.max
    );

    if (differentialTable) {
      // Find the appropriate output based on the roll
      const tableEntry = differentialTable.rolls.find(
        (entry) => roll >= entry.range[0] && roll <= entry.range[1]
      );

      if (tableEntry) {
        setResult(`${tableEntry.output} with roll ${roll}`);
      }
    }
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
        {differential !== 0 && (
          <button onClick={rollD100} className="roll-button">
            Roll d100
          </button>
        )}
        {d100Roll !== null && (
          <div>
            <p>d100 Roll: {d100Roll}</p>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BCgame;
