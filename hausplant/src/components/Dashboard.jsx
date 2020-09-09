import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = (props) => {
  const { plants } = props.plants;
  console.log(plants)

  return (
    <div className="container">
      <div>
        {/* {plants.map((plant, idx) => (
          <img src={plant.image} alt={plant.name} />
        ))} */}
        // <Link to="/plant/:id">
          
        // </Link>
      </div>
    </div>
  )
}

export default Dashboard;