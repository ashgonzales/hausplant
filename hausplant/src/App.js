// import hooks, components, axios, css
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar/Navbar';
import AddPlant from './components/AddPlant';
import PlantDetails from './components/PlantDetails';
import { baseURL } from './services/constants';
import Masonry from 'react-masonry-css';
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

  const plantDivs = plants.map(function(plant) {
    return <div key={plant.id}>{plant.name}</div>
  });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Navbar />
          <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {plantDivs}  
          </Masonry>
          {
            plants.map((plant) => (
              <Dashboard
                plant={plant}
                key={plant.id}
                fetchPlants={fetchPlants}
                setFetchPlants={setFetchPlants}
              />
            ))
          }
        </Route>
        <Route path="/plant/:id">
          <Navbar />
          <PlantDetails
            fetchPlants={fetchPlants}
            setFetchPlants={setFetchPlants}
          />
        </Route>
        <Route path="/addplant">
          <Navbar />
          <AddPlant
            plants={plants}
            fetchPlants={fetchPlants}
            setFetchPlants={setFetchPlants}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;