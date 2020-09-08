// import hooks, components, axios, css
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar/Navbar';
import AddPlant from './components/AddPlant';
import PlantDetails from './components/PlantDetails';
import { baseURL } from './services/constants';
import axios from 'axios';
import './App.css';

function App(props) {
  // Declare a state variable set to empty array to map thorugh later
  const [plants, setPlants] = useState([]);
  const [fetchPlants, setFetchPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(baseURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        },
      });
      setPlants(response.data.records);
    }
    getPlants();
  }, [fetchPlants]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Navbar />
        {
          plants.map((plant) => (
            <HomePage
              plant={plant}
              key={plant.id}
              fetchPlants={fetchPlants}
              setFetchPlants={setFetchPlants}
            />
          ))
        }
        </Route>
        <Route path="/plant/:id">
          <PlantDetails
            fetchPlants={fetchPlants}
            setFetchPlants={setFetchPlants}
          />
        </Route>
        <Route path="/addplant">
          <AddPlant
            fetchPlants={fetchPlants}
            setFetchPlants={setFetchPlants}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
