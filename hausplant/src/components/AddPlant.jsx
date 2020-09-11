import React, { useState } from 'react';
import { baseURL } from "../services/constants";
import './Button.css';
import axios from 'axios';
import './AddPlant.css';

const AddPlant = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [commonNames, setCommonNames] = useState('');
  const [botanicalName, setBotanicalName] = useState('');
  const [datePlanted, setDatePlanted] = useState('');
  const [dateRepotted, setDateRepotted] = useState('');
  const [potAndSoil, setPotAndSoil] = useState('');
  const [watering, setWatering] = useState('');
  const [lighting, setLighting] = useState('');
  const [location, setLocation] = useState('');
  const [commonProblems, setCommonProblems] = useState('');
  const [careGuide, setCareGuide] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      image,
      commonNames,
      botanicalName,
      datePlanted,
      dateRepotted,
      potAndSoil,
      watering,
      lighting,
      location,
      commonProblems,
      careGuide
    };
    console.log(fields)
    await axios.post(
      baseURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.setFetchPlants(!props.fetchPlants);
    setName('');
    setImage('');
    setCommonNames('');
    setBotanicalName('');
    setDatePlanted('');
    setDateRepotted('');
    setPotAndSoil('');
    setWatering('');
    setLighting('');
    setLocation('');
    setCommonProblems('');
    setCareGuide('');
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Add a Plant:</h2>
      <label htmlFor="name">Plant Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <br />
      <label htmlFor="name">Image URL:</label>
      <input
        name="image"
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)} />
      <br />
      <label htmlFor="commonNames">Common Names:</label>
      <input
        name="commonNames"
        type="text"
        value={commonNames}
        onChange={(event) => setCommonNames(event.target.value)} />
      <br />
      <label htmlFor="botanicalName">Botanical Name:</label>
      <input
        name="botanicalName"
        type="text"
        value={botanicalName}
        onChange={(event) => setBotanicalName(event.target.value)} />
      <br />
      <label htmlFor="datePlanted">Date Planted:</label>
      <input
        name="datePlanted"
        type="date"
        value={datePlanted}
        onChange={(event) => setDatePlanted(event.target.value)} />
      <br />
      <label htmlFor="datePotted">Date Repotted:</label>
      <input
        name="dateRepotted"
        type="date"
        value={dateRepotted}
        onChange={(event) => setDateRepotted(event.target.value)} />
      <br />
      <label htmlFor="potAndSoil">Pot and Soil Types:</label>
      <input
        name="potAndSoil"
        type="text"
        value={potAndSoil}
        onChange={(event) => setPotAndSoil(event.target.value)} />
      <br />
      <label htmlFor="watering">Watering Schedule:</label>
      <input
        name="watering"
        type="text"
        value={watering}
        onChange={(event) => setWatering(event.target.value)} />
      <br />
      <label htmlFor="lighting">Light Preference:</label>
      <input
        name="lighting"
        type="text"
        value={lighting}
        onChange={(event) => setLighting(event.target.value)} />
      <br />
      <label htmlFor="location">Location:</label>
      <input
        name="location"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)} />
      <br />
      <label htmlFor="commonProblems">Common Problems:</label>
      <input
        name="commonProblems"
        type="text"
        value={commonProblems}
        onChange={(event) => setCommonProblems(event.target.value)} />
      <br />
      <label htmlFor="careGuide">Care Guide:</label>
      <input
        name="careGuide"
        type="text"
        value={careGuide}
        onChange={(event) => setCareGuide(event.target.value)} />
      <br />
      <button
        onClick={handleSubmit}
        className="add-button">Add Plant</button>
    </form>
  )
}

export default AddPlant;