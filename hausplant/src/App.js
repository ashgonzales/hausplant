import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Homepage />
      </Route>
    </div>
  );
}

export default App;
