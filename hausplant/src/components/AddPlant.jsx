import React, { useState } from 'react';
import axios from 'axios';

const AddPlant = (props) => {
  const [plant, setPlant] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [dateRepotted, setDateRepotted] = useState('');
  const [watering, setWatering] = useState('');
  const [lighting, setLighting] = useState('');
  const [location, setLocation] = useState('');
  const [yellowing, setYellowing] = useState('');
  const [infoLink, setInfoLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      plant,
      datePlanted,
      dateRepotted,
      watering,
      lighting,
      location,
      yellowing,
      infoLink
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/hausplant`;
    await axios.post(airtableURL, { fields }, {
      header: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    })
    props.setFetchPlants(!props.fetchPlants);
    setPlant('');
    setDatePlanted('');
    setDateRepotted('');
    setWatering('');
    setLighting('');
    setLocation('');
    setYellowing('');
    setInfoLink('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="plant">Plant Name:</label>
      <input
        name="plant"
        type="text"
        value={plant}
        onChange={(event) => setPlant(event.target.value)} />
      <label htmlFor="datePlanted">Date Planted:</label>
      <textarea
        name="datePlanted"
        type="text"
        value={datePlanted}
        onChange={(event) => setDatePlanted(event.target.value)} />
      <label htmlFor="datePotted">Author:</label>
      <input
        name="dateRepotted"
        type="text"
        value={dateRepotted}
        onChange={(event) => setDateRepotted(event.target.value)} />
      <label htmlFor="watering">Watering Schedule:</label>
      <input
        name="watering"
        type="text"
        value={watering}
        onChange={(event) => setWatering(event.target.value)} />
      <label htmlFor="lighting">Light Preference:</label>
      <input
        name="lighting"
        type="text"
        value={lighting}
        onChange={(event) => setLighting(event.target.value)} />
      <label htmlFor="location">Location:</label>
      <input
        name="location"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)} />
      <label htmlFor="yellowing">Yellowing Leaves:</label>
      <input
        name="yellowing"
        type="text"
        value={yellowing}
        onChange={(event) => setYellowing(event.target.value)} />
      <label htmlFor="infoLink">Info Link:</label>
      <input
        name="infoLink"
        type="text"
        value={infoLink}
        onChange={(event) => setInfoLink(event.target.value)} />
      <button type="submit">`Add Plant`</button>
    </form>
  )
}

export default AddPlant;