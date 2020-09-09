import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from "../services/constants";
import axios from 'axios';
import './PlantDetails.css';

function PlantDetails(props) {
  const [fetchPlants, setFetchPlants] = useState([]);
  const params = useParams();
  const {
    plants,
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
  } = props.plant.field;
  const plant = plants.find((plant) => params.name === plant.name);

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
    <div className="single-plant-container">
      <img src={image} alt={name} className="single-plant-img"/>
      <div className="text-div">
        <h2>{name}</h2>
        <h4>{commonNames}</h4>
        <h6>({botanicalName})</h6>
        <p>{datePlanted}</p>
        <p>{dateRepotted}</p>
        <p>{potAndSoil}</p>
        <p>{watering}</p>
        <p>{lighting}</p>
        <p>{location}</p>
        <p>{commonProblems}</p>
        <button><a href={careGuide}>Read More</a></button>
        <button onClick={handleDelete}>DELETE</button>
        
      </div>
    </div>
  )
}

export default PlantDetails;