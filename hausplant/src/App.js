// import hooks, components, axios, css
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import AddPlant from "./components/AddPlant";
import PlantDetails from "./components/PlantDetails";
import { baseURL } from "./services/constants";
import axios from "axios";
import "./App.css";

function App(props) {
  // Declare a state variable set to empty array to map through later
  const [plant] = useState("");
  const [plants, setPlants] = useState([]);
  const [fetchPlants, setFetchPlants] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(baseURL, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      });
      setPlants(response.data.records);
    };
    getPlants();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Dashboard
            plants={plants}
            key={plant.id}
          />
        </Route>
        <Route path="/plant/:id">
          <Navbar />
          <PlantDetails
            plants={plants}
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