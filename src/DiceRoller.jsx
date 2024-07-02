import React, { useState } from 'react';
import './DiceRoller.css';
import * as XLSX from 'xlsx';


// Define the data arrays
const array1 = [-10, -7.5, -5.0, -2.5, .5, .5, 2.5,5.0,7.5,10 ];
const array2 = [-17.5, -12.5, -10.0, -7.5, -5.0, -2.5, 5, 7.5, 10, 25];
const array3 = [-10, -7.5, -5, -2.5, -2.5, 3.5, 5, 6.5, 7.5, 12.5];
const array4 = [-11.5, -7.5, -6.5, -3.5, -2.5, 2.5, 3.5, 5, 7.5, 10];

const DiceRoller = () => {
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [playerRole, setPlayerRole] = useState('fielder');
  const [roster, setRoster] = useState([]);
  const [playerRating, setPlayerRating] = useState('');

  const rollDice = () => {
    // Roll four six-sided dice
    const roll1 = Math.floor(Math.random() * 10);
    const roll2 = Math.floor(Math.random() * 10);
    const roll3 = Math.floor(Math.random() * 10);
    const roll4 = Math.floor(Math.random() * 10);

    // Get data from arrays based on dice rolls
    const result1 = array1[roll1];
    const result2 = array2[roll2];
    const result3 = array3[roll3];
    const result4 = array4[roll4];

    //calculate player rating
    const final = 62.5+ result1 + result2 + result3 + result4;
    
    // Set the results to the state
    setResults([result1, result2, result3, result4, final]);
      
    
      };

  // Define the data arrays for pitchers
  const array5 = [-10, -7.5, -5.0, -2.5, .5, .5, 2.5,5.0,7.5,10 ];
  const array6 = [-17.5, -12.5, -10.0, -7.5, -5.0, -2.5, 5, 7.5, 10, 25];
  const array7 = [-10, -7.5, -5, -2.5, -2.5, 3.5, 5, 6.5, 7.5, 12.5];
  const array8 = [-11.5, -7.5, -6.5, -3.5, -2.5, 2.5, 3.5, 5, 7.5, 10];

  
    const rollDice2 = () => {
      // Roll four six-sided dice
      const roll5 = Math.floor(Math.random() * 10);
      const roll6 = Math.floor(Math.random() * 10);
      const roll7 = Math.floor(Math.random() * 10);
      const roll8 = Math.floor(Math.random() * 10);

      // Get data from arrays based on dice rolls
      const result6 = array5[roll5];
      const result7 = array6[roll6];
      const result8 = array7[roll7];
      const result9 = array8[roll8];

      //calculate pitcher rating
      const final2 = 62.5+ result6 + result7 + result8 + result9;

      // Set the results to the state
      setResults2([result6, result7, result8, result9, final2]);


        };

  const addPlayerToRoster = () => {
    if (playerName.trim() !== '' && playerRating.trim() !== '') {
      setRoster([...roster, { name: playerName, role: playerRole, rating: playerRating }]);
      setPlayerName(''); // Clear the input fields
      setPlayerRating('');
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(roster);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Roster');
    XLSX.writeFile(wb, 'roster.xlsx');
  };

  return (
    <div>
      
      <h1>Big Country Baseball Player Generator</h1>
      <div class="row">
      <div class = "column">
      <button onClick={rollDice}>Generate Fielder</button>
      {results.length > 0 && (
        <div>
          <p>Type: {results[0]}</p>
          <p>Position: {results[1]}</p>
          <p>Batting: {results[2]}</p>
          <p>Fielding: {results[3]}</p>
          <p>final: {results[4]}</p>
        </div>
                 
      )}
      </div>
     
        <button onClick={rollDice2}>Generate Pitcher</button>
        {results2.length > 0 && (
          <div>
            <p>Power: {results2[0]}</p>
            <p>Control: {results2[1]}</p>
            <p>Stamina: {results2[2]}</p>
            <p>Focus: {results2[3]}</p>
            <p>final: {results2[4]}</p>
          </div>
        )}
      
      </div>
      
 <div>
    <div class="row"> 
      <div class="column">
        <h2>Add Player to Roster</h2>
        <input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <select value={playerRole} onChange={(e) => setPlayerRole(e.target.value)}>
          <option value="fielder">Fielder</option>
          <option value="pitcher">Pitcher</option>
        </select>
        <input
          type="number"
          placeholder="Enter player rating"
          value={playerRating}
          onChange={(e) => setPlayerRating(e.target.value)}
        />
        <button onClick={addPlayerToRoster}>Add to Roster</button>
      </div>
      {roster.length > 0 && (
        <div>
          <h2>Roster List</h2>
          <ul >
            {roster.map((player, index) => (
              <li key={index}>{player.name} - {player.role} (Rating: {player.rating})</li>
            ))}
          </ul>
          <button onClick={exportToExcel}>Export to Excel</button>
        </div>
      )}
    </div>
    </div>
      </div>
  );
};
export default DiceRoller;