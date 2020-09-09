import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = (props) => {
  const { name, image } = props.plant.fields;

  return (
    <div className="container">
      <div>
        <Link to="/plant/:id">
          <img src={image} alt={name} />
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;