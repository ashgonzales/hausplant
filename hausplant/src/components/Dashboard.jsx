import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = (props) => {
  const { plants } = props;
  console.log(plants)

  return (
    <div className="container">
        {plants.map((plant, idx) => (
          <Link to={`/plant/${plant.id}`}>
            <div key={idx}>
              <img src={plant.fields.image} alt={plant.fields.name} />
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Dashboard;