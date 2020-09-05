import React from 'react';
import axios from 'axios';

const HomePage = (props) => {
  // const { datePlanted } = props.plant.fields;
  const { plant } = props;


  return (
    <>
    <div className="plant-container">
      <h4>{plant}</h4>
    </div>
    </>
  )
}

export default HomePage;