import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [fetchPlants, setFetchPlants] = useState([false]);
  
  useEffect(() => {
    const getPlants = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/hausplant?Grid%20View`;
      const response = await axios.get(airtableURL, {
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
            <HomePage />
          </Route>
          <Route path="/plant/:id">
            <PlantDetails
              plants={plants}
              key={plants.id}
              fetchPlants={fetchPlants}
              setFetchPlants={setFetchPlants}
            />
          </Route>
          <Route path="/plant/new">
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
