
import React from 'react';
import './App.css';
import DiceRoller from './DiceRoller';
import DataFetcher from './DataFetcher';
import BCgame from './BCgame';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/BCgame">Game</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<>
              <DiceRoller />
              <DataFetcher />
            </>} />
            <Route path="/BCgame" element={<BCgame />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
