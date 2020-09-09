import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from "../services/constants";
import axios from 'axios';
import './PlantDetails.css';

function PlantDetails(props) {
  const [fetchPlants, setFetchPlants] = useState([]);
  const params = useParams();
  console.log(params);
  const plant = props.plants.find((plant) => params.id === plant.id);
  console.log(plant && plant.fields);

  // const {
  //   name,
  //   image,
  //   commonNames,
  //   botanicalName,
  //   datePlanted,
  //   dateRepotted,
  //   potAndSoil,
  //   watering,
  //   lighting,
  //   location,
  //   commonProblems,
  //   careGuide
  // } = plant.fields;

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
    <div>
      <img src={plant&&plant.fields.image} alt={plant&&plant.fields.name} className="single-plant-img"/>
      <div className="text-div">
      
        <h2>{plant.name}</h2>
        <h4>{plant.commonNames}</h4>
        <h6>{plant.botanicalName}</h6>
        <p>{plant.datePlanted}</p>
        <p>{plant.dateRepotted}</p>
        <p>{plant.potAndSoil}</p>
        <p>{plant.watering}</p>
        <p>{plant.lighting}</p>
        <p>{plant.location}</p>
        <p>{plant.commonProblems}</p>
        <button><a href={plant.careGuide}>Read More</a></button>
        <button onClick={handleDelete}>DELETE</button>
        
      </div>
    </div>
  )
}

export default PlantDetails;