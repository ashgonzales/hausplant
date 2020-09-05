import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
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
    <div className="plant-container">
    </div>
  )
}

export default HomePage;