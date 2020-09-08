import React from 'react';
import { useParams, Link } from 'react-router-dom';

function PlantDetails(props) {
  const params = useParams();
  const { plants } = props;
  const plant = plants.find((plant) => params.name === plant.name);

  return (
    <div className="single-plant-container">
      { plants
        ? (
          <>
            <img src={plant.image} alt={plant.name} className="single-plant-img"/>
            <div className="text-div">
              <h2>{plant.name}</h2>
              <h4>{plant.commonNames}</h4>
              <h6>({plant.botanicalName})</h6>
              <p>{plant.datePlanted}</p>
              <p>{plant.dateRepotted}</p>
              <p>{plant.potAndSoil}</p>
              <p>{plant.watering}</p>
              <p>{plant.lighting}</p>
              <p>{plant.location}</p>
              <p>{plant.commonProblems}</p>
              <button><a href={plant.careGuide}>Read More</a></button>
            </div>
          </>
        )
        : <Link to="/plants/new">
            {/* <AddPlant /> */}
          </Link>
      }
    </div>
  )
}

export default PlantDetails;