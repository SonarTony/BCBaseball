import React, { useState } from 'react';
import DataFetcher from './DataFetcher';

// Define the data arrays
const array1 = [-10, -7.5, -5.0, -2.5, .5, .5, 2.5,5.0,7.5,10 ];
const array2 = [-17.5, -12.5, -10.0, -7.5, -5.0, -2.5, 5, 7.5, 10, 25];
const array3 = [-10, -7.5, -5, -2.5, -2.5, 3.5, 5, 6.5, 7.5, 12.5];
const array4 = [-10, -7.5, -5, -2.5, -2.5, 3.5, 5, 6.5, 7.5, 12.5];

const DiceRoller = () => {
  const [results, setResults] = useState([]);

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

  return (
    <div>
      <h1>Big Country Player Generator</h1>
      <button onClick={rollDice}>Generate Player</button>
      {results.length > 0 && (
        <div>
          <p>Result 1: {results[0]}</p>
          <p>Result 2: {results[1]}</p>
          <p>Result 3: {results[2]}</p>
          <p>Result 4: {results[3]}</p>
          <p>final: {results[4]}</p>
          
        </div>
      )}
    </div>
  );
};

export default DiceRoller;