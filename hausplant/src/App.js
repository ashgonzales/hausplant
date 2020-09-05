import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" >
            <HomePage />
          </Route>
          <Route path="/plant/:id">
            <PlantDetails />
          </Route>
          <Route path="/plant/new">
            <AddPlant />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
