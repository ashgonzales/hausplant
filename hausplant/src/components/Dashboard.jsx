import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = (props) => {
  const { name, image } = props.plant.fields;
  // const plant = props.plants.map((plant, idx) => (
  //   <Link to={`/bird/${plant.name}`} key={idx}>
  //     <a href={plant.homepage}>
  //       <img src={plant.image} alt={plant.name} />
  //     </a>
  //   </Link>
  // ))

  return (
    <div className="container">
      <div>
        <Link to={`/${name}`}>
          <img src={image} alt={name} />
        </Link>
      </div>
    </div>
  )
}

export default Dashboard;