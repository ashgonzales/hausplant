import React, { useState } from 'react';
import axios from 'axios';

const UpdatePlant = (props) => {
  const [name, setName] = useState(props.plant.fields.name);
  const [image, setImage] = useState(props.plant.fields.image);
  const [commonNames, setCommonNames] = useState(props.plant.fields.commonNames);
  const [botanicalName, setBotanicalName] = useState(props.plant.fields.botanicalName);
  const [datePlanted, setDatePlanted] = useState(props.plant.fields.datePlanted);
  const [dateRepotted, setDateRepotted] = useState(props.plant.fields.dateRepotter);
  const [potAndSoil, setPotAndSoil] = useState(props.plant.fields.potAndSoil);
  const [watering, setWatering] = useState(props.plant.fields.setWatering);
  const [lighting, setLighting] = useState(props.plant.fields.lighting);
  const [location, setLocation] = useState(props.plant.fields.location);
  const [commonProblems, setCommonProblems] = useState(props.plant.fields.commonProblems);
  const [careGuide, setCareGuide] = useState(props.plant.fields.careGuide);


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
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/hausplant/${props.plant.id}`;
    await axios.put(airtableURL, { fields }, {
      header: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    })
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
      <h2>Update Plant:</h2>
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
        className="add-button">Update Plant</button>
    </form>
  )
}

export default UpdatePlant;