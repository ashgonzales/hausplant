import React from 'react';
import { baseURL } from "../services/constants";
import axios from 'axios';
import Masonry from 'react-masonry-css'

const HomePage = (props) => {
  const { name, image } = props.plant.fields;
  const { fetchPlants, setFetchPlants, plant } = props;
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    375: 1
  };

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
    <div className="plant-grid"> 
        
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid-column">
        <div className="single-plant-div">
          <h4>{name}</h4>
          <img src={image} alt={name} />
          <br />
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </Masonry>
    </div>
  )
}

export default HomePage;