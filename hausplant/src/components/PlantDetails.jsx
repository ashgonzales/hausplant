import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from "../services/constants";
import axios from 'axios';
import './PlantDetails.css';

function PlantDetails(props) {
  const [fetchPlants, setFetchPlants] = useState([]);
  const params = useParams();
  const plant = props.plants.find((plant) => params.id === plant.id);
  const fields = plant && plant.fields;

  const {
    id,
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
  } = fields || {};
  console.log(props);
  console.log(plant);
  console.log(image);

  const handleDelete = async () => {
    const airtableURL = `${baseURL}/${plant.id}`;
    
    await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setFetchPlants(!fetchPlants);
  }

  return (
    <div key={id} className="main-wrapper">
      <div classname="first-row">
        <div className="image-div">
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className="note-wrap note-yellow">
            <h3>{name}</h3>
            <h6 style={{fontStyle:'italic'}}>({botanicalName})</h6>
        </div>
      </div>
      <div key="more-info" className="info-wrapper">
        <h4>Common Names: {commonNames}</h4>
        <p>Date Planted: {datePlanted}</p>
        <p>Date Repotted: {dateRepotted}</p>
        <p>Pot & Soil Type: {potAndSoil}</p>
        <p>Watering Schedule: {watering}</p>
        <p>Light Preference: {lighting}</p>
        <p>Location: {location}</p>
        <p>Common Problems: {commonProblems}</p>
        <button><a href={careGuide}>Read More</a></button>
        <button onClick={handleDelete}>Remove</button>
        
      </div>
    </div>
  )
}

export default PlantDetails;