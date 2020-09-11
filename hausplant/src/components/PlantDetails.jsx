import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../services/constants';
import './Button.css';
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
    <div key={id} className="main-container">
      <div key="intro" className="image-container">
        <div className="image-div">
          <img
            src={image}
            alt={name}
          />
        </div>
        <div className="note-wrap note-green">
            <h3>{name}</h3>
            <h6 style={{fontStyle:'italic'}}>({botanicalName})</h6>
        </div>
      </div>
      <div key="more-info" className="info-container">
        <div className="common-names">
          <p><span>Common Names:</span><br /> {commonNames}</p>
        </div>

        <div className="date-planted">
          <p><span>Date Planted:</span><br /> {datePlanted}</p>
        </div>
        <div className="date-repotted">
          <p><span>Date Repotted:</span><br /> {dateRepotted}</p>
        </div>
        <div className="pot-and-soil">
          <p><span>Pot and Soil Type:</span><br /> {potAndSoil}</p>
        </div>
        <div className="watering">
          <p><span>Watering Schedule:</span><br /> {watering}</p>
        </div>
        <div className="lighting">
          <p><span>Light Preference:</span><br /> {lighting}</p>
        </div>
        <div className="location">
          <p><span>Location:</span><br /> {location}</p>
        </div>
        <div key="common-problems">
          <p><span>Common Problems:</span><br /> {commonProblems}</p>
        </div>
        <button className="more-button"><a href={careGuide}>Read More</a></button>
        <button className="delete-button" onClick={handleDelete}>Remove</button>
      </div>
    </div>
  )
}

export default PlantDetails;