
import React from 'react';
import './App.css';
import DiceRoller from './DiceRoller';
import DataFetcher from './DataFetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         
        <DiceRoller />
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;
